import { createSelector } from "@ngrx/store";
import { AppStore } from "src/app/store/app-reducer";
import { TodoListState } from "./todo-list.reducers";

export const selectTodoList = (state: AppStore) => state.todos;

export const selectTodoListTodos = createSelector(
  selectTodoList,
  (state: TodoListState) => state.todos
)

export const selectTodoListTodosState = createSelector(
  selectTodoList,
  (state: TodoListState) => ({todos: state.todos, error: state.errorMessage})
)

export const selectTodoTodoActiveTodos = createSelector(
  selectTodoList,
  (state: TodoListState) => state.todos.filter(todo => todo.isComplete)
)

