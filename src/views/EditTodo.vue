<script setup lang="ts">
import { computed, onErrorCaptured, ref } from 'vue'
const error = ref(false)
onErrorCaptured(() => {
  error.value = true
  return false
})
const label = computed(() => {
  return error.value ? 'TOPへ戻る' : '戻る'
})
</script>

<template>
  <n-nav to="/" :label="label" />
  <div v-if="error">
    <p>存在しないTodoです。</p>
  </div>
  <Suspense v-else>
    <template #default>
      <n-edit-input-form />
    </template>
  </Suspense>
</template>
