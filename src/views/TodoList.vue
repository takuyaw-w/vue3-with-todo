<script setup lang="ts"></script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/todo/create">Todoを追加する</router-link>
      </li>
    </ul>
  </nav>
  <suspense>
    <template #fallback>
      <p>読み込み中...</p>
    </template>
    <template #default>
      <n-todo-items />
    </template>
  </suspense>
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
</style>
