import { ActiveEntity } from './activeEntity';
import { EntityOrientation, getOrientationString } from '../enums/entityOrientation';
import NotImplementedError from '../errors/notImplementedError';
import { AnimationManager } from '../managers/animationManager';
import { BaseEntity } from './baseEntity';
// import { player_AnimationConfig } from '../configs/animationConfig';
import { MathModule } from '../utilities/mathModule'
import Spell from '../spells/spell';
import TestSpell from '../spells/craftedSpells/iceShard';
import TestSpell2 from '../spells/craftedSpells/firebolt';

export class PlayerEntity extends ActiveEntity implements IFightable {

  private _pointerDown: boolean = false;
  private _headSprite: Phaser.GameObjects.Sprite;
  private _bodySprite: Phaser.GameObjects.Sprite;
  private _meleeSprite: Phaser.GameObjects.Sprite;
  private _bowSprite: Phaser.GameObjects.Sprite;
  maxMana: number = 150; //Pour test
  equippedSpells: Spell[] = [];

  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.type = 'PlayerEntity';
    this._code = "player"
    this._headSprite = scene.add.sprite(0, 0, 'headTexture');
    this._headSprite.scale = 1.5;
    this._bodySprite = scene.add.sprite(0, 0, 'bodyTexture');
    this._bodySprite.scale = 1.5;
    this._meleeSprite = scene.add.sprite(0, 0, 'meleeTexture');
    this._meleeSprite.scale = 1.5;
    this._bowSprite = scene.add.sprite(0, 0, 'bowTexture');
    this._bowSprite.scale = 1.5;
    this.add(this._headSprite);
    this.add(this._bodySprite);
    this.add(this._meleeSprite);
    this.add(this._bowSprite);
    this.initializeAnimations();
    scene.add.existing(this);
    scene.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => this.onPointerDown(pointer));
    scene.input.on('pointerup', (pointer: Phaser.Input.Pointer) => this.onPointerUp(pointer));
    scene.input.on('pointermove', (pointer: Phaser.Input.Pointer) => this.onPointerMove(pointer));

    const keyQ = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    keyQ.on('down',() => this.onKeyDown('Q'), this);
    const keyW = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    keyW.on('down',() => this.onKeyDown('W'), this);
    this.equippedSpells.push(new TestSpell(this));
    this.equippedSpells.push(new TestSpell2(this));

    
    this.stats.movementSpeed = 100;
    this.stats.mana = 150; //Pour test
    this.setMaxHealth(150) //Pour test
  }

  // Getters/Setters


  // Methods
  public update(deltaTime: number): void {
    let hasOrientationUpdated: boolean = false;
    let action: string = this._headSprite.anims.currentAnim ? this._headSprite.anims.currentAnim.key.split('_')[0] : '';
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
      if (!this._headSprite.anims.isPlaying || action != 'RUN' || hasOrientationUpdated) {
        animationUpdateNeeded = true;
        action = 'RUN';
      }
    } else {
      if (!this._headSprite.anims.isPlaying || action != 'IDLE' || hasOrientationUpdated) {
        animationUpdateNeeded = true;
        action = 'IDLE';
      }
    }
    if (animationUpdateNeeded) {
      // TODO: Check gear slots for loading spritesheet name dynamically
      this._headSprite.play(`${action}_${getOrientationString(this.orientation)}_MALE_HEAD2`);
      this._bodySprite.play(`${action}_${getOrientationString(this.orientation)}_STEEL_ARMOR`);
      this._meleeSprite.play(`${action}_${getOrientationString(this.orientation)}_LONGSWORD`);
      this._bowSprite.play(`${action}_${getOrientationString(this.orientation)}_LONGBOW`);
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

  private onKeyDown(key: string): void
  {
    switch (key)
    {
    case 'Q':
      console.log('Q Press');
      if(this.equippedSpells[0])
        this.equippedSpells[0].onCast();
      break;
    case 'W':
      console.log('W Press');
      if(this.equippedSpells[1])
        this.equippedSpells[1].onCast();
      break;
    }
  }

  public initializeAnimations(): void {
    AnimationManager.createAnimations(this, `${this._code}_AnimationConfig`);
    // AnimationManager.createAnimations(this, player_AnimationConfig);
  }
}

// if ((module as any).hot) {
//   (module as any).hot.accept();
// }