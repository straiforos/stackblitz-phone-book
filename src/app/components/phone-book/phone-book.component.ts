import { Component, DestroyRef } from '@angular/core';
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
  constructor(
    private contactsService: ContactsService,
    private destroyRef: DestroyRef,
  ) {}
  public contacts: Observable<IContact[]> = this.contactsService
    .findAll()
    .pipe(takeUntilDestroyed());
  private _nameSearch: string = '';

  get nameSearch(): string {
    return this._nameSearch;
  }

  set nameSearch(value: string) {
    this._nameSearch = value;
    this.search(this._nameSearch);
  }
  search(fullName: string) {
    if (fullName)
      this.contacts = this.contactsService
        .searchByName(fullName)
        .pipe(takeUntilDestroyed(this.destroyRef));
    else
      this.contacts = this.contactsService
        .findAll()
        .pipe(takeUntilDestroyed(this.destroyRef));
  }
}
