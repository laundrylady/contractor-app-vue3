<template>
  <q-card>
    <q-card-section>
      <div class="text-h6 q-mb-md">Send Notification</div>
      <p>Send a notification to {{ notificationUser.email }}.</p>
      <q-select v-model="model.notification_template_id" :options="templates" emit-value map-options label="Template"
        @update:model-value="populateHtml()" outlined class="q-mb-md" />
      <q-input v-model="model.subject" label="Subject" :error="$v.subject.$invalid" @blur="$v.subject.$touch()" />
      <q-editor v-model="model.html" label="Content" :error="$v.html.$invalid" />
      <div class="bg-positive text-white q-pa-md q-mt-md" v-if="sentTo">
        Email sent to <strong>{{ sentTo.email }}</strong>
      </div>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn @click="reset()" color="secondary" label="Reset" />
      <q-btn @click="send()" :disable="$v.$invalid" label="Send" color="primary" icon="send" />
    </q-card-actions>
  </q-card>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { EventBus, useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import { useMixinDebug } from 'src/mixins/debug'
import { doNotify } from 'src/mixins/help'
import { inject, onMounted, reactive, ref } from 'vue'
import { NotificationTemplate, User } from '../models'

interface Props {
  cc?: string[],
  notificationUser: User
}
const props = defineProps<Props>()
const $q = useQuasar()
const bus = inject('bus') as EventBus
const sentTo = ref()
const html = ref()
const templates = ref()
const schema = {
  user_id: props.notificationUser.id,
  notification_template_id: null,
  notifiable_id: props.notificationUser.id,
  notifiable_type: 'User',
  html: '',
  subject: null,
  cc: props.cc || []
}

const model = reactive(schema)
const rules = {
  user_id: { required },
  notifiable_id: { required },
  notifiable_type: { required },
  subject: { required },
  html: { required }
}
const $v = useVuelidate(rules, model)

const reset = () => {
  sentTo.value = null
  Object.assign(model, schema)
}

const populateHtml = () => {
  if (!model.notification_template_id) {
    model.subject = null
    model.html = ''
    return
  }
  api.get(`/notificationtemplate/${model.notification_template_id}`).then(response => {
    if (response.data.content) {
      model.html = response.data.content
      model.subject = response.data.subject
    } else {
      html.value = ''
    }
  })
}

const send = () => {
  $q.loading.show({ message: 'Queuing emails for sending...' })
  api.post('/notification/sendsingle', model).then(res => {
    doNotify('positive', 'Emails queued for sending')
    $q.loading.hide()
    sentTo.value = res.data
    bus.emit('getNotifications')
    model.subject = null
    model.html = ''
  }).catch(error => {
    useMixinDebug(error)
    $q.loading.hide()
  })
}

onMounted(() => {
  api.get('/notificationtemplate/index').then(response => {
    templates.value = [{ value: null, label: 'Select a template' }].concat(response.data.map((o: NotificationTemplate) => { return { value: o.id, label: o.name } }))
  }).catch(error => {
    useMixinDebug(error)
  })
})
</script>
