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

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookComponent,
    ContactFormComponent,
    NamePipe,
    PhoneNumberFormComponent,
    PhoneNumberPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, FormsModule],
  providers: [ContactsService, NamePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
