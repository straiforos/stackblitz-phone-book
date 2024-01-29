import { Component, Input } from '@angular/core';
import { Contact } from '@interfaces/models';

@Component({
  selector: 'app-phone-book-list',
  templateUrl: './phone-book-list.component.html',
  styleUrls: ['./phone-book-list.component.scss'],
})
export class PhoneBookListComponent {
  @Input({ required: true }) contacts: Contact[] | null = [];
  @Input() emptyMessage: string = 'Please add a contact';
}
