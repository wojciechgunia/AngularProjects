import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/modules/core/models/product.model';
import { ProductsService } from 'src/app/modules/core/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ) {}

  product?: Product;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((paramMap) => {
          const [name, date] = (paramMap.get('id') as string).split('-');
          return this.productsService.getProduct(name, date);
        }),
      )
      .subscribe({
        next: (product) => {
          this.product = product;
        },
      });
  }
}
