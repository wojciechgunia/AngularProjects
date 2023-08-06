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
    return this.formService.getErrorMessage(typ, control);
  }
}
