import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as AuthActions from '../../../auth/store/auth.actions';
import { Observable } from 'rxjs';
import { User } from '../../models/auth.model';
import { selectAuthUser } from 'src/app/modules/auth/store/auth.selectors';
import { Category } from '../../models/categories.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private store: Store<AppState>) {}

  user$: Observable<User | null> = this.store.select(selectAuthUser);

  categories: Category[] = [
    { name: 'Kategoria 1', shortId: 123456 },
    { name: 'Kategoria 2', shortId: 123457 },
    { name: 'Kategoria 3', shortId: 123458 },
    { name: 'Kategoria 4', shortId: 123459 },
  ];

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
