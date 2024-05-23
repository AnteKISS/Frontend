import { EntityOrientation } from '../enums/entityOrientation';

export abstract class BaseEntity extends Phaser.GameObjects.Container {

  protected _id: number;
  protected _code: string;
  protected _positionX: number = 0;
  protected _positionY: number = 0;
  protected _orientation: EntityOrientation = EntityOrientation.DOWN;
  protected _isResetReady: boolean = false;
   
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

  abstract update(deltaTime: number): void;
  abstract reset(): void;
  abstract initializeAnimations(): void;
  abstract updateOrientation(): boolean;
}