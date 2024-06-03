import { BaseEntity } from './baseEntity';
import NotImplementedError from '../errors/notImplementedError';
import { ActiveEntityStats } from './activeEntityStats';
import { EntitySpecies } from '../enums/entitySpecies';

export abstract class ActiveEntity extends BaseEntity implements IMovable {

  public stats: ActiveEntityStats;
  public species: EntitySpecies;
  public destinationX: number;
  public destinationY: number;

  protected _isMoving: boolean = false;
  protected _lastValidPositionX: number;
  protected _lastValidPositionY: number;
  
  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.type = 'ActiveEntity';
    this.stats = new ActiveEntityStats();
    this.destinationX = this.positionX;
    this.destinationY = this.positionY;
  }

  // Getters/Setters
  public get positionX(): number {
    return this._positionX;
  }

  public set positionX(v: number) {
    this._positionX = v;
    this.destinationX = v;
    this.setX(v);
  }

  public get positionY(): number {
    return this._positionY;
  }

  public set positionY(v: number) {
    this._positionY = v;
    this.destinationY = v;
    this.setY(v);
  }

  public move(): void {
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

  public setDestination(x: number, y: number): void {
    this.destinationX = x;
    this.destinationY = y;
  }

  public isMoving(): boolean {
    return this._isMoving;
  }

  public getSpeed(): number {
    // TODO: Check if needed, would return the velocity of the entity
    throw new NotImplementedError();
  }

  public getGravity(): number {
    // TODO: Check if needed, would be used if the entity could jump
    throw new NotImplementedError();
  }

  public setGravity(gravity: number): void {
    // TODO: Check if needed, would be used if the entity could jump
    throw new NotImplementedError();
  }

  public setOrientationRad(orientation: number) {
    this._orientation_rad = orientation;
  }

  abstract update(deltaTime: number): void;
  abstract reset(): void;
  abstract initializeAnimations(): void;
}
