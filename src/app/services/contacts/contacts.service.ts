import { Injectable } from '@angular/core';
import { Contact as IContact, Person } from '@interfaces/models';
import { ContactsAPI } from '@interfaces/services/contacts';
import { LocalAPIService } from '../local-api.service';
import { PhoneNumber } from '@interfaces/models/phone-number';
import { map, Observable, of, tap } from 'rxjs';
import { Contact } from '@models/contact.model';
import { uniqBy } from 'lodash';
import { NamePipe } from '@pipes/name/name.pipe';

@Injectable()
export class ContactsService
  extends LocalAPIService<IContact>
  implements ContactsAPI
{
  // Maps allow for O(1) look up for many-to-many relationships.
  private phoneNumberToPeopleMap: Map<string, IContact[]> = new Map();

  constructor(private namePipe: NamePipe) {
    super();
  }

  override create(
    model: Omit<Contact, 'id' | 'createdAt' | 'updatedAt'>,
  ): Observable<Contact> {
    return super.create(model).pipe(
      map((c) => new Contact(c)),
      tap((c) => {
        for (const phone of c.numbers) {
          this.updatePhoneNumberIndex(phone, c);
        }
      }),
    );
  }

  protected updatePhoneNumberIndex(phone: PhoneNumber, contact: IContact) {
    // Check if we have seen this phone number before.
    if (this.phoneNumberToPeopleMap.has(phone.phoneNumber)) {
      // We need to preserve the matching contacts, so we store them temporarily.
      const existingContacts = this.phoneNumberToPeopleMap.get(
        phone.phoneNumber,
      );
      const peopleArray: Contact[] = [contact];
      // We join the matching people to the newly added contact allowing for quick look up by phone number.
      this.phoneNumberToPeopleMap.set(
        phone.phoneNumber,
        existingContacts ? existingContacts.concat(peopleArray) : peopleArray,
      );
    } else {
      this.phoneNumberToPeopleMap.set(phone.phoneNumber, [contact]);
    }
  }
  override update(model: Contact): Observable<Contact> {
    return super.update(model).pipe(
      map((c) => new Contact(c)),
      tap((c) => {
        for (const phone of c.numbers) {
          this.updatePhoneNumberIndex(phone, c);
        }
      }),
    );
  }

  override delete(id: number) {
    const matchingContacts = this.collection.filter((c) => id === c.id);
    for (let contact of matchingContacts) {
      for (let phone of contact.numbers) {
        // Check the map for the phone number
        if (this.phoneNumberToPeopleMap.has(phone.phoneNumber)) {
          // If it exists we need to remove the matching contact from the list.
          const existingContacts = this.phoneNumberToPeopleMap.get(
            phone.phoneNumber,
          );
          // We remove the contact from the phone number index/map so we do not show stale results.
          if (existingContacts)
            this.phoneNumberToPeopleMap.set(
              phone.phoneNumber,
              existingContacts.filter((c) => id === c.id),
            );
        }
      }
    }
    super.delete(id);
  }

  override read(id: number): Observable<Contact | undefined> {
    return super.read(id).pipe(map((c) => (c ? new Contact(c) : c)));
  }

  searchByName(fullName: string): Observable<Contact[]> {
    // Rely on full name formatting the name pipe provides, and check if the name matches.
    return of(this.collection).pipe(
      map((contacts) =>
        contacts.filter((contact) =>
          this.namePipe
            .transform(contact as Person, 'FMLP')
            .toLowerCase()
            .includes(fullName.toLowerCase()),
        ),
      ),
    );
  }

  searchByPhoneNumber(phone: string): Observable<Contact[]> {
    const phoneNumbers = this.phoneNumberToPeopleMap.keys();
    let matchingContacts: IContact[] = [];
    for (const phoneNumber of phoneNumbers) {
      if (phoneNumber.includes(phone))
        matchingContacts = matchingContacts.concat(
          this.phoneNumberToPeopleMap.get(phoneNumber) as IContact[],
        );
    }
    return of(matchingContacts ? uniqBy(matchingContacts, 'id') : []);
  }
}
