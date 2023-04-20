import { reactive, readonly, type InjectionKey } from 'vue'
import type { TodoState, AddParams, Todo, TodoStore } from './types/todo'

const todoState = reactive<TodoState>({
  todos: [
    {
      id: 1,
      title: 'Todo 1',
      description: 'Todo 1 description',
      status: 'todo'
    },
    {
      id: 2,
      title: 'Todo 2',
      description: 'Todo 2 description',
      status: 'doing'
    },
    {
      id: 3,
      title: 'Todo 3',
      description: 'Todo 3 description',
      status: 'done'
    }
  ]
})

function getTodo(id: number): Todo {
  const todo = todoState.todos.find((todo) => todo.id === id)
  if (!todo) {
    throw new Error('Todo not found')
  }
  return todo
}

function addTodo(params: AddParams) {
  const newTodo = {
    id: todoState.todos.length + 1,
    ...params,
    status: 'todo'
  } as Todo
  todoState.todos.push(newTodo)
}

function removeTodo(id: number) {
  const todoIndex = todoState.todos.findIndex((todo) => todo.id === id)
  todoState.todos.splice(todoIndex, 1)
}

function updateTodo(id: number, todo: Todo) {
  const todoIndex = todoState.todos.findIndex((todo) => todo.id === id)
  todoState.todos[todoIndex] = todo
}

const todoStore: TodoStore = {
  state: readonly(todoState),
  getTodo,
  addTodo,
  removeTodo,
  updateTodo
}

export default todoStore
export const todoStoreKey: InjectionKey<TodoStore> = Symbol('todoStore')
