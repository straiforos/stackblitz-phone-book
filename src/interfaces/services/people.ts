import { Person } from "../models/person";
import { CRUD } from "./mixins/CRUD";

/**
 * Manages people stored in the application for many to many relationship.
 * @see Person
 */
export interface PeopleAPI extends CRUD<Person, number> {}