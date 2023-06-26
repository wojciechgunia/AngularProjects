import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos: string[] = [];

  addTodo(todo: string): void
  {
    if(todo.length <= 3)
    {
      alert("Zadanie powinno mieć co najmniej 4 znaki");
      return;
    }
    this.todos.push(todo);
    console.log('Aktualna lista todo: ',this.todos);
  }
}
