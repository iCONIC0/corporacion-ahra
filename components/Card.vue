<template>
  <div :class="`bg-gradient-to-br ${gradient} rounded-md p-6 shadow-lg hover:shadow-xl transition-shadow ${className}`">
    <div v-if="icon" class="flex items-center space-x-3 mb-4">
      <component :is="icon" class="w-6 h-6 text-pink-500" />
    </div>
    <h4 class="font-semibold text-lg mb-3 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
      {{ title }}
    </h4>
    <p class="text-gray-700">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  title: string
  description: string
  icon?: Component
  gradient?: string
  className?: string
}>()
</script>