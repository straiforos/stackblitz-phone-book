import { Entity } from './mixins/entity';

/**
 * A person has many names.
 * @see Entity
 */
export interface Person extends Entity {
  firstName: string;
  lastName: string;
  middleName: string;
  preferredName?: string;
}
