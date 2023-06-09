import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import TodoList from '@/views/TodoList.vue'
import CreateTodo from '@/views/CreateTodo.vue'
import EditTodo from '@/views/EditTodo.vue'
import NotFoundError from '@/views/Errors/NotFoundError.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/todo/create',
    name: 'CreateTodo',
    component: CreateTodo
  },
  {
    path: '/todo/edit/:id',
    name: 'EditTodo',
    component: EditTodo
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFoundError',
    component: NotFoundError
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
