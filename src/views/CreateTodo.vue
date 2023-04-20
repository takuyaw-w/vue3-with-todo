<script setup lang="ts"></script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">戻る</router-link>
      </li>
    </ul>
  </nav>
  <form @submit.prevent="">
    <div>
      <label for="title">Title</label>
      <input type="text" id="title" />
    </div>
    <div>
      <label for="description">Description</label>
      <input type="text" id="description" />
    </div>
    <div>
      <button type="submit">Todoを追加する</button>
    </div>
  </form>
</template>
