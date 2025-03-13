<script setup lang="ts">
import type { Participant } from '@/types';
// import { ref } from 'vue';

defineProps<{ participant: Participant }>()

</script>

<template>
  <RouterLink class="participant-link" :to="{ name: 'participant-layout-view', params: { id: participant.id } }">
      <div class="participant-card">
      <h2>{{ participant.name }}</h2>
      <p>{{ participant.email }} </p>
    </div>
  </RouterLink>
</template>

<style scoped>
.participant-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.participant-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.participant-link {
  text-decoration: none;
  color: inherit;
}

</style>
