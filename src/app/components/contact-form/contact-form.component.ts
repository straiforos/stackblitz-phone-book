import { Component } from '@angular/core';
import { Contact as IContact } from '../../interfaces/models/contact';
import { Contact } from '../../models/contact.model';
import { ContactsService } from '../../services/contacts/contacts.service';
import { switchMap } from 'rxjs';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { Router } from '@angular/router';
import { PhoneNumber } from '@models/phone-number.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  contact: IContact = new Contact({} as IContact);

  constructor(
    private contactService: ContactsService,
    private router: Router,
  ) {}

  submit() {
    this.contactService
      .create(this.contact)
      .pipe(switchMap(() => fromPromise(this.router.navigate(['/phone-book']))))
      .subscribe();
  }

  toggleCredentials() {
    if (this.contact.credentials) this.contact.credentials = undefined;
    else this.contact.credentials = 'PhD';
  }

  addPhoneNumber() {
    this.contact.numbers.push(new PhoneNumber({}));
  }
}
