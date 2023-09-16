import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { AddCategoryComponent } from './components/administrator/add-category/add-category.component';
import { EditProductsComponent } from './components/administrator/edit-products/edit-products.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AdministratorComponent,
    AddCategoryComponent,
    EditProductsComponent,
  ],
  imports: [SharedModule, AdministrationRoutingModule],
})
export class AdministrationModule {}
