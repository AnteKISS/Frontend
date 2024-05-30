import { EntityOrientation } from '../enums/entityOrientation';
import { Physics } from '../physics/collider';

export abstract class BaseEntity extends Phaser.GameObjects.Container {

  protected _id: number;
  protected _code: string;
  protected _positionX: number = 0;
  protected _positionY: number = 0;
  protected _orientation: EntityOrientation = EntityOrientation.DOWN;
  protected _orientation_rad: number;
  protected _isResetReady: boolean = false;
  protected _debugMode: boolean = false;
  protected _collider: Physics.Collider;

  public truncatedSpriteWidth: number;
  public truncatedSpriteHeight: number;
   
  constructor(scene) {
    super(scene, 0, 0);
    scene.add.existing(this);
    this.type = 'BaseEntity';
  }

  // Properties
  public get id(): number {
    return this._id;
  }

  public set id(v: number) {
    this._id = v;
  }

  public get code(): string {
    return this._code;
  }

  public set code(v: string) {
    this._code = v;
  }

  public get positionX(): number {
    return this._positionX;
  }

  public set positionX(v: number) {
    this._positionX = v;
    this.setX(v)
  }

  public get positionY(): number {
    return this._positionY;
  }

  public set positionY(v: number) {
    this._positionY = v;
    this.setY(v);
  }

  public get orientation(): EntityOrientation {
    return this._orientation;
  }

  public set orientation(v: EntityOrientation) {
    this._orientation = v;
  }

  public get isResetReady(): boolean {
    return this._isResetReady;
  }

  // Methods
  getType(): string {
    return this.type;
  }

  updateOrientation(): boolean {
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
    if (currentOrientation == this.orientation) {
      return false;
    }
    return true;
  }

  public toggleDebugMode(enableDebugMode: boolean): void {
    this._debugMode = enableDebugMode;
  }

  abstract update(deltaTime: number): void;
  abstract reset(): void;
  abstract initializeAnimations(): void;
  abstract onColliding(hitEntity: BaseEntity): void;
  abstract onOverlapping(hitEntity: BaseEntity): void;
}