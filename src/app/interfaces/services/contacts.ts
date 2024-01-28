import { Contact } from '../models/contact';
import { CRUD } from './mixins/CRUD';

/**
 * Manages contacts stored in the application for many-to-many relationship between people and their phone numbers that could be shared.
 * Example: My grandparents use the same home phone/landline. My god parents share a cellphone for a home phone etc.
 * @see PeopleAPI
 * @see PhoneNumbersAPI
 */
export interface ContactsAPI extends CRUD<Contact, number> {}
