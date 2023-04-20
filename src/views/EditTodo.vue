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
      <label for="content">Content</label>
      <input type="text" id="content" />
    </div>
    <div>
      <label for="status">status</label>
      <select>
        <option>todo</option>
        <option>doing</option>
        <option>done</option>
      </select>
    </div>
    <div>
      <button type="submit">Todoを修正する</button>
    </div>
  </form>
</template>
