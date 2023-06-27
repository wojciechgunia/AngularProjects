import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/shared/interfaces/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

// implements OnChanges
// implements OnInit
// implements DoCheck
// implements OnDestroy

export class TodoComponent {

  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() del = new EventEmitter<void>();

  // ngOnDestroy(): void
  // {
  //   console.log("ngOnDestroy został wykonany");
  // }


  // ngDoCheck(): void
  // {
  //   console.log("ngDoCheck został wykonany");
  // }

  // constructor()
  // {
  //   console.log(this.todo);
  // }


  // ngOnInit(): void
  // {
  //   console.log(this.todo);
  // }

  // ngOnChanges(changes: SimpleChanges): void
  // {
  //   console.log(changes);
  // }

  isDelete: boolean=false;
  //keyValueTest: {[key: string]: string | number} = { name: 'test', age: 12  }

  changeTodoStatus(todo: Todo)
  {
    todo.isComplete = !todo.isComplete;
  }

  deleteTodo()
  {
    this.isDelete = true;
  }

  deleteToDO()
  {
    this.del.emit();
  }

  close()
  {
    this.isDelete = false;
  }
}
