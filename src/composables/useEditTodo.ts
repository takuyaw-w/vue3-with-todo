import { todoStoreKey } from '@/store/todoStore'
import type { Status } from '@/store/types/todo'
import { inject } from 'vue'
import { useRouter } from 'vue-router'
import * as z from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'

const validationSchema = z.object({
  id: z.number(),
  title: z.string().nonempty({ message: '必須入力です。' }),
  description: z.string().nonempty({ message: '必須入力です。' }),
  status: z.union([z.literal('Todo'), z.literal('Doing'), z.literal('Done')])
})

export default function useEditTodo(id: number) {
  const todoStore = inject(todoStoreKey)
  if (todoStore === undefined) {
    throw new Error('todoStoreKey is not provided')
  }
  const router = useRouter()
  const _todo = todoStore.getTodo(id)
  const todo = {
    id: _todo.id,
    title: _todo.title,
    description: _todo.description,
    status: _todo.status
  }

  const { handleSubmit, errors } = useForm({
    validationSchema: toTypedSchema(validationSchema),
    initialValues: todo
  })
  const { value: title } = useField<string>('title')
  const { value: description } = useField<string>('description')
  const { value: status } = useField<Status>('status')
  const onSubmit = handleSubmit((values) => {
    todoStore.updateTodo(id, values)
    router.push('/')
  })

  const options = [
    {
      label: 'Todo',
      value: 'Todo'
    },
    {
      label: 'Doing',
      value: 'Doing'
    },
    {
      label: 'Done',
      value: 'Done'
    }
  ]

  return {
    title,
    description,
    status,
    errors,
    options,
    onSubmit
  }
}
