<template>
  <div class="attribution">
    Challenge by
    <a
      href="https://www.frontendmentor.io?ref=challenge"
      target="_blank"
      >Frontend Mentor</a
    >. Coded by <a href="#">{{ author }}</a
    >.
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const author = ref('Kristian Bie Suroysuroy')
</script>

<style lang=""></style>
