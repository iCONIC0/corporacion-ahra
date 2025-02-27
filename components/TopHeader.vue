<template>
  <div class="bg-gray-800 text-white py-2">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center text-sm">
        <div class="flex items-center space-x-4 mb-2 md:mb-0">
          <div class="flex items-center space-x-2">
            <MapPin class="w-4 h-4 text-pink-400" />
            <span>Oficina Valdivia: Runca N° 590, Valdivia</span>
          </div>
          <div class="flex items-center space-x-2">
            <Mail class="w-4 h-4 text-pink-400" />
            <a href="mailto:residenciaahora@gmail.com" class="hover:text-pink-400 transition-colors">
              residenciaahora@gmail.com
            </a>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-2">
            <Phone class="w-4 h-4 text-pink-400" />
            <span>+56956984103 / 632-411511</span>
          </div>
          <div class="hidden md:block border-l border-gray-600 h-4"></div>
          <div class="hidden md:flex items-center space-x-2">
            <span class="text-gray-400">RUT:</span>
            <span>72043.400-8</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Mail, MapPin, Phone } from 'lucide-vue-next'
</script>