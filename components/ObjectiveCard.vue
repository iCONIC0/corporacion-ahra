<template>
  <div :class="`bg-white/30 backdrop-blur-sm rounded-md p-6 shadow-lg hover:shadow-xl transition-all ${className}`">
    <h3 class="text-xl font-semibold text-gray-800 mb-3">{{ title }}</h3>
    <p class="text-gray-700 leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  className?: string
}>()
</script>