import {
  LoginForm,
  RecoveryForm,
  RegisterForm,
  ResetForm,
} from './../models/forms.model';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { equivalentValidator } from '../../shared/vaidators/equivalent.validator';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  initLoginForm(): FormGroup<LoginForm> {
    return new FormGroup({
      login: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
        nonNullable: true,
      }),
      password: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
        nonNullable: true,
      }),
    });
  }

  initRegisterForm(): FormGroup<RegisterForm> {
    return new FormGroup(
      {
        email: new FormControl('', {
          validators: [Validators.required, Validators.email],
          nonNullable: true,
        }),
        login: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50),
          ],
          nonNullable: true,
        }),
        password: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(50),
          ],
          nonNullable: true,
        }),
        repassword: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(50),
          ],
          nonNullable: true,
        }),
      },
      { validators: [equivalentValidator('password', 'repassword')] },
    );
  }

  initRecoveryForm(): FormGroup<RecoveryForm> {
    return new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        nonNullable: true,
      }),
    });
  }

  initResetForm(): FormGroup<ResetForm> {
    return new FormGroup({
      password: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
        nonNullable: true,
      }),
      repassword: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
        nonNullable: true,
      }),
    });
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
      } else if (control.hasError('passwordNotEquals')) {
        return 'Hasła nie są takie same';
      } else {
        return 'Hasło może mieć co najwyżej 50 znaków';
      }
    }
  }
}
