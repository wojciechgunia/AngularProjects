import { NgModule } from '@angular/core';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './components/order/order.component';
import { SharedModule } from '../shared/shared.module';
import { OrderCreateComponent } from './components/order-create/order-create.component';

@NgModule({
  declarations: [OrderComponent, OrderCreateComponent],
  imports: [SharedModule, OrderRoutingModule],
})
export class OrderModule {}
