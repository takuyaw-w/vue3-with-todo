import { createApp, provide } from 'vue'
import App from './App.vue'
import router from './router'
import todoStore, { todoStoreKey } from '@/store/todoStore'
import './assets/main.css'
import atomsComponents from '@/components/atoms'
import orgnismsComponents from '@/components/orgnisms'
const components = {
  ...atomsComponents,
  ...orgnismsComponents
}

const app = createApp({
  ...App,
  setup() {
    provide(todoStoreKey, todoStore)
  }
})

for (const [name, component] of Object.entries(components)) {
  app.component(name, component)
}

app.use(router).mount('#app')
