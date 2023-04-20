import { createApp, provide } from 'vue'
import App from './App.vue'
import router from './router'
import todoStore, { todoStoreKey } from '@/store/todoStore'
import './assets/main.css'

const app = createApp({
  ...App,
  setup() {
    provide(todoStoreKey, todoStore)
  }
})

app.use(router).mount('#app')
