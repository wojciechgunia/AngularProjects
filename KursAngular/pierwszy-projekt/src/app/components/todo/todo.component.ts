import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
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
  @Output() del = new EventEmitter<number>();
  @Output() change = new EventEmitter<void>();

  // ngOnDestroy(): void
  // {
  //   console.log("ngOnDestroy został wykonany");
  // }


  // ngDoCheck(): void
  // {
  //   console.log("ngDoCheck został wykonany");
  // }

  constructor(private router: Router, private route: ActivatedRoute)
  { }


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

  changeTodoStatus()
  {
    this.change.emit();
  }

  navigateToDetails()
  {
    const navigationExtras: NavigationExtras = {
      relativeTo: this.route,
      // queryParams: {id: this.i,test: 'wartosc'}
      // state: {test: 'example'}
    }
    this.router.navigate([this.i], navigationExtras);
  }

  deleteTodo()
  {
    this.isDelete = true;
  }

  deleteToDO()
  {
    this.del.emit(this.todo.id);
  }

  close()
  {
    this.isDelete = false;
  }
}
