import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Todo } from 'src/app/shared/interfaces/todo.interface';
import { TodoService } from './todo.service';
import * as TodoListActions from "../../components/store/todo-list.actions";
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/store/app-reducer';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(private http: HttpClient, private todoService: TodoService, private store: Store<AppStore>) { }

  getTodos(): Observable<Todo[]>
  {
    // const params= new HttpParams().set('_limit',2);
    return this.http.get<Todo[]>('http://localhost:3000/todo')
    // .pipe(tap((todos)=>this.store.dispatch(TodoListActions.fetchTodosSuccess({todos}))));
  }

  postTodo(todo: Omit<Todo,"id">): Observable<Todo>
  {
    return this.http.post<Todo>('http://localhost:3000/todo',todo).pipe(tap((todo)=>this.todoService.addTodo(todo)));
  }

  deleteTodo(id: number): Observable<{}>
  {
    return this.http.delete<{}>(`http://localhost:3000/todo/${id}`).pipe(tap(()=>this.todoService.deleteTodo(id)));
  }

  patchTodo(id: number, todo: Omit<Todo,"id"|"name">): Observable<Todo>
  {
    return this.http.patch<Todo>(`http://localhost:3000/todo/${id}`,todo).pipe(tap((todo)=>this.todoService.changeTodoStatus(todo)));
  }

  putTodo(id: number, todo: Todo): Observable<Todo>
  {
    return this.http.put<Todo>(`http://localhost:3000/todo/${id}`,todo);
  }
}
