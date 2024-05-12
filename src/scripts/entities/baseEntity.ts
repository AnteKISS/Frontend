abstract class BaseEntity extends Phaser.GameObjects.Sprite {

  private _id: string;
  private _sprite: string;
  private _position: MapCoordinateEntity; 
  private _orientation: EntityOrientation;
   
  constructor(scene) {
    super(scene, 0, 0, '');
    scene.add.existing(this);
    this.type = 'BaseEntity';
  }

  // Properties
  public get id(): string {
    return this._id;
  }

  public set id(v: string) {
    this._id = v;
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

  // Methods
  getType(): string {
    return this.type;
  }

  abstract update(deltaTime: number): void;
}