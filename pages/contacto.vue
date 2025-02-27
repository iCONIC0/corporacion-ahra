<template>
  <div class="bg-gradient-to-b from-pink-50 to-purple-50">
    <Section>
      <SectionHeader
        :icon="Mail"
        title="Contáctanos"
        subtitle="En este formulario puedes dejarnos tu Consulta, Reclamo o Sugerencia."
      />
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Información de Contacto -->
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-semibold mb-4">Información de Contacto</h3>
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <Building class="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                <div>
                  <p class="font-medium">Organización</p>
                  <p class="text-gray-600">Corporación sin fines de lucro</p>
                  <p class="text-gray-600">RUT: 72043.400-8</p>
                  <p class="text-gray-600">Personalidad Jurídica N°12188 (30-11-1995)</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <MapPin class="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                <div>
                  <p class="font-medium">Sede en Valdivia</p>
                  <p class="text-gray-600">Runca N° 590, Valdivia</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <Phone class="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                <div>
                  <p class="font-medium">Teléfonos</p>
                  <p class="text-gray-600">Celular: +56956984103</p>
                  <p class="text-gray-600">Fijo: 632-411511</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <Mail class="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                <div>
                  <p class="font-medium">Correo Electrónico</p>
                  <a href="mailto:residenciaahora@gmail.com" class="text-gray-600 hover:text-pink-500 transition-colors">
                    residenciaahora@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Formulario de Contacto -->
        <div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <h3 class="text-2xl font-semibold mb-6">Envíanos un Mensaje</h3>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Nombre -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                Tu nombre
              </label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            <!-- Correo -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                Tu correo electrónico
              </label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            <!-- Tipo de Consulta -->
            <div>
              <label for="type" class="block text-sm font-medium text-gray-700 mb-1">
                Tipo de Consulta
              </label>
              <select
                id="type"
                v-model="formData.type"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="">Selecciona una opción</option>
                <option value="consulta">Consulta</option>
                <option value="reclamo">Reclamo</option>
                <option value="sugerencia">Sugerencia</option>
                <option value="denuncia">Denuncia</option>
                <option value="aporte">Apoyo</option>
              </select>
            </div>

            <!-- Asunto -->
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                v-model="formData.subject"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            <!-- Mensaje -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
                Tu mensaje
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="4"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              ></textarea>
            </div>

            <!-- Botón de Envío -->
            <button
              type="submit"
              class="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-6 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
            >
              <Send class="w-5 h-5" />
              <span>Enviar Mensaje</span>
            </button>
          </form>
        </div>
      </div>
    </Section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Mail, MapPin, Phone, Building, Send } from 'lucide-vue-next'
import Section from '~/components/Section.vue'
import SectionHeader from '~/components/SectionHeader.vue'

const formData = ref({
  name: '',
  email: '',
  type: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
  // Aquí iría la lógica para enviar el formulario
  // Por ejemplo, enviar a un endpoint de API
}
</script>