import { ActiveEntity } from './activeEntity';
import { EntityOrientation } from '../enums/entityOrientation';
import NotImplementedError from '../errors/notImplementedError';
import { AnimationManager } from '../managers/animationManager';
import { BaseEntity } from './baseEntity';
import { playerAnimationConfig } from '../configs/playerAnimationConfig';

export class PlayerEntity extends ActiveEntity implements IFightable {

  private _pointerDown: boolean = false;
  private headSprite: Phaser.GameObjects.Sprite;
  private bodySprite: Phaser.GameObjects.Sprite;
  private meleeSprite: Phaser.GameObjects.Sprite;
  private bowSprite: Phaser.GameObjects.Sprite;

  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.type = 'PlayerEntity';
    this.headSprite = scene.add.sprite(0, 0, 'headTexture');
    this.headSprite.name = "headTexture";
    this.bodySprite = scene.add.sprite(0, 0, 'bodyTexture');
    this.bodySprite.name = "bodyTexture";
    this.meleeSprite = scene.add.sprite(0, 0, 'meleeTexture');
    this.meleeSprite.name = "meleeTexture";    
    this.bowSprite = scene.add.sprite(0, 0, 'bowTexture');
    this.bowSprite.name = "bowTexture";
    this.add(this.headSprite);
    this.add(this.bodySprite);
    this.add(this.meleeSprite);
    this.add(this.bowSprite);
    this.list.forEach((item) => {
      console.log("HERRO", item.name);
    });
    this.initializeAnimations();

    this.headSprite.play('BOWATTACK_RIGHT_MALE_HEAD2');
    this.bodySprite.play('BOWATTACK_RIGHT_STEEL_ARMOR');
    this.meleeSprite.play('BOWATTACK_RIGHT_LONGSWORD');
    this.bowSprite.play('BOWATTACK_RIGHT_LONGBOW');
    scene.add.existing(this);
    this.onPointerDown = this.onPointerDown.bind(this);
    scene.input.on('pointerdown', this.onPointerDown);
    scene.input.on('pointerup', this.onPointerUp);

    this.stats.movementSpeed = 100;
  }

  // Getters/Setters


  // Methods
  public update(deltaTime: number): void {
    if ((this.positionX != this._destinationX) || (this.positionY != this._destinationY)) {
      // TODO: Check if destination coords change between each update call
      // so if it doesn't change, we move the same value that we moved last call
      this.updateOrientation();
      let deltaX: number = 0;
      let deltaY: number = 0;
      deltaX += this.stats.movementSpeed;
      deltaY += this.stats.movementSpeed;
      deltaX *= (Math.cos(this._orientation_degrees) * (deltaTime / 1000));
      deltaY *= (Math.sin(this._orientation_degrees) * (deltaTime / 1000));
      this.move(deltaX, deltaY);
    }
  }

  public reset(): void {
    throw new NotImplementedError();
  }

  updateOrientation(): void {
    if ((this._orientation_degrees >= -22.5 && this._orientation_degrees < 0) || (this._orientation_degrees >= 0 && this._orientation_degrees < 22.5)) {
      this.orientation = EntityOrientation.RIGHT;
    } else if (this._orientation_degrees >= 22.5 && this._orientation_degrees < 67.5) {
      this.orientation = EntityOrientation.DOWN_RIGHT;
    } else if (this._orientation_degrees >= 67.5 && this._orientation_degrees < 112.5) {
      this.orientation = EntityOrientation.DOWN;
    } else if (this._orientation_degrees >= 112.5 && this._orientation_degrees < 157.5) {
      this.orientation = EntityOrientation.DOWN_LEFT;
    } else if ((this._orientation_degrees >= 157.5 && this._orientation_degrees <= 180) || (this._orientation_degrees >= -180 && this._orientation_degrees < -157.5)) {
      this.orientation = EntityOrientation.LEFT;
    } else if (this._orientation_degrees >= -157.5 && this._orientation_degrees < -112.5) {
      this.orientation = EntityOrientation.UP_LEFT;
    } else if (this._orientation_degrees >= -112.5 && this._orientation_degrees < -67.5) {
      this.orientation = EntityOrientation.UP;
    } else if (this._orientation_degrees >= -67.5 && this._orientation_degrees < -22.5) {
      this.orientation = EntityOrientation.UP_RIGHT;
    }
    console.log("Orientation: ", this.orientation);
  }

  attack(target: IFightable): void {
    throw new NotImplementedError();
  }

  damage(amount: number): void {
    // TODO: take into account gear, active effects then apply damage
    throw new NotImplementedError();
  }

  getBasePhysicalDamage(): number {
    return this.stats.basePhysicalDamage;
  }

  setBasePhysicalDamage(basePhysicalDamage: number): void {
    this.stats.basePhysicalDamage = basePhysicalDamage;
  }

  getBaseMagicalDamage(): number {
    return this.stats.baseMagicalDamage;
  }

  setBaseMagicalDamage(baseMagicalDamage: number): void {
    this.stats.baseMagicalDamage = baseMagicalDamage;
  }

  getHealth(): number {
    return this.stats.health;
  }

  setHealth(health: number): void {
    this.stats.health = health;
  }

  getMaxHealth(): number {
    return this.stats.maxHealth;
  }

  setMaxHealth(maxHealth: number): void {
    this.stats.maxHealth = maxHealth;
  }

  getAccuracy(): number {
    return this.stats.attackAccuracy;
  }

  setAccuracy(accuracy: number): void {
    this.stats.attackAccuracy = accuracy;
  }

  getDefense(): number {
    return this.stats.defense;
  }

  setDefense(defense: number): void {
    this.stats.defense = defense;
  }

  // Event Handlers
  private onPointerDown(pointer: Phaser.Input.Pointer): void {
    this._pointerDown = true;
    this._destinationX = pointer.x;
    this._destinationY = pointer.y;
    this._orientation_degrees = Phaser.Math.Angle.Between(this.x, this.y, pointer.x, pointer.y);
  }

  private onPointerUp(pointer: Phaser.Input.Pointer): void {
    this._pointerDown = false;
  }

  public initializeAnimations(): void {
    AnimationManager.createAnimations(this, playerAnimationConfig);
  }
}

if ((module as any).hot) {
  (module as any).hot.accept();
}