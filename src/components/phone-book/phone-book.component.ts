import { Component } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Observable, tap } from "rxjs";
import { Contact as IContact } from "../../interfaces/models/contact";
import { ContactsService } from "../../services/contacts/contacts.service";

@Component({
  selector: "app-phone-book",
  templateUrl: "./phone-book.component.html",
  styleUrls: ["./phone-book.component.css"],
})
export class PhoneBookComponent {
  constructor(private contactsService: ContactsService) {}
  public contacts: Observable<IContact[]> = this.contactsService
    .findAll()
    .pipe(takeUntilDestroyed(), tap(console.log));
}
