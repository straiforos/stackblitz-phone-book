import { PhoneNumber } from '../models/phone-number';
import { CRUD } from './mixins/CRUD';

/**
 * Manages phone numbers stored in the application for many-to-many relationship.
 * @see PhoneNumber
 */
export interface PhoneNumbersAPI extends CRUD<PhoneNumber, number> {}
