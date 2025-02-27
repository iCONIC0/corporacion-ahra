<template>
  <div class="bg-gradient-to-b from-pink-50 to-purple-50">
    <Section>
      <SectionHeader
        :icon="Heart"
        title="Apóyanos"
        subtitle="Tu apoyo hace posible nuestra labor de protección a la niñez"
      />
      
      <div class="max-w-4xl mx-auto">
        <!-- Introducción -->
        <div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg mb-8">
          <p class="text-gray-700 leading-relaxed">
            En Corporación Ahora, cada donación contribuye directamente a mejorar la vida de niños y adolescentes.
            Tu apoyo nos permite continuar brindando protección, educación y oportunidades de desarrollo.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Transferencia Bancaria -->
          <div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <div class="flex items-center space-x-3 mb-6">
              <Building2 class="w-8 h-8 text-pink-500" />
              <h3 class="text-2xl font-semibold text-gray-800">Transferencia Bancaria</h3>
            </div>
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <Building class="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                <div>
                  <p class="font-medium">Nombre</p>
                  <p class="text-gray-600">Corporación Ahora</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <CreditCard class="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                <div>
                  <p class="font-medium">Cuenta Corriente</p>
                  <p class="text-gray-600">N° 123456789</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <Building2 class="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                <div>
                  <p class="font-medium">Banco</p>
                  <p class="text-gray-600">Banco Estado</p>
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
                <Mail class="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                <div>
                  <p class="font-medium">Correo para comprobante</p>
                  <p class="text-gray-600">residenciaahora@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Flow -->
          <div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <div class="flex items-center space-x-3 mb-6">
              <CreditCard class="w-8 h-8 text-pink-500" />
              <h3 class="text-2xl font-semibold text-gray-800">Pago con Flow</h3>
            </div>
            <p class="text-gray-700 mb-6">
              Realiza tu donación de manera segura y rápida utilizando Flow, que acepta diferentes medios de pago:
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center space-x-2">
                <CheckCircle class="w-5 h-5 text-pink-500" />
                <span>Tarjetas de crédito y débito</span>
              </li>
              <li class="flex items-center space-x-2">
                <CheckCircle class="w-5 h-5 text-pink-500" />
                <span>WebPay</span>
              </li>
              <li class="flex items-center space-x-2">
                <CheckCircle class="w-5 h-5 text-pink-500" />
                <span>Transferencia bancaria</span>
              </li>
            </ul>
            <button class="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-6 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
              <CreditCard class="w-5 h-5" />
              <span>Donar con Flow</span>
            </button>
          </div>
        </div>

        <!-- Información Adicional -->
        <div class="mt-8 bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <h3 class="text-2xl font-semibold text-pink-600 mb-4">¿Por qué donar?</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="flex items-start space-x-3">
              <Home class="w-6 h-6 text-pink-500 flex-shrink-0" />
              <div>
                <h4 class="font-medium mb-2">Hogar Seguro</h4>
                <p class="text-gray-600 text-sm">Proporcionamos un ambiente seguro y acogedor para niños y adolescentes.</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <GraduationCap class="w-6 h-6 text-pink-500 flex-shrink-0" />
              <div>
                <h4 class="font-medium mb-2">Educación</h4>
                <p class="text-gray-600 text-sm">Apoyamos su desarrollo académico y personal.</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <Users class="w-6 h-6 text-pink-500 flex-shrink-0" />
              <div>
                <h4 class="font-medium mb-2">Apoyo Integral</h4>
                <p class="text-gray-600 text-sm">Brindamos atención psicosocial y acompañamiento continuo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<script setup lang="ts">
import { Heart, Building2, Building, CreditCard, FileText, Mail, CheckCircle, Home, GraduationCap, Users } from 'lucide-vue-next'
</script>