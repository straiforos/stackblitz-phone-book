import { Contact } from '../models/contact';
import { CRUD } from './mixins/CRUD';
import { Observable } from 'rxjs';

/**
 * Manages contacts stored in the application for many-to-many relationship between people and their phone numbers that could be shared.
 * Example: My grandparents use the same home phone/landline. My god parents share a cellphone for a home phone etc.
 * @see PeopleAPI
 * @see PhoneNumbersAPI
 */
export interface ContactsAPI extends CRUD<Contact, number> {
  searchByPhoneNumber(phone: string): Observable<Contact[]>;
  searchByName(fullName: string): Observable<Contact[]>;
}
