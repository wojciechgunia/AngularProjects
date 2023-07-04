import { createAction, props } from "@ngrx/store";
import { Todo } from "src/app/shared/interfaces/todo.interface";

// export const addTodo = createAction(
//   '[Todo List] Add Todo', props<{todo: Todo}>()
// )

// export const deleteTodo = createAction(
//   '[Todo List] Delete Todo', props<{id: number}>()
// )

// export const changeTodoStatus = createAction(
//   '[Todo List] Change Status Todo', props<{id: number}>()
// )

export const fetchTodos = createAction(
  '[Todo List] Fetch Todos'
)

export const fetchTodosSuccess = createAction(
  '[Todo List] Fetch Todos Success', props<{todos: Todo[]}>()
)

export const fetchTodosFailed = createAction(
  '[Todo List] Fetch Todos Failed', props<{errorMessage: string}>()
)

export const addTodos = createAction(
  '[Todo List] Add Todo', props<{todo: Omit<Todo,"id">}>()
)

export const addTodosSuccess = createAction(
  '[Todo List] Add Todo Success', props<{todo: Todo}>()
)

export const addTodosFailed = createAction(
  '[Todo List] Add Todo Failed', props<{errorMessage: string}>()
)

export const changeTodos = createAction(
  '[Todo List] Change Todo', props<{id: number, todo: Omit<Todo,"id" | "name">}>()
)

export const changeTodosSuccess = createAction(
  '[Todo List] Change Todo Success', props<{id: number}>()
)

export const changeTodosFailed = createAction(
  '[Todo List] Change Todo Failed', props<{errorMessage: string}>()
)

export const deleteTodos = createAction(
  '[Todo List] Delete Todo', props<{id: number}>()
)

export const deleteTodosSuccess = createAction(
  '[Todo List] Delete Todo Success', props<{id: number}>()
)

export const deleteTodosFailed = createAction(
  '[Todo List] Delete Todo Failed', props<{errorMessage: string}>()
)
