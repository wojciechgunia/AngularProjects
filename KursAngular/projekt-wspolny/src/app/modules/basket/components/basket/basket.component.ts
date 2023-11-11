import { Component } from '@angular/core';
import { BasketProduct } from 'src/app/modules/core/models/basket.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent {
  basketProducts: BasketProduct[] = [
    {
      name: 'Test',
      price: 150,
      imageUrl: '',
      quantity: 2,
      uuid: 'test',
      summaryPrice: 300,
    },
    {
      name: 'Test',
      price: 150,
      imageUrl: '',
      quantity: 2,
      uuid: 'test',
      summaryPrice: 300,
    },
    {
      name: 'Test',
      price: 150,
      imageUrl: '',
      quantity: 2,
      uuid: 'test',
      summaryPrice: 300,
    },
  ];
  summaryPrice = 900;
}
