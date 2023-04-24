import { todoStoreKey } from '@/store/todoStore'
import { inject, reactive } from 'vue'
import { useRouter } from 'vue-router'

export default function useCreateTodo(id: number) {
  const todoStore = inject(todoStoreKey)
  if (todoStore === undefined) {
    throw new Error('todoStoreKey is not provided')
  }
  const router = useRouter()
  const _todo = todoStore.getTodo(id)
  const todo = reactive({
    id: _todo.id,
    title: _todo.title,
    description: _todo.description,
    status: _todo.status
  })

  const onSubmit = () => {
    todoStore.updateTodo(id, todo)
    router.push('/')
  }

  return {
    todo,
    onSubmit
  }
}
