import { BehaviorSubject, Observable, of } from 'rxjs';
import { Entity } from '@interfaces/models/mixins/entity';
import { CRUD } from '@interfaces/services';

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
  protected collectionSubject: BehaviorSubject<T[]> = new BehaviorSubject(
    [] as T[],
  );

  public create(
    model: Omit<T, 'id' | 'createdAt' | 'updatedAt'>,
  ): Observable<T> {
    // Create the model by assigning an incremented id, and initializing the timestamps.
    const autoIncrement = this.collection.length;
    const id = autoIncrement + 1;
    const newModel: T = {
      ...model,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as T;
    // Store new model in collection.
    this.collection.push(newModel);
    // Store model by id in the index for fast lookup.
    this.index.set(newModel.id, newModel);
    this.collection = this.collection;
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

    // Lodash types import has issues in stackblitz, so I resorted to indexOf and splice.
    const existingModel = this.index.get(model.id);
    const indexOfModel = !!existingModel
      ? this.collection.indexOf(existingModel)
      : -1;
    // Update the model in the collection using index. If no index we just add it to the collection.
    if (indexOfModel >= 0) {
      this.collection[indexOfModel] = updatedModel;
    } else {
      this.collection.push(updatedModel);
    }
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
   * Returns all entities, utilizes a subject so the consumers can receive updates
   * from the create, update, delete functionality.
   */
  public findAll(): Observable<T[]> {
    return this.collectionSubject.asObservable();
  }
}
