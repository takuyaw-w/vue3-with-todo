import { inject } from 'vue'
import { todoStoreKey } from '@/store/todoStore'
import * as z from 'zod'
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { useRouter } from 'vue-router'

const validationSchema = z.object({
  title: z.string().nonempty({ message: '必須入力です。' }),
  description: z.string().nonempty({ message: '必須入力です。' })
})

export default function useCreateTodo() {
  const todoStore = inject(todoStoreKey)
  if (!todoStore) {
    throw new Error('useCreateTodo must be used after useTodoStore')
  }
  const router = useRouter()

  const { handleSubmit, errors } = useForm({
    validationSchema: toTypedSchema(validationSchema),
    initialValues: {
      title: '',
      description: ''
    }
  })
  const { value: title } = useField<string>('title')
  const { value: description } = useField<string>('description')

  const onSubmit = handleSubmit((values) => {
    todoStore.addTodo({
      title: values.title.trim(),
      description: values.description.trim()
    })
    router.push('/')
  })

  return {
    title,
    description,
    errors,
    onSubmit
  }
}
