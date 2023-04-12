<template>
  <q-card>
    <q-card-section>
      <div class="text-h6 q-mb-md">Send SMS</div>
      <q-select v-model="sms.template" @update:model-value="useTemplate()" :options="templates" label="Template"
        map-options emit-value class="q-mb-md" outlined />
      <q-input v-model="sms.content" type="textarea" maxlength="160" label="Message to send" :error="$v.content.$error"
        autogrow counter max-length="160" />
      <div>The above message will be sent to
        {{ smsUser.fullname }} ({{ smsUser.mobile }})
      </div>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn color="secondary" @click="[sms.content = null]" label="Reset" flat />
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
import { User } from '../models'

interface Props {
  smsUser: User
}
const props = defineProps<Props>()

const bus = inject('bus') as EventBus
const sent = ref<LooseObject[]>([])
const loading = ref(false)
const show = ref(false)
const templates = ref()
const sms = reactive({
  content: null, template: null, user_id: null
})

const rules = {
  content: { required }
}
const $v = useVuelidate(rules, sms)

const useTemplate = () => {
  sms.content = sms.template
}

const save = () => {
  loading.value = true
  api.post('/sms/senduser', sms).then((response) => {
    doNotify('positive', `SMS sent to ${props.smsUser.mobile}`)
    loading.value = false
    show.value = false
    sent.value = response.data
    bus.emit('getSmsLog', {})
  }).catch((response) => {
    useMixinDebug(response)
    loading.value = false
  })
}

onMounted(() => {
  Object.assign(sms, { content: null, template: null, user_id: props.smsUser.id })
  api.get('/smstemplate/index').then(response => {
    templates.value = response.data.map((o: LooseObject) => { return { value: o.content, label: o.name } })
  }).catch(error => {
    useMixinDebug(error)
  })
})
</script>
