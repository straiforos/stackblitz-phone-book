import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Application declarations
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsService } from './services';
import { NamePipe } from './pipes';
import { ContactFormComponent, PhoneBookComponent } from './components';
import { PhoneNumberFormComponent } from './components/phone-number-form/phone-number-form.component';
import { PhoneNumberPipe } from '@pipes/phone-number/phone-number.pipe';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { EditContactDirective } from '@directives/edit-contact/edit-contact.directive';
import { PhoneBookListComponent } from './components/phone-book-list/phone-book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookComponent,
    ContactFormComponent,
    NamePipe,
    PhoneNumberFormComponent,
    PhoneNumberPipe,
    EditContactComponent,
    EditContactDirective,
    PhoneBookListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, FormsModule],
  providers: [ContactsService, NamePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
