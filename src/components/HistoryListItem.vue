<script setup lang="ts">
import type { HistoryStep } from "@/types";
import HistoryButton from "@/components/HistoryButton.vue";

defineProps<{ item: HistoryStep }>();
const emit = defineEmits(["stepTo"]);
</script>

<template>
  <div class="appear-animation p-4 flex items-center justify-between gap-4 rounded transition-all leading-tight">
    <span>Moved post {{ item.id }} from index {{ item.indexFrom }} to index {{ item.indexTo }}</span>
    <HistoryButton @click="emit('stepTo')" />
  </div>
</template>

<style scoped>
@keyframes appear {
  to {
    opacity: 1;
  }
}

.appear-animation {
  opacity: 0;
  animation: appear 1s ease-in-out forwards;
}
</style>
