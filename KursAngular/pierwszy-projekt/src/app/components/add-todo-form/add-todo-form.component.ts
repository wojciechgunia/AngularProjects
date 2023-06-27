import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.scss']
})
export class AddTodoFormComponent{


  @Output() newTodo = new EventEmitter<string>();

  todoName='';

  addTodo()
  {
    this.newTodo.emit(this.todoName);
  }
}
