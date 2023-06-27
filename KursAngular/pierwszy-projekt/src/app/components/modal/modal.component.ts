import { Component, Input, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subscription, from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() title!: string;
  @Output() close = new EventEmitter<void>();
  // sub!: Subscription;
  // obs$=interval(1000);

  ngOnInit(): void
  {
    // this.sub=of([1,2,3],[4,5],[6,7]).subscribe({
    //   next: value => console.log(value)
    // });
    // this.sub=interval(1000).pipe(take(5)).subscribe({
    //   next: value => console.log(value)
    // });
    // this.sub=from([1,2,3]).subscribe({
    //   next: value => console.log(value)
    // });
    // this.sub=fromEvent(document,'click').subscribe({
    //   next: value => console.log(value)
    // });
    // console.log(this.sub);
  }

  ngOnDestroy(): void
  {
    // this.sub.unsubscribe();
  }

  onClose()
  {
    this.close.emit();
  }
}
