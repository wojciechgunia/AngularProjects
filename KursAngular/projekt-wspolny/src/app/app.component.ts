import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { AppState } from './store/app.reducer';
import * as AuthActions from './modules/auth/store/auth.actions';
import { BasketService } from './modules/core/services/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'projekt-wspolny';

  constructor(
    private notifierService: NotifierService,
    private store: Store<AppState>,
    private basketService: BasketService,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(AuthActions.autoLogin());
    this.basketService.getBasketProducts().subscribe({
      error: () => {
        //
      },
    });
  }
}
