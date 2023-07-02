import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client, PostClientForm } from 'src/app/modules/core/models/client.model';
import { ClientsService } from 'src/app/modules/core/services/clients.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {
  clientForm!: FormGroup<PostClientForm>;
  errorMessage = '';

  @Input() editMode = false;
  @Input() client: Client = new Client(0,'','','','','','');

  @Output() closeDialog = new EventEmitter<void>();

  constructor(private clientService: ClientsService, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  get controls() {
    return this.clientForm.controls;
  }

  closeDialogClick(){
    this.closeDialog.emit();
  }

  private initForm() {
    this.clientForm = new FormGroup({
      firstname: new FormControl(this.client.firstname, {
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.pattern('[A-ZŻŹŚĆÓ]{1}[A-Za-zŻŹŚĆÓżźśćó -]{1,29}'),
        ],
        nonNullable: true,
      }),
      surname: new FormControl(this.client.surname, {
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.pattern('[A-ZŻŹŚĆÓŁ]{1}[A-Za-zŻŹŚĆÓŁżźśćół -]{1,29}'),
        ],
        nonNullable: true,
      }),
      email: new FormControl(this.client.email, {
        validators: [Validators.required, Validators.email],
        nonNullable: true,
      }),
      phone: new FormControl(this.client.phone, {
        validators: [
          Validators.required,
          Validators.pattern(new RegExp('[+0-9]{0,3}[0-9 ]{9,12}')),
        ],
        nonNullable: true,
      }),
      address: new FormControl(this.client.address, {
        validators: [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(60),
        ],
        nonNullable: true,
      }),
      postcode: new FormControl(this.client.postcode, {
        validators: [
          Validators.required,
          Validators.pattern('[0-9]{2}-[0-9]{3}'),
        ],
        nonNullable: true,
      }),
    });
  }

  onSubmit() {
    if(this.editMode)
    {
      this.clientService.putClient(this.clientForm.getRawValue(),this.client.id).subscribe({
        next: () => {
          this.errorMessage='';
          this.closeDialogClick();
        },
        error: () =>{
          this.errorMessage = "Wystąpił błąd!"
        }
      })
    }
    else
    {
      this.clientService.postClient(this.clientForm.getRawValue()).subscribe({
      next: () => {
        this.errorMessage='';
        this.router.navigate(["/klienci"]);
      },
      error: () =>{
        this.errorMessage = "Wystąpił błąd!"
      }
    })}

  }

  getError(opt: string) {
    if (opt == 'firstname') {
      if (this.controls.firstname.hasError('required'))
        return 'Imię jest wymagane';
      else if (this.controls.firstname.hasError('pattern'))
        return 'Imię musi się zaczynać wielką literą i nie może zawierać liczb i znaków specjalnych';
      else return 'Imię musi mieć od 2 do 30 znaków';
    } else if (opt == 'surname') {
      if (this.controls.surname.hasError('required'))
        return 'Nazwisko jest wymagane';
      else if (this.controls.surname.hasError('pattern'))
        return 'Nazwisko musi się zaczynać wielką literą i nie może zawierać liczb i znaków specjalnych';
      else return 'Nazwisko musi mieć od 2 do 30 znaków';
    } else if (opt == 'email') {
      if (this.controls.email.hasError('required'))
        return 'Adres e-mail jest wymagany';
      else return 'Błędny format e-maila.';
    } else if (opt == 'phone') {
      if (this.controls.phone.hasError('required'))
        return 'Telefon jest wymagany';
      else return 'Telefon musi mieć format +00 000 000 000';
    } else if (opt == 'address') {
      if (this.controls.address.hasError('required'))
        return 'Adres jest wymagany';
      else return 'Adres musi mieć od 4 do 60 znaków';
    } else if (opt == 'postcode') {
      if (this.controls.postcode.hasError('required'))
        return 'Kod pocztowy jest wymagany';
      else return 'Kod pocztowy musi mieć format 00-000';
    } else {
      return 'Wystąpił błąd!';
    }
  }
}
