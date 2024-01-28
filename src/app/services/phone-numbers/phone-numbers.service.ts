import { Injectable } from '@angular/core';
// TODO clean up imports with index file.
import { PhoneNumber } from '@interfaces/models/phone-number';
import { PhoneNumbersAPI } from '@interfaces/services/phone-numbers';
import { LocalAPIService } from '../local-api.service';

@Injectable()
export class PhoneNumbersService
  extends LocalAPIService<PhoneNumber>
  implements PhoneNumbersAPI
{
  private areaCodesToPhoneNumbers: Map<string, any[]> = new Map();
  constructor() {
    super();
  }

  // TODO override each method to allow for the map to be populated by area code.
}
