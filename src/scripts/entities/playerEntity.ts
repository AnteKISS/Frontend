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
  }

  // Getters/Setters


  // Methods
  public update(deltaTime: number): void {
    this.updateOrientation();
  }

  public reset(): void {
    throw new NotImplementedError();
  }

  updateOrientation(): void {
    if ((this.x == this._xOld) || (this.y == this._yOld)) {
      return;
    }
    console.log("x", this.x);
    console.log("y", this.y);
    console.log("xo", this._xOld);
    console.log("yo", this._yOld);
    let pointerX: number = this.scene.game.input.mousePointer.x
    let pointerY: number = this.scene.game.input.mousePointer.y

    let angle_rad = Phaser.Math.Angle.Between(this.x, this.y, pointerX, pointerY);
    let angle_degrees = Phaser.Math.RadToDeg(angle_rad);
    // console.log('Pointer down');
    // console.log(`Radians: ${angle_rad}, Degrees: ${angle_degrees}`);

    if ((angle_degrees >= -22.5 && angle_degrees < 0) || (angle_degrees >= 0 && angle_degrees < 22.5)) {
      this.orientation = EntityOrientation.RIGHT;
    } else if (angle_degrees >= 22.5 && angle_degrees < 67.5) {
      this.orientation = EntityOrientation.DOWN_RIGHT;
    } else if (angle_degrees >= 67.5 && angle_degrees < 112.5) {
      this.orientation = EntityOrientation.DOWN;
    } else if (angle_degrees >= 112.5 && angle_degrees < 157.5) {
      this.orientation = EntityOrientation.DOWN_LEFT;
    } else if ((angle_degrees >= 157.5 && angle_degrees <= 180) || (angle_degrees >= -180 && angle_degrees < -157.5)) {
      this.orientation = EntityOrientation.LEFT;
    } else if (angle_degrees >= -157.5 && angle_degrees < -112.5) {
      this.orientation = EntityOrientation.UP_LEFT;
    } else if (angle_degrees >= -112.5 && angle_degrees < -67.5) {
      this.orientation = EntityOrientation.UP;
    } else if (angle_degrees >= -67.5 && angle_degrees < -22.5) {
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
    // let angle_rad = Phaser.Math.Angle.Between(this.x, this.y, pointer.x, pointer.y);
    // let angle_degrees = Phaser.Math.RadToDeg(angle_rad);
    // console.log('Pointer down');
    // console.log(`Radians: ${angle_rad}, Degrees: ${angle_degrees}`);

    // if ((angle_degrees >= -22.5 && angle_degrees < 0) || (angle_degrees >= 0 && angle_degrees < 22.5)) {
    //   this.play('player_body_run_right');
    // } else if (angle_degrees >= 22.5 && angle_degrees < 67.5) {
    //     this.play('player_body_run_down_right');
    // } else if (angle_degrees >= 67.5 && angle_degrees < 112.5) {
    //     this.play('player_body_run_down');
    // } else if (angle_degrees >= 112.5 && angle_degrees < 157.5) {
    //     this.play('player_body_run_down_left');
    // } else if ((angle_degrees >= 157.5 && angle_degrees <= 180) || (angle_degrees >= -180 && angle_degrees < -157.5)) {
    //     this.play('player_body_run_left');
    // } else if (angle_degrees >= -157.5 && angle_degrees < -112.5) {
    //     this.play('player_body_run_up_left');
    // } else if (angle_degrees >= -112.5 && angle_degrees < -67.5) {
    //     this.play('player_body_run_up');
    // } else if (angle_degrees >= -67.5 && angle_degrees < -22.5) {
    //     this.play('player_body_run_up_right');
    // }
  }

  private onPointerUp(pointer: Phaser.Input.Pointer): void {
    // console.log('Pointer up');
    // this.play('player_body_idle_down');
    // this.play('player_steel_armor_idle_down');
    this._pointerDown = false;
  }

  public initializeAnimations(): void {
    AnimationManager.createAnimations(this, playerAnimationConfig);
  }
}

if ((module as any).hot) {
  (module as any).hot.accept();
}