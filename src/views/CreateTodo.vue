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
    <div class="input-box">
      <label for="title">Title</label>
      <input type="text" id="title" v-model="newTodo.title" />
    </div>
    <div class="input-box">
      <label for="description">Description</label>
      <textarea id="description" v-model="newTodo.description"></textarea>
    </div>
    <div class="action">
      <button type="submit">Todoを追加する</button>
    </div>
  </form>
</template>

<style scoped>
ul {
  list-style: none;
}

nav > ul {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
}
input,
button,
textarea {
  border: 1px solid #ccc;
}
input {
  padding: 5px;
}
textarea {
  padding: 5px;
}
.input-box {
  display: flex;
}
.input-box label {
  flex-basis: 150px;
}
.input-box input,
.input-box textarea {
  flex-grow: 1;
}
.input-box + .input-box {
  margin-top: 1rem;
}
.action {
  margin-top: 1rem;
}
.action button {
  padding: 15px 10px;
  background-color: ;
  border-radius: 5px;
  width: 100%;
  background-color: indigo;
  color: #fff;
}
</style>
