import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { PhoneBookComponent } from './components/phone-book/phone-book.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ name }}</h1>
    <a target="_blank" href="https://registry.jsonresume.org/straiforos">
      Checkout my json Resume
    </a>
    <app-phonebook></app-phonebook>
  `,
  standalone: true,
  imports: [PhoneBookComponent],
})
export class App {
  name = 'Phonebook';
}

bootstrapApplication(App);
