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
import { ActiveEntityAnimator } from './activeEntityAnimator';
import { ActiveEntityAnimationState } from './entityState';
import { InventorySprite } from './inventorySprite';
import { InventorySlots } from '../enums/inventorySlots';
import { castToType } from '../utilities/typeCast';
import { InactiveEntity } from './inactiveEntity';

export class PlayerEntity extends ActiveEntity implements IFightable {

  public headSprite: InventorySprite;
  public bodySprite: InventorySprite;
  public mainHandSprite: InventorySprite;
  public offHandSprite: InventorySprite;

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
    this.headSprite = scene.add.sprite(0, 0, 'helmetTexture');
    this.headSprite.textureName = 'MALE_HEAD2';
    this.headSprite.slot = InventorySlots.HELMET;
    this.headSprite.scale = 1.5;
    this.bodySprite = scene.add.sprite(0, 0, 'chestplateTexture');
    this.bodySprite.textureName = 'STEEL_ARMOR';
    this.bodySprite.slot = InventorySlots.CHESTPLATE;
    this.bodySprite.scale = 1.5;
    this.mainHandSprite = scene.add.sprite(0, 0, 'mainHandTexture');
    this.mainHandSprite.textureName = 'LONGSWORD';
    this.mainHandSprite.slot = InventorySlots.MAINHAND;
    this.mainHandSprite.scale = 1.5;
    this.offHandSprite = scene.add.sprite(0, 0, 'offHandTexture');
    this.offHandSprite.textureName = 'LONGBOW';
    this.offHandSprite.slot = InventorySlots.OFFHAND;
    this.offHandSprite.scale = 1.5;
    this.add(this.headSprite);
    this.add(this.bodySprite);
    this.add(this.mainHandSprite);
    this.add(this.offHandSprite);
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
    this.mainHandSprite.setOrigin(0.5, 0.75);
    this.offHandSprite.setOrigin(0.5, 0.75);

    this.setDepth(0);
    this.truncatedSpriteWidth = 32 * this.bodySprite.scaleX;
    this.truncatedSpriteHeight = 64 * this.bodySprite.scaleY;
    this.collider = new Physics.Collider(this, this.bodySprite, this.onSpriteColliding, this.onEntityColliding);
    this.animator = new ActiveEntityAnimator(this);
  }

  // Getters/Setters
  public equipSpell(index, spell: Spell): void {
    this.equippedSpells[index] = spell;
  }

  public setPointerDown(state: boolean): void {
    this._pointerDown = state;
  }

  public getPointerDown(): boolean {
    return this._pointerDown;
  }

  // Methods
  public update(time: number, deltaTime: number): void {

    let value = Math.random() * 100;
    switch(true) {
      case value > 1:
        break;
    }

    this.updatePosition();
    this.animator.update(time, deltaTime);

    if (this._debugMode) {
      this.collider.displayDebugGraphics();
    }
    this.collider.checkSpriteCollision();

    if (this.target !== null && this.target !== undefined) {
      this.setOrientationRad(Phaser.Math.Angle.Between(this.positionX, this.positionY, this.target.positionX, this.target.positionY));
      if (MathModule.scaledDistanceBetween(this.positionX, this.positionY, this.target.positionX, this.target.positionY) <= 100) {
        if (this.target.isTargetable) {
          this.currentAnimationState.state = ActiveEntityAnimationState.State.MELEEATTACK;
          this.attack(this.target as unknown as IFightable);
        }
        this.setDestination(this.positionX, this.positionY);
        this.target = null;
      }
    }
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
    // TODO: Add a boolean attribute that is set if the player is attacking instead of validating with an animation state
    return this.currentAnimationState.state == ActiveEntityAnimationState.State.MELEEATTACK;
  }

  public isDead(): boolean {
    return this.stats.health <= 0;
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
    let otherHeight: number = hitEntity.positionY + (hitEntity.list.at(0) as InventorySprite).displayHeight;
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
