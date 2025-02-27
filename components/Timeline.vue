<template>
  <div class="grid grid-cols-2 gap-4">
    <div 
      v-for="(event, index) in events" 
      :key="index"
      :class="`bg-gradient-to-br ${event.gradient || 'from-pink-50 to-pink-100'} rounded-xl p-4 shadow-lg`"
    >
      <h4 class="font-semibold text-pink-600 mb-2">{{ event.title }}</h4>
      <p class="text-sm text-gray-600">{{ event.period }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TimelineEvent {
  title: string
  period: string
  gradient?: string
}

defineProps<{
  events: TimelineEvent[]
}>()
</script>