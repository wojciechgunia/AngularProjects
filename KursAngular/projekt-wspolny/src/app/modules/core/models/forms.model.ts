import { FormArray, FormControl, FormGroup } from '@angular/forms';

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

export interface CategoryForm
{
  name: FormControl<string>;
}

export interface AddProduct
{
  name: FormControl<string>;
  mainDesc: FormControl<string>;
  descHtml: FormControl<string>;
  price: FormControl<string>;
  category: FormControl<string>;
  parameters: FormArray<FormGroup<{
    key: FormControl<string>;
    value: FormControl<string>;
  }>>;
}
