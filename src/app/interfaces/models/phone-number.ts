import { Entity } from './mixins/entity';

/**
 * A phone number to contact a person.
 * @see Entity
 */
export interface PhoneNumber extends Entity {
  phoneNumber: number;
  areaCode: '+1';
  type: 'mobile' | 'home' | 'work';
}
