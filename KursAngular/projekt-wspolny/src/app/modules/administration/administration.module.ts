import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { AddCategoryComponent } from './components/administrator/add-category/add-category.component';
import { EditProductsComponent } from './components/administrator/edit-products/edit-products.component';
import { SharedModule } from '../shared/shared.module';
import { AddProductFormComponent } from './components/administrator/edit-products/add-product-form/add-product-form.component';
import { DeleteProductFormComponent } from './components/administrator/edit-products/delete-product-form/delete-product-form.component';

@NgModule({
  declarations: [
    AdministratorComponent,
    AddCategoryComponent,
    EditProductsComponent,
    AddProductFormComponent,
    DeleteProductFormComponent,
  ],
  imports: [SharedModule, AdministrationRoutingModule],
})
export class AdministrationModule {}
