import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ContactFormComponent,
  DialComponent,
  PhoneBookComponent,
} from './components';
import { contactResolver } from './resolvers/contact.resolver';
import { EditContactComponent } from '@components/edit-contact/edit-contact.component';

export const routes: Routes = [
  { path: 'phone-book', component: PhoneBookComponent },
  {
    path: 'contact',
    children: [
      {
        path: 'add',
        component: ContactFormComponent,
      },
      {
        path: ':id',
        component: EditContactComponent,
        resolve: { contact: contactResolver },
      },
    ],
  },
  {
    path: 'dial',
    component: DialComponent,
  },
  {
    path: '**',
    redirectTo: 'phone-book',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
