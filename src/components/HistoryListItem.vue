<script setup lang="ts">
import type { HistoryStep } from "@/types";
import HistoryButton from "@/components/HistoryButton.vue";

defineProps<{ item: HistoryStep }>();
const emit = defineEmits(["stepTo"]);
</script>

<template>
  <div class="p-4 flex items-center justify-between gap-4 rounded transition-all leading-tight">
    <span>Moved post {{ item.id }} from {{ item.indexFrom }} to {{ item.indexTo }}</span>
    <HistoryButton @click="emit('stepTo')" />
  </div>
</template>

<style lang="scss" scoped></style>
