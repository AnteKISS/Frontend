import { BaseEntity } from './baseEntity';
import NotImplementedError from '../errors/notImplementedError';

export abstract class ActiveEntity extends BaseEntity implements IMovable {

  protected _stats: ActiveEntityStats;
  protected _species: EntitySpecies;
  protected _destination: MapCoordinateEntity;
  
  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.type = 'ActiveEntity';
  }

  // Getters/Setters
  public get stats(): ActiveEntityStats {
    return this._stats;
  }

  public set stats(v: ActiveEntityStats) {
    this._stats = v;
  }

  public get species(): EntitySpecies {
    return this._species;
  }

  public set species(v: EntitySpecies) {
    this._species = v;
  }

  // Methods
  move(coordinate: MapCoordinateEntity): void {
    throw new NotImplementedError();
  }

  setDestination(coordinate: MapCoordinateEntity): void {
    this._destination = coordinate;
  }

  getDestination(): MapCoordinateEntity {
    return this._destination;
  }

  getBaseMovementSpeed(): number {
    return this.stats.baseMovementSpeed;
  }

  setBaseMovementSpeed(speed: number): void {
    this.stats.baseMovementSpeed = speed;
  }

  getMovementSpeed(): number {
    return this.stats.movementSpeed;
  }

  setMovementSpeed(speed: number): void {
    this.stats.movementSpeed = speed;
  }

  getSpeed(): number {
    // TODO: Check if needed, would return the velocity of the entity
    throw new NotImplementedError();
  }

  getGravity(): number {
    // TODO: Check if needed, would be used if the entity could jump
    throw new NotImplementedError();
  }

  setGravity(gravity: number): void {
    // TODO: Check if needed, would be used if the entity could jump
    throw new NotImplementedError();
  }

  abstract update(deltaTime: number): void;
  abstract reset(): void;
  abstract initializeAnimations(): void;
  abstract updateOrientation(): void;
}