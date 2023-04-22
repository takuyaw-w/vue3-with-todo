<script setup lang="ts">
import { todoStoreKey } from '@/store/todoStore'
import { inject } from 'vue'
import { useRouter } from 'vue-router'
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const router = useRouter()
const validationSchema = toTypedSchema(
  z.object({
    title: z.string().nonempty({ message: '必須入力です。' }),
    description: z.string().nonempty({ message: '必須入力です。' })
  })
)
const { handleSubmit, errors } = useForm({
  validationSchema,
  initialValues: {
    title: '',
    description: ''
  }
})
const { value: title } = useField<string>('title')
const { value: description } = useField<string>('description')

const todoStore = inject(todoStoreKey)
if (todoStore === undefined) {
  throw new Error('todoStoreKey is not provided')
}

const onSubmit = handleSubmit((values) => {
  todoStore.addTodo({
    title: values.title,
    description: values.description
  })
  router.push('/')
})
</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">戻る</router-link>
      </li>
    </ul>
  </nav>
  <form @submit.prevent="onSubmit">
    <div class="input-box">
      <label for="title">Title</label>
      <input type="text" id="title" v-model="title" />
      <span class="error" v-if="errors.title">{{ errors.title }}</span>
    </div>
    <div class="input-box">
      <label for="description">Description</label>
      <textarea id="description" v-model="description"></textarea>
      <span class="error" v-if="errors.description">{{ errors.description }}</span>
    </div>
    <div class="action">
      <button type="submit">Todoを追加する</button>
    </div>
  </form>
</template>

<style scoped>
ul {
  list-style: none;
}

nav > ul {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
}
input,
button,
textarea {
  border: 1px solid #ccc;
}
input {
  padding: 5px;
}
textarea {
  padding: 5px;
}
.input-box {
  display: flex;
  flex-direction: column;
}
.input-box input,
.input-box textarea {
  flex-grow: 1;
}
.input-box + .input-box {
  margin-top: 1rem;
}
.action {
  margin-top: 1rem;
}
.action button {
  padding: 15px 10px;
  background-color: ;
  border-radius: 5px;
  width: 100%;
  background-color: indigo;
  color: #fff;
}
.error {
  color: red;
}
</style>
