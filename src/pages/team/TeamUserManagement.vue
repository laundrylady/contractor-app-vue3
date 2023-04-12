<template>
  <div>
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ $t('team.userPlural') }} ({{ team.users && team.users.length }})</div>
        <p>To invite new {{ $t('team.userPlural').toLowerCase() }}, use the "New
          Invitation" section below.
        </p>
      </q-card-section>
      <q-table :rows="team.users" :columns="columns" row-key="id" :filter="search.keyword" :loading="loading"
        class="no-shadow">
        <template v-slot:body-cell-role="props">
          <q-td :props="props">
            <q-select v-model="props.row.role" :options="roles" map-options emit-value placeholder="Role" dense
              @update:model-value="updateUser(props.row)" outlined />
          </q-td>
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <span class="bg-accent text-white q-pa-sm q-mr-sm" v-if="!props.row.active">REVOKED ACCESS</span>
            <q-btn icon="more_vert" flat>
              <q-menu>
                <q-list>
                  <q-item @click="toggleAccessUser(props.row, 0)" clickable v-if="props.row.active">
                    <q-item-section>Revoke Access</q-item-section>
                  </q-item>
                  <q-item @click="toggleAccessUser(props.row, 1)" clickable v-if="!props.row.active">
                    <q-item-section>Enable Access</q-item-section>
                  </q-item>
                  <q-item @click="resetMfaUser(props.row)" clickable>
                    <q-item-section>Reset MFA</q-item-section>
                  </q-item>
                  <q-item @click="removeUser(props.row)" clickable
                    v-if="team.users && team.users.length > 1 && (props.row.role !== 'administrator' || adminCount > 1)">
                    <q-item-section>Remove User</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </q-card>
    <q-card class="q-mt-md q-mb-md">
      <q-card-section>
        <div class="text-h6">Pending Invitations ({{ invitations.length }})</div>
        <p>{{ $t('team.userPlural') }} that have been sent an invitation email but have not
          responded are listed below.
        </p>
      </q-card-section>
      <q-card-section v-if="!invitations.length" class="text-center">
        <NoRecords />
      </q-card-section>
      <q-markup-table v-if="invitations.length">
        <thead>
          <tr>
            <th class="text-left">First name</th>
            <th class="text-left">Last name</th>
            <th class="text-left">Email</th>
            <th class="text-left">Access</th>
            <th class="text-left">Sent</th>
            <th class="text-left">Status</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in invitations" :key="i.id">
            <td>
              <q-input v-model="i.first_name" borderless @input="updateInvite(i)" debounce="500" />
            </td>
            <td>
              <q-input v-model="i.last_name" borderless @input="updateInvite(i)" debounce="500" />
            </td>
            <td>{{ i.email }}</td>
            <td>
              <q-select v-model="i.role" :options="roles" map-options emit-value borderless @input="updateInvite(i)"
                debounce="500" />
            </td>
            <td>
              <span v-if="i.latestMail">Sent by {{ i.invitee.fullname }} {{
                fromNowTz(i.latestMail.created_at)
              }}<br />{{
  awsSesStatus(i.latestMail.amazon_ses_status)
}}</span>
            </td>
            <td>
              {{ i.status }}
            </td>
            <td class="text-center">
              <q-btn icon="more_vert" flat>
                <q-menu>
                  <q-list>
                    <q-item @click="resendInvitation(i.id)" clickable v-if="i.status === 'Pending'" v-close-popup>
                      <q-item-section>
                        Resend invitation
                      </q-item-section>
                    </q-item>
                    <q-item @click="removeInvitation(i.id)" clickable v-close-popup>
                      <q-item-section>
                        Revoke invitation
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card>
    <q-card>
      <q-card-section>
        <div class="text-h6">New Invitation</div>
        <p> Invite new {{ $t('team.userPlural').toLowerCase() }} by filling out the form below and
          clicking SEND INVITE.</p>
      </q-card-section>
      <q-card-section>
        <div class="row q-col-gutter-sm items-center">
          <div class="col-xs-12 col-md-3">
            <q-input v-model="invite.email" label="Email address of user" :error="$v.email.$invalid">
              <template v-slot:append>
                <q-btn @click="populateInvite()" label="Load" flat color="primary" />
              </template>
            </q-input>
          </div>
          <div class="col-xs-6 col-md-3">
            <q-input v-model="invite.first_name" label="First name" :error="$v.first_name.$invalid" :disable="loading" />
          </div>
          <div class="col-xs-6 col-md-3">
            <q-input v-model="invite.last_name" label="Last name" :error="$v.last_name.$invalid" :disable="loading" />
          </div>
          <div class="col-xs-6 col-md-3">
            <q-select v-model="invite.role" label="Customer Access" :options="roles" map-options emit-value
              :error="$v.role.$invalid" />
          </div>
        </div>
        <div class="flex">
          <q-toggle v-model="invite.bypass" label="Add directly and bypass invitation system" disable />
          <q-space />
          <q-btn @click="inviteUser()" :disable="loading || $v.$invalid" label="Send invite" color="primary"
            :loading="loadingInvite" />
        </div>
        <div v-if="inviteError" class="text-warning">This user already exists in the account.</div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'
import { EventBus, QTableProps } from 'quasar'
import { api } from 'src/boot/axios'
import { Team, TeamInvite, TeamUser } from 'src/components/models'
import NoRecords from 'src/components/NoRecords.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { awsSesStatus, confirmDelete, doNotify, fromNowTz } from 'src/mixins/help'
import { computed, inject, onMounted, reactive, ref } from 'vue'

interface Props {
  team: Team
}

const props = defineProps<Props>()
const bus = inject('bus') as EventBus
const adminCount = computed(() => {
  let count = 0
  if (props.team.users) {
    props.team.users.forEach(o => {
      if (['administrator', 'owner'].indexOf(o.role) !== -1) {
        count += 1
      }
    })
  }
  return count
})
const search = reactive({ keyword: null })
const loading = ref(false)
const loadingInvite = ref(false)
const invitations = ref<TeamInvite[]>([])
const inviteSchema = {
  email: null,
  first_name: null,
  last_name: null,
  role: 'user',
  team_id: props.team.id,
  bypass: true
}
const invite = reactive(JSON.parse(JSON.stringify(inviteSchema)))
const rules = {
  email: { required, email },
  first_name: { required },
  last_name: { required },
  role: { required }
}
const $v = useVuelidate(rules, invite)
const inviteError = ref()
const roles = [{ value: 'owner', label: 'Owner' }, { value: 'administrator', label: 'Administrator' }, { value: 'user', label: 'User' }, { value: 'ndis', label: 'NDIS Plan Manager' }]
const columns: QTableProps['columns'] = [{
  name: 'user.first_name',
  sortable: false,
  label: 'First name',
  field: 'user.first_name',
  format: (val, row) => row.user.first_name,
  align: 'left'
}, {
  name: 'user.last_name',
  sortable: false,
  label: 'Last name',
  field: 'user.last_name',
  format: (val, row) => row.user.last_name,
  align: 'left'
}, {
  name: 'user.email',
  sortable: false,
  label: 'Email',
  field: 'user.email',
  format: (val, row) => row.user.email,
  align: 'left'
}, {
  name: 'role',
  sortable: false,
  label: 'Access',
  field: 'role',
  align: 'left'
}, {
  name: 'actions',
  sortable: false,
  label: 'Actions',
  field: 'actions'
}]

const updateUser = (user: TeamUser) => {
  loading.value = true
  api.put(`/teamuser/update/${user.id}`, user).then(() => {
    doNotify('positive', 'Saved')
    loading.value = false
  }).catch(error => {
    useMixinDebug(error)
  })
}

const removeUser = (user: TeamUser) => {
  confirmDelete('This will remove the user and all associated access').onOk(() => {
    loading.value = true
    api.delete(`/teamuser/remove/${user.team_id}/${user.id}`).then(() => {
      doNotify('negative', 'User removed')
      bus.emit('getTeam')
      loading.value = false
    }).catch((error) => {
      loading.value = false
      useMixinDebug(error)
    })
  })
}

const resetMfaUser = (user: TeamUser) => {
  confirmDelete('This will reset the MFA for this user.').onOk(() => {
    loading.value = true
    api.get(`/teamuser/resetmfa/${user.team_id}/${user.id}`).then(() => {
      doNotify('negative', 'User MFA reset')
      bus.emit('getTeam')
      loading.value = false
    }).catch((error) => {
      loading.value = false
      useMixinDebug(error)
    })
  })
}

const toggleAccessUser = (user: TeamUser, toggle: number) => {
  let message = 'This will disable access'
  if (toggle === 1) {
    message = 'This will re-enable access'
  }
  confirmDelete(message).onOk(() => {
    loading.value = true
    api.put(`/teamuser/toggleaccess/${user.team_id}/${user.id}`, { active: toggle }).then(() => {
      doNotify('positive', 'Saved')
      bus.emit('getTeam')
      loading.value = false
    }).catch((error) => {
      loading.value = false
      useMixinDebug(error)
    })
  })
}

const getInvitations = () => {
  loading.value = true
  api.get(`/teaminvite/team/${props.team.id}`).then((response) => {
    invitations.value = response.data
    loading.value = false
  }).catch((error) => {
    useMixinDebug(error)
    loading.value = false
  })
}

const inviteUser = () => {
  loadingInvite.value = true
  invite.team_id = props.team.id
  api.post('/teaminvite/inviteuser', invite).then(() => {
    doNotify('positive', 'Invitation sent')
    loadingInvite.value = false
    getInvitations()
    bus.emit('getTeam')
    Object.assign(invite, JSON.parse(JSON.stringify(inviteSchema)))
  }).catch((error) => {
    loadingInvite.value = false
    useMixinDebug(error)
  })
}

const updateInvite = (model: TeamInvite) => {
  api.put(`/teaminvite/${model.id}`, model).then(() => {
    getInvitations()
    doNotify('positive', 'Saved')
  }).catch(error => {
    useMixinDebug(error)
  })
}

const resendInvitation = (id: number) => {
  api.get(`/teaminvite/resend/${id}`).then(() => {
    doNotify('positive', 'Invitation resent')
    getInvitations()
  }).catch(error => {
    useMixinDebug(error)
  })
}

const removeInvitation = (id: number) => {
  confirmDelete('This will revoke the invitation.').onOk(() => {
    loading.value = true
    api.delete(`/teaminvite/${id}`).then(() => {
      doNotify('negative', 'Invitation revoked')
      getInvitations()
    }).catch((error) => {
      loading.value = false
      useMixinDebug(error)
    })
  })
}

const populateInvite = () => {
  invite.email = props.team.email
  invite.first_name = props.team.first_name
  invite.last_name = props.team.last_name
  invite.role = 'owner'
}

onMounted(() => {
  getInvitations()
})
</script>
