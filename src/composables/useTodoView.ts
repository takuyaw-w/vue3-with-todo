import { inject } from 'vue'
import { todoStoreKey } from '@/store/todoStore'

export default function useTodoView() {
  const todoStore = inject(todoStoreKey)
  if (!todoStore) {
    throw new Error('useCreateTodo must be used after useTodoStore')
  }

  const deleteTodo = (id: number) => {
    const result = confirm(`タスク: ${id}を削除しますか`)
    if (result) {
      todoStore.removeTodo(id)
    }
  }

  return {
    state: todoStore.state,
    deleteTodo,
    fetchTodos: todoStore.fetchTodos
  }
}
