<template>
  <div class="bg-gradient-to-b from-pink-50 to-purple-50">
    <!-- Identificación Section -->
    <Section gradient="from-white to-pink-50">
      <SectionHeader
        :icon="Building"
        title="Identificación de la Entidad"
        subtitle="Corporación Ahora"
      />
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <h3 class="text-xl font-semibold text-pink-600 mb-4">Información General</h3>
          <div class="space-y-3">
            <div class="flex items-start space-x-3">
              <Building class="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
              <div>
                <p class="font-medium">Organización</p>
                <p class="text-gray-600">Corporación sin fines de lucro</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <FileText class="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
              <div>
                <p class="font-medium">RUT</p>
                <p class="text-gray-600">72.043.400-8</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <Calendar class="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
              <div>
                <p class="font-medium">Personalidad Jurídica</p>
                <p class="text-gray-600">N°12188 con fecha 30-11-1995</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <h3 class="text-xl font-semibold text-pink-600 mb-4">Representante Legal</h3>
          <div class="space-y-3">
            <div class="flex items-start space-x-3">
              <UserCircle class="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
              <div>
                <p class="font-medium">Nombre</p>
                <p class="text-gray-600">Luis Ricardo Valverde Casanova</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <Mail class="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
              <div>
                <p class="font-medium">Correo electrónico</p>
                <a href="mailto:l.ricardovalverde@gmail.com" class="text-gray-600 hover:text-pink-500 transition-colors">
                  l.ricardovalverde@gmail.com
                </a>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <MapPin class="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
              <div>
                <p class="font-medium">Sede en Valdivia</p>
                <p class="text-gray-600">Runca 590, Villa Rucahue, Valdivia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Organigrama Section -->
      <div class="mt-12">
        <h2 class="text-3xl font-bold text-center mb-12">Organigrama</h2>
        
        <!-- Directorio -->
        <div class="max-w-4xl mx-auto">
          <!-- Presidente -->
          <div class="flex justify-center mb-8">
            <DirectoryCard
              name="Luis Ricardo Valverde Casanova"
              position="Presidente"
              period="R.U.N: 6.372.563-3"
              className="w-80"
            />
          </div>

          <!-- Vice-Presidente y Secretario -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <DirectoryCard
              name="Claudia Giubergia Veloso"
              position="Vice-Presidente"
              period="R.U.N: 12.383.683-9"
            />
            <DirectoryCard
              name="Claudio Andrés Carrasco Walker"
              position="Secretario"
              period="R.U.N: 8.672.893-1"
            />
          </div>

          <!-- Tesorera y Director -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <DirectoryCard
              name="Betty Selman Barrientos"
              position="Tesorera"
              period="R.U.N: 15.381.039-7"
            />
            <DirectoryCard
              name="Nelson Mendoza Jara"
              position="Director"
              period="R.U.N: 8.754.574-1"
            />
          </div>

          <!-- Directoras -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <DirectoryCard
              name="Anna Bonan"
              position="Directora"
              period="R.U.N: 27.439.385-8"
            />
            <DirectoryCard
              name="Carla Romeny Kunstmann"
              position="Directora"
              period="R.U.N: 14.417.692-8"
            />
          </div>

          <!-- Socios Colaboradores -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DirectoryCard
              name="Daniel Vaccaro Bartelsman"
              position="Socio Colaborador del Directorio"
              period=""
            />
            <DirectoryCard
              name="Josefina Zerene Bustamante"
              position="Socia Colaboradora del Directorio"
              period=""
            />
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<script setup lang="ts">
import { Building, UserCircle, Mail, MapPin, FileText, Calendar } from 'lucide-vue-next'
import Section from '~/components/Section.vue'
import SectionHeader from '~/components/SectionHeader.vue'
import DirectoryCard from '~/components/DirectoryCard.vue'
</script>