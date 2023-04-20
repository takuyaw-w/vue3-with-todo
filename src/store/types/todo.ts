import type { DeepReadonly } from 'vue'

export type Status = 'todo' | 'doing' | 'done'

export type Todo = {
  id: number
  title: string
  description: string
  status: Status
}

export type TodoState = {
  todos: Todo[]
}

export type AddParams = Pick<Todo, 'title' | 'description'>

export type TodoStore = {
  state: DeepReadonly<TodoState>
  getTodo: (id: number) => Todo
  addTodo: (params: AddParams) => void
  removeTodo: (id: number) => void
  updateTodo: (id: number, todo: Todo) => void
}
