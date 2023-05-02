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
    <p>TODOはありません。</p>
  </div>
</template>

<style scoped>
.n-todo-items {
  list-style-type: none;
  display: grid;
  gap: 1rem;
}
.filters {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
}
</style>
