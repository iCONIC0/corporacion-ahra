export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/swiper.css'],
  app: {
    head: {
      title: 'Corporación Ahora',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Corporación de Ayuda al Niño Limitado Ahora - Protegiendo el futuro de nuestra niñez' 
        }
      ]
    }
  },
  compatibilityDate: '2025-02-05'
})