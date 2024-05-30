import { BaseEntity } from './baseEntity';
import NotImplementedError from '../errors/notImplementedError';
import { ActiveEntityStats } from './activeEntityStats';
import { EntitySpecies } from '../enums/entitySpecies';

export abstract class ActiveEntity extends BaseEntity implements IMovable {

  protected _stats: ActiveEntityStats;
  protected _species: EntitySpecies;
  protected _destinationX: number;
  protected _destinationY: number;
  protected _isMoving: boolean = false;

  protected _lastValidPositionX: number;
  protected _lastValidPositionY: number;

  public frameCount: number = 0;
  
  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.type = 'ActiveEntity';
    this.stats = new ActiveEntityStats();
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

  public get positionX(): number {
    return this._positionX;
  }

  public set positionX(v: number) {
    this._positionX = v;
    this._destinationX = v;
    this.setX(v);
  }

  public get positionY(): number {
    return this._positionY;
  }

  public set positionY(v: number) {
    this._positionY = v;
    this._destinationY = v;
    this.setY(v);
  }

  move(): void {
    this._isMoving = true;
    let distance: number = this.stats.movementSpeed * (window['deltaTime'] / 1000);
    let distanceMultiplier: number = 1 - (Math.abs(Math.sin(this._orientation_rad)) / 2);
    distance *= distanceMultiplier;
    let deltaX: number = distance * Math.cos(this._orientation_rad);
    let deltaY: number = distance * Math.sin(this._orientation_rad);
    this._lastValidPositionX = this._positionX;
    this._lastValidPositionY = this._positionY;
    this._positionX += deltaX;
    this.setX(this.x + deltaX);
    this._positionY += deltaY;
    this.setY(this.y + deltaY);
  }

  setDestination(x?: number, y?: number): void {
    if (x) {
      this._destinationX = x;
    }
    if (y) {
      this._destinationY = y;
    }
  }

  getDestinationX(): number {
    return this._destinationX;
  }

  getDestinationY(): number {
    return this._destinationY;
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

  isMoving(): boolean {
    return this._isMoving;
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
}