<script setup lang="ts"></script>

<template>
  <n-nav to="/todo/create" label="新規作成" />
  <suspense>
    <template #fallback>
      <p>読み込み中...</p>
    </template>
    <template #default>
      <n-todo-items />
    </template>
  </suspense>
</template>
