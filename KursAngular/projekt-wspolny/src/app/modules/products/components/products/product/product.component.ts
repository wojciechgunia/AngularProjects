import { Component, Input } from '@angular/core';
import { PrimitiveProduct } from 'src/app/modules/core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product!: PrimitiveProduct;
}
