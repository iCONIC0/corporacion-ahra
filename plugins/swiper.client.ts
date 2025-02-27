import { defineNuxtPlugin } from '#app'
import { register } from 'swiper/element/bundle'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(register)
})