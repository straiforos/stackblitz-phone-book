import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { Contact as IContact } from '@interfaces/models';
import { ContactsService } from '@services/contacts/contacts.service';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css'],
})
export class PhoneBookComponent {
  constructor(private contactsService: ContactsService) {}
  public contacts: Observable<IContact[]> = this.contactsService
    .findAll()
    .pipe(takeUntilDestroyed());

  search($event: Event) {
    // TODO fuzzy search for contacts on any data stored.
  }
}
