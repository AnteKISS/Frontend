import { BaseEntity } from './baseEntity';
import NotImplementedError from '../errors/notImplementedError';
import { ActiveEntityStats } from './activeEntityStats';
import { EntitySpecies } from '../enums/entitySpecies';
import { ActiveEntityAnimator } from './activeEntityAnimator';
import { MathModule } from '../utilities/mathModule';
import { ActiveEntityAnimationState } from './entityState';

export abstract class ActiveEntity extends BaseEntity implements IMovable {

  public currentAnimationState: ActiveEntityAnimationState;
  public stats: ActiveEntityStats;
  public species: EntitySpecies;
  public destinationX: number;
  public destinationY: number;
  public target: BaseEntity | null;
  public animator: ActiveEntityAnimator;
  public lastValidPositionX: number;
  public lastValidPositionY: number;
  
  protected _isMoving: boolean = false;
  
  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.type = 'ActiveEntity';
    this.stats = new ActiveEntityStats();
    this.destinationX = this.positionX;
    this.destinationY = this.positionY;
    this.currentAnimationState = new ActiveEntityAnimationState();
    this.currentAnimationState.state = ActiveEntityAnimationState.State.IDLE;
    this.isTargetable = true;
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

  public updatePosition(): void {

    if (this.isDestinationReached()) {
      this.destinationX = this.positionX;
      this.destinationY = this.positionY;
      return;
    }

    let isEntityColliding: Boolean = this.collider.checkEntityCollision();
    if (isEntityColliding) {
      this.positionX = this.lastValidPositionX;
      this.positionY = this.lastValidPositionY;
      return;
    }

    this._isMoving = true;
    let distance: number = this.stats.movementSpeed * (window['deltaTime'] / 1000);
    let distanceMultiplier: number = 1 - (Math.abs(Math.sin(this._orientation_rad)) / 2);
    distance *= distanceMultiplier;
    let deltaX: number = distance * Math.cos(this._orientation_rad);
    let deltaY: number = distance * Math.sin(this._orientation_rad);
    this.lastValidPositionX = this._positionX;
    this.lastValidPositionY = this._positionY;
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

  public isDestinationReached(): boolean {
    return MathModule.isValueInThreshold(this.positionX, this.destinationX, 1) && 
      MathModule.isValueInThreshold(this.positionY, this.destinationY, 1);
  }

  abstract update(time: number, deltaTime: number): void;
  abstract reset(): void;
  abstract initializeAnimations(): void;
}
