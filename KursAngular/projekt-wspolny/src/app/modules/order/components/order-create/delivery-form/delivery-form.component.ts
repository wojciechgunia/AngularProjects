import { GetDelivery } from './../../../../core/models/delivery.model';
import { DeliveryService } from './../../../../core/services/delivery.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DeliveryForm } from 'src/app/modules/core/models/forms.model';
import { FormService } from 'src/app/modules/core/services/form.service';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.scss'],
})
export class DeliveryFormComponent implements OnInit {
  deliverForm: FormGroup<DeliveryForm> = this.formService.initDeliverForm();
  deliveries: GetDelivery[] = [];
  error: string | null = null;

  constructor(
    private formService: FormService,
    private deliveryService: DeliveryService,
  ) {}

  ngOnInit(): void {
    this.deliveryService.getDelivery().subscribe({
      next: (delivers) => {
        this.deliveries = [...delivers];
      },
      error: (err) => {
        this.error = err;
      },
    });
  }

  get controls() {
    return this.deliverForm.controls;
  }

  getErrorMessage(typ: string, control: FormControl): string {
    return this.formService.getErrorMessage(typ, control);
  }
}
