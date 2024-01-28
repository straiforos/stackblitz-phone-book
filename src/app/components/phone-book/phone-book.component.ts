import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { Contact as IContact } from '../../interfaces/models/contact';
import { NamePipe } from '../../pipes/name/name.pipe';
import { ContactsService } from '../../services/contacts/contacts.service';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent {
  constructor(private contactsService: ContactsService) {}
  public contacts: Observable<IContact[]> = this.contactsService
    .findAll()
    .pipe(takeUntilDestroyed());
}
