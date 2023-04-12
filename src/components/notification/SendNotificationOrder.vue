<template>
  <q-card>
    <q-card-section>
      <div class="text-h6 q-mb-md">Send Notification</div>
      <q-select v-model="model.notification_template_id" :options="templates" emit-value map-options label="Template"
        @update:model-value="populateHtml()" outlined class="q-mb-md" />
      <q-input v-model="model.subject" label="Subject" :error="$v.subject.$invalid" @blur="$v.subject.$touch()" />
      <q-editor v-model="model.html" label="Content" :error="$v.html.$invalid" />
      <div class="q-pa-md" v-if="!sentTo || !sentTo.length">
        An email will be sent to the following members:
        <ul>
          <li v-for="u in recipients" :key="u.id">
            {{ u.fullname }} ({{ u.email }})
          </li>
        </ul>
      </div>
      <div class="bg-positive text-white q-pa-md q-mt-md" v-if="sentTo">
        Email sent to:
        <div v-for="s in sentTo" :key="s.id">
          <strong>{{ s.user.fullname }} ({{ s.user.email }})</strong>
        </div>
      </div>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn @click="reset()" color="secondary" label="Reset" />
      <q-btn @click="send()" :disable="$v.$invalid" label="Send" color="primary" />
    </q-card-actions>
  </q-card>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { EventBus, useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { doNotify } from 'src/mixins/help'
import { inject, onMounted, reactive, ref } from 'vue'
import { NotificationTemplate, Order } from '../models'

interface Props {
  notifiable_id: number | string,
  order: Order
}
const props = defineProps<Props>()
const $q = useQuasar()
const bus = inject('bus') as EventBus
const sentTo = ref()
const html = ref()
const templates = ref()
const schema = {
  notification_template_id: null,
  notifiable_id: props.notifiable_id,
  notifiable_type: 'Order',
  html: '',
  subject: null
}

const model = reactive(schema)
const recipients = ref()
const rules = {
  notifiable_id: { required },
  notifiable_type: { required },
  subject: { required },
  html: { required }
}
const $v = useVuelidate(rules, model)

const reset = () => {
  sentTo.value = null
  Object.assign(model, JSON.parse(JSON.stringify(schema)))
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
  api.post('/notification/sendorder', model).then(res => {
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
  const r: LooseObject[] = []
  if (props.order.team.users) {
    props.order.team.users.forEach((obj: LooseObject) => {
      if (obj.email_notifications) {
        r.push(obj)
      }
    })
    recipients.value = r
  }
  api.get('/notificationtemplate/index').then(response => {
    templates.value = [{ value: null, label: 'Select a template' }].concat(response.data.map((o: NotificationTemplate) => { return { value: o.id, label: o.name } }))
  }).catch(error => {
    useMixinDebug(error)
  })
})
</script>
