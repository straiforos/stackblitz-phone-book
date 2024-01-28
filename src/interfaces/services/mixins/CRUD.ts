import { Observable } from 'rxjs';
import { Entity } from '../../models/mixins/entity';

/**
 * Defines Create Read Update Delete functionality to be reused across services.
 */
export interface CRUD<T extends Entity, I> {
  /**
   * Creates new entity, expects the entity has no id, or timestamps.
   */
  create(model: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): Observable<T>;
  /**
   * Read value from datastore by id.
   * Could be undefined if no value exists.
   */
  read(id: I): Observable<T | undefined>;
  /**
   * Update entity in datastore.
   */
  update(model: T): Observable<T>;
  /**
   * Deletes model in datastore.
   */
  delete(id: I): void;
  /**
   * Returns all stored entities.
   */
  findAll(): Observable<T[]>;
}
