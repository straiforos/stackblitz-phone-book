import { Entity } from './mixins/entity';

/**
 * A person has a name and sometimes credentials if they are an advanced student or instructor.
 * @see Entity
 */
export interface Person extends Entity {
  firstName: string;
  lastName: string;
  middleName: string;
  credentials?: 'PhD';
  preferredName?: string;
}
