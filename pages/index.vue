<template>
  <div class="bg-gradient-to-b from-pink-50 to-purple-50">
    <!-- Hero Section -->
    <Section gradient="from-white to-pink-50" className="pt-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div>
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            <span class="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Protegiendo el Futuro
            </span>
            <br />
            <span class="text-gray-800">de Nuestra Niñez</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Desde 1995, brindando esperanza, protección y oportunidades para el desarrollo integral de niños y adolescentes en la región de Los Ríos.
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink 
              to="/contacto"
              class="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              Contáctanos
            </NuxtLink>
            <NuxtLink 
              to="/historia"
              class="border-2 border-pink-500 text-pink-500 px-6 py-3 rounded-md hover:bg-pink-50 transition-colors"
            >
              Conoce más
            </NuxtLink>
          </div>
        </div>
        <!-- Hero Image -->
        <div class="relative">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1170&q=80"
            alt="Niños jugando"
            class="rounded-lg shadow-2xl"
          />
          <div class="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
            <p class="text-pink-500 font-semibold">+25 años de experiencia</p>
          </div>
        </div>
      </div>
    </Section>

    <!-- Donation Cards Section -->
    <Section gradient="from-pink-50 to-white">
      <div class="max-w-4xl mx-auto">
        <SectionHeader
          :icon="Heart"
          title="Apoya Nuestra Causa"
          subtitle="Tu donación hace la diferencia en la vida de nuestros niños y adolescentes"
        />
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Card 1: $1,000 -->
          <div class="bg-white/80 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all">
            <div class="text-center mb-4">
              <div class="bg-pink-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Coffee class="w-8 h-8 text-pink-500" />
              </div>
              <h3 class="text-2xl font-bold text-gray-800">$1,000</h3>
              <p class="text-gray-600 mt-2">Aporte Mensual</p>
            </div>
            <ul class="space-y-3 mb-6">
              <!--<li class="flex items-center space-x-2">
                <CheckCircle class="w-5 h-5 text-pink-500" />
                <span class="text-gray-600">Ayuda con materiales escolares</span>
              </li>-->
            </ul>
            <NuxtLink 
              to="/apoyanos"
              class="block text-center bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
            >
              Donar $1,000
            </NuxtLink>
          </div>

          <!-- Card 2: $5,000 -->
          <div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all transform scale-105">
            <div class="absolute -top-3 right-4">
              <span class="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm py-1 px-3 rounded-full">
                Más Popular
              </span>
            </div>
            <div class="text-center mb-4">
              <div class="bg-pink-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart class="w-8 h-8 text-pink-500" />
              </div>
              <h3 class="text-2xl font-bold text-gray-800">$5,000</h3>
              <p class="text-gray-600 mt-2">Aporte Mensual</p>
            </div>
            <ul class="space-y-3 mb-6">
            </ul>
            <NuxtLink 
              to="/apoyanos"
              class="block text-center bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
            >
              Donar $5,000
            </NuxtLink>
          </div>

          <!-- Card 3: $10,000 -->
          <div class="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all">
            <div class="text-center mb-4">
              <div class="bg-pink-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star class="w-8 h-8 text-pink-500" />
              </div>
              <h3 class="text-2xl font-bold text-gray-800">$10,000</h3>
              <p class="text-gray-600 mt-2">Aporte Mensual</p>
            </div>
            <ul class="space-y-3 mb-6">
            </ul>
            <NuxtLink 
              to="/apoyanos"
              class="block text-center bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
            >
              Donar $10,000
            </NuxtLink>
          </div>
        </div>
      </div>
    </Section>

    <!-- Fundación Section -->
    <Section gradient="from-pink-50 to-purple-50">
      <div class="max-w-4xl mx-auto">
        <SectionHeader
          :icon="History"
          title="Fundación de la Corporación"
          subtitle="Nuestra historia comenzó con un sueño de protección y esperanza"
        />
        
        <div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <p class="text-gray-700 leading-relaxed mb-6">
            En el año 1995, el vicepresidente de la "Corporación de Menores de la Calle Ahora", don
            Dirk Bartelsman, consigue fondos de una institución benéfica en Suiza, para financiar la
            construcción de un nuevo hogar en terreno adquirido por la Corporación en la comuna de Máfil.
            Don Dirk dedicó todo su esfuerzo en sacar adelante esta obra, la cual finalizó a fines del año 1997.
            Por lo tanto, en honor a sus fundadores se otorga el nombre de "Casa Dirk Bartelsman".
          </p>
          <div class="flex justify-center">
            <NuxtLink 
              to="/historia"
              class="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              <BookOpen class="w-5 h-5" />
              <span>Ver Historia Completa</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </Section>

    <!-- Directorio Section -->
    <Section gradient="from-purple-50 to-white">
      <div class="max-w-4xl mx-auto">
        <SectionHeader
          :icon="Users"
          title="Directorio Actual"
          subtitle="Nuestro equipo directivo comprometido con la misión de la Corporación"
        />
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Presidente -->
          <DirectoryCard
            name="Luis Ricardo Valverde Casanova"
            position="Presidente"
            period="R.U.N: 6.372.563-3"
          />
          
          <!-- Vice-Presidente -->
          <DirectoryCard
            name="Claudia Giubergia Veloso"
            position="Vice-Presidente"
            period="R.U.N: 12.383.683-9"
          />
          
          <!-- Secretario -->
          <DirectoryCard
            name="Claudio Andrés Carrasco Walker"
            position="Secretario"
            period="R.U.N: 8.672.893-1"
          />
          
          <!-- Tesorera -->
          <DirectoryCard
            name="Betty Selman Barrientos"
            position="Tesorera"
            period="R.U.N: 15.381.039-7"
          />
          
          <!-- Director -->
          <DirectoryCard
            name="Nelson Mendoza Jara"
            position="Director"
            period="R.U.N: 8.754.574-1"
          />
          
          <!-- Directora -->
          <DirectoryCard
            name="Anna Bonan"
            position="Directora"
            period="R.U.N: 27.439.385-8"
          />
          
          <!-- Directora -->
          <DirectoryCard
            name="Carla Romeny Kunstmann"
            position="Directora"
            period="R.U.N: 14.417.692-8"
          />
        </div>
      </div>
    </Section>

    <!-- Proyectos en Ejecución Section -->
    <Section gradient="from-purple-50 to-white">
      <div class="max-w-4xl mx-auto">
        <SectionHeader
          :icon="Rocket"
          title="Proyectos en Ejecución"
          subtitle="Conoce los proyectos actuales que llevamos a cabo para cumplir nuestra misión"
        />
        
        <ProjectSlider :projects="currentProjects" type="current" />
      </div>
    </Section>

    <!-- Proyectos Ejecutados Section -->
    <Section gradient="from-white to-pink-50">
      <div class="max-w-4xl mx-auto">
        <SectionHeader
          :icon="CheckCircle"
          title="Proyectos Ejecutados"
          subtitle="Nuestra trayectoria y experiencia en el cuidado de la niñez"
        />
        
        <ProjectSlider :projects="completedProjects" type="completed" />
      </div>
    </Section>

    <!-- Proceso de Capacitación Section -->
    <Section gradient="from-pink-50 to-purple-50">
      <div class="max-w-4xl mx-auto">
        <SectionHeader
          :icon="GraduationCap"
          title="Proceso de Capacitación"
          subtitle="Formación continua para nuestro equipo"
        />
        
        <!-- Objetivo General -->
        <div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg mb-8">
          <h3 class="text-2xl font-semibold text-pink-600 mb-4">Objetivo General</h3>
          <p class="text-gray-700 leading-relaxed">
            Elaborar un Plan Anual de Capacitación, dirigido a quienes se desempeñen en Corporación Ahora, 
            considerando un óptimo ejercicio de las competencias propias en trabajo con niños y adolescentes. 
            Por otro lado permitirá subsanar las deficiencias detectadas en las evaluaciones de desempeño.
          </p>
        </div>

        <!-- Objetivos Específicos -->
        <div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg mb-8">
          <h3 class="text-2xl font-semibold text-pink-600 mb-6">Objetivos Específicos</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              v-for="(objective, index) in specificObjectives"
              :key="index"
              :title="objective.title"
              :description="objective.description"
              :icon="objective.icon"
              gradient="from-pink-50 to-pink-100"
            />
          </div>
        </div>

        <!-- Aplicación y Metas -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Aplicación -->
          <div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <div class="flex items-center space-x-3 mb-4">
              <Users class="w-8 h-8 text-pink-500" />
              <h3 class="text-2xl font-semibold text-gray-800">Aplicación</h3>
            </div>
            <p class="text-gray-700 leading-relaxed">
              El Plan de Capacitación es aplicable a todo el personal en temáticas que afecten a los niños y 
              adolescentes, incluyendo:
            </p>
            <ul class="mt-4 space-y-2">
              <li v-for="(role, index) in roles" :key="index" class="flex items-center space-x-2">
                <CheckCircle class="w-5 h-5 text-pink-500 flex-shrink-0" />
                <span class="text-gray-700">{{ role }}</span>
              </li>
            </ul>
            <p class="text-gray-700 leading-relaxed mt-4">
              Se aplicará una diferenciación según perfil y vínculos contractuales. La corporación se compromete 
              a la realización de capacitación semestral.
            </p>
          </div>

          <!-- Metas -->
          <div class="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <div class="flex items-center space-x-3 mb-4">
              <Target class="w-8 h-8 text-pink-500" />
              <h3 class="text-2xl font-semibold text-gray-800">Metas</h3>
            </div>
            <p class="text-gray-700 leading-relaxed">
              Capacitar al 100% de los funcionarios que se desempeñen en Corporación Ahora, concibiendo la 
              capacitación como una herramienta para mejorar las atenciones e intervenciones de niños y 
              adolescentes que han sido vulnerados en sus derechos fundamentales.
            </p>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<script setup lang="ts">
import { History, Rocket, BookOpen, Users, CheckCircle, GraduationCap, Target, 
         BookOpen as Book, Heart, Handshake, Brain, Users as Group,
         Coffee, Star } from 'lucide-vue-next'

const currentProjects = [
  {
    title: 'Residencia Transitoria para Niños y Adolescentes',
    period: 'Octubre 2021 - Abril 2023',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800',
    population: 'Usuarios de sexo masculino, entre 6 y 17 años de edad, a quienes se les brindará estándares de calidad que contribuyan a su desarrollo integral.',
    generalObjective: 'Contribuir a la restitución de derechos de niños y adolescentes gravemente vulnerados, mediante una intervención residencial transitoria.',
    specificObjectives: [
      'Asegurar calidad de vida y bienestar integral.',
      'Realizar acciones para la re-significación de experiencias.',
      'Desarrollar intervenciones con las familias.',
      'Preparar para la vida independiente.'
    ],
    stats: [
      { value: '21', label: 'Niños actuales' },
      { value: '18', label: 'Meses' },
      { value: '6-17', label: 'Edad' },
      { value: '100%', label: 'Compromiso' }
    ]
  },
  {
    title: 'Programa de Apoyo Educativo',
    period: 'Enero 2023 - Diciembre 2023',
    image: 'https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?auto=format&fit=crop&w=800',
    population: 'Niños y adolescentes en edad escolar que requieren apoyo académico especializado.',
    generalObjective: 'Fortalecer el desarrollo educativo y asegurar la continuidad escolar de nuestros residentes.',
    specificObjectives: [
      'Proporcionar apoyo académico personalizado',
      'Desarrollar habilidades de estudio',
      'Coordinar con instituciones educativas',
      'Monitorear el progreso académico'
    ],
    stats: [
      { value: '100%', label: 'Asistencia' },
      { value: '15', label: 'Tutores' },
      { value: '90%', label: 'Aprobación' },
      { value: '24/7', label: 'Soporte' }
    ]
  }
]

const completedProjects = [
  {
    title: 'Modalidad Residencial de Protección Simple',
    content: 'Proyecto ejecutado en la ciudad de Valdivia como colaborador acreditado, enfocado en brindar protección y cuidado integral a niños y adolescentes.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800',
    date: '2005 - 2011'
  },
  {
    title: 'Proyecto REM-PER',
    content: 'Proyecto para mayores REM con programa adosado de Protección en Intervención Especializada Modalidad PER, ejecutado en la comuna de Máfil.',
    image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=800',
    date: '2011 - 2021'
  }
]

const specificObjectives = [
  {
    title: 'Orientaciones Conceptuales',
    description: 'Establecer las orientaciones conceptuales, pedagógicas y temáticas de contingencias que afecten a niños y adolescentes.',
    icon: Book
  },
  {
    title: 'Desarrollo de Habilidades',
    description: 'Dotar a los funcionarios de los conocimientos y habilidades necesarios para desempeñarse con eficiencia y eficacia.',
    icon: Brain
  },
  {
    title: 'Compromiso Institucional',
    description: 'Elevar el nivel de compromiso de los funcionarios en los proyectos, procesos y procedimientos de la institución.',
    icon: Heart
  },
  {
    title: 'Fortalecimiento Profesional',
    description: 'Fortalecer el recurso humano profesional en áreas sociales y de intervención en infancia vulnerada en sus derechos.',
    icon: Group
  },
  {
    title: 'Vínculos Terapéuticos',
    description: 'Generar vínculos terapéuticos con las familias de los niños y adolescentes.',
    icon: Handshake
  },
  {
    title: 'Alianzas Familiares',
    description: 'Fortalecer alianzas terapéuticas con las familias en post del trabajo en habilidades parentales.',
    icon: Users
  }
]

const roles = [
  'Profesionales',
  'Técnicos profesionales',
  'Educadores de trato directo',
  'Manipuladores de alimento',
  'Auxiliar de aseo'
]
</script>