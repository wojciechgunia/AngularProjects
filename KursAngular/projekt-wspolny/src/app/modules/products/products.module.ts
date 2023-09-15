import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/products/product/product.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';

@NgModule({
  declarations: [ProductsComponent, ProductComponent, ProductDetailsComponent],
  imports: [SharedModule, ProductsRoutingModule],
})
export class ProductsModule {}
