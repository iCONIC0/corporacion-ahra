<template>
  <div class="bg-gradient-to-b from-pink-50 to-purple-50">
    <Section gradient="from-white to-pink-50">
      <SectionHeader
        :icon="Shield"
        title="Modelo de Prevención de Delitos"
        subtitle="Nuestro compromiso con la transparencia y la integridad"
      />
      
      <div class="max-w-4xl mx-auto">
        <!-- Descripción -->
        <div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg mb-8">
          <p class="text-gray-700 leading-relaxed mb-4">
            El Modelo de Prevención de Delitos (MPD) de Corporación Ahora establece los lineamientos y procedimientos 
            necesarios para prevenir la comisión de delitos en nuestras operaciones diarias.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Este modelo refleja nuestro compromiso con la transparencia, la ética y el cumplimiento normativo en 
            todas nuestras actividades.
          </p>
        </div>

        <!-- Visor de PDF -->
        <div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-xl font-semibold text-gray-800">Manual de Prevención de Delitos</h3>
            <a 
              href="/assets/1.2-Modelo-de-Prevencion-de-Delitos.pdf" 
              target="_blank"
              class="flex items-center space-x-2 text-pink-500 hover:text-pink-600 transition-colors"
            >
              <Download class="w-5 h-5" />
              <span>Descargar PDF</span>
            </a>
          </div>
          
          <div class="aspect-[16/9] w-full">
            <iframe
              src="/assets/1.2-Modelo-de-Prevencion-de-Delitos.pdf"
              class="w-full h-full border-0 rounded-lg"
              title="Modelo de Prevención de Delitos PDF"
            ></iframe>
          </div>
        </div>

        <!-- Información Adicional -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div class="flex items-center space-x-3 mb-4">
              <AlertCircle class="w-6 h-6 text-pink-500" />
              <h3 class="text-lg font-semibold text-gray-800">Canal de Denuncias</h3>
            </div>
            <p class="text-gray-700">
              Si deseas reportar una situación que podría constituir una infracción a nuestro Modelo de 
              Prevención de Delitos, puedes hacerlo a través de nuestro canal de denuncias confidencial.
            </p>
            <NuxtLink 
              to="/contacto" 
              class="inline-flex items-center space-x-2 text-pink-500 hover:text-pink-600 mt-4"
            >
              <ArrowRight class="w-5 h-5" />
              <span>Ir al formulario de contacto</span>
            </NuxtLink>
          </div>

          <div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div class="flex items-center space-x-3 mb-4">
              <FileText class="w-6 h-6 text-pink-500" />
              <h3 class="text-lg font-semibold text-gray-800">Documentos Relacionados</h3>
            </div>
            <ul class="space-y-3">
              <li>
                <a href="#" class="flex items-center space-x-2 text-gray-700 hover:text-pink-500 transition-colors">
                  <File class="w-5 h-5" />
                  <span>Código de Ética</span>
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center space-x-2 text-gray-700 hover:text-pink-500 transition-colors">
                  <File class="w-5 h-5" />
                  <span>Política de Prevención</span>
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center space-x-2 text-gray-700 hover:text-pink-500 transition-colors">
                  <File class="w-5 h-5" />
                  <span>Procedimientos de Control</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<script setup lang="ts">
import { Shield, Download, AlertCircle, ArrowRight, FileText, File } from 'lucide-vue-next'
</script>