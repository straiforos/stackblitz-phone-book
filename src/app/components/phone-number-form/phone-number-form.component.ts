import { Component, Input } from '@angular/core';
import { PhoneNumber } from '@interfaces/models';

@Component({
  selector: 'app-phone-number-form',
  templateUrl: './phone-number-form.component.html',
  styleUrls: ['./phone-number-form.component.scss'],
})
export class PhoneNumberFormComponent {
  get phone(): PhoneNumber {
    return this._phone as PhoneNumber;
  }

  @Input({ required: true }) set phone(value: PhoneNumber) {
    this._phone = value;
  }
  private _phone: PhoneNumber | null = null;
}
