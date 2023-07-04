import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/interfaces/todo.interface';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/store/app-reducer';
import * as TodoListActions from "../store/todo-list.actions";
import { selectTodoListTodosState } from '../store/todo-list.selector';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit, OnDestroy{
  todo: Todo | undefined;

  id!: number;

  todoLenght!: number;

  sub!: Subscription;

  constructor(private store: Store<AppStore>,private router: Router, private route: ActivatedRoute, private location: Location)
  {

  }

  ngOnDestroy(): void
  {
    this.sub.unsubscribe();
  }

  ngOnInit(): void
  {
    // this.id = +this.route.snapshot.params['id'];
    // this.todo = this.todoService.getTodo(this.id);

    this.store.dispatch(TodoListActions.fetchTodos());
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.sub = this.store.select(selectTodoListTodosState).subscribe({
      next: (state)=> {
        this.todo =([...state.todos].find((todo: Todo)=>todo.id===this.id ? todo : undefined));
        this.todoLenght = state.todos.length;
      }
    })

    // console.log(
    //   this.location.getState()
    // );
  }

  navigateToPreviousTodo()
  {
    this.router.navigate(['/todo-list', this.id-1]);
  }

  navigateToNetxTodo()
  {
    this.router.navigate(['/todo-list', this.id+1]);
  }

  navigateToTodoList()
  {
    this.router.navigate(['/todo-list']);
  }
}
