import { Person } from './person';
import { PhoneNumber } from './phone-number';

/**
 * A contact is a person that has numbers of various types; Home, Mobile, Work etc.
 * @see Person
 * @see PhoneNumber
 */
export interface Contact extends Person {
  numbers: PhoneNumber[];
}
