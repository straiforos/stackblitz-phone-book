import { Injectable } from '@angular/core';
import { Contact as IContact, Person } from '@interfaces/models';
import { ContactsAPI } from '@interfaces/services/contacts';
import { LocalAPIService } from '../local-api.service';
import { PhoneNumber } from '@interfaces/models/phone-number';
import { map, Observable } from 'rxjs';
import { Contact } from '@models/contact.model';

@Injectable()
export class ContactsService
  extends LocalAPIService<IContact>
  implements ContactsAPI
{
  // Maps allow for O(1) look up for many to many relationships.
  private phoneNumberToPeopleMap: Map<number, Person[]> = new Map();
  private personIdToPhoneNumbersMap: Map<number, PhoneNumber[]> = new Map();

  constructor() {
    super();
  }

  override create(
    model: Omit<Contact, 'id' | 'createdAt' | 'updatedAt'>,
  ): Observable<Contact> {
    return super.create(model).pipe(map((c) => new Contact(c)));
  }

  override read(id: number): Observable<Contact | undefined> {
    return super.read(id).pipe(map((c) => (c ? new Contact(c) : c)));
  }

  // TODO override create, update, delete to manipulate the relationship maps.
}
