<script setup lang="ts">
import type { Event } from '@/types';
import { toRefs } from 'vue';
const props = defineProps<{
 event: Event
 id: string}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { event } = toRefs(props)

</script>

<template>
    <p>Edit event here</p>
</template>
