import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { AlertComponent } from './components/alert/alert.component';
import { PhoneControlComponent } from './controls/phone-control/phone-control.component';
import { UnlessDirective } from './directives/unless.directive';

@NgModule({
  declarations: [AlertComponent, PhoneControlComponent, UnlessDirective],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AlertComponent,
    PhoneControlComponent,
    UnlessDirective,
  ],
})
export class SharedModule {}
