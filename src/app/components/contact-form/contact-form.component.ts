import { Component } from '@angular/core';
import { Contact as IContact } from '@interfaces/models';
import { Contact } from '@models/contact.model';
import { ContactsService } from '@services/contacts/contacts.service';
import { Observable, switchMap } from 'rxjs';
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
    const createOrUpdateContact: Observable<Contact> = this.contact.id
      ? this.contactService.update(this.contact)
      : this.contactService.create(this.contact);

    createOrUpdateContact
      .pipe(switchMap(() => fromPromise(this.router.navigate(['/phone-book']))))
      .subscribe();
  }

  addPhoneNumber() {
    this.contact.numbers.push(new PhoneNumber({}));
  }
}
