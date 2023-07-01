import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  user: User | null = null;
  auth!: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.auth = this.authService.user.subscribe({
      next: (user) => {
        this.user = user;
      },
    });
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.auth.unsubscribe();
  }
}
