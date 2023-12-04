<template>
  <fieldset
    class="header__toggle toggle"
    aria-label="theme toggle"
    role="radiogroup">
    <span class="label">{{ theme }} mode</span>
    <div class="toggle__wrapper">
      <input
        v-model="theme"
        type="radio"
        name="theme"
        value="dark"
        id="dark"
        @change="toggleDark()" />
      <input
        v-model="theme"
        type="radio"
        name="theme"
        value="light"
        id="light"
        @change="toggleDark()" />
      <span
        aria-hidden="true"
        class="toggle__background"></span>
      <span
        aria-hidden="true"
        class="toggle__button"></span>
    </div>
  </fieldset>
</template>

<script setup>
  import { ref } from 'vue'
  import { useDark, useToggle } from '@vueuse/core'

  const isDark = useDark({
    selector: 'body',
    attribute: 'class',
    valueDark: 'dark-theme',
    valueLight: 'light-theme',
  })
  let theme = isDark.value ? ref('dark') : ref('light')

  const toggleDark = useToggle(isDark)
</script>

<style lang=""></style>
