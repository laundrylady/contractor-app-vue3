<template>
  <q-card :class="{ 'no-shadow': nobox }" style="min-height:110px;">
    <q-card-section v-if="label">
      <div class="text-h3">{{ label }}s</div>
    </q-card-section>
    <div :class="{ 'q-pa-none': nobox }">
      <div class="overflow-hidden">
        <q-dialog v-model="showEdit">
          <q-card class="modal">
            <q-toolbar class="bg-primary text-white">
              <q-toolbar-title>{{ label || 'Document' }}s<span v-if="edit.type"> - {{
                edit.type
              }}</span></q-toolbar-title>
              <q-btn flat round dense v-close-popup icon="close" />
            </q-toolbar>
            <q-card-section>
              <div class="row q-col-gutter-md">
                <q-select v-model="edit.type" :label="`${label || 'Document'} type`" :options="types" emit-value
                  map-options class="col-xs-12 col-sm-6" />
                <div class="col-xs-12 col-sm-6">
                  <DateField v-model="edit.expiry_date" label="Expiry Date" />
                </div>
              </div>
              <q-input type="text" v-model="edit.name" label="Name" />
              <q-input v-model="edit.video_uri" label="Enter the video URL" v-if="edit.type === 'Video'" />
            </q-card-section>
            <q-card-actions class="q-mt-md" align="right">
              <q-btn @click="[edit = false, showEdit = false]" color="secondary" flat label="Cancel" v-close-popup
                rounded />
              <q-btn @click="updateAttachment(edit)" color="primary" label="Update" rounded />
            </q-card-actions>
          </q-card>
        </q-dialog>
        <NoRecords class="q-ml-md q-mt-md"
          v-if="(!attachments || !attachments.length) && !showNew && !loadingattachments" />
        <div v-if="attachments && attachments.length">
          <div v-for="(d, index) in attachments" :key="index">
            <q-list separator>
              <q-item>
                <q-item-section>
                  <div class="text-h6">
                    <q-icon name="folder" size="24px" />
                    {{ d.key }}s
                  </div>
                </q-item-section>
              </q-item>
              <q-item v-for="(a, index) in d.data" :key="index">
                <q-item-section side>
                  <a @click="view(a)" class="cursor"><img :src="a.file_file_uri.thumb.uri"
                      style="max-height:64px;max-width:100%;" class="shadow-1" v-if="isImage(a.file_file_name)" />
                    <div v-if="!isImage(a.file_file_name)" style="width:64px;" class="text-center"><q-icon
                        name="description" size="40px" />
                    </div>
                  </a>
                </q-item-section>
                <q-item-section>
                  <q-item-label><a @click="view(a)"><a @click="view(a)" class="link">{{ a.type }}</a> -
                      <small><em>{{ a.name }}</em></small></a>
                    <div v-if="$q.screen.lt.sm && a.expiry_date" class="text-caption">Expires: {{ a.expiry_date }}</div>
                  </q-item-label>
                  <q-item-label caption>
                    Uploaded by {{ a.user.fullname }}
                    <div>Last updated: {{ dateTimeTz(a.created_at) }}</div>
                  </q-item-label>
                  <div v-if="$q.screen.lt.sm" class="q-mt-sm">
                    <q-btn-group flat v-if="!disabled">
                      <q-btn @click="editAttachment(a)" flat color="grey">
                        <q-icon name="edit" />
                      </q-btn>
                      <q-btn @click="deleteAttachment(a)" icon="delete" title="Remove attachment?" flat color="grey" />
                    </q-btn-group>
                  </div>
                </q-item-section>
                <q-item-section side v-if="$q.screen.gt.xs">
                  <span v-if="a.expiry_date">Expires: {{ a.expiry_date }}</span>
                </q-item-section>
                <q-item-section side v-if="$q.screen.gt.xs">
                  <q-btn-group flat v-if="!disabled">
                    <q-btn @click="editAttachment(a)" flat color="grey">
                      <q-icon name="edit" />
                    </q-btn>
                    <q-btn @click="deleteAttachment(a)" icon="delete" title="Remove attachment?" flat color="grey" />
                  </q-btn-group>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
        <q-card-section v-if="!disabled">
          <div v-if="!showNew && !loadingattachments">
            <q-btn @click="[newModel.type = '', showNew = !showNew]" label="Upload new" icon="add_circle" color="primary"
              outline rounded />
          </div>
          <div v-if="!saving && showNew" class="q-pa-md bg-grey-2 animated fadeIn">
            <div v-if="!newModel.type">
              <div class="text-h6 text-grey-7 q-mb-md">Choose a document type to
                upload:
              </div>
              <div class="row q-col-gutter-md">
                <div class="col-sm-4" v-if="hasCategoryDocuments('Identification')">
                  <strong class=" text-grey-7">Identification</strong>
                  <ul>
                    <li v-for="(t, index) in types.filter(o => o.category === 'Identification')" :key="index">
                      <a @click="newModel.type = t.value" class="link">{{ t.label }}</a>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-4" v-if="hasCategoryDocuments('NDIS')">
                  <strong class=" text-grey-7">NDIS</strong>
                  <ul>
                    <li v-for="(t, index) in types.filter(o => o.category === 'NDIS')" :key="index">
                      <a @click="newModel.type = t.value" class="link">{{ t.label }}</a>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-4" v-if="hasCategoryDocuments('Insurance')">
                  <strong class=" text-grey-7">Insurance</strong>
                  <ul>
                    <li v-for="(t, index) in types.filter(o => o.category === 'Insurance')" :key="index">
                      <a @click="newModel.type = t.value" class="link">{{ t.label }}</a>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-4" v-if="hasCategoryDocuments('Purchases')">
                  <strong class="text-grey-7">Purchases</strong>
                  <ul>
                    <li v-for="(t, index) in types.filter(o => o.category === 'Purchases')" :key="index">
                      <a @click="newModel.type = t.value" class="link">{{ t.label }}</a>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-4" v-if="hasCategoryDocuments('Other')">
                  <strong class="text-grey-7">Other</strong>
                  <ul>
                    <li v-for="(t, index) in types.filter(o => o.category === 'Other')" :key="index">
                      <a @click="newModel.type = t.value" class="link">{{ t.label }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div v-if="newModel.type" class="animated fadeIn">
              <div class="text-h6 text-grey-8 q-mb-xs">Details:</div>
              <div class="row q-col-gutter-md">
                <div class="col-xs-12 col-sm-6">
                  <q-select v-model="newModel.type" label="Type" :options="types" emit-value map-options
                    :error="$v.type.$invalid" @input="$v.type.$touch()" />
                </div>
                <div class="col-xs-12 col-sm-6">
                  <DateField v-model="newModel.expiry_date" label="Expiry Date" />
                </div>
              </div>
              <q-input v-model="newModel.name" :label="`${label} name`" v-bind:disabled="saving" :loading="saving"
                class="hidden" />
              <div class="q-mt-md">
                <q-uploader color="grey-7" :url="uploadConfig.url" :headers="uploadConfig.headers"
                  @uploaded="successUpload" label="Upload document" auto-expand auto-upload
                  :accept="uploadConfig.documents" :field-name="uploadConfig.fieldName" />
                <div class="q-mt-sm">All {{ label }}s must be in PDF or JPEG format.</div>
                <div class="q-mt-md">
                  <q-btn @click="[showNew = false, Object.assign(newModel, schema)]" label="Cancel" color="secondary"
                    rounded class="q-mr-xs" />
                  <q-btn @click="addNew()" :disable="$v.$invalid" label="Save" color="primary" rounded />
                </div>
              </div>
            </div>
          </div>
        </q-card-section>
      </div>
    </div>
  </q-card>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { EventBus, useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import { Attachment } from 'src/components/models'
import NoRecords from 'src/components/NoRecords.vue'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { confirmDelete, dateTimeTz, doNotify, groupBy, uploadConfig } from 'src/mixins/help'
import { inject, onMounted, reactive, ref } from 'vue'
import DateField from '../form/DateField.vue'

interface Props {
  attachable_type: string,
  attachable_id: string | number,
  disabled?: boolean,
  type?: string,
  nobox?: boolean,
  label?: string,
  fetchTypes?: string[]
}
const props = defineProps<Props>()
const bus = inject('bus') as EventBus

const schema = {
  attachable_type: props.attachable_type,
  attachable_id: props.attachable_id.toString(),
  file_file_name: null,
  name: null,
  type: '',
  expiry_date: null,
  video_uri: null
}

const $q = useQuasar()
const attachments = ref()
const newModel = reactive(schema)
const rules = {
  type: { required },
  file_file_name: { required }
}
const $v = useVuelidate(rules, newModel)
const saving = ref(false)
const loadingattachments = ref(false)
const edit = ref()
const showEdit = ref(false)
const showNew = ref(false)
const types = [
  { category: 'Identification', value: 'Drivers Licence', label: 'Drivers Licence' },
  { category: 'Identification', value: 'Medicare Card', label: 'Medicare Card' },
  { category: 'Other', value: 'Generic Document', label: 'Generic Document' },
  { category: 'Insurance', value: 'Certificate of Currency for Public Liability Insurance', label: 'Certificate of Currency for Public Liability Insurance' },
  { category: 'NDIS', value: 'NDIS Workers Clearance Certificate', label: 'NDIS Workers Clearance Certificate' },
  { category: 'Insurance', value: 'Insurance Claim', label: 'Insurance Claim' }
]

const emitGet = () => {
  if (props.attachable_type === 'Team') {
    bus.emit('getTeam', {})
  }
}

const isImage = (filename: string) => {
  const ext = filename.substring(filename.lastIndexOf('.') + 1, filename.length) || filename
  return ext !== 'pdf'
}

const addNew = () => {
  saving.value = true
  $q.loading.show({ message: 'Saving attachment...' })
  api.post('/public/attachment', newModel).then(() => {
    doNotify('positive', 'Attachment added')
    Object.assign(newModel, schema)
    getAttachments()
    saving.value = false
    showNew.value = false
    $q.loading.hide()
    emitGet()
  }).catch((response) => {
    useMixinDebug(response)
    saving.value = false
    $q.loading.hide()
  })
}

const deleteAttachment = (a: Attachment) => {
  confirmDelete('This will remove the attachment').onOk(() => {
    api.delete(`/public/attachment/${a.id}`).then(() => {
      getAttachments()
      doNotify('positive', 'Attachment removed')
      emitGet()
    }).catch((response) => {
      useMixinDebug(response)
    })
  })
}

const getAttachments = () => {
  loadingattachments.value = true
  api.post(`/public/attachment/fetch/${props.attachable_type}/${props.attachable_id}`, { fetchTypes: props.fetchTypes }).then((response) => {
    attachments.value = groupBy(response.data, 'type')
    loadingattachments.value = false
  }).catch((response) => {
    useMixinDebug(response)
    loadingattachments.value = false
  })
}

const editAttachment = (a: Attachment) => {
  edit.value = JSON.parse(JSON.stringify(a))
  showEdit.value = true
}

const updateAttachment = (a: Attachment) => {
  api.put(`/public/attachment/${a.id}`, a).then(() => {
    edit.value = false
    showEdit.value = false
    getAttachments()
    doNotify('positive', 'Saved')
  }).catch((response) => {
    useMixinDebug(response)
  })
}

const view = (model: Attachment) => {
  bus.emit('view-file', { model, type: 'attachment' })
}

const hasCategoryDocuments = (category: string) => {
  let has = false
  types.forEach(obj => {
    if (obj.category === category) {
      has = true
    }
  })
  return has
}

const successUpload = (file: LooseObject) => {
  newModel.file_file_name = file.xhr.response
  if (!newModel.name) {
    newModel.name = file.xhr.response
  }
}

onMounted(() => {
  getAttachments()
})
</script>
