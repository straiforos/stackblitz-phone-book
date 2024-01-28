import { PhoneNumber as IPhoneNumber } from '../interfaces/models/phone-number';
import { Entity } from './entity/entity.model';

export class PhoneNumber extends Entity implements IPhoneNumber {
  phoneNumber: number;
  areaCode: '+1';
  type: 'mobile' | 'home' | 'work';
  constructor(phoneNumberModel: IPhoneNumber) {
    super(phoneNumberModel);
    const { phoneNumber, areaCode, type } = phoneNumberModel;
    this.phoneNumber = phoneNumber;
    this.areaCode = areaCode;
    this.type = type;
  }
}
