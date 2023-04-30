<script setup lang="ts">
import { computed, type SelectHTMLAttributes } from 'vue'

interface Props extends SelectHTMLAttributes {
  modelValue: unknown
  options: {
    value: string
    label: string
  }[]
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
const selectProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { modelValue, error, label, options, ...rest } = props
  return rest
})
const label = computed(() => {
  return props.label.toLowerCase()
})
</script>

<template>
  <div class="input-box">
    <label :for="label">{{ props.label }}</label>
    <select :id="label" class="n-selectbox" v-bind="selectProps" v-model="value">
      <template v-for="option in props.options" :key="option.value">
        <option :value="option.value">{{ option.label }}</option>
      </template>
    </select>
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
.input-box .n-selectbox {
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
.input-box .n-selectbox:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgb(33, 150, 243) inset;
}
</style>
