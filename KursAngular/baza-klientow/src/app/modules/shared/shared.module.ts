import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MaterialModule, FormsModule, CommonModule, ReactiveFormsModule],
})
export class SharedModule {}
