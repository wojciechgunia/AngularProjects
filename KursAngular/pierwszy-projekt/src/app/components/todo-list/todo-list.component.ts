import { TodoService } from './../../core/services/todo.service';
import { Component } from '@angular/core';
import { Todo } from 'src/app/shared/interfaces/todo.interface';

@Component
({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent
{
  errorMessage = "";
  todos: Todo[] = this.todoService.todos;
  constructor(private todoService: TodoService){}

  addTodo(todo: string): void
  {
    this.errorMessage = "";
    if(todo.length <= 3)
    {
      this.errorMessage = "Zadanie powinno mieć co najmniej 4 znaki";
      return;
    }
    this.todoService.addTodo(todo);
    this.todos = this.todoService.todos;
  }

  clearErrorMessage()
  {
    this.errorMessage = "";
  }

  deleteTodo(i: number)
  {
    this.todoService.deleteTodo(i);
    this.todos = this.todoService.todos;
  }

  changeTodoStatus(i: number)
  {
    this.todoService.changeTodoStatus(i);
    this.todos = this.todoService.todos;
  }
}
