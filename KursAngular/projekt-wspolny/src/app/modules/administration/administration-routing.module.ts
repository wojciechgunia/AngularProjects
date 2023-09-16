import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { AddCategoryComponent } from './components/administrator/add-category/add-category.component';
import { EditProductsComponent } from './components/administrator/edit-products/edit-products.component';

const routes: Routes = [
  {
    path: 'panel',
    component: AdministratorComponent,
    children: [
      { path: 'kategorie', component: AddCategoryComponent },
      { path: 'produkty', component: EditProductsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}
