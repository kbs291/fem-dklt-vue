<template>
  <Header />
  <MainContent />
  <Footer />
</template>

<script setup>
  import Header from '@/components/Header.vue'
  import MainContent from '@/components/MainContent.vue'
  import Footer from './components/Footer.vue'
  import { useStore } from 'vuex'
  import { onMounted } from 'vue'

  const store = useStore()

  onMounted(() => {
    store.dispatch('getFigures')
  })
</script>

<style lang="scss">
  //
</style>
