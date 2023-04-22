<script setup lang="ts">
import { todoStoreKey } from '@/store/todoStore'
import { inject, reactive } from 'vue'
import { useRoute } from 'vue-router'

const todoStore = inject(todoStoreKey)
if (todoStore === undefined) {
  throw new Error('todoStoreKey is not provided')
}

const route = useRoute()
const id = Number(route.params.id)
const _todo = todoStore.getTodo(id)
const todo = reactive({
  title: _todo.title,
  description: _todo.description,
  status: _todo.status
})
</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">戻る</router-link>
      </li>
    </ul>
  </nav>
  <form @submit.prevent="">
    <div class="input-box">
      <label for="title">Title</label>
      <input type="text" id="title" v-model="todo.title" />
    </div>
    <div class="input-box">
      <label for="description">Description</label>
      <textarea id="description" v-model="todo.description" rows="5"></textarea>
    </div>
    <div class="input-box">
      <label for="status">status</label>
      <select v-model="todo.status">
        <option value="todo">todo</option>
        <option value="doing">doing</option>
        <option value="done">done</option>
      </select>
    </div>
    <div class="action">
      <button type="submit">Todoを修正する</button>
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
textarea,
select {
  border: 1px solid #ccc;
  border-radius: 5px;
}
input {
  padding: 5px;
}
textarea {
  padding: 5px;
}
select {
  padding: 5px;
}
.input-box {
  display: flex;
  flex-direction: column;
}
.input-box input,
.input-box textarea,
.input-box select {
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
.error {
  color: red;
}
</style>
