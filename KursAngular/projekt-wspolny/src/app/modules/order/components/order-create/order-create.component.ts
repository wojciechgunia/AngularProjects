import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss'],
})
export class OrderCreateComponent {
  @ViewChild(CustomerFormComponent) customerFormComp!: CustomerFormComponent;
  @ViewChild(AddressFormComponent) addressFormComp!: AddressFormComponent;
  @ViewChild(DeliveryFormComponent) deliveryFormComp!: DeliveryFormComponent;

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
    if (
      this.customerFormComp.customerForm.valid &&
      this.addressFormComp.addressForm.valid &&
      this.deliveryFormComp.deliverForm.valid
    ) {
      console.log(this.customerFormComp.customerForm.getRawValue());
      console.log(this.addressFormComp.addressForm.getRawValue());
      console.log(this.deliveryFormComp.deliverForm.getRawValue());
    }
  }
}
