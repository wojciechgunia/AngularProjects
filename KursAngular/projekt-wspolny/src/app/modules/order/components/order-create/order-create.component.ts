import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss'],
})
export class OrderCreateComponent {
  @ViewChild(CustomerFormComponent) customerFormComp!: CustomerFormComponent;

  constructor(
    private location: Location,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const locationState = this.location.getState() as {
      summaryPrice: undefined | number;
      navigationId: number;
    };
    if (!locationState.summaryPrice) {
      this.router.navigate(['/']);
    }
  }

  order() {
    console.log(this.customerFormComp.customerForm.getRawValue());
  }
}
