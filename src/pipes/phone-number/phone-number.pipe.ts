import { Pipe, PipeTransform } from '@angular/core';

/**
 * Supports formatting a number to a localized phone number format: (XXX) XXX-XXXX
 */
@Pipe({
  name: 'phoneNumber',
})
export class PhoneNumberPipe implements PipeTransform {
  transform(value: number, args?: any): any {
    const phoneNumberString: string = value?.toString();
    return phoneNumberString?.length === 10
      ? `(${phoneNumberString.substring(0, 2)}) ${phoneNumberString.substring(
          3,
          6
        )}-${phoneNumberString.substring(
          phoneNumberString.length - 4,
          phoneNumberString.length
        )}`
      : '';
  }
}
