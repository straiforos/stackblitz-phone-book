import { ApplicationConfig, Component, NgModule } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import "zone.js";
import { PhoneBookComponent } from "./components/phone-book/phone-book.component";
import { provideRouter, RouterModule, RouterOutlet } from "@angular/router";
import { routes } from "./routes";
import { CommonModule } from "@angular/common";
import { NamePipe } from "./pipes/name/name.pipe";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { ContactsService } from "./services/contacts/contacts.service";
import { FormsModule } from "@angular/forms";

const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
@Component({
  selector: "app-root",
  template: `<router-outlet></router-outlet>`,
})
export class App {
  name = "Phonebook";
}

@NgModule({
  imports: [RouterOutlet, FormsModule, CommonModule, NamePipe, RouterModule],
  providers: [ContactsService, NamePipe],
  declarations: [PhoneBookComponent, ContactFormComponent],
})
export class PhoneBook {}

bootstrapApplication(App, appConfig);
