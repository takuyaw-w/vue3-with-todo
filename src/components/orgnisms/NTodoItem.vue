<script setup lang="ts">
import type { Status } from '@/store/types/todo'
import useTodoView from '@/composables/useTodoView'

export interface Todo {
  id: number
  title: string
  description: string
  status: Status
}

const props = defineProps<Todo>()
const { deleteTodo, editTodo, getColor } = useTodoView()
</script>

<template>
  <div class="n-todo-item">
    <div class="n-todo-item--title">
      <h2>{{ props.title }}</h2>
      <n-badge :large="true" :label="props.status" :color="`${getColor(props.status)}`" />
    </div>
    <div class="n-todo-item--description">
      <p>{{ props.description }}</p>
    </div>
    <div class="n-todo-item--actions">
      <n-btn color="#5b7ede" @click="editTodo(props.id)">編集する</n-btn>
      <n-btn color="#d9534f" @click="deleteTodo(props.id)">削除する</n-btn>
    </div>
  </div>
</template>

<style scoped>
.n-todo-item {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.n-todo-item--title {
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;
  align-items: center;
}
.n-todo-item--title > h2 {
  max-width: 800px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.n-todo-item--description {
  padding: 1rem;
  white-space: pre-wrap;
  word-break: break-all;
}
.n-todo-item--actions {
  border-top: 1px solid #ccc;
  display: grid;
  grid-template-columns: repeat(2, 7rem);
  justify-content: right;
  gap: 1rem;
  padding: 1rem;
}
</style>
