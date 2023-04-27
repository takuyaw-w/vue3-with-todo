<script setup lang="ts">
import { computed, type ButtonHTMLAttributes } from 'vue'

interface Props extends ButtonHTMLAttributes {
  disabled?: boolean | 'true' | 'false'
}
const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  disabled: false
})

const isDisabled = computed(() => {
  return props.disabled === true || props.disabled === 'true'
})
</script>

<template>
  <button :class="['n-btn', { 'n-btn--disabled': isDisabled }]" v-bind="props">
    <slot />
  </button>
</template>

<style scoped>
.n-btn {
  padding: 0.5em 1em;
  border-radius: 4px;
  border: none;
  background-color: #2196f3;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
}
/** disabled button style */
.n-btn--disabled {
  background-color: #ccc;
  color: #fff;
  cursor: not-allowed;
}
</style>
