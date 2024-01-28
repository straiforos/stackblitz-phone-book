import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber',
})
export class PhoneNumberPipe implements PipeTransform {
  transform(phone: string): unknown {
    // Transform phone number to the (XXX) XXX-XXXX format.
    return phone.length === 10
      ? `(${phone.substring(0, 3)}) ${phone.substring(3, 6)}-${phone.substring(
          6,
          10,
        )} `
      : phone;
  }
}
