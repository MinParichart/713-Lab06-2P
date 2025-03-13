<script setup lang="ts">
import type { Participant } from '@/types';
import { toRefs } from 'vue';
const props = defineProps<{
  participant: Participant
  id: string}>()
const { participant } = toRefs(props)
</script>

<template>
  <p>{{ participant.name }}
  <br>
  contact
  <br>
    {{ participant.email }}</p>
</template>

