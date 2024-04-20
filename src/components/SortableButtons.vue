<script setup lang="ts">
const { hideUp = false, hideDown = false } = defineProps<{ hideUp?: Boolean; hideDown?: Boolean }>();
const emit = defineEmits(["up", "down"]);
</script>

<template>
  <div class="grid grid-cols-1 grid-rows-2 text-primary">
    <div v-if="!hideUp" class="arrow-button row-start-1" @click="emit('up')" data-testid="up-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0"
        />
      </svg>
    </div>
    <div v-if="!hideDown" class="arrow-button row-start-2" @click="emit('down')" data-testid="down-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.arrow-button {
  @apply grid place-content-center p-2 cursor-pointer hover:bg-slate-500/50 transition-all;
}
</style>
