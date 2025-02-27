<template>
  <div :class="`bg-gradient-to-r ${gradient} text-white px-6 py-3 rounded-md shadow-md`">
    <div class="flex items-center space-x-2">
      <component :is="icon" class="w-5 h-5" />
      <span class="font-medium">{{ text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  icon: Component
  text: string
  gradient?: string
}>()
</script>