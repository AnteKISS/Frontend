import { ActiveEntity } from './activeEntity';
import NotImplementedError from '../errors/notImplementedError';
import { AnimationManager } from '../managers/animationManager';
import { zombie_0_AnimationConfig } from '../configs/zombieAnimationConfig';
import { getOrientationString } from '../enums/entityOrientation';
import { MathModule } from '../utilities/mathModule';

export class MonsterEntity extends ActiveEntity implements IFightable {

  private _baseSprite: Phaser.GameObjects.Sprite;

  constructor(scene, monsterCode) {
    super(scene);
    this._code = monsterCode;
    scene.add.existing(this);
    this.type = 'MonsterEntity';
    this._baseSprite = scene.add.sprite(0, 0, 'baseSprite');
    // scene.remove.sprite(this._baseSprite);
    this.add(this._baseSprite);
    this.initializeAnimations();
    scene.add.existing(this);
  }

  // Getters/Setters


  // Methods
  public update(deltaTime: number): void {
    let hasOrientationUpdated: boolean = false;
    let action: string = this._baseSprite.anims.currentAnim ? this._baseSprite.anims.currentAnim.key.split('_')[0] : '';
    let animationUpdateNeeded: boolean = false;

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
      if (!this._baseSprite.anims.isPlaying || action != 'RUN' || hasOrientationUpdated) {
        animationUpdateNeeded = true;
        action = 'RUN';
      }
    } else {
      if (!this._baseSprite.anims.isPlaying || action != 'IDLE' || hasOrientationUpdated) {
        animationUpdateNeeded = true;
        action = 'IDLE';
      }
    }
    if (animationUpdateNeeded) {
      // TODO: Check gear slots for loading spritesheet name dynamically
      this._baseSprite.play(`${action}_${getOrientationString(this.orientation)}_MALE_HEAD2`);
    }
  }

  public reset(): void {
    throw new NotImplementedError();
  }

  public initializeAnimations(): void {
    switch (this._code) {
      case 'zombie_0':
        AnimationManager.createAnimations(this, zombie_0_AnimationConfig);
        default:
          break;
    }
  }
  
  updateOrientation(): boolean {
    throw new NotImplementedError();
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
}