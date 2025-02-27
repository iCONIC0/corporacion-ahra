<template>
  <div class="bg-gradient-to-b from-pink-50 to-purple-50">
    <Section>
      <SectionHeader
        :icon="FileSpreadsheet"
        title="Estados Financieros"
        subtitle="Documentación financiera de la Corporación Ahora"
      />
      
      <div class="max-w-4xl mx-auto">
        <!-- Año Actual -->
        <div class="mb-12">
          <h3 class="text-2xl font-semibold text-gray-800 mb-6">Año 2024</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Excel -->
            <div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div class="flex items-start space-x-4">
                <div class="bg-green-100 p-3 rounded-lg">
                  <FileSpreadsheet class="w-8 h-8 text-green-600" />
                </div>
                <div class="flex-grow">
                  <h4 class="text-lg font-medium text-gray-800 mb-2">Balance General 2024</h4>
                  <p class="text-sm text-gray-600 mb-4">Formato Excel (.xlsx)</p>
                  <div class="flex items-center space-x-4">
                    <a 
                      href="#"
                      class="inline-flex items-center space-x-2 text-sm text-green-600 hover:text-green-700"
                    >
                      <Eye class="w-4 h-4" />
                      <span>Vista Previa</span>
                    </a>
                    <a 
                      href="#"
                      class="inline-flex items-center space-x-2 text-sm text-green-600 hover:text-green-700"
                    >
                      <Download class="w-4 h-4" />
                      <span>Descargar</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- PDF -->
            <div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div class="flex items-start space-x-4">
                <div class="bg-red-100 p-3 rounded-lg">
                  <FileText class="w-8 h-8 text-red-600" />
                </div>
                <div class="flex-grow">
                  <h4 class="text-lg font-medium text-gray-800 mb-2">Informe Financiero 2024</h4>
                  <p class="text-sm text-gray-600 mb-4">Formato PDF</p>
                  <div class="flex items-center space-x-4">
                    <a 
                      href="#"
                      class="inline-flex items-center space-x-2 text-sm text-red-600 hover:text-red-700"
                    >
                      <Eye class="w-4 h-4" />
                      <span>Vista Previa</span>
                    </a>
                    <a 
                      href="#"
                      class="inline-flex items-center space-x-2 text-sm text-red-600 hover:text-red-700"
                    >
                      <Download class="w-4 h-4" />
                      <span>Descargar</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Años Anteriores -->
        <div>
          <h3 class="text-2xl font-semibold text-gray-800 mb-6">Histórico</h3>
          <div class="space-y-4">
            <div v-for="year in [2023, 2022, 2021]" :key="year" class="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h4 class="text-lg font-semibold text-gray-800 mb-4">Año {{ year }}</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Excel -->
                <div class="flex items-center space-x-4">
                  <FileSpreadsheet class="w-6 h-6 text-green-600" />
                  <div>
                    <p class="font-medium text-gray-800">Balance General {{ year }}</p>
                    <div class="flex items-center space-x-4 mt-2">
                      <a 
                        href="#"
                        class="text-sm text-green-600 hover:text-green-700 flex items-center space-x-1"
                      >
                        <Eye class="w-4 h-4" />
                        <span>Ver</span>
                      </a>
                      <a 
                        href="#"
                        class="text-sm text-green-600 hover:text-green-700 flex items-center space-x-1"
                      >
                        <Download class="w-4 h-4" />
                        <span>Descargar</span>
                      </a>
                    </div>
                  </div>
                </div>

                <!-- PDF -->
                <div class="flex items-center space-x-4">
                  <FileText class="w-6 h-6 text-red-600" />
                  <div>
                    <p class="font-medium text-gray-800">Informe Financiero {{ year }}</p>
                    <div class="flex items-center space-x-4 mt-2">
                      <a 
                        href="#"
                        class="text-sm text-red-600 hover:text-red-700 flex items-center space-x-1"
                      >
                        <Eye class="w-4 h-4" />
                        <span>Ver</span>
                      </a>
                      <a 
                        href="#"
                        class="text-sm text-red-600 hover:text-red-700 flex items-center space-x-1"
                      >
                        <Download class="w-4 h-4" />
                        <span>Descargar</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<script setup lang="ts">
import { FileSpreadsheet, FileText, Eye, Download } from 'lucide-vue-next'
import Section from '~/components/Section.vue'
import SectionHeader from '~/components/SectionHeader.vue'
</script>