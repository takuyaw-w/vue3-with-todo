<script setup lang="ts">
import { todoStoreKey } from '@/store/todoStore'
import { inject, reactive } from 'vue'
import { useRouter } from 'vue-router'

const todoStore = inject(todoStoreKey)
if (todoStore === undefined) {
  throw new Error('todoStoreKey is not provided')
}
const router = useRouter()
const newTodo = reactive({
  title: '',
  description: ''
})

function addTodo() {
  if (todoStore === undefined) {
    throw new Error('todoStoreKey is not provided')
  }
  todoStore.addTodo({
    title: newTodo.title,
    description: newTodo.description
  })
  router.push('/')
}
</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">戻る</router-link>
      </li>
    </ul>
  </nav>
  <form @submit.prevent="addTodo">
    <div>
      <label for="title">Title</label>
      <input type="text" id="title" v-model="newTodo.title" />
    </div>
    <div>
      <label for="description">Description</label>
      <textarea id="description" v-model="newTodo.description"></textarea>
    </div>
    <div>
      <button type="submit">Todoを追加する</button>
    </div>
  </form>
</template>
