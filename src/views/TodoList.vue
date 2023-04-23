<script setup lang="ts">
import { inject } from 'vue'
import { todoStoreKey } from '@/store/todoStore'

const todoStore = inject(todoStoreKey)
if (!todoStore) {
  throw new Error('todoStoreKey is not provided')
}

/**
 * 頭文字を小文字に変換する
 */
const toLowerFirst = (str: string) => {
  return str.charAt(0).toLowerCase() + str.slice(1)
}

function deleteTodo(id: number) {
  const result = confirm('削除しますか？')
  if (result) {
    todoStore?.removeTodo(id)
  }
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
  <ul v-if="todoStore.state.todos.length !== 0">
    <li class="todos" v-for="todo in todoStore.state.todos" :key="todo.id">
      <div class="todo_item">
        <div class="todo_title">
          <h2>{{ todo.title }}</h2>
          <span :class="`todo_status ${toLowerFirst(todo.status)}`">{{ todo.status }}</span>
        </div>
        <div class="todo_content">
          <p>{{ todo.description }}</p>
        </div>
        <div class="todo_action">
          <router-link class="btn btn--edit" :to="`/todo/edit/${todo.id}`">編集する</router-link>
          <button class="btn btn--delete" @click="deleteTodo(todo.id)">削除する</button>
        </div>
      </div>
    </li>
  </ul>
  <div v-else>
    <p>TODOはありません</p>
  </div>
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
.todo_title > h2 {
  max-width: 800px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.todo_status {
  background-color: #ccc;
  padding: 0.4rem 0.6rem;
  border-radius: 5px;
  min-width: 80px;
  text-align: center;
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
  white-space: pre-wrap;
}
.todo_action {
  padding: 0.2rem 1rem;
  border-top: #ccc 1px solid;
  display: flex;
  justify-content: flex-end;
}

.btn {
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  text-decoration: none;
}
.btn.btn--edit {
  margin-right: 10px;
  background-color: #5b7ede;
  color: #fff;
}
.btn.btn--delete {
  background-color: #d9534f;
  color: #fff;
}
</style>
