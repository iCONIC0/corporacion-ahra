<template>
  <div class="bg-gradient-to-b from-pink-50 to-purple-50">
    <Section gradient="from-white to-pink-50">
      <SectionHeader
        :icon="History"
        title="Nuestra Historia"
        subtitle="Más de 25 años protegiendo y cuidando a nuestra niñez"
      />
      
      <div class="space-y-12">
        <!-- Timeline -->
        <div class="relative">
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-200"></div>
          
          <!-- 1995-1997: Fundación -->
          <div class="relative mb-12">
            <div class="flex items-center justify-center mb-4">
              <div class="bg-pink-500 text-white px-4 py-2 rounded-full z-10">1995-1997</div>
            </div>
            <div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <h3 class="text-2xl font-semibold text-pink-600 mb-4">Los Inicios</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p class="text-gray-700 leading-relaxed">
                    En el año 1995, el vicepresidente de la "Corporación de Menores de la Calle" Ahora, don
                    Dirk Bartelsman, consigue fondos de una institución benéfica en Suiza, para financiar la
                    construcción de un nuevo hogar en terreno adquirido por la Corporación en la comuna de Máfil.
                  </p>
                  <p class="text-gray-700 leading-relaxed mt-4">
                    Don Dirk dedicó todo su esfuerzo en sacar adelante esta obra, la cual finalizó a fines del año 1997.
                    Por lo tanto, en honor a sus fundadores se otorga el nombre de "Casa Dirk Bartelsman".
                  </p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Construcción del hogar"
                  class="rounded-lg shadow-lg object-cover h-64 w-full"
                />
              </div>
            </div>
          </div>

          <!-- 1998: Nueva Etapa -->
          <div class="relative mb-12">
            <div class="flex items-center justify-center mb-4">
              <div class="bg-pink-500 text-white px-4 py-2 rounded-full z-10">1998</div>
            </div>
            <div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <h3 class="text-2xl font-semibold text-pink-600 mb-4">Nueva Etapa</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <img 
                  src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Nuevo hogar"
                  class="rounded-lg shadow-lg object-cover h-64 w-full"
                />
                <div>
                  <p class="text-gray-700 leading-relaxed">
                    En marzo de 1998, los niños y adolescentes fueron trasladados al nuevo hogar, donde comienzan una nueva vida,
                    en esta parcela, ubicada a un kilómetro de la comuna de Máfil.
                  </p>
                  <p class="text-gray-700 leading-relaxed mt-4">
                    En el mismo año, La Corporación de Menores de la Calle Ahora firma el primer convenio como colaborador
                    acreditado del Servicio Nacional de Menores con modalidad RPM (residencia para mayores).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- 2011-2021: Evolución -->
          <div class="relative mb-12">
            <div class="flex items-center justify-center mb-4">
              <div class="bg-pink-500 text-white px-4 py-2 rounded-full z-10">2011-2021</div>
            </div>
            <div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <h3 class="text-2xl font-semibold text-pink-600 mb-4">Evolución y Crecimiento</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p class="text-gray-700 leading-relaxed">
                    En 2011, se postula a proyectos REM-PER (proyectos especializados) que se mantuvieron hasta el año 2021.
                  </p>
                  <p class="text-gray-700 leading-relaxed mt-4">
                    Desde noviembre del año 2021 en adelante "La Corporación Ahora", se encuentra bajo los lineamientos del
                    Servicio Nacional de Protección Especializada a la Niñez y Adolescencia, bajo el Ministerio de Desarrollo
                    social y Familia.
                  </p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Evolución del proyecto"
                  class="rounded-lg shadow-lg object-cover h-64 w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Población Objetivo -->
        <div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <h3 class="text-2xl font-semibold text-pink-600 mb-6">Nuestra Labor</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-4">
              <p class="text-gray-700 leading-relaxed">
                La población objetivo de esta residencia transitoria, trabaja con niños y adolescentes
                de sexo masculino, sus edades fluctúan entre los 6 a 17 años, quienes asisten a sistema escolar
                Básico, Medio (científico humanista- especialidad técnica), modalidad especial.
              </p>
              <p class="text-gray-700 leading-relaxed">
                En el caso de continuidad de estudios superiores técnicos, profesionales o universitarios, pueden permanecer
                en la Residencia hasta su finalización, según lineamientos técnicos, hasta los 24 años.
              </p>
              <p class="text-gray-700 leading-relaxed">
                La atención de la Residencia no efectúa exclusión de usuarios por condición étnica, racial,
                religiosa, o de cualquier otro orden, incluyendo a quienes presentan alguna situación de
                discapacidad intelectual leve.
              </p>
            </div>
            <div class="space-y-4">
              <h4 class="text-xl font-semibold text-pink-600">Atención Familiar</h4>
              <p class="text-gray-700 leading-relaxed">
                Son también sujetos de atención las familias o adultos de referencia de los niños y
                adolescentes, con quienes la residencia desarrollará procesos de intervención psicosocial
                que promoverán la sensibilización parental y una respuesta asertiva ante las necesidades
                biopsicosociales.
              </p>
              <p class="text-gray-700 leading-relaxed">
                El objetivo es que los niños y adolescentes puedan retornar con su familia de origen o figuras
                parentales significativas y así restituir su derecho de vivir en una familia funcional y protectora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<script setup lang="ts">
import { History } from 'lucide-vue-next'
import Section from '~/components/Section.vue'
import SectionHeader from '~/components/SectionHeader.vue'
</script>