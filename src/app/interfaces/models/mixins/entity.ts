/**
 * Entity is an abstraction usually used at the persistence level.
 * Supports unique identifier, and timestamps.
 */
export interface Entity {
  createdAt: Date;
  updatedAt: Date;
  id: number;
}
