import { NgModule } from '@angular/core';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { SharedModule } from '../shared/shared.module';
import { ClientsTableComponent } from './components/clients-table/clients-table.component';

@NgModule({
  declarations: [ClientsComponent, ClientsTableComponent],
  imports: [ClientsRoutingModule, SharedModule],
  exports: [ClientsComponent],
})
export class ClientsModule {}
