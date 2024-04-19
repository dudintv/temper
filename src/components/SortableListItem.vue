<script setup lang="ts">
import type { Post } from "@/types";

defineProps<{ item: Post }>();
</script>

<template>
  <pre>{{ item.title }}</pre>
</template>

<style lang="scss" scoped></style>
