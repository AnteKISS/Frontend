import { ActiveEntity } from './activeEntity';
import { EntityOrientation, getOrientationString } from '../enums/entityOrientation';
import NotImplementedError from '../errors/notImplementedError';
import { AnimationManager } from '../managers/animationManager';
import { BaseEntity } from './baseEntity';
import { playerAnimationConfig } from '../configs/playerAnimationConfig';
import { MathModule } from '../utilities/mathModule'

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
    this.headSprite.scale = 1.5;
    this.bodySprite = scene.add.sprite(0, 0, 'bodyTexture');
    this.bodySprite.scale = 1.5;
    this.meleeSprite = scene.add.sprite(0, 0, 'meleeTexture');
    this.meleeSprite.scale = 1.5;
    this.bowSprite = scene.add.sprite(0, 0, 'bowTexture');
    this.bowSprite.scale = 1.5;
    this.add(this.headSprite);
    this.add(this.bodySprite);
    this.add(this.meleeSprite);
    this.add(this.bowSprite);
    this.initializeAnimations();
    scene.add.existing(this);
    scene.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => this.onPointerDown(pointer));
    scene.input.on('pointerup', (pointer: Phaser.Input.Pointer) => this.onPointerUp(pointer));
    scene.input.on('pointermove', (pointer: Phaser.Input.Pointer) => this.onPointerMove(pointer));

    this.stats.movementSpeed = 100;
  }

  // Getters/Setters


  // Methods
  public update(deltaTime: number): void {
    let hasOrientationUpdated: boolean = false;
    if ((this.positionX != this._destinationX) || (this.positionY != this._destinationY)) {
      // TODO: Check if destination coords change between each update call
      // so if it doesn't change, we move the same value that we moved last call
      hasOrientationUpdated = this.updateOrientation();
      let deltaX: number = 0;
      let deltaY: number = 0;
      deltaX += this.stats.movementSpeed;
      deltaY += this.stats.movementSpeed;
      deltaX *= (Math.cos(this._orientation_rad) * (deltaTime / 1000));
      deltaY *= (Math.sin(this._orientation_rad) * (deltaTime / 1000));
      this.move(deltaX, deltaY);
      if (MathModule.isValueInThreshold(this.positionX, this._destinationX, 1) &&
          MathModule.isValueInThreshold(this.positionY, this._destinationY, 1)) {
        this._destinationX = this.positionX;
        this._destinationY = this.positionY;
        this._isMoving = false;
      }
      if (!this.headSprite.anims.isPlaying || !this.headSprite.anims.currentAnim.key.startsWith("RUN") || hasOrientationUpdated) {
        this.headSprite.play(`RUN_${getOrientationString(this.orientation)}_MALE_HEAD2`);
        this.bodySprite.play(`RUN_${getOrientationString(this.orientation)}_STEEL_ARMOR`);
        this.meleeSprite.play(`RUN_${getOrientationString(this.orientation)}_LONGSWORD`);
        this.bowSprite.play(`RUN_${getOrientationString(this.orientation)}_LONGBOW`);
      }
    } else {
      if (!this.headSprite.anims.isPlaying || !this.headSprite.anims.currentAnim.key.startsWith("IDLE") || hasOrientationUpdated) {
        this.headSprite.play(`IDLE_${getOrientationString(this.orientation)}_MALE_HEAD2`);
        this.bodySprite.play(`IDLE_${getOrientationString(this.orientation)}_STEEL_ARMOR`);
        this.meleeSprite.play(`IDLE_${getOrientationString(this.orientation)}_LONGSWORD`);
        this.bowSprite.play(`IDLE_${getOrientationString(this.orientation)}_LONGBOW`);
      }
    }
  }

  public reset(): void {
    throw new NotImplementedError();
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
    this._orientation_rad = Phaser.Math.Angle.Between(this.x, this.y, pointer.x, pointer.y);
  }

  private onPointerUp(pointer: Phaser.Input.Pointer): void {
    this._pointerDown = false;
  }

  private onPointerMove(pointer: Phaser.Input.Pointer): void {
    if (this._pointerDown) {
      this._destinationX = pointer.x;
      this._destinationY = pointer.y;
      this._orientation_rad = Phaser.Math.Angle.Between(this.x, this.y, pointer.x, pointer.y);
    }
  }

  public initializeAnimations(): void {
    AnimationManager.createAnimations(this, playerAnimationConfig);
  }
}

if ((module as any).hot) {
  (module as any).hot.accept();
}