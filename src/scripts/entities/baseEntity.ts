abstract class BaseEntity extends Phaser.GameObjects.Sprite {

  protected _id: number;
  protected _code: string;
  protected _sprite: string;
  protected _position: MapCoordinateEntity; 
  protected _orientation: EntityOrientation;
  protected _isResetReady: boolean = false;
   
  constructor(scene) {
    super(scene, 0, 0, '');
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

  public get sprite() : string {
    return this._sprite;
  }

  public set sprite(v: string) {
    this._sprite = v;
    this.setTexture(this._sprite);
  }

  public get position(): MapCoordinateEntity {
    return this._position;
  }

  public set position(v: MapCoordinateEntity) {
    this._position = v;
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
}