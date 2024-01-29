import { Component } from '@angular/core';
import { ContactsService } from '@services/contacts/contacts.service';
import { Observable, of } from 'rxjs';
import { Contact } from '@interfaces/models';

@Component({
  selector: 'app-dial',
  templateUrl: './dial.component.html',
  styleUrls: ['./dial.component.scss'],
})
export class DialComponent {
  constructor(private contactService: ContactsService) {}
  private _phoneNumber: string = '';
  contactsFound: Observable<Contact[]> = of([]);
  get phoneNumber(): string {
    return this._phoneNumber;
  }

  /**
   * Allows for triggering search.
   * @param value
   */
  set phoneNumber(phoneNumber: string) {
    this._phoneNumber = phoneNumber;
    this.contactsFound = this.contactService.searchByPhoneNumber(
      this._phoneNumber,
    );
  }
}
