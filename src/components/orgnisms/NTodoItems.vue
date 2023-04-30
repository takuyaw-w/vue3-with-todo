<script setup lang="ts">
import NTodoItem from './NTodoItem.vue'
import useTodoView from '@/composables/useTodoView'
const { fetchTodos } = useTodoView()

const state = await fetchTodos()
</script>

<template>
  <ul class="n-todo-items" v-if="state.todos.length !== 0">
    <li v-for="todo in state.todos" :key="todo.id">
      <n-todo-item v-bind="todo" />
    </li>
  </ul>
  <div v-else>
    <p>Todoがありません</p>
  </div>
</template>

<style scoped>
.n-todo-items {
  list-style-type: none;
  display: grid;
  gap: 1rem;
}
</style>
