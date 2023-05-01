<script setup lang="ts">
import NTodoItem from './NTodoItem.vue'
import useTodoView from '@/composables/useTodoView'
import type { Status } from '@/store/types/todo'
import { computed, ref } from 'vue'

type Filter = Status | 'All'

const { fetchTodos } = useTodoView()
const state = await fetchTodos()
const filters = ref<Filter>('Todo')
const changeFilter = (str: Filter) => {
  filters.value = str
}
const filterdTodos = computed(() => {
  switch (filters.value) {
    case 'All':
      return state.todos
    case 'Todo':
      return state.todos.filter((todo) => todo.status === 'Todo')
    case 'Doing':
      return state.todos.filter((todo) => todo.status === 'Doing')
    case 'Done':
      return state.todos.filter((todo) => todo.status === 'Done')
    default:
      return state.todos
  }
})
</script>

<template>
  <div class="filters">
    <n-btn color="#f0ad4e" @click="changeFilter('Todo')">Todo</n-btn>
    <n-btn color="#5bc0de" @click="changeFilter('Doing')">Doing</n-btn>
    <n-btn color="#5cb85c" @click="changeFilter('Done')">Done</n-btn>
    <n-btn color="#6b50ff" @click="changeFilter('All')">All</n-btn>
  </div>
  <ul class="n-todo-items" v-if="filterdTodos.length !== 0">
    <li v-for="todo in filterdTodos" :key="todo.id">
      <n-todo-item v-bind="todo" />
    </li>
  </ul>
  <div v-else>
    <p>{{ filters }}は空です。</p>
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
