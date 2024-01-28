// import { isArray } from 'lodash';
// TODO document open issue with lodash in stackblitz
import {
  PhoneNumber as IPhoneNumber,
  Contact as IContact,
} from '@interfaces/models';
import { Person } from './person.model';
import { PhoneNumber } from '@models/phone-number.model';

export class Contact extends Person implements IContact {
  numbers: IPhoneNumber[] = [];
  constructor(contactModel: IContact) {
    super(contactModel);
    const { numbers } = contactModel;
    if (numbers && numbers.length > 0)
      this.numbers = numbers.map((n) => new PhoneNumber(n));
  }
}
