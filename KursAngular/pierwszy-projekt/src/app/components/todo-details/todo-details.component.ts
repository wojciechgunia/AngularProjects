import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from './../../core/services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/interfaces/todo.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit{
  todo: Todo | undefined;

  id!: number;

  todoLenght!: number;

  constructor(private todoService: TodoService,private router: Router, private route: ActivatedRoute, private location: Location)
  {

  }

  ngOnInit(): void
  {
    // this.id = +this.route.snapshot.params['id'];
    // this.todo = this.todoService.getTodo(this.id);

    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.todo = this.todoService.getTodo(this.id);
      this.todoLenght = this.todoService.getTodoLenght();
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
