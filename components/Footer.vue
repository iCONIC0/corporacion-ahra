<template>
  <footer class="bg-gray-800 text-white py-12">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Logo and Name -->
        <div class="flex flex-col items-center md:items-start">
          <div class="flex items-center space-x-3 mb-4">
            <img 
              src="~/assets/logo-corp.png" 
              alt="Corporación Ahora Logo" 
              class="w-12 h-12 brightness-0 invert"
            />
            <span class="text-2xl font-bold">Corporación Ahora</span>
          </div>
          <p class="text-gray-400 text-center md:text-left">
            Brindando esperanza y protección a la niñez y adolescencia
          </p>
        </div>

        <!-- Contact Information -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold mb-4 text-center md:text-left">Contacto</h3>
          <div class="flex items-center space-x-3">
            <MapPin class="w-5 h-5 text-pink-500 flex-shrink-0" />
            <span class="text-gray-300">Runca 590, Villa Rucahue, Valdivia, Los Ríos, Chile</span>
          </div>
          <div class="flex items-center space-x-3">
            <Phone class="w-5 h-5 text-pink-500 flex-shrink-0" />
            <div class="flex flex-col">
              <span class="text-gray-300">Celular: +56 9 56984103</span>
              <span class="text-gray-300">Teléfono fijo: 632-411511</span>
            </div>
          </div>
          <div class="flex items-center space-x-3">
            <Mail class="w-5 h-5 text-pink-500 flex-shrink-0" />
            <span class="text-gray-300">residenciaahora@gmail.com</span>
          </div>
        </div>

        <!-- Organismo Colaborador -->
        <div class="flex flex-col items-center md:items-start">
          <h3 class="text-xl font-semibold mb-4">Organismo colaborador:</h3>
          <img 
            src="https://www.mejor-ninez.cl/wp-content/uploads/2021/10/Logo-MejorNinez.png" 
            alt="Mejor Niñez Logo" 
            class="h-24 object-contain"
          />
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-gray-700">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex space-x-6 mb-4 md:mb-0">
            <a href="#" class="text-gray-400 hover:text-pink-500 transition-colors">Facebook</a>
            <a href="#" class="text-gray-400 hover:text-pink-500 transition-colors">Instagram</a>
            <a href="#" class="text-gray-400 hover:text-pink-500 transition-colors">Twitter</a>
          </div>
          <div class="text-gray-400 text-center md:text-right">
            © {{ new Date().getFullYear() }} Corporación Ahora. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { MapPin, Phone, Mail } from 'lucide-vue-next'
</script>