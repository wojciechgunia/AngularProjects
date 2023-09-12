import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { map, startWith, switchMap } from 'rxjs';
import { PrimitiveProduct } from 'src/app/modules/core/models/product.model';
import { ProductsService } from 'src/app/modules/core/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements AfterViewInit {
  constructor(private productService: ProductsService) {}

  ngAfterViewInit(): void {
    // this.productService.getProducts().subscribe({
    //   next: (response) => {
    //     this.products = [...response.products];
    //     this.totalCount = response.totalCount;
    //   },
    // });

    this.paginator.page
      .pipe(
        startWith({}),
        switchMap(() => {
          const pageIndex = this.paginator.pageIndex + 1;
          const itemsPerPage = this.paginator.pageSize;
          return this.productService.getProducts(pageIndex, itemsPerPage);
        }),
        map((response) => {
          this.products = [...response.products];
          this.totalCount = response.totalCount;
        }),
      )
      .subscribe();
  }

  products: PrimitiveProduct[] = [];
  totalCount = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
}
