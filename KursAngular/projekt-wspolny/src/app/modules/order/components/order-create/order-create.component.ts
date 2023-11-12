import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss'],
})
export class OrderCreateComponent {
  constructor(
    private location: Location,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const locationState = this.location.getState() as {
      summaryPrice: undefined | number;
      navigationId: number;
    };
    if (!locationState.summaryPrice) {
      this.router.navigate(['/']);
    }
  }
}
