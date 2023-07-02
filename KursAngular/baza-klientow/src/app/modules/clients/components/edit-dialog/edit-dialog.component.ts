import { Component, Inject } from '@angular/core';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Client } from 'src/app/modules/core/models/client.model';
import { ClientsService } from 'src/app/modules/core/services/clients.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent {
  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: Client,private clientService: ClientsService){}

  onEdit()
  {
    this.clientService.putClient(this.data,this.data.id).subscribe({
      error: ()=> {console.log("Delete error!")}
    })
  }

  closeDialog(){
    this.dialogRef.close()
  }
}
