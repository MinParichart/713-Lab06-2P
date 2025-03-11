<script setup lang="ts">
import type { Event } from '@/types';
import { toRefs } from 'vue';
const props = defineProps<{
  event: Event
  id: string}>()
const { event } = toRefs(props)
</script>

<template>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>
