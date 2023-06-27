import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  @Input() errorMessage!: string;
  @Input() showButton: boolean=false;
  @Output() clearMessage = new EventEmitter<void>();


  clearErrorMessage()
  {
    this.clearMessage.emit();
  }
}
