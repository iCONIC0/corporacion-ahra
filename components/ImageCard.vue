<template>
  <div :class="`relative group ${className}`">
    <img
      :src="imageUrl"
      :alt="imageAlt"
      class="rounded-md shadow-xl group-hover:scale-105 transition-transform duration-300 w-full object-cover"
    />
    <div class="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-pink-500/90 to-purple-500/90 backdrop-blur-sm text-white rounded-md p-4 transform transition-all duration-300 group-hover:translate-y-[-4px]">
      <p class="text-sm font-medium">
        {{ overlayText }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imageUrl: string
  imageAlt: string
  overlayText: string
  className?: string
}>()
</script>