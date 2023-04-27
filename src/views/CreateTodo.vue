<script setup lang="ts"></script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">戻る</router-link>
      </li>
    </ul>
  </nav>
  <n-add-input-form />
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
</style>
