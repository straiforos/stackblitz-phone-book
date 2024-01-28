import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent, PhoneBookComponent } from './components';

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
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
