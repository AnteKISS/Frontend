

abstract class BaseEntity extends Phaser.GameObjects.Sprite {

  private _id: string;
  private _sprite : string;
  private _position : Phaser.Geom.Point; 

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

  public get position() : Phaser.Geom.Point {
    return this._position;
  }
  public set position(v : Phaser.Geom.Point) {
    this._position = v;
  }

  // Methods
  abstract update(): void;
  abstract getType(): string;
}