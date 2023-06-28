import { TodoApiService } from './../../core/services/todo-api.service';
import { TodoService } from './../../core/services/todo.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/shared/interfaces/todo.interface';

@Component
({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy
{
  errorMessage = "";
  todos: Todo[] = this.todoService.todos;
  constructor(private todoService: TodoService, private todoApiService: TodoApiService){}
  sub!: Subscription;

  ngOnInit(): void
  {
    this.sub = this.todoService.todoChange.subscribe({next: value => this.todos=value});

    if(this.todos.length === 0)
    {
      this.todoApiService.getTodos().subscribe({error: err => {this.errorMessage="Wystąpił błąd. Spróbuj ponownie!"}});
    }

  }
  ngOnDestroy(): void
  {
    this.sub.unsubscribe();
  }

  addTodo(todo: string): void
  {
    this.errorMessage = "";
    this.todoApiService.postTodo({name: todo, isComplete: false}).subscribe({error: (err: any) => {this.errorMessage="Wystąpił błąd. Spróbuj ponownie!"}});
  }

  clearErrorMessage()
  {
    this.errorMessage = "";
  }

  deleteTodo(i: number)
  {
    this.todoApiService.deleteTodo(i).subscribe({error: err => {this.errorMessage="Wystąpił błąd. Spróbuj ponownie!"}});
    // this.todos = this.todoService.todos;
  }

  changeTodoStatus(todo: Todo)
  {
    this.todoApiService.patchTodo(todo.id,{isComplete: !todo.isComplete}).subscribe({error: err => {this.errorMessage="Wystąpił błąd. Spróbuj ponownie!"}});
  }
}
