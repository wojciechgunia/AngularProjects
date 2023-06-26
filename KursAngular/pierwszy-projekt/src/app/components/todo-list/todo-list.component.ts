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
  todos: Todo[] = [];
  errorMessage = "";

  addTodo(todo: string): void
  {
    this.errorMessage = "";
    if(todo.length <= 3)
    {
      this.errorMessage = "Zadanie powinno mieć co najmniej 4 znaki";
      return;
    }
    this.todos.push({ name: todo, isComplete: false });
  }

  changeTodoStatus(todo: Todo)
  {
    todo.isComplete = !todo.isComplete;
  }

  clearErrorMessage()
  {
    this.errorMessage = "";
  }
}
