import { Injectable } from '@angular/core';
import { Contact } from '../../interfaces/models/contact';
import { Person } from '../../interfaces/models/person';
import { ContactsAPI } from '../../interfaces/services/contacts';
import { PhoneNumberPipe } from '../../pipes/phone-number/phone-number.pipe';
import { LocalAPIService } from '../local-api.service';

@Injectable()
export class ContactsService
  extends LocalAPIService<Contact>
  implements ContactsAPI
{
  private contacts: [] = [];
  // Maps allow for O(1) look up for many to many relationships.
  private phoneNumberToPeopleMap: Map<number, Person[]> = new Map();
  private personIdToPhonenumbersMap: Map<number, PhoneNumberPipe[]> = new Map();

  constructor() {
    super();
  }

  // TODO override create, update, delete to manipulate the relationship maps.
}
