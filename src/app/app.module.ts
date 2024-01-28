import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactsService } from './services/contacts/contacts.service';
import { NamePipe } from './pipes/name/name.pipe';
import { ContactFormComponent, PhoneBookComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookComponent,
    ContactFormComponent,
    NamePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, FormsModule],
  providers: [ContactsService, NamePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
