import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { matchValidator } from './form-validators.validator';
import { MyErrorStateMatcher } from './myErrorStateMatcher';
import { AuthService } from 'src/app/modules/core/services/auth.service';
import { PostUser } from 'src/app/modules/core/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  errorMessage = '';
  hide = true;
  repassword: string = '';
  registerForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
      nonNullable: true,
    }),
    username: new FormControl('', {
      validators: [
        Validators.minLength(4),
        Validators.maxLength(30),
        Validators.required,
      ],
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: [
        Validators.minLength(4),
        Validators.maxLength(30),
        Validators.required,
        matchValidator('repassword', true),
      ],
      nonNullable: true,
    }),
    repassword: new FormControl('', [
      Validators.required,
      matchValidator('password'),
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // this.registerForm.controls.email.valueChanges.subscribe({
    //   next: (value) => {
    //     console.log(value);
    //   },
    // });
  }

  getEmailError() {
    if (this.controls.email.hasError('required'))
      return 'Adres e-mail jest wymagany';
    else return 'Błędny format e-maila.';
  }

  getUsernameError() {
    if (this.controls.username.hasError('required'))
      return 'Nazwa użytkownika jest wymagana';
    else return 'Nazwa użytkownika musi mieć od 4 do 30 znaków';
  }

  getPasswordError() {
    if (this.controls.password.hasError('required'))
      return 'Hasło jest wymagane';
    else return 'Hasło musi mieć od 4 do 30 znaków';
  }

  getRepasswordError() {
    if (this.controls.repassword.hasError('required'))
      return 'Hasło jest wymagane';
    else return 'Hasła muszą być takie same';
  }

  get controls() {
    return this.registerForm.controls;
  }

  onRegister() {
    const userData: PostUser = {
      email: this.registerForm.getRawValue().email,
      password: this.registerForm.getRawValue().password,
      username: this.registerForm.getRawValue().username,
    };
    this.authService.register(userData).subscribe({
      next: () => {
        this.router.navigate(['/logowanie']);
      },
      error: (err) => {
        this.errorMessage = 'Wystąpił błąd';
      },
    });
    //console.log(this.registerForm.getRawValue());
  }
}
