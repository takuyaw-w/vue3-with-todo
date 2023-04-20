<script setup lang="ts">
import { inject } from 'vue'
import { todoStoreKey } from '@/store/todoStore'

const todoStore = inject(todoStoreKey)
if (!todoStore) {
  throw new Error('todoStoreKey is not provided')
}
</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/todo/create">Todoを追加する</router-link>
      </li>
    </ul>
  </nav>
  <ul>
    <li class="todos" v-for="todo in todoStore.state.todos" :key="todo.id">
      <div class="todo_item">
        <div class="todo_title">
          <h2>{{ todo.title }}</h2>
          <span :class="`todo_status ${todo.status}`">{{ todo.status }}</span>
        </div>
        <div class="todo_content">
          <p>{{ todo.description }}</p>
        </div>
        <div class="todo_action">
          <router-link :to="`/todo/edit/${todo.id}`">編集する</router-link>
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped>
/** リストのマーカーを消す */
ul {
  list-style: none;
}

nav > ul {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
}
.todos {
  margin-bottom: 1rem;
}
.todo_item {
  border: 1px solid #ccc;
  border-radius: 5px;
}
.todo_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  padding: 1rem;
  margin-bottom: 10px;
  border-bottom: #ccc 1px solid;
}
.todo_status {
  background-color: #ccc;
  padding: 0.4rem 0.6rem;
  border-radius: 5px;
}
.todo_status.todo {
  background-color: #f0ad4e;
}
.todo_status.doing {
  background-color: #5bc0de;
}
.todo_status.done {
  background-color: #5cb85c;
}
.todo_content {
  padding: 0 1rem;
  margin-bottom: 10px;
}
.todo_action {
  padding: 0.2rem 1rem;
  border-top: #ccc 1px solid;
  text-align: right;
}
</style>
