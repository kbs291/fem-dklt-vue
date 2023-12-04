<template>
  <div :class="`card card--${social}`">
    <div class="card__platform">
      <img
        class="card__icon"
        :src="require(`@/assets/icon-${social}.svg`)"
        :alt="social" />
      <div class="card__username">{{ username }}</div>
    </div>
    <div class="card__followers">
      <div class="card__count card__count--big">{{ label.count }}</div>
      <div class="card__label">{{ label.desc }}</div>
    </div>
    <div :class="`card__change card__change--${update.stat}`">
      {{ update.last }}
    </div>
  </div>
</template>

<script setup>
  const props = defineProps(['social', 'img', 'username', 'label', 'update'])
  // export default {
  //   props: ['social', 'img', 'username', 'label', 'update'],
  // }
</script>

<style lang=""></style>
