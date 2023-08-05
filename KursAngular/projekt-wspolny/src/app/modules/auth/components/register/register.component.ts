import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterForm } from 'src/app/modules/core/models/forms.model';
import { FormService } from 'src/app/modules/core/services/form.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  hide = true;

  registerForm: FormGroup<RegisterForm> = this.formService.initRegisterForm();

  constructor(private formService: FormService) {}

  get controls() {
    return this.registerForm.controls;
  }

  getErrorMessage(typ: string, control: FormControl): string {
    if (typ == 'login') {
      if (control.hasError('required')) {
        return 'Login jest wymagany';
      } else if (control.hasError('minlength')) {
        return 'Login musi mieć co najmniej 3 znaki';
      } else {
        return 'Login może mieć co najwyżej 50 znaków';
      }
    } else if (typ == 'email') {
      if (control.hasError('required')) {
        return 'Email jest wymagany';
      } else {
        return 'Niepoprawny adres email';
      }
    } else {
      if (control.hasError('required')) {
        return 'Hasło jest wymagane';
      } else if (control.hasError('minlength')) {
        return 'Hasło musi mieć co najmniej 3 znaki';
      } else {
        return 'Hasło może mieć co najwyżej 50 znaków';
      }
    }
  }
}
