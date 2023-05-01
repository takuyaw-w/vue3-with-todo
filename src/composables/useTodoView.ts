import { inject } from 'vue'
import { todoStoreKey } from '@/store/todoStore'
import type { Status } from '@/store/types/todo'
import { useRouter } from 'vue-router'

export default function useTodoView() {
  const todoStore = inject(todoStoreKey)
  if (!todoStore) {
    throw new Error('useCreateTodo must be used after useTodoStore')
  }

  const router = useRouter()

  const editTodo = (id: number) => {
    router.push(`/todo/edit/${id}`)
  }

  const deleteTodo = (id: number) => {
    const result = confirm(`タスク: ${id}を削除しますか`)
    if (result) {
      todoStore.removeTodo(id)
    }
  }
  const getColor = (status: Status) => {
    switch (status) {
      case 'Todo':
        return '#f0ad4e'
      case 'Doing':
        return '#5bc0de'
      case 'Done':
        return '#5cb85c'
      default:
        return '#ccc'
    }
  }

  return {
    deleteTodo,
    editTodo,
    getColor,
    fetchTodos: todoStore.fetchTodos
  }
}
