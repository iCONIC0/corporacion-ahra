<template>
  <section :class="`py-20 bg-gradient-to-b ${gradient} ${className}`">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  className?: string
  gradient?: string
}>()
</script>