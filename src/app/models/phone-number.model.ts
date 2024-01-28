import { PhoneNumber as IPhoneNumber } from '../interfaces/models/phone-number';
import { Entity } from './entity/entity.model';

export class PhoneNumber extends Entity implements IPhoneNumber {
  phoneNumber: string = '';
  areaCode: '+1' = '+1';
  type: 'mobile' | 'home' | 'work' = 'home';
  constructor(phoneNumberModel: Partial<IPhoneNumber>) {
    super(phoneNumberModel as IPhoneNumber);
    const { phoneNumber, areaCode, type } = phoneNumberModel as IPhoneNumber;
    if (phoneNumber) this.phoneNumber = phoneNumber;
    if (areaCode) this.areaCode = areaCode;
    if (type) this.type = type;
  }
}
