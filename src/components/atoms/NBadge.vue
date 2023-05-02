<script setup lang="ts">
export interface Props {
  label: string
  color: `#${string}`
  large: boolean
}
const props = withDefaults(defineProps<Props>(), {
  label: 'label',
  color: '#ccc'
})
</script>

<template>
  <span :class="['n-badge', 'n-badge-color', { 'n-badge--large': props.large }]">{{
    props.label
  }}</span>
</template>

<style scoped>
.n-badge {
  display: inline-block;
  padding: 10px 10px;
  text-align: center;
  white-space: nowrap;
  border-radius: 5px;
  min-width: 120px;
  color: #fff;
}
.n-badge-color {
  background-color: v-bind('props.color');
}
.n-badge--large {
  font-size: 24px;
}
</style>
