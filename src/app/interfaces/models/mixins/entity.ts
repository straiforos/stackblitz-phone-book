
/**
 * Entity is a abstraction usually used at the persistance level. 
 * Supports unique identifier, and timestamps.
 */
export interface Entity {
  createdAt: Date;
  updatedAt: Date;
  id: number;
}