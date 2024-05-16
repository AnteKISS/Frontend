import { ActiveEntity } from './activeEntity';
import { EntityOrientation } from '../enums/entityOrientation';
import NotImplementedError from '../errors/notImplementedError';
import { AnimationManager } from '../managers/animationManager';
import { BaseEntity } from './baseEntity';
import { playerAnimationConfig } from '../configs/playerAnimationConfig';

export class PlayerEntity extends ActiveEntity implements IFightable {

  // TODO: Create an animation class for entities to handle animating stuff?

  // readonly idleAnimationDuration_frames: number = 4;
  // readonly runAnimationDuration_frames: number = 8;
  // readonly meleeAttackAnimationDuration_frames: number = 4;
  // readonly blockAnimationDuration_frames: number = 2;
  // readonly deathAnimationDuration_frames: number = 6;
  // readonly cheerAnimationDuration_frames: number = 4;
  // readonly bowAttackAnimationDuration_frames: number = 4;

  readonly idleAnimationStartFrame = 0;
  readonly idleAnimationEndFrame = 3;
  readonly runAnimationStartFrame = 4;
  readonly runAnimationEndFrame = 11;
  readonly meleeAttackAnimationStartFrame = 12;
  readonly meleeAttackAnimationEndFrame = 15;
  readonly blockAnimationStartFrame = 16;
  readonly blockAnimationEndFrame = 17;
  readonly deathAnimationStartFrame = 18;
  readonly deathAnimationEndFrame = 23;
  readonly cheerAnimationStartFrame = 24;
  readonly cheerAnimationEndFrame = 27;
  readonly bowAttackAnimationStartFrame = 28;
  readonly bowAttackAnimationEndFrame = 31;

  private _pointerDown: boolean = false;
  headSprite: any;
  bodySprite: any;
  bowSprite: any;

  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.type = 'PlayerEntity';
    // this.sprite = scene.game.textures.get('player_body');
    this.headSprite = scene.add.sprite(0, 0, 'headTexture');
    this.bodySprite = scene.add.sprite(0, 0, 'bodyTexture');
    this.bowSprite = scene.add.sprite(0, 0, 'bowTexture');
    this.add(this.headSprite);
    this.add(this.bodySprite);
    this.add(this.bowSprite);
    this.initializeAnimations();

    this.headSprite.play('BOWATTACK_RIGHT_MALE_HEAD2');
    this.bodySprite.play('BOWATTACK_RIGHT_STEEL_ARMOR');
    this.bowSprite.play('BOWATTACK_RIGHT_LONGBOW');
    // Add the container to the scene
    scene.add.existing(this);
    // this.anims.play('BOWATTACK_RIGHT_LONGBOW');
    // this.anims.play('BOWATTACK_RIGHT_STEEL_ARMOR');
    //`${action}-${getOrientationString(orientation)}-${sheet}`;
    // this.play('idle-DOWN-steel_armor');
    // this.play('player_steel_armor_idle_down');
    // console.table([{
    //   startAnim: EntityOrientation.DOWN + this.idleAnimationDuration_frames,
    //   endAnim: EntityOrientation.DOWN + this.idleAnimationDuration_frames + this.runAnimationDuration_frames - 1
    // }]);
    // console.log(`start anim ${EntityOrientation.DOWN + this.idleAnimationDuration_frames}, end anim ${EntityOrientation.DOWN + this.idleAnimationDuration_frames + this.runAnimationDuration_frames - 1}`);
    this.onPointerDown = this.onPointerDown.bind(this);
    scene.input.on('pointerdown', this.onPointerDown);
    scene.input.on('pointerup', this.onPointerUp);
  }

  // Getters/Setters


  // Methods
  public update(deltaTime: number): void {
    // throw new NotImplementedError();
    this.updateOrientation();
  }

  public reset(): void {
    throw new NotImplementedError();
  }

  updateOrientation(): void {
    if (this._orientationOld == this._orientationNew) {
      return;
    }

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
    // AnimationManager.getInstance().scene = this.scene;
    AnimationManager.createAnimations(this, playerAnimationConfig);
    
    // this.anims.create({
    //   key: 'player_steel_armor_idle_left',
    //   frames: this.anims.generateFrameNumbers('player_steel_armor', { start: EntityOrientation.LEFT + this.idleAnimationStartFrame, end: EntityOrientation.LEFT + this.idleAnimationEndFrame }),
    //   frameRate: 4,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_steel_armor_idle_up_left',
    //   frames: this.anims.generateFrameNumbers('player_steel_armor', { start: EntityOrientation.UP_LEFT + this.idleAnimationStartFrame, end: EntityOrientation.UP_LEFT + this.idleAnimationEndFrame }),
    //   frameRate: 4,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_steel_armor_idle_up',
    //   frames: this.anims.generateFrameNumbers('player_steel_armor', { start: EntityOrientation.UP + this.idleAnimationStartFrame, end: EntityOrientation.UP + this.idleAnimationEndFrame }),
    //   frameRate: 4,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_steel_armor_idle_up_right',
    //   frames: this.anims.generateFrameNumbers('player_steel_armor', { start: EntityOrientation.UP_RIGHT + this.idleAnimationStartFrame, end: EntityOrientation.UP_RIGHT + this.idleAnimationEndFrame }),
    //   frameRate: 4,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_steel_armor_idle_right',
    //   frames: this.anims.generateFrameNumbers('player_steel_armor', { start: EntityOrientation.RIGHT + this.idleAnimationStartFrame, end: EntityOrientation.RIGHT + this.idleAnimationEndFrame }),
    //   frameRate: 4,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_steel_armor_idle_down_right',
    //   frames: this.anims.generateFrameNumbers('player_steel_armor', { start: EntityOrientation.DOWN_RIGHT + this.idleAnimationStartFrame, end: EntityOrientation.DOWN_RIGHT + this.idleAnimationEndFrame }),
    //   frameRate: 4,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_steel_armor_idle_down',
    //   frames: this.anims.generateFrameNumbers('player_steel_armor', { start: EntityOrientation.DOWN + this.idleAnimationStartFrame, end: EntityOrientation.DOWN + this.idleAnimationEndFrame }),
    //   frameRate: 4,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_steel_armor_idle_down_left',
    //   frames: this.anims.generateFrameNumbers('player_steel_armor', { start: EntityOrientation.DOWN_LEFT + this.idleAnimationStartFrame, end: EntityOrientation.DOWN_LEFT + this.idleAnimationEndFrame }),
    //   frameRate: 4,
    //   repeat: -1
    // });

    // // Run animations
    // this.anims.create({
    //   key: 'player_steel_armor_run_left',
    //   frames: this.anims.generateFrameNumbers('player_steel_armor', { start: EntityOrientation.LEFT + this.runAnimationStartFrame, end: EntityOrientation.LEFT + this.runAnimationEndFrame }),
    //   frameRate: 4,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_steel_armor_run_up_left',
    //   frames: this.anims.generateFrameNumbers('player_steel_armor', { start: EntityOrientation.UP_LEFT + this.runAnimationStartFrame, end: EntityOrientation.UP_LEFT + this.runAnimationEndFrame }),
    //   frameRate: 4,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_steel_armor_run_up',
    //   frames: this.anims.generateFrameNumbers('player_steel_armor', { start: EntityOrientation.UP + this.runAnimationStartFrame, end: EntityOrientation.UP + this.runAnimationEndFrame }),
    //   frameRate: 4,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_steel_armor_run_up_right',
    //   frames: this.anims.generateFrameNumbers('player_steel_armor', { start: EntityOrientation.UP_RIGHT + this.runAnimationStartFrame, end: EntityOrientation.UP_RIGHT + this.runAnimationEndFrame }),
    //   frameRate: 4,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_steel_armor_run_right',
    //   frames: this.anims.generateFrameNumbers('player_steel_armor', { start: EntityOrientation.RIGHT + this.runAnimationStartFrame, end: EntityOrientation.RIGHT + this.runAnimationEndFrame }),
    //   frameRate: 4,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_steel_armor_run_down_right',
    //   frames: this.anims.generateFrameNumbers('player_steel_armor', { start: EntityOrientation.DOWN_RIGHT + this.runAnimationStartFrame, end: EntityOrientation.DOWN_RIGHT + this.runAnimationEndFrame }),
    //   frameRate: 4,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_steel_armor_run_down',
    //   frames: this.anims.generateFrameNumbers('player_steel_armor', { start: EntityOrientation.DOWN + this.runAnimationStartFrame, end: EntityOrientation.DOWN + this.runAnimationEndFrame }),
    //   frameRate: 4,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_steel_armor_run_down_left',
    //   frames: this.anims.generateFrameNumbers('player_steel_armor', { start: EntityOrientation.DOWN_LEFT + this.runAnimationStartFrame, end: EntityOrientation.DOWN_LEFT + this.runAnimationEndFrame }),
    //   frameRate: 4,
    //   repeat: -1
    // });

    /**
     * 
     * 
     * 
     * 
     */

    // this.anims.create({
    //   key: 'player_body_idle_left',
    //   frames: this.anims.generateFrameNumbers('player_body', { start: EntityOrientation.LEFT, end: EntityOrientation.LEFT + this.idleAnimationDuration_frames - 1 }),
    //   frameRate: 4,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_body_idle_up_left',
    //   frames: this.anims.generateFrameNumbers('player_body', { start: EntityOrientation.UP_LEFT, end: EntityOrientation.UP_LEFT + this.idleAnimationDuration_frames - 1 }),
    //   frameRate: 4,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_body_idle_up',
    //   frames: this.anims.generateFrameNumbers('player_body', { start: EntityOrientation.UP, end: EntityOrientation.UP + this.idleAnimationDuration_frames - 1 }),
    //   frameRate: 4,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_body_idle_up_right',
    //   frames: this.anims.generateFrameNumbers('player_body', { start: EntityOrientation.UP_RIGHT, end: EntityOrientation.UP_RIGHT + this.idleAnimationDuration_frames - 1 }),
    //   frameRate: 4,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_body_idle_right',
    //   frames: this.anims.generateFrameNumbers('player_body', { start: EntityOrientation.RIGHT, end: EntityOrientation.RIGHT + this.idleAnimationDuration_frames - 1 }),
    //   frameRate: 4,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_body_idle_down_right',
    //   frames: this.anims.generateFrameNumbers('player_body', { start: EntityOrientation.DOWN_RIGHT, end: EntityOrientation.DOWN_RIGHT + this.idleAnimationDuration_frames - 1 }),
    //   frameRate: 4,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_body_idle_down',
    //   frames: this.anims.generateFrameNumbers('player_body', { start: EntityOrientation.DOWN, end: EntityOrientation.DOWN + this.idleAnimationDuration_frames - 1 }),
    //   frameRate: 4,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_body_idle_down_left',
    //   frames: this.anims.generateFrameNumbers('player_body', { start: EntityOrientation.DOWN_LEFT, end: EntityOrientation.DOWN_LEFT + this.idleAnimationDuration_frames - 1 }),
    //   frameRate: 4,
    //   repeat: -1
    // });

    // // Run animations
    // this.anims.create({
    //   key: 'player_body_run_left',
    //   frames: this.anims.generateFrameNumbers('player_body', { start: EntityOrientation.LEFT + this.idleAnimationDuration_frames, end: EntityOrientation.LEFT + this.idleAnimationDuration_frames + this.runAnimationDuration_frames - 1 }),
    //   frameRate: 8,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_body_run_up_left',
    //   frames: this.anims.generateFrameNumbers('player_body', { start: EntityOrientation.UP_LEFT + this.idleAnimationDuration_frames, end: EntityOrientation.UP_LEFT + this.idleAnimationDuration_frames + this.runAnimationDuration_frames - 1 }),
    //   frameRate: 8,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_body_run_up',
    //   frames: this.anims.generateFrameNumbers('player_body', { start: EntityOrientation.UP + this.idleAnimationDuration_frames, end: EntityOrientation.UP + this.idleAnimationDuration_frames + this.runAnimationDuration_frames - 1 }),
    //   frameRate: 8,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_body_run_up_right',
    //   frames: this.anims.generateFrameNumbers('player_body', { start: EntityOrientation.UP_RIGHT + this.idleAnimationDuration_frames, end: EntityOrientation.UP_RIGHT + this.idleAnimationDuration_frames + this.runAnimationDuration_frames - 1 }),
    //   frameRate: 8,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_body_run_right',
    //   frames: this.anims.generateFrameNumbers('player_body', { start: EntityOrientation.RIGHT + this.idleAnimationDuration_frames, end: EntityOrientation.RIGHT + this.idleAnimationDuration_frames + this.runAnimationDuration_frames - 1 }),
    //   frameRate: 8,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_body_run_down_right',
    //   frames: this.anims.generateFrameNumbers('player_body', { start: EntityOrientation.DOWN_RIGHT + this.idleAnimationDuration_frames, end: EntityOrientation.DOWN_RIGHT + this.idleAnimationDuration_frames + this.runAnimationDuration_frames - 1 }),
    //   frameRate: 8,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_body_run_down',
    //   frames: this.anims.generateFrameNumbers('player_body', { start: EntityOrientation.DOWN + this.idleAnimationDuration_frames, end: EntityOrientation.DOWN + this.idleAnimationDuration_frames + this.runAnimationDuration_frames - 1 }),
    //   frameRate: 8,
    //   repeat: -1
    // });
    // this.anims.create({
    //   key: 'player_body_run_down_left',
    //   frames: this.anims.generateFrameNumbers('player_body', { start: EntityOrientation.DOWN_LEFT + this.idleAnimationDuration_frames, end: EntityOrientation.DOWN_LEFT + this.idleAnimationDuration_frames + this.runAnimationDuration_frames - 1 }),
    //   frameRate: 8,
    //   repeat: -1
    // });
  }
}

if ((module as any).hot) {
  (module as any).hot.accept();
}

// if (module.hot) {
//   module.hot.accept();
// }