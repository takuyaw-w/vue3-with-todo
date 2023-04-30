<script setup lang="ts">
import { useRoute } from 'vue-router'
import useEditTodo from '@/composables/useEditTodo'
const route = useRoute()
const { title, description, status, errors, onSubmit, options } = useEditTodo(
  Number(route.params.id)
)
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
      <n-selectbox label="Status" :options="options" v-model="status" :error="errors.status" />
    </div>
    <div class="row">
      <n-btn color="#2196f3" type="submit">Todoを修正する</n-btn>
    </div>
  </form>
</template>

<style>
.row + .row {
  margin-top: 1rem;
}
</style>
