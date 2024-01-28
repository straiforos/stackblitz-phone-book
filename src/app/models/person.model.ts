import { Person as IPerson } from '../interfaces/models/person';
import { Entity } from './entity/entity.model';

export class Person extends Entity implements IPerson {
  firstName: string;
  lastName: string;
  middleName: string;
  preferredName?: string;
  constructor(personModel: IPerson) {
    super(personModel);
    const { firstName, lastName, middleName, preferredName } = personModel;
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.preferredName = preferredName;
  }
}
