<template>
  <div class="card card-grid">
    <div class="card__subtitle">{{ desc }}</div>
    <img
      :src="require(`@/assets/icon-${social}.svg`)"
      :alt="social" />
    <div class="card__count card__count--small">{{ count }}</div>
    <div :class="`card__change card__change--${update.stat}`">
      {{ update.percentage }}
    </div>
  </div>
</template>

<script setup>
  const props = defineProps(['social', 'count', 'desc', 'update'])
</script>

<style lang=""></style>
