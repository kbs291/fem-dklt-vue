<template>
  <section class="container">
    <h2>Overview - Today</h2>

    <div class="cards">
      <Overview
        v-for="(overview, index) in getOverviews"
        :key="index"
        v-bind="overview" />
    </div>
  </section>
</template>

<script setup>
  import Overview from './card/Overview.vue'
  import { useStore } from 'vuex'
  import { computed } from 'vue'

  const store = useStore()
  const getOverviews = computed(() => store.getters.getOverviews)
</script>

<style lang=""></style>
