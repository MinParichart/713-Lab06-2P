<script setup lang="ts">
import type { Participant } from '@/types';
import { toRefs } from 'vue';
const props = defineProps<{
 participant: Participant
 id: string}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { participant } = toRefs(props)

</script>

<template>
    <p>Edit participant here</p>
</template>
