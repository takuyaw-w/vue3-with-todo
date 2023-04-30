<script setup lang="ts">
import { computed, type ButtonHTMLAttributes } from 'vue'

interface Props extends ButtonHTMLAttributes {
  disabled?: boolean | 'true' | 'false'
  color: `#${string}`
}
const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  disabled: false,
  color: '#ccc'
})

const isDisabled = computed(() => {
  return props.disabled === true || props.disabled === 'true'
})
</script>

<template>
  <button :class="['n-btn', 'n-btn-color', { 'n-btn--disabled': isDisabled }]" v-bind="props">
    <slot />
  </button>
</template>

<style scoped>
.n-btn {
  padding: 0.5em 1em;
  border-radius: 4px;
  border: none;
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
.n-btn-color {
  background-color: v-bind('props.color');
}
</style>
