import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ResetForm } from 'src/app/modules/core/models/forms.model';
import { FormService } from 'src/app/modules/core/services/form.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
})
export class PasswordResetComponent implements OnInit {
  hide = true;

  resetForm: FormGroup<ResetForm> = this.formService.initResetForm();

  constructor(
    private formService: FormService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (param: ParamMap) => {
        console.log(param);
      },
    });
  }

  get controls() {
    return this.resetForm.controls;
  }

  getErrorMessage(control: FormControl): string {
    return this.formService.getErrorMessage('password', control);
  }
}
