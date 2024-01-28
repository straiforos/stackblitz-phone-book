import { Entity as IEntity } from '../../interfaces/models/mixins/entity';

export class Entity implements IEntity {
  createdAt: Date;
  updatedAt: Date;
  id: number;

  constructor(entityModel: IEntity) {
    const { createdAt, updatedAt, id } = entityModel;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.id = id;
  }
}
