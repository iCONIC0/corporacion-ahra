<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
          Nombre Completo
        </label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
        />
      </div>
      <!-- Resto del formulario... -->
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Send } from 'lucide-vue-next'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
}
</script>