<script setup lang="ts">
import { computed, type TextareaHTMLAttributes } from 'vue'

export interface Props extends TextareaHTMLAttributes {
  modelValue: unknown
  error?: string
  label: string
}

type Emits = {
  (e: 'update:modelValue', value: unknown): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  }
})
const textareaProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { modelValue, error, label, ...rest } = props
  return { ...rest }
})
const label = computed(() => {
  return props.label.toLowerCase()
})
</script>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<template>
  <div class="input-box">
    <label :for="label">Description</label>
    <textarea
      :id="label"
      class="n-textarea"
      v-bind="{ ...textareaProps, ...$attrs }"
      v-model="value"
    />
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
.input-box .n-textarea {
  display: block;
  width: 100%;
  height: 100%;
  padding: 10px 10px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 0 1px #ccc inset;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  resize: vertical;
}

.input-box .n-textarea:focus {
  outline: 0;
  box-shadow: 0 0 0 2px rgb(33, 150, 243) inset;
}
</style>
