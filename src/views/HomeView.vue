<script setup lang="ts">
import { ref } from 'vue'

const newTodo = ref('')
const todos = ref([
  { id: 1, text: 'Learn Vue 3' },
  { id: 2, text: 'Learn TypeScript' },
  { id: 3, text: 'Build something awesome' }
])
function addTodo() {
  todos.value.push({
    id: todos.value.length + 1,
    text: newTodo.value
  })
  newTodo.value = ''
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="newTodo" />
    <button type="submit">Add</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
    </li>
  </ul>
</template>
