import { Component } from '@angular/core';
import { Contact as IContact } from '../../interfaces/models/contact';
import { Contact } from '../../models/contact.model';
import { ContactsService } from '../../services/contacts/contacts.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contact: IContact = new Contact({} as IContact);

  constructor(private contactService: ContactsService) {}

  submit() {
    this.contactService.create(this.contact);
  }

  toggleCredentials() {
    if (this.contact.credentials) this.contact.credentials = undefined;
    else this.contact.credentials = 'PhD';
  }
}
