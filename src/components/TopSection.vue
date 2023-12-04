<template>
  <section class="container">
    <div class="cards">
      <Main
        v-for="(info, index) in getTopInfo"
        :key="index"
        v-bind="info" />
    </div>
  </section>
</template>

<script setup>
  import Main from './card/Main.vue'
  import { useStore } from 'vuex'
  import { computed } from 'vue'

  const store = useStore()
  const getTopInfo = computed(() => store.getters.getTopInfo)
</script>

<style lang=""></style>
