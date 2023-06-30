import { NgModule } from '@angular/core';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ClientsComponent],
  imports: [ClientsRoutingModule, SharedModule],
  exports: [ClientsComponent],
})
export class ClientsModule {}
