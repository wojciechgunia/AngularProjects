import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { GetOrderResponse } from 'src/app/modules/core/models/order.model';
import { OrderService } from 'src/app/modules/core/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  errorMsg: string | null = null;
  order!: GetOrderResponse;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((paramMap) => {
          const uuid = paramMap.get('uuid') as string;
          return this.orderService.getOrder(uuid);
        }),
      )
      .subscribe({
        next: (order) => {
          this.order = { ...order };
        },
        error: (err) => {
          this.errorMsg = err;
        },
      });
  }
}
