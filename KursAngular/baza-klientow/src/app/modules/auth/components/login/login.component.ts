import { Component } from '@angular/core';
import { UserLoginData } from 'src/app/modules/core/models/user.model';
import { AuthService } from 'src/app/modules/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;
  errorMessage = '';
  userData: UserLoginData = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  onLogin() {
    this.errorMessage = '';
    this.authService.login(this.userData).subscribe({
      next: (value) => {
        if (value.length == 0) {
          this.errorMessage = 'Podano nieprawidłowe dane logowania!';
        }
      },
      error: (err) => {
        this.errorMessage = 'Wystąpił błąd';
      },
    });
  }
}
