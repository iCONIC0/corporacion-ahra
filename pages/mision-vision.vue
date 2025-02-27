<template>
  <div class="bg-gradient-to-b from-pink-50 to-purple-50">
    <Section gradient="from-white to-pink-50">
      <SectionHeader
        :icon="Target"
        title="Misión y Visión"
        subtitle="Nuestro propósito y aspiraciones"
      />
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Misión -->
        <div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div class="flex items-center space-x-3 mb-6">
            <Rocket class="w-8 h-8 text-pink-500" />
            <h3 class="text-2xl font-semibold text-gray-800">Misión</h3>
          </div>
          <p class="text-gray-700 leading-relaxed">
            En la Corporacion "Ahora" buscamos brindar una atención integral a niños y adolescentes con vulneración de derechos de carácter grave y que han sido separados de sus familias de origen.
          </p>
          <p class="text-gray-700 leading-relaxed mt-4">
            Mediante un equipo multidisciplinario, con el fin de impulsar su desarrollo utilizando programas para la prevención, el acogimiento y el fortalecimiento de sus redes familiares y sociales.
          </p>
        </div>

        <!-- Visión -->
        <div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div class="flex items-center space-x-3 mb-6">
            <Eye class="w-8 h-8 text-pink-500" />
            <h3 class="text-2xl font-semibold text-gray-800">Visión</h3>
          </div>
          <p class="text-gray-700 leading-relaxed">
            La Institución Corporación Ahora pretende revertir la situación de los niños y
            adolescentes vulnerados en sus derechos y restituir principalmente el derecho de vivir en familia bajo estándares de calidad y de protección integradora, con valores y principios humanos que aseguren procesos de intervención protectores de derechos a infancia.
          </p>
        </div>
      </div>

      <!-- Valores -->
      <div class="mt-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Compromiso"
            description="Dedicación total a la protección y desarrollo integral de cada niño y adolescente"
            :icon="Heart"
            gradient="from-pink-50 to-pink-100"
          />
          <Card
            title="Integridad"
            description="Actuamos con transparencia y ética en todos nuestros procesos"
            :icon="Shield"
            gradient="from-purple-50 to-purple-100"
          />
          <Card
            title="Excelencia"
            description="Buscamos los más altos estándares de calidad en nuestra atención"
            :icon="Award"
            gradient="from-pink-50 to-pink-100"
          />
        </div>
      </div>
    </Section>
  </div>
</template>

<script setup lang="ts">
import { Target, Rocket, Eye, Heart, Shield, Award } from 'lucide-vue-next'
</script>