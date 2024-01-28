// import { isArray } from 'lodash';
import { Contact as IContact } from '../interfaces/models/contact';
import { PhoneNumber } from '../interfaces/models/phone-number';
import { Person } from './person.model';

export class Contact extends Person implements IContact {
  numbers: PhoneNumber[] = [];
  constructor(contactModel: IContact) {
    super(contactModel);
    const { numbers } = contactModel;
    if (numbers && numbers.length > 0) this.numbers = numbers;
  }
}
