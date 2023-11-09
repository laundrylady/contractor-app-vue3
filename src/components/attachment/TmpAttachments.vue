<template>
  <div v-if="needsExpiry.indexOf(type) !== -1">
    <DateField v-model="newModel.expiry_date" label="Expiry Date" class="q-mb-md q-mt-sm"
      :invalid="type === 'Certificate of Currency for Public Liability Insurance' && !newModel.expiry_date" />
  </div>
  <q-list v-if="!attachments || !attachments.length" separator bordered>
    <q-item>
      <q-item-section>No documents uploaded</q-item-section>
    </q-item>
  </q-list>
  <q-list bordered separator v-if="attachments && attachments.length">
    <q-item v-for="(a, index) in attachments" :key="index">
      <q-item-section>
        {{ splitName(a.name) }} <span v-if="a.expiry_date" class="text-grey">Expires: {{ a.expiry_date }}</span>
      </q-item-section>
      <q-item-section side>
        <q-btn icon="delete" @click="removeAttachment(a)" flat />
      </q-item-section>
    </q-item>
  </q-list>
  <div v-if="needsExpiry.indexOf(type) === -1 || newModel.expiry_date"> <q-uploader color="primary"
      :url="uploadConfig.url" :headers="uploadConfig.headers" @uploaded="successUpload" label="Upload document"
      auto-expand auto-upload :accept="uploadConfig.documents" :field-name="uploadConfig.fieldName"
      class="q-mb-sm q-mt-sm" ref="tmpUploader" :max-file-size="uploadConfig['max-file-size']" />
    <p class="text-caption">Accepted file types: jpg, gif, png, pdf, Max. file size: 5 MB, Max. files: 2.</p>
  </div>
</template>
<script setup lang="ts">
import { Attachment } from 'src/components/models'
import { LooseObject } from 'src/contracts/LooseObject'
import { confirmDelete, uploadConfig } from 'src/mixins/help'
import { computed, reactive, ref } from 'vue'
import DateField from '../form/DateField.vue'

interface Props {
  type: string,
  documents: Attachment[]
}
const props = defineProps<Props>()

const tmpUploader = ref()

const needsExpiry = ['']

const schema = {
  type: props.type,
  file_file_name: null,
  name: null,
  expiry_date: null
}

const attachments = computed(() => {
  return props.documents.filter(o => o.type === props.type) || []
})
const newModel = reactive(schema)
const emits = defineEmits(['attachment:add', 'attachment:remove'])
const addNew = () => {
  emits('attachment:add', { name: newModel.name, file_file_name: newModel.file_file_name, type: props.type, expiry_date: newModel.expiry_date })
  tmpUploader.value.reset()
}

const removeAttachment = (a: Attachment) => {
  confirmDelete('This will remove the attachment').onOk(() => {
    emits('attachment:remove', { name: a.name, file_file_name: a.file_file_name, type: a.type })
  })
}

const splitName = (val: string) => {
  return val.split('-')[1]
}

const successUpload = (file: LooseObject) => {
  newModel.file_file_name = file.xhr.response
  newModel.name = file.xhr.response
  addNew()
}
</script>
