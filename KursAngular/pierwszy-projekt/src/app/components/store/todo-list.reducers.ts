import { ControlValueAccessor } from '@angular/forms';
import { Action, createReducer, on } from "@ngrx/store";
import { Todo } from "src/app/shared/interfaces/todo.interface";
import * as TodoListActions from "./todo-list.actions"

export interface TodoListState {
  todos: Todo[],
  errorMessage: string | null,
  loading: boolean
}

const initialState: TodoListState = {
  todos: [],
  errorMessage: null,
  loading: false,
};

const _todoListReducer = createReducer(
  initialState,
  // on(TodoListActions.addTodo,
  //   (state, action) => ({
  //     ...state,
  //     todos: state.todos.concat({...action.todo})
  //   })),
  // on(  TodoListActions.deleteTodo,
  //   (state, action) => ({
  //     ...state,
  //     todos: state.todos.filter(todo => todo.id !== action.id)
  //   })),
  // on(  TodoListActions.changeTodoStatus,
  //   (state, action) => ({
  //     ...state,
  //     todos: state.todos.map(todo => todo.id === action.id ? {...todo, isComplete: !todo.isComplete} : todo)
  //   })),
  on(  TodoListActions.fetchTodosSuccess,
    (state, action) => ({
      ...state,
      todos: [...action.todos],
      loading: false,
      errorMessage: null,
    })),
  on(  TodoListActions.fetchTodos,
    (state, action) => ({
      ...state,
      loading: true,
    })),
  on(  TodoListActions.fetchTodosFailed,
    (state, action) => ({
      ...state,
      loading: false,
      errorMessage: action.errorMessage,
    })),
  on(  TodoListActions.addTodosSuccess,
    (state, action) => ({
      ...state,
      todos: state.todos.concat({...action.todo}),
      loading: false,
      errorMessage: null,
    })),
  on(  TodoListActions.addTodos,
    (state, action) => ({
      ...state,
      loading: true,
    })),
  on(  TodoListActions.addTodosFailed,
    (state, action) => ({
      ...state,
      loading: false,
      errorMessage: action.errorMessage,
    })),
  on(  TodoListActions.changeTodosSuccess,
    (state, action) => ({
      ...state,
      todos: state.todos.map(todo => todo.id === action.id ? {...todo, isComplete: !todo.isComplete} : todo),
      loading: false,
      errorMessage: null,
    })),
  on(  TodoListActions.changeTodos,
    (state, action) => ({
      ...state,
      loading: true,
    })),
  on(  TodoListActions.changeTodosFailed,
    (state, action) => ({
      ...state,
      loading: false,
      errorMessage: action.errorMessage,
    })),
  on(  TodoListActions.deleteTodosSuccess,
    (state, action) => ({
      ...state,
      todos: state.todos.filter(todo => todo.id !== action.id),
      loading: false,
      errorMessage: null,
    })),
  on(  TodoListActions.deleteTodos,
    (state, action) => ({
      ...state,
      loading: true,
    })),
  on(  TodoListActions.deleteTodosFailed,
    (state, action) => ({
      ...state,
      loading: false,
      errorMessage: action.errorMessage,
    }))
)

export function todoListReducer(state: TodoListState | undefined, action: Action){
  return _todoListReducer(state, action)
}
