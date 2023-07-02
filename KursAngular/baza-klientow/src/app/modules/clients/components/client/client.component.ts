import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/modules/core/services/clients.service';
import { switchMap } from 'rxjs';
import { Client } from 'src/app/modules/core/models/client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  client!: Client;
  constructor(
    private clientService: ClientsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) =>
          this.clientService.getClient(Number(params['id']))
        )
      )
      .subscribe({
        next: (client) => (this.client = client),
      });
  }
}
