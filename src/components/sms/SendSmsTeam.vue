<template>
  <q-card>
    <q-card-section>
      <div class="text-h6 q-mb-md">Send SMS</div>
      <q-select v-model="sms.template" @update:model-value="useTemplate()" :options="templates" label="Choose a Template"
        map-options emit-value class="q-mb-md" />
      <q-input v-model="sms.content" type="textarea" maxlength="160" label="Message to send" :error="$v.content.$error"
        autogrow />
      <div class="q-pa-md" v-if="!sent || !sent.length">
        A message will be sent to the following members:
        <ul>
          <li v-for="u in recipients" :key="u.id">
            {{ u.fullname }} ({{ u.mobile }})
          </li>
        </ul>
      </div>
      <div class="q-pa-md bg-positive text-white" v-if="sent && sent.length">
        A message was sent to the following members:
        <ul>
          <li v-for="u in sent" :key="u.id">
            {{ u.user.fullname }} ({{ u.user.mobile }})
          </li>
        </ul>
      </div>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn color="primary" :disabled="$v.$invalid" :loading="loading" @click="save()" label="Send" />
    </q-card-actions>
  </q-card>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { EventBus } from 'quasar'
import { api } from 'src/boot/axios'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { doNotify } from 'src/mixins/help'
import { inject, onMounted, reactive, ref } from 'vue'
import { SmsTemplate, Team, TeamUser, User } from '../models'

interface Props {
  team: Team
}
const props = defineProps<Props>()

const bus = inject('bus') as EventBus
const sent = ref<LooseObject[]>([])
const loading = ref(false)
const templates = ref()
const schema = {
  content: null, template: null, number: null, team_id: props.team.id
}
const sms = reactive(JSON.parse(JSON.stringify(schema)))

const rules = {
  content: { required },
  team_id: { required }
}
const $v = useVuelidate(rules, sms)
const recipients = ref()

const useTemplate = () => {
  sms.content = sms.template
}

const save = () => {
  loading.value = true
  api.post('/sms/sendteam', sms).then((response) => {
    doNotify('positive', `SMS sent to ${props.team.name}`)
    loading.value = false
    sent.value = response.data
    bus.emit('getSmsLog', {})
    Object.assign(sms, JSON.parse(JSON.stringify(schema)))
  }).catch((response) => {
    useMixinDebug(response)
    loading.value = false
  })
}

onMounted(() => {
  Object.assign(sms, { content: null, template: null, number: null, team_id: props.team.id })
  // build recipients
  const r: User[] = []
  if (props.team && props.team.users) {
    props.team.users.forEach((obj: TeamUser) => {
      if (obj.user.mobile && obj.user.sms_notifications) {
        r.push(obj.user)
      }
    })
    recipients.value = r
  }
  api.get('/smstemplate/index').then(response => {
    templates.value = response.data.map((o: SmsTemplate) => { return { value: o.content, label: o.name } })
  }).catch(error => {
    useMixinDebug(error)
  })
})
</script>
