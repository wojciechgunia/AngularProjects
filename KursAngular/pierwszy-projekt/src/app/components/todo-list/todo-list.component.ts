import { TodoApiService } from './../../core/services/todo-api.service';
import { TodoService } from './../../core/services/todo.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/shared/interfaces/todo.interface';
import { AppStore } from 'src/app/store/app-reducer';
import * as TodoListActions from "../store/todo-list.actions";
import { selectTodoListTodos, selectTodoListTodosState } from '../store/todo-list.selector';

@Component
({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy
{
  errorMessage = "";
  // todos: Todo[] = this.todoService.todos;
  todos: Todo[] = [];
  constructor(private todoService: TodoService, private todoApiService: TodoApiService, private store: Store<AppStore>){}
  sub!: Subscription;

  ngOnInit(): void
  {
    // this.sub = this.todoService.todoChange.subscribe({next: value => this.todos=value});

    // if(this.todos.length === 0)
    // {
    //   this.todoApiService.getTodos().subscribe({error: err => {this.errorMessage="Wystąpił błąd. Spróbuj ponownie!"}});
    // }
    this.store.dispatch(TodoListActions.fetchTodos());
    this.sub = this.store.select(selectTodoListTodosState).subscribe({
      next: (state)=> {
        this.todos = [...state.todos];
        this.errorMessage= state.error ? state.error : '';
      }
    })

  }
  ngOnDestroy(): void
  {
    this.sub.unsubscribe();
  }

  addTodo(todo: string): void
  {
    // this.errorMessage = "";
    // this.todoApiService.postTodo({name: todo, isComplete: false}).subscribe({error: (err: any) => {this.errorMessage="Wystąpił błąd. Spróbuj ponownie!"}});
    // const id = this.todos[this.todos.length - 1].id + 1;
    this.store.dispatch(TodoListActions.addTodos({todo: { name: todo, isComplete: false }}));
  }

  clearErrorMessage()
  {
    this.errorMessage = "";
  }

  deleteTodo(i: number)
  {
    // this.todoApiService.deleteTodo(i).subscribe({error: err => {this.errorMessage="Wystąpił błąd. Spróbuj ponownie!"}});
    // this.todos = this.todoService.todos;
    this.store.dispatch(TodoListActions.deleteTodos({id: i}))
  }

  changeTodoStatus(todo: Todo)
  {
    const id = todo.id;
    const stat = todo.isComplete;
    // this.todoApiService.patchTodo(todo.id,{isComplete: !todo.isComplete}).subscribe({error: err => {this.errorMessage="Wystąpił błąd. Spróbuj ponownie!"}});
    this.store.dispatch(TodoListActions.changeTodos({id,todo: {isComplete: !stat}}));
  }
}
