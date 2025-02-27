<template>
  <div class="bg-white/80 backdrop-blur-sm rounded-md p-6 shadow-lg hover:shadow-xl transition-all">
    <div class="flex items-start space-x-4">
      <UserCircle class="w-12 h-12 text-pink-500 flex-shrink-0" />
      <div>
        <h3 class="text-lg font-semibold text-gray-800">{{ name }}</h3>
        <p class="text-pink-600 font-medium">{{ position }}</p>
        <p class="text-sm text-gray-500 mt-1">Período: {{ period }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserCircle } from 'lucide-vue-next'

defineProps<{
  name: string
  position: string
  period: string
}>()
</script>