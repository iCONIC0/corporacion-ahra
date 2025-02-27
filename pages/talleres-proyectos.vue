<template>
  <div class="bg-gradient-to-b from-pink-50 to-purple-50">
    <Section gradient="from-white to-pink-50">
      <SectionHeader
        :icon="Rocket"
        title="Talleres y Proyectos"
        subtitle="Conoce nuestras actividades y programas en desarrollo"
      />
      
      <div class="space-y-8">
        <!-- Lista de Talleres y Proyectos -->
        <div v-for="(item, index) in items" :key="index" 
          class="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
          <div class="flex flex-col md:flex-row">
            <!-- Imagen -->
            <div class="md:w-1/3">
              <img 
                :src="item.image" 
                :alt="item.title"
                class="w-full h-64 object-cover"
              />
            </div>
            
            <!-- Contenido -->
            <div class="flex-grow p-6">
              <div class="flex flex-col h-full">
                <div class="flex-grow">
                  <h3 class="text-xl font-semibold text-pink-600 mb-2">{{ item.title }}</h3>
                  <p class="text-gray-700 leading-relaxed">{{ item.description }}</p>
                </div>
                <div class="flex items-center space-x-2 text-sm text-gray-500 mt-4">
                  <Calendar class="w-4 h-4" />
                  <span>{{ item.date }}</span>
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
import { Rocket, Calendar } from 'lucide-vue-next'

const items = [
  {
    title: "Taller de Arte y Expresión",
    description: "Espacio creativo donde los niños y adolescentes pueden expresar sus emociones a través de diferentes técnicas artísticas, incluyendo pintura, dibujo y manualidades.",
    date: "Marzo 2024 - Diciembre 2024",
    image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    title: "Proyecto de Huerto Comunitario",
    description: "Iniciativa que busca conectar a los participantes con la naturaleza y enseñar sobre sostenibilidad a través del cultivo de vegetales y hierbas.",
    date: "Abril 2024 - Octubre 2024",
    image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    title: "Taller de Música y Percusión",
    description: "Actividad que fomenta el desarrollo de habilidades musicales y trabajo en equipo a través del aprendizaje de instrumentos y ritmos.",
    date: "Mayo 2024 - Noviembre 2024",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    title: "Proyecto de Apoyo Escolar",
    description: "Programa de refuerzo académico personalizado para mejorar el rendimiento escolar y desarrollar hábitos de estudio efectivos.",
    date: "Marzo 2024 - Diciembre 2024",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    title: "Taller de Deportes y Vida Saludable",
    description: "Actividades deportivas y educación en hábitos saludables para promover el bienestar físico y mental de los participantes.",
    date: "Abril 2024 - Noviembre 2024",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  }
]
</script>