<script setup lang="ts">
import { useParticipantStore } from '@/stores/participant';
import { storeToRefs } from 'pinia';
const props = defineProps<{ id: string }>()
const store = useParticipantStore()
const { participant } = storeToRefs(store)
</script>

<template>
  <div v-if="participant">
    <h1>{{ participant.name }}</h1>
    <nav>
      <RouterLink :to="{ name: 'participant-detail-view', params: { id: participant.id } }"> Details </RouterLink>
      <RouterLink :to="{ name: 'participant-register-view', params: { id: participant.id } }"> Register </RouterLink>
      <RouterLink :to="{ name: 'participant-edit-view', params: { id: participant.id } }"> Edit </RouterLink>
    </nav>
    <RouterView :participant="participant" />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
