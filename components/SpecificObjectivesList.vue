<template>
  <div class="space-y-4">
    <div v-for="(objective, index) in objectives" :key="index" class="flex items-start space-x-3">
      <CheckCircle class="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
      <p class="text-gray-700">{{ objective }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckCircle } from 'lucide-vue-next'

defineProps<{
  objectives: string[]
}>()
</script>