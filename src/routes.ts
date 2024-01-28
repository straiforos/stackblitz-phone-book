import { Routes } from "@angular/router";
import { PhoneBookComponent } from "./components/phone-book/phone-book.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";

export const routes: Routes = [
  { path: "phone-book", component: PhoneBookComponent },
  {
    path: "add-contact",
    component: ContactFormComponent,
  },
  {
    path: "",
    redirectTo: "phone-book",
    pathMatch: "prefix",
  },
];
