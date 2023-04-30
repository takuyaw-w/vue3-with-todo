<script setup lang="ts">
interface Props {
  to: '/todo/create' | `/todo/edit/${number}` | '/'
  label: string
}
const props = defineProps<Props>()
</script>

<template>
  <nav class="n-nav">
    <ul>
      <li>
        <router-link :to="props.to">{{ props.label }}</router-link>
      </li>
    </ul>
  </nav>
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
