import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RecoveryForm } from 'src/app/modules/core/models/forms.model';
import { FormService } from 'src/app/modules/core/services/form.service';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss'],
})
export class PasswordRecoveryComponent {
  recoveryForm: FormGroup<RecoveryForm> = this.formService.initRecoveryForm();

  constructor(private formService: FormService) {}

  get controls() {
    return this.recoveryForm.controls;
  }

  getErrorMessage(control: FormControl): string {
    return this.formService.getErrorMessage('email', control);
  }
}
