<script setup lang="ts">
import { computed, type InputHTMLAttributes } from 'vue'

interface Props extends InputHTMLAttributes {
  modelValue: unknown
  error?: string
  label: string
}

type Emits = {
  (e: 'update:modelValue', value: unknown): void
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text'
})
const emits = defineEmits<Emits>()

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  }
})
const inputProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { modelValue, error, label, ...rest } = props
  return rest
})
const label = computed(() => {
  return props.label.toLowerCase()
})
</script>

<template>
  <div class="input-box">
    <label :for="label">{{ props.label }}</label>
    <input :id="label" class="n-text-input" v-bind="inputProps" v-model="value" />
    <span class="error" v-if="props.error">{{ props.error }}</span>
  </div>
</template>

<style scoped>
.input-box {
  display: flex;
  flex-direction: column;
}
.input-box label {
  font-size: 16px;
}
.input-box .error {
  color: red;
  font-size: 12px;
}
.input-box .n-text-input {
  height: 2.4em;
  width: 100%;
  padding: 0 10px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 0 1px #ccc inset;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.input-box .n-text-input:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgb(33, 150, 243) inset;
}
</style>
