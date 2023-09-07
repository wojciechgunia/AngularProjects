import { Component } from '@angular/core';
import { Product } from 'src/app/modules/core/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: Product[] = [
    {
      uid: '1234',
      name: 'pralka beko',
      price: 450,
      imageUrl:
        'https://prod-api.mediaexpert.pl/api/images/gallery/thumbnails/images/24/2404032/Pralka-BEKO-PWUV7646XME-smartfon-1.jpg',
      active: true,
      category: 'Kategoria 1',
      shortId: 1234,
    },
    {
      uid: '1235',
      name: 'pralka beko 2',
      price: 650,
      imageUrl:
        'https://prod-api.mediaexpert.pl/api/images/gallery/thumbnails/images/24/2404032/Pralka-BEKO-PWUV7646XME-smartfon-1.jpg',
      active: true,
      category: 'Kategoria 2',
      shortId: 1235,
    },
    {
      uid: '1236',
      name: 'pralka beko 3',
      price: 480,
      imageUrl:
        'https://prod-api.mediaexpert.pl/api/images/gallery/thumbnails/images/24/2404032/Pralka-BEKO-PWUV7646XME-smartfon-1.jpg',
      active: true,
      category: 'Kategoria 3',
      shortId: 1236,
    },
  ];
}
