import { NgModule } from '@angular/core';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { SharedModule } from '../shared/shared.module';
import { ClientsTableComponent } from './components/clients-table/clients-table.component';
import { ClientComponent } from './components/client/client.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { HighlightDirective } from '../shared/directives/highlight.directive';

@NgModule({
  declarations: [ClientsComponent, ClientsTableComponent, ClientComponent, ClientFormComponent, DeleteDialogComponent, EditDialogComponent],
  imports: [ClientsRoutingModule, SharedModule, HighlightDirective],
  exports: [],
})
export class ClientsModule {}
