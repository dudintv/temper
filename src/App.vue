<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import SortablePage from "@/pages/SortablePage.vue";
</script>

<template>
  <MainLayout>
    <Suspense>
      <SortablePage />
      <template #fallback> Loading... </template>
    </Suspense>
  </MainLayout>
</template>

<style scoped></style>
