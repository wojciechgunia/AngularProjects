import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { AlertComponent } from './components/alert/alert.component';
import { PhoneControlComponent } from './controls/phone-control/phone-control.component';

@NgModule({
  declarations: [AlertComponent, PhoneControlComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AlertComponent,
    PhoneControlComponent,
  ],
})
export class SharedModule {}
