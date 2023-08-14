<template>
  <div style="min-height:100px;">
    <div v-if="!loaded"><q-spinner /> Loading notes...</div>
    <q-card :class="{ 'no-shadow bg-transparent': nobox }">
      <q-toolbar class="bg-primary text-white" v-if="!nobox">
        <q-toolbar-title>Notes</q-toolbar-title>
      </q-toolbar>
      <q-card-section v-if="loaded" :class="{ 'q-pa-none': nobox }">
        <div v-if="!notes.length" class="q-mb-md">
          No notes found
        </div>
        <div class="q-mb-lg">
          <q-input v-model="newNote.note" type="textarea" placeholder="Type a new note"
            v-bind:class="{ 'm-t-lg': notes.length }" class="q-mb-sm" autogrow outlined>
            <template v-slot:append>
              <q-btn color="primary" @click="addNote()" :disabled="loading" label="Add" rounded />
            </template>
          </q-input>
        </div>
        <q-list class="q-mt-sm">
          <q-item v-for="(n, index) in notes" :key="index">
            <q-item-section avatar>
              <UserAvatar :user="n.user" />
            </q-item-section>
            <q-item-section>
              <div class="text-grey">{{ fromNowTz(n.created_at) }}</div>
              {{ n.note }}
            </q-item-section>
            <q-item-section side>
              <q-btn @click="deleteNote(n.id)" flat color="grey" icon="delete" v-if="user && n.user_id === user.id" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </div>
</template>
<script setup lang="ts">
import { api } from 'src/boot/axios'
import { useMixinDebug } from 'src/mixins/debug'
import { confirmDelete, doNotify, fromNowTz } from 'src/mixins/help'
import { onMounted, reactive, ref } from 'vue'
import UserAvatar from 'src/components/UserAvatar.vue'
import { useMixinSecurity } from 'src/mixins/security'

interface Props {
  notable_type: string,
  notable_id: number | string,
  nobox?: boolean
}
const props = defineProps<Props>()
const { user } = useMixinSecurity()

const loaded = ref(false)
const loading = ref(false)
const notes = ref()
const newNote = reactive({
  notable_type: props.notable_type,
  notable_id: props.notable_id.toString(),
  note: null
})

const getNotes = () => {
  api.get('/public/note/fetch/' + props.notable_type + '/' + props.notable_id).then((response) => {
    notes.value = response.data
    loading.value = false
    loaded.value = true
  }).catch((response) => {
    useMixinDebug(response)
  })
}

const deleteNote = (id: number) => {
  confirmDelete('This will remove the note').onOk(() => {
    loading.value = true
    api.delete(`/public/note/${id}`).then(() => {
      getNotes()
      doNotify('negative', 'Note removed')
    }).catch((response) => {
      useMixinDebug(response)
    })
  })
}

const addNote = () => {
  if (newNote.note) {
    loading.value = true
    api.post('/public/note', newNote).then(() => {
      getNotes()
      doNotify('positive', 'Note saved')
      Object.assign(newNote, {
        notable_type: props.notable_type,
        notable_id: props.notable_id,
        note: null
      })
    }).catch((response) => {
      useMixinDebug(response)
      loading.value = false
    })
  }
}

onMounted(() => {
  getNotes()
})
</script>
