<script setup lang="ts">
import useCreateTodo from '@/composables/useCreateTodo'

const { title, description, errors, onSubmit } = useCreateTodo()
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="row">
      <n-text-input label="Title" v-model="title" :error="errors.title" />
    </div>
    <div class="row">
      <n-textarea label="Description" v-model="description" :error="errors.description" rows="7" />
    </div>
    <div class="row">
      <n-btn type="submit">Todoを追加する</n-btn>
    </div>
  </form>
</template>

<style>
.row + .row {
  margin-top: 1rem;
}
</style>
