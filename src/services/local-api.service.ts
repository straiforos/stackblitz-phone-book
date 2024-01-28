import { Observable, of, Subject } from 'rxjs';
import { Entity } from '../interfaces/models/mixins/entity';
import { CRUD } from '../interfaces/services/mixins/CRUD';
import { uniqBy } from 'lodash';

export class LocalAPIService<T extends Entity> implements CRUD<T, number> {
  /**
   * In memory collection/datastore.
   */
  private _collection: T[] = [];
  set collection(collection: T[]) {
    // Set hidden collection array.
    this._collection = collection;
    // Update listeners to the collection.
    this.collectionSubject.next(this.collection);
  }
  get collection(): T[] {
    return this._collection;
  }
  /**
   * Supports O(1) lookup by Id.
   */
  private index: Map<number, T> = new Map();

  /**
   * Collection subject allows for listening for updates on the datastore.
   */
  protected collectionSubject: Subject<T[]> = new Subject();

  public create(
    model: Omit<T, 'id' | 'createdAt' | 'updatedAt'>
  ): Observable<T> {
    // Create the model by assigning an incremented id, and intializing the timestamps.
    const newModel: T = {
      ...model,
      id: ++this.collection.length,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as T;
    // Store new model in collection.
    this.collection.push(newModel);
    // Store model by id in the index for fast lookup.
    this.index.set(newModel.id, newModel);
    return of(newModel);
  }

  public read(id: number): Observable<T | undefined> {
    // Fetch from the index the model by id.
    const existingModel = this.index.get(id);
    return of(existingModel);
  }

  public update(model: T): Observable<T> {
    // Update the updatedAt timestamp.
    const updatedModel = { ...model, updatedAt: new Date() };
    // Add the model to the collection
    this.collection.push(updatedModel);
    // Remove duplicates instead of using a splice or indexof.
    this.collection = uniqBy(this.collection, 'id' as keyof Entity);
    // Replace the model in the index so no caches/stale entities can be returned.
    this.index.set(model.id, updatedModel);
    return of(updatedModel);
  }

  public delete(id: number): void {
    // Remove from the index by id.
    this.index.delete(id);
    // Replace collection based on index values that were updated avoiding a splice and indexOf operation.
    this.collection = [...this.index.values()];
  }

  /**
   * Returns all entities, utilizes a subject so the consumers can recieve updates
   * from the create, update, delete functionality.
   */
  public findAll(): Observable<T[]> {
    return this.collectionSubject.asObservable();
  }
}
