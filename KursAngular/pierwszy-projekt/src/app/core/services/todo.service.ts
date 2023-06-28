import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from 'src/app/shared/interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService
{
  private _todos: Todo[] = []
  //private _todos: Todo[] = JSON.parse(localStorage.getItem('todos')!) ?? [];
  private _todoChange = new Subject<Todo[]>();
  constructor() { }

  public get todos()
  {
    return this._todos.slice();
  }

  public set todos(arrTodos: Todo[])
  {
    this._todos = [...arrTodos];
    this.todoChange.next(this.todos)
  }

  public get todoChange()
  {
    return this._todoChange;
  }

  getTodo(index: number):Todo | undefined
  {
    return this.todos[index];
  }

  getTodoLenght():number
  {
    return this.todos.length;
  }

  addTodo(todo: Todo): void
  {
    this._todos.push(todo);
    this._todoChange.next(this.todos);
  }

  deleteTodo(i: number)
  {
    this._todos = this.todos.filter((todo: Todo, id: number) => todo.id!=i);
    this._todoChange.next(this.todos);
  }

  changeTodoStatus(todoChange: Todo)
  {
    const index: number=this._todos.findIndex((todo: Todo, id: number) => todo.id==todoChange.id);
    this._todos[index] = todoChange;
    this._todoChange.next(this._todos);
  }
}
