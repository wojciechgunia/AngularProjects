import { NgModule } from '@angular/core';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './components/order/order.component';
import { SharedModule } from '../shared/shared.module';
import { OrderCreateComponent } from './components/order-create/order-create.component';
import { CustomerFormComponent } from './components/order-create/customer-form/customer-form.component';
import { AddressFormComponent } from './components/order-create/address-form/address-form.component';
import { DeliveryFormComponent } from './components/order-create/delivery-form/delivery-form.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderProductComponent } from './components/order-product/order-product.component';

@NgModule({
  declarations: [
    OrderComponent,
    OrderCreateComponent,
    CustomerFormComponent,
    AddressFormComponent,
    DeliveryFormComponent,
    OrderDetailsComponent,
    OrderProductComponent,
  ],
  imports: [SharedModule, OrderRoutingModule],
})
export class OrderModule {}
