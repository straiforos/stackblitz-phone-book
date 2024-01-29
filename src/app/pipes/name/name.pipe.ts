import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '@interfaces/models/person';
/**
 * First name Last name formatting.
 * example Person { firstName: 'Miles', lastName: 'Morales', middleName: 'Gonzalo', preferredName: 'Spider-Man' } outputs: "Miles Morales"
 */
type FirstnameLastname = 'FL';
/**
 * Last name, First name formatting.
 * example Person { firstName: 'Miles', lastName: 'Morales', middleName: 'Gonzalo', preferredName: 'Spider-Man' } outputs: "Morales, Miles"
 */
type LastnameFirstname = 'LF';

/**
 * Used for fuzzy search against a full name.
 * example Person { firstName: 'Miles', lastName: 'Morales', middleName: 'Gonzalo', preferredName: 'Spider-Man' } outputs: "Spider-Man (Miles) Gonzalo Morales"
 */
type FullName = 'FMLP';

// TODO implement instructor credentials, preferred name, and middle name variants.
type FormatOptions = FirstnameLastname | LastnameFirstname | FullName;

@Pipe({
  name: 'name',
})
export class NamePipe implements PipeTransform {
  transform(person: Person, format: FormatOptions = 'FL'): string {
    const { firstName, lastName, middleName, preferredName } = person;
    let name = '';
    switch (format) {
      case 'FL':
        name = `${firstName} ${lastName}`;
        break;
      case 'LF':
        name = `${lastName}, ${firstName}`;
        break;
      case 'FMLP':
        name = `${preferredName ? preferredName : ''} (${firstName}) ${
          middleName ? middleName : ''
        } ${lastName}`;
        break;
    }
    return name;
  }
}
