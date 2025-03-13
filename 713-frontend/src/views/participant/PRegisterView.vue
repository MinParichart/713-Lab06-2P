<script setup lang="ts">
import { useMessageStore } from '@/stores/message';
import type { Participant } from '@/types';
import { toRefs } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps<{
 participant: Participant
 id: string
}>()
const store = useMessageStore()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { participant } = toRefs(props)
const router = useRouter()
const register = () => {
  store.updateMessage('You are successully registered for ' + props.participant.name)
  setTimeout(() => {
    store.resetMessage()
  }, 3000)
  router.push({ name: 'participant-detail-view' })
}
</script>

<template>
    <p>Register participant here</p>
    <button @click="register">Register</button>
</template>

