import { ActiveEntity } from './activeEntity';
import { getOrientationString } from '../enums/entityOrientation';
import NotImplementedError from '../errors/notImplementedError';
import { AnimationManager } from '../managers/animationManager';
import { BaseEntity } from './baseEntity';
import { MathModule } from '../utilities/mathModule'
import PlayerController from '../inputs/playerController';
import Spell from '../spells/spell';
import SpellBook from  '../spells/spellBook';
import IceShard from '../spells/craftedSpells/iceShard';
import Firebolt from '../spells/craftedSpells/firebolt';
import Quake from '../spells/craftedSpells/quake';
import { Physics } from '../physics/collider';
import { IFightable } from './IFightable';
import { Animator } from './animator';
import { ActiveEntityState } from './activeEntityState';

export class PlayerEntity extends ActiveEntity implements IFightable {

  public currentState: ActiveEntityState = ActiveEntityState.IDLE;
  public headSprite: Phaser.GameObjects.Sprite;
  public bodySprite: Phaser.GameObjects.Sprite;
  public meleeSprite: Phaser.GameObjects.Sprite;
  public bowSprite: Phaser.GameObjects.Sprite;

  private _pointerDown: boolean = false;
  maxMana: number = 150; //Pour test
  mySpellBook: SpellBook;
  private equippedSpells: Spell[] = [];
  private controller: PlayerController;

  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.type = 'PlayerEntity';
    this.code = "player";
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

    this.positionX = this.scene.cameras.main.width / 2;
    this.positionY = this.scene.cameras.main.height / 2;
    
    this.controller = new PlayerController(scene, this);
  
    this.mySpellBook = new SpellBook(this);
    this.mySpellBook.addSpell(new Firebolt(this));
    this.mySpellBook.addSpell(new IceShard(this));
    this.mySpellBook.addSpell(new Quake(this));
    
    this.stats.mana = 150; //Pour test
    this.stats.maxHealth = 150; //Pour test

    this.headSprite.setOrigin(0.5, 0.75);
    this.bodySprite.setOrigin(0.5, 0.75);
    this.meleeSprite.setOrigin(0.5, 0.75);
    this.bowSprite.setOrigin(0.5, 0.75);

    this.setDepth(0);
    this.truncatedSpriteWidth = 32 * this.bodySprite.scaleX;
    this.truncatedSpriteHeight = 64 * this.bodySprite.scaleY;
    this.collider = new Physics.Collider(this, this.bodySprite, this.onSpriteColliding, this.onEntityColliding);
    this.animator = new Animator(this);
  }

  // Getters/Setters
  public equipSpell(index, spell: Spell): void
  {
    this.equippedSpells[index] = spell;
  }

  public setPointerDown(state: boolean): void
  {
    this._pointerDown = state;
  }

  public getPointerDown(): boolean
  {
    return this._pointerDown;
  }

  // Methods
  public update(deltaTime: number): void {

    let hasOrientationUpdated: boolean = false;
    // console.log(this.destinationX, this.destinationY, this.positionX, this.positionY, this.isDestinationReached());

    let value = Math.random() * 100;
    switch(true) {
      case value > 1:
        break;
    }

    switch(this.currentState) {
      case ActiveEntityState.IDLE:
        if (!this.isDestinationReached()) {
          this.currentState = ActiveEntityState.RUN;
        }
        if (this.headSprite.anims.isPlaying && this.headSprite.anims.currentAnim.key.split('_')[0] == ActiveEntityState.IDLE) {
          break;
        }
        this.headSprite.play(`${this.currentState}_${getOrientationString(this.orientation)}_MALE_HEAD2`);
        this.bodySprite.play(`${this.currentState}_${getOrientationString(this.orientation)}_STEEL_ARMOR`);
        this.meleeSprite.play(`${this.currentState}_${getOrientationString(this.orientation)}_LONGSWORD`);
        this.bowSprite.play(`${this.currentState}_${getOrientationString(this.orientation)}_LONGBOW`);
        break;
      case ActiveEntityState.RUN:
        hasOrientationUpdated = this.updateOrientation();
        if (this.isDestinationReached()) {
          this.currentState = ActiveEntityState.IDLE;
          this.destinationX = this.positionX;
          this.destinationY = this.positionY;
          break;
        }
        let isEntityColliding: Boolean = this.collider.checkEntityCollision();
        if (!isEntityColliding) {
          this.move();
        } else {
          this.positionX = this._lastValidPositionX;
          this.positionY = this._lastValidPositionY;
        }
        if (this.headSprite.anims.isPlaying && this.headSprite.anims.currentAnim.key.split('_')[0] == 'RUN' && !hasOrientationUpdated) {
          break;
        }
        this.headSprite.play(`${this.currentState}_${getOrientationString(this.orientation)}_MALE_HEAD2`);
        this.bodySprite.play(`${this.currentState}_${getOrientationString(this.orientation)}_STEEL_ARMOR`);
        this.meleeSprite.play(`${this.currentState}_${getOrientationString(this.orientation)}_LONGSWORD`);
        this.bowSprite.play(`${this.currentState}_${getOrientationString(this.orientation)}_LONGBOW`);
        // console.log('Playing animation', `${this.currentState}_$`);
        // this.animator.playAnimation(ActiveEntityState[this.currentState], getOrientationString(this.orientation));
        
        break;
      case ActiveEntityState.MELEEATTACK:
        hasOrientationUpdated = this.updateOrientation();
        if (this.headSprite.anims.isPlaying && this.headSprite.anims.currentAnim.key.split('_')[0] == 'MELEEATTACK' && !hasOrientationUpdated) {
          break;
        }
        this.headSprite.play(`${this.currentState}_${getOrientationString(this.orientation)}_MALE_HEAD2`);
        this.bodySprite.play(`${this.currentState}_${getOrientationString(this.orientation)}_STEEL_ARMOR`);
        this.meleeSprite.play(`${this.currentState}_${getOrientationString(this.orientation)}_LONGSWORD`);
        this.bowSprite.play(`${this.currentState}_${getOrientationString(this.orientation)}_LONGBOW`);
        break;
      case ActiveEntityState.RANGEDATTACK_2:
        break;
      case ActiveEntityState.BLOCK:
        break;
      case ActiveEntityState.CHEER:
        break;
      case ActiveEntityState.DEATH:
        break;
      case ActiveEntityState.MELEEATTACK_2:
      case ActiveEntityState.RANGEDATTACK_2:
      case ActiveEntityState.CASTSPELL:
      case ActiveEntityState.CRITICALDEATH:
      case ActiveEntityState.HIT:
      default:
        break;
    }

    // let hasOrientationUpdated: boolean = false;
    // let action: string = this._headSprite.anims.currentAnim ? this._headSprite.anims.currentAnim.key.split('_')[0] : '';
    // let animationUpdateNeeded: boolean = false;

    // if ((this.positionX != this.destinationX) || (this.positionY != this.destinationY)) {
    //   // TODO: Check if destination coords change between each update call
    //   // so if it doesn't change, we move the same value that we moved last call
    //   hasOrientationUpdated = this.updateOrientation();
    //   let isEntityColliding: Boolean = this.collider.checkEntityCollision();
    //   if (!isEntityColliding) {
    //     this.move();

    //     if (MathModule.isValueInThreshold(this.positionX, this.destinationX, 1) &&
    //         MathModule.isValueInThreshold(this.positionY, this.destinationY, 1)) {
    //       this.destinationX = this.positionX;
    //       this.destinationY = this.positionY;
    //       this._isMoving = false;
    //     }
    //     if (!this._headSprite.anims.isPlaying || action != 'RUN' || hasOrientationUpdated) {
    //       animationUpdateNeeded = true;
    //       action = 'RUN';
    //     }
    //   } else {
    //     this.positionX = this._lastValidPositionX;
    //     this.positionY = this._lastValidPositionY;
    //   }
    // } else {
    //   if (!this._headSprite.anims.isPlaying || action != 'IDLE' || hasOrientationUpdated) {
    //     animationUpdateNeeded = true;
    //     action = 'IDLE';
    //   }
    // }
    // if (animationUpdateNeeded) {
    //   // TODO: Check gear slots for loading spritesheet name dynamically
    //   this._headSprite.play(`${action}_${getOrientationString(this.orientation)}_MALE_HEAD2`);
    //   this._bodySprite.play(`${action}_${getOrientationString(this.orientation)}_STEEL_ARMOR`);
    //   this._meleeSprite.play(`${action}_${getOrientationString(this.orientation)}_LONGSWORD`);
    //   this._bowSprite.play(`${action}_${getOrientationString(this.orientation)}_LONGBOW`);
    // }

    if (this._debugMode) {
      this.collider.displayDebugGraphics();
    }
    this.collider.checkSpriteCollision();
  }

  public reset(): void {
    throw new NotImplementedError();
  }

  public attack(target: IFightable): void {
    // console.log('Player attacking target', target);
    // console.log('Target life before:', (target as unknown as ActiveEntity).stats.health);
    target.damage(10);
    // console.log('Target life after:', (target as unknown as ActiveEntity).stats.health);
  }

  public damage(amount: number): void {
    // TODO: take into account gear, active effects then apply damage
    throw new NotImplementedError();
  }

  public isAttacking(): boolean {
    return this.currentState == ActiveEntityState.MELEEATTACK;
  }

  // Event Handlers
  public onSpellKeyDown(key: string): void {
    switch (key) {
    case '1':
      if(this.equippedSpells[0])
        this.equippedSpells[0].onCast();
      break;
    case '2':
      if(this.equippedSpells[1])
        this.equippedSpells[1].onCast();
      break;
    case '3':
      if(this.equippedSpells[2])
        this.equippedSpells[2].onCast();
      break;
    case 'Q':
     if(this.equippedSpells[3])
        this.equippedSpells[3].onCast();
      break;
    case 'W':
      if(this.equippedSpells[4])
        this.equippedSpells[4].onCast();
      break;
    case 'E':
      if(this.equippedSpells[5])
        this.equippedSpells[5].onCast();
      break;
    case 'R':
      if(this.equippedSpells[6])
        this.equippedSpells[6].onCast();
      break;
    case 'T':
      if(this.equippedSpells[7])
        this.equippedSpells[7].onCast();
      break;
    default:
      break;
    }
  }

  onSpriteColliding = (hitEntity: BaseEntity): void => {
    if (hitEntity.list.length == 0) {
      return;
    }
    let selfHeight: number = this.positionY + this.bodySprite.displayHeight;
    let otherHeight: number = hitEntity.positionY + (hitEntity.list.at(0) as Phaser.GameObjects.Sprite).displayHeight;
    if (selfHeight < otherHeight) {
      this.depth = 0;
      hitEntity.depth = 1;
    } else {
      this.depth = 1;
      hitEntity.depth = 0;
    }
  }
  
  onEntityColliding = (hitEntity: BaseEntity): void => {

  }

  public initializeAnimations(): void {
    AnimationManager.createAnimations(this, `${this.code}_AnimationConfig`);
  }
}

// if ((module as any).hot) {
//   (module as any).hot.accept();
// }
