<script setup lang="ts">
import type { HistoryStep } from "@/types";

defineProps<{ item: HistoryStep }>();
</script>

<template>
  <pre>{{ item }}</pre>
</template>

<style lang="scss" scoped></style>
