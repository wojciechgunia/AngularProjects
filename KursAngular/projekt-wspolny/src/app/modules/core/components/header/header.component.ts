import { Category } from './../../models/categories.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as AuthActions from '../../../auth/store/auth.actions';
import { Observable } from 'rxjs';
import { User } from '../../models/auth.model';
import { selectAuthUser } from 'src/app/modules/auth/store/auth.selectors';
import { CategoriesService } from '../../services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private categoriesService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  categories: Category[] = [];

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe({
      next: (value) => {
        this.categories = [...value];
      },
    });
  }

  user$: Observable<User | null> = this.store.select(selectAuthUser);

  logout() {
    this.store.dispatch(AuthActions.logout());
  }

  isAdmin(user: User) {
    if (user.role === 'ADMIN') {
      return true;
    }
    return false;
  }

  navigateToCategory(category: Category) {
    const queryParams: { [key: string]: string | number } = {
      kategoria: category.shortId,
      strona: 1,
    };

    const limit = this.route.snapshot.queryParamMap.get('limit');
    if (limit) {
      queryParams['limit'] = limit;
    }

    const sortuj_po = this.route.snapshot.queryParamMap.get('sortuj_po');
    if (sortuj_po) {
      queryParams['sortuj_po'] = sortuj_po;
    }

    const sortuj = this.route.snapshot.queryParamMap.get('sortuj');
    if (sortuj) {
      queryParams['sortuj'] = sortuj;
    }

    this.router.navigate(['/produkty'], {
      queryParams,
    });
  }
}
