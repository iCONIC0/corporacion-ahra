<template>
  <div class="min-h-screen flex flex-col">
    <div class="fixed w-full z-50">
      <TopHeader />
      <Header />
    </div>
    <main class="flex-grow pt-32">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import TopHeader from '@/components/TopHeader.vue'
import Header from '~/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>