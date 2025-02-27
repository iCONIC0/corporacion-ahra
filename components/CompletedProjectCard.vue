<template>
  <div class="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
    <div class="flex flex-col md:flex-row">
      <!-- Image Section -->
      <div class="md:w-1/3">
        <img 
          :src="project.image || 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpbGRyZW58ZW58MHx8MHx8fDA%3D'"
          :alt="'Imagen del proyecto'"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Content Section -->
      <div class="md:w-2/3 p-6">
        <div class="space-y-4">
           <!-- Project Date -->
          <div class="flex items-center space-x-2 text-purple-600">
            <Calendar class="w-5 h-5" />
            <span class="text-sm font-medium">Período: {{ project.date }}</span>
          </div>
          <!-- Project Content -->
          <div class="mb-6">
            <p class="text-gray-700 leading-relaxed">{{ project.content }}</p>
          </div>

          <!-- General Objective -->
          <div v-if="project.general_objective" class="mb-6">
            <h4 class="text-lg font-semibold text-pink-600 mb-2">Objetivo General</h4>
            <p class="text-gray-700">{{ project.general_objective }}</p>
          </div>

         
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Calendar } from 'lucide-vue-next'

interface Project {
  image?: string
  content: string
  general_objective?: string
  date: string
}

defineProps<{
  project: Project
}>()
</script>