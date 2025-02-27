<template>
  <div class="relative">
    <!-- Navigation Buttons -->
    <button 
      @click="prev" 
      class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-pink-50 transition-colors"
      aria-label="Previous slide"
    >
      <ChevronLeft class="w-6 h-6 text-pink-500" />
    </button>
    
    <button 
      @click="next"
      class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-pink-50 transition-colors"
      aria-label="Next slide"
    >
      <ChevronRight class="w-6 h-6 text-pink-500" />
    </button>

    <!-- Slides -->
    <div class="overflow-hidden">
      <div 
        class="flex transition-transform duration-300 ease-in-out"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="w-full flex-shrink-0 px-4"
        >
          <div class="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <!-- Image Section -->
            <img 
              :src="project.image"
              :alt="project.title"
              class="w-full h-48 object-cover"
            />

            <template v-if="type === 'current'">
              <!-- Stats Grid for Current Projects -->
              <div class="grid grid-cols-4 divide-x divide-gray-100 bg-gradient-to-r from-pink-50 to-purple-50">
                <div v-for="(stat, idx) in project.stats" :key="idx" class="p-4 text-center">
                  <p class="text-2xl font-bold text-pink-500">{{ stat.value }}</p>
                  <p class="text-xs text-gray-600">{{ stat.label }}</p>
                </div>
              </div>

              <!-- Content Section for Current Projects -->
              <div class="p-6">
                <!-- Project Title and Period -->
                <div class="flex items-center space-x-2 text-purple-600 mb-4">
                  <Calendar class="w-5 h-5" />
                  <span class="text-sm font-medium">{{ project.period }}</span>
                </div>

                <h3 class="text-xl font-semibold text-gray-800 mb-4">{{ project.title }}</h3>

                <!-- Population -->
                <p class="text-gray-700 leading-relaxed mb-4">{{ project.population }}</p>

                <!-- General Objective -->
                <div class="mb-6">
                  <h4 class="text-lg font-semibold text-pink-600 mb-2">Objetivo General</h4>
                  <p class="text-gray-700">{{ project.generalObjective }}</p>
                </div>

                <!-- Specific Objectives -->
                <div v-if="project.specificObjectives && project.specificObjectives.length > 0">
                  <h4 class="text-lg font-semibold text-pink-600 mb-2">Objetivos Específicos</h4>
                  <ul class="space-y-2">
                    <li 
                      v-for="(objective, idx) in project.specificObjectives" 
                      :key="idx"
                      class="flex items-start space-x-2"
                    >
                      <CheckCircle class="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                      <span class="text-gray-700">{{ objective }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </template>

            <template v-else>
              <!-- Simple Content Section for Completed Projects -->
              <div class="p-6">
                <div class="flex items-center space-x-2 text-purple-600 mb-4">
                  <Calendar class="w-5 h-5" />
                  <span class="text-sm font-medium">{{ project.date }}</span>
                </div>

                <h3 class="text-xl font-semibold text-gray-800 mb-4">{{ project.title }}</h3>
                <p class="text-gray-700 leading-relaxed">{{ project.content }}</p>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- Dots -->
    <div class="flex justify-center mt-6 space-x-2">
      <button
        v-for="(_, index) in projects"
        :key="index"
        @click="currentSlide = index"
        class="w-3 h-3 rounded-full transition-colors"
        :class="currentSlide === index ? 'bg-pink-500' : 'bg-gray-300 hover:bg-pink-300'"
        :aria-label="`Go to slide ${index + 1}`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, ChevronRight, Calendar, CheckCircle } from 'lucide-vue-next'

interface Stat {
  value: string
  label: string
}

interface BaseProject {
  title: string
  image: string
}

interface CurrentProject extends BaseProject {
  period: string
  population: string
  generalObjective: string
  specificObjectives: string[]
  stats: Stat[]
}

interface CompletedProject extends BaseProject {
  content: string
  date: string
}

const props = defineProps<{
  projects: (CurrentProject | CompletedProject)[]
  type: 'current' | 'completed'
}>()

const currentSlide = ref(0)
let autoplayInterval: NodeJS.Timeout | null = null

const next = () => {
  currentSlide.value = (currentSlide.value + 1) % props.projects.length
}

const prev = () => {
  currentSlide.value = currentSlide.value === 0 
    ? props.projects.length - 1 
    : currentSlide.value - 1
}

// Auto-advance slides
onMounted(() => {
  autoplayInterval = setInterval(next, 7000)
})

onUnmounted(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
})
</script>