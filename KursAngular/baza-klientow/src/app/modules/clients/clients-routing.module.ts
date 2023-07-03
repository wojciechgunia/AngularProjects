import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';
import { ClientComponent } from './components/client/client.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { authGuardDeactivate } from '../core/guards/guards.functions';

const routes: Routes = [
  { path: '', component: ClientsComponent,
  // canActivate: [authGuardActivate]
},
  { path: 'dodaj', component: ClientFormComponent, canDeactivate: [authGuardDeactivate] },
  { path: ':id', component: ClientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
