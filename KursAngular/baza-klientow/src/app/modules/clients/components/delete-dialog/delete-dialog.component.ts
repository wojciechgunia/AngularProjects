import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Client } from 'src/app/modules/core/models/client.model';
import { ClientsService } from 'src/app/modules/core/services/clients.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: Client,private clientService: ClientsService){}

  onDelete()
  {
    this.clientService.delClient(this.data.id).subscribe({
      error: ()=> {console.log("Delete error!")}
    })
  }
}
