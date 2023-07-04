import { TodoApiService } from './../../core/services/todo-api.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as TodoListActions from "./todo-list.actions"
import { catchError, map, of, switchMap } from 'rxjs';



@Injectable()
export class TodoListEffects {

  fetchTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoListActions.fetchTodos),
      switchMap(action => {
        return this.todoapi.getTodos().pipe(
          map(todos => TodoListActions.fetchTodosSuccess({todos})),
          catchError(err => of(TodoListActions.fetchTodosFailed({errorMessage: "Wystąpił błąd!"})))
        )
      })
    )
  });

  addTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoListActions.addTodos),
      switchMap(action => {
        return this.todoapi.postTodo(action.todo).pipe(
          map(todo => TodoListActions.addTodosSuccess({todo})),
          catchError(err => of(TodoListActions.addTodosFailed({errorMessage: "Wystąpił błąd!"})))
        )
      })
    )
  });

  changeTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoListActions.changeTodos),
      switchMap(action => {

        return this.todoapi.patchTodo(action.id, action.todo).pipe(
          map(todo => {const id = todo.id;return TodoListActions.changeTodosSuccess({id})}),
          catchError(err => of(TodoListActions.changeTodosFailed({errorMessage: "Wystąpił błąd!"})))
        )
      })
    )
  });

  deleteTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoListActions.deleteTodos),
      switchMap(action => {

        return this.todoapi.deleteTodo(action.id).pipe(
          map(todo => {const id = action.id;return TodoListActions.deleteTodosSuccess({id})}),
          catchError(err => of(TodoListActions.deleteTodosFailed({errorMessage: "Wystąpił błąd!"})))
        )
      })
    )
  });

  constructor(private actions$: Actions, private todoapi: TodoApiService){}
}
