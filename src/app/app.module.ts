import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Application declarations
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsService } from './services';
import { NamePipe, PhoneNumberPipe } from './pipes';
import {
  ContactFormComponent,
  DialComponent,
  EditContactComponent,
  PhoneBookComponent,
  PhoneBookListComponent,
  PhoneNumberFormComponent,
} from './components';
import { EditContactDirective } from './directives';

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
    DialComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, FormsModule],
  providers: [ContactsService, NamePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
