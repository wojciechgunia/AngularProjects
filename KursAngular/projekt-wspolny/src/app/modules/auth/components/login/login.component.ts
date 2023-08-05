import { FormGroup } from '@angular/forms';
import { LoginForm } from './../../../core/models/forms.model';
import { FormService } from './../../../core/services/form.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;

  loginForm: FormGroup<LoginForm> = this.formService.initLoginForm();

  constructor(private formService: FormService) {}

  get controls() {
    return this.loginForm.controls;
  }

  getErrorMessage(typ: string): string {
    if (typ == 'login') {
      return 'Niepoprawny login';
    } else {
      return 'Niepoprawne hasło';
    }
  }
}
