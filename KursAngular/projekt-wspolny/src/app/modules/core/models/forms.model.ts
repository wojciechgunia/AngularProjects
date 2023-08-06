import { FormControl } from '@angular/forms';

export interface LoginForm
{
  login: FormControl<string>;
  password: FormControl<string>;
}

export interface RegisterForm
{
  email: FormControl<string>;
  login: FormControl<string>;
  password: FormControl<string>;
  repassword: FormControl<string>;
}

export interface RecoveryForm
{
  email: FormControl<string>;
}

export interface ResetForm
{
  password: FormControl<string>;
  repassword: FormControl<string>;
}
