<template>
  <header class="bg-white/80 backdrop-blur-sm w-full z-10">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center space-x-3">
          <img 
            src="~/assets/logo-corp.png" 
            alt="Corporación Ahora Logo" 
            class="w-12 h-12"
          />
          <span class="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Corporación Ahora
          </span>
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-6">
          <NuxtLink to="/" class="text-gray-600 hover:text-pink-500 transition-colors">Inicio</NuxtLink>
          
          <!-- Nosotros Dropdown -->
          <div class="relative group">
            <button 
              class="flex items-center space-x-1 text-gray-600 hover:text-pink-500 transition-colors"
              @click="isNosotrosOpen = !isNosotrosOpen"
            >
              <span>Nosotros</span>
              <ChevronDown class="w-4 h-4" />
            </button>
            <div 
              class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50"
              :class="[isNosotrosOpen ? 'block' : 'hidden', 'group-hover:block']"
            >
              <NuxtLink 
                to="/historia"
                class="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500"
              >
                Historia
              </NuxtLink>
              <NuxtLink 
                to="/mision-vision"
                class="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500"
              >
                Misión y Visión
              </NuxtLink>
              <NuxtLink 
                to="/talleres-proyectos"
                class="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500"
              >
                Talleres y Proyectos
              </NuxtLink>
              <NuxtLink 
                to="/modelo-prevencion"
                class="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500"
              >
                Modelo de Prevención de Delitos
              </NuxtLink>
            </div>
          </div>

          <NuxtLink to="/equipo" class="text-gray-600 hover:text-pink-500 transition-colors">Equipo</NuxtLink>
          <NuxtLink to="/estados-financieros" class="text-gray-600 hover:text-pink-500 transition-colors">Estados Financieros</NuxtLink>
          <NuxtLink to="/contacto" class="text-gray-600 hover:text-pink-500 transition-colors">Contacto</NuxtLink>
          <NuxtLink 
            to="/apoyanos" 
            class="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity flex items-center space-x-2"
          >
            <Heart class="w-4 h-4" />
            <span>Apóyanos</span>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6 text-gray-600" />
          <X v-else class="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-if="isMobileMenuOpen"
        class="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 space-y-4"
      >
        <NuxtLink to="/" class="block text-gray-600 hover:text-pink-500">Inicio</NuxtLink>
        
        <!-- Mobile Nosotros Menu -->
        <div>
          <button 
            class="flex items-center justify-between w-full text-gray-600"
            @click="isMobileNosotrosOpen = !isMobileNosotrosOpen"
          >
            <span>Nosotros</span>
            <ChevronDown class="w-4 h-4" />
          </button>
          <div v-if="isMobileNosotrosOpen" class="pl-4 mt-2 space-y-2">
            <NuxtLink 
              to="/historia"
              class="block text-gray-600 hover:text-pink-500"
            >
              Historia
            </NuxtLink>
            <NuxtLink 
              to="/mision-vision"
              class="block text-gray-600 hover:text-pink-500"
            >
              Misión y Visión
            </NuxtLink>
            <NuxtLink 
              to="/talleres-proyectos"
              class="block text-gray-600 hover:text-pink-500"
            >
              Talleres y Proyectos
            </NuxtLink>
            <NuxtLink 
              to="/modelo-prevencion"
              class="block text-gray-600 hover:text-pink-500"
            >
              Modelo de Prevención de Delitos
            </NuxtLink>
          </div>
        </div>

        <NuxtLink to="/equipo" class="block text-gray-600 hover:text-pink-500">Equipo</NuxtLink>
        <NuxtLink to="/estados-financieros" class="block text-gray-600 hover:text-pink-500">Estados Financieros</NuxtLink>
        <NuxtLink to="/contacto" class="block text-gray-600 hover:text-pink-500">Contacto</NuxtLink>
        <NuxtLink 
          to="/apoyanos" 
          class="block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity text-center"
        >
          Apóyanos
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X, ChevronDown, Heart } from 'lucide-vue-next'

const isNosotrosOpen = ref(false)
const isMobileMenuOpen = ref(false)
const isMobileNosotrosOpen = ref(false)
</script>