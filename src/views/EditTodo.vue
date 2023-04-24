<script setup lang="ts">
import { useRoute } from 'vue-router'
import useEditTodo from '@/composables/useEditTodo'
const route = useRoute()
const { title, description, status, errors, onSubmit } = useEditTodo(Number(route.params.id))
</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">戻る</router-link>
      </li>
    </ul>
  </nav>
  <form @submit.prevent="onSubmit">
    <div class="input-box">
      <label for="title">Title</label>
      <input type="text" id="title" v-model="title" />
      <span class="error" v-if="errors.title">{{ errors.title }}</span>
    </div>
    <div class="input-box">
      <label for="description">Description</label>
      <textarea id="description" v-model="description" rows="5"></textarea>
      <span class="error" v-if="errors.description">{{ errors.description }}</span>
    </div>
    <div class="input-box">
      <label for="status">status</label>
      <select v-model="status">
        <option value="Todo">Todo</option>
        <option value="Doing">Doing</option>
        <option value="Done">Done</option>
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
