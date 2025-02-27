<template>
  <div class="text-center mb-12">
    <div class="flex items-center justify-center space-x-4">
      <component :is="icon" class="w-10 h-10 text-pink-500" />
      <h2 class="text-3xl md:text-4xl font-bold">{{ title }}</h2>
    </div>
    <p v-if="subtitle" class="mt-4 text-gray-600 max-w-2xl mx-auto">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  icon: Component
  title: string
  subtitle?: string
}>()
</script>