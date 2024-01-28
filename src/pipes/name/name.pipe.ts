import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../../interfaces/models/person';
/**
 * First name Last name formatting.
 * example Person { firstName: 'Miles', lastName: 'Morales', middleName: 'Gonzalo', preferredName: 'Spider Man' } outputs: "Miles Morales"
 */
type FirstnameLastname = 'FL';
/**
 * Last name, First name formatting.
 * example Person { firstName: 'Miles', lastName: 'Morales', middleName: 'Gonzalo', preferredName: 'Spider Man' } outputs: "Morales, Miles"
 */
type LastnameFirstname = 'LF';

// TODO implement instructor credentials, preferred name, and middle name variants.
type FormatOptions = FirstnameLastname | LastnameFirstname;

@Pipe({
  name: 'name',
})
export class NamePipe implements PipeTransform {
  transform(person: Person, format: FormatOptions = 'FL'): any {
    const { firstName, lastName, middleName, credentials, preferredName } =
      person;
    let name = '';
    switch (format) {
      case 'FL':
        name = `${firstName} ${lastName}`;
        break;
      case 'LF':
        name = `${lastName}, ${firstName}`;
        break;
    }
    return name;
  }
}
