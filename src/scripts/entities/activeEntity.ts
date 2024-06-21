import { BaseEntity } from './baseEntity';
import NotImplementedError from '../errors/notImplementedError';
import { ActiveEntityStats } from './activeEntityStats';
import { EntitySpecies } from '../enums/entitySpecies';
import { ActiveEntityAnimator } from './activeEntityAnimator';
import { MathModule } from '../utilities/mathModule';
import { ActiveEntityAnimationState } from './entityState';
import { EntityOrientation } from '../enums/entityOrientation';
import { Physics } from '../physics/collider';

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

    let collisionInfo: Physics.CollisionInformation = this.collider.checkCollisions();
    let isEntityColliding: Boolean = collisionInfo.collidingEntity !== null;
    if (isEntityColliding) {
      // Get angle between the entity and the colliding entity and make the entity move in the opposite direction
      let angle = Math.atan2(this.positionY - collisionInfo.collidingEntity!.positionY, this.positionX - collisionInfo.collidingEntity!.positionX);
      this.positionX += Math.cos(angle) * 2;
      this.positionY += Math.sin(angle) * 2;
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

  public updateOrientationWithTarget(): boolean {
    if (this.target == null) {
      return false;
    }
    this.setOrientationRad(Phaser.Math.Angle.Between(this.positionX, this.positionY, this.target.positionX, this.target.positionY));
    let orientation_deg = Phaser.Math.RadToDeg(this._orientation_rad);
    let currentOrientation = this.orientation;
    if ((orientation_deg >= -22.5 && orientation_deg < 0) || (orientation_deg >= 0 && orientation_deg < 22.5)) {
      this.orientation = EntityOrientation.RIGHT;
    } else if (orientation_deg >= 22.5 && orientation_deg < 67.5) {
      this.orientation = EntityOrientation.DOWN_RIGHT;
    } else if (orientation_deg >= 67.5 && orientation_deg < 112.5) {
      this.orientation = EntityOrientation.DOWN;
    } else if (orientation_deg >= 112.5 && orientation_deg < 157.5) {
      this.orientation = EntityOrientation.DOWN_LEFT;
    } else if ((orientation_deg >= 157.5 && orientation_deg <= 180) || (orientation_deg >= -180 && orientation_deg < -157.5)) {
      this.orientation = EntityOrientation.LEFT;
    } else if (orientation_deg >= -157.5 && orientation_deg < -112.5) {
      this.orientation = EntityOrientation.UP_LEFT;
    } else if (orientation_deg >= -112.5 && orientation_deg < -67.5) {
      this.orientation = EntityOrientation.UP;
    } else if (orientation_deg >= -67.5 && orientation_deg < -22.5) {
      this.orientation = EntityOrientation.UP_RIGHT;
    }
    return currentOrientation != this.orientation;
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
