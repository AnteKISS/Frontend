import { ActiveEntity } from "./activeEntity";
import { ActiveEntityAnimationState } from "./entityState";
import { BaseEntity } from "./baseEntity";
import { assert } from "console";
import NoSpriteFoundError from "../errors/noSpriteFoundError";
import { getOrientationString } from "../enums/entityOrientation";
import { InventorySprite } from "./inventorySprite";
import { InventorySlots } from "../enums/inventorySlots";
import { Signal } from "../events/signal";
import Item from "../inventory/item";
import { ActiveEntityEvents } from "../events/activeEntityEvents";
import { ItemType } from "../inventory/itemType";
import { GeneralEventManager } from "../managers/eventManager";
import MainScene from "../scenes/mainScene";

export class ActiveEntityAnimator {
  public parent: ActiveEntity;
  public sprites: InventorySprite[] = [];
  public onNonRepeatingAnimationComplete: Signal = new Signal();
  public onYoyoAnimationMiddleFrame: Signal = new Signal();
  public forceUpdateOnce: boolean = false;

  private futureState: ActiveEntityAnimationState.State | null = null;
  private spriteReference: InventorySprite;

  constructor(parent: ActiveEntity) {
    this.parent = parent;
    this.initialize();
  }

  public update(time: number, deltaTime: number): void {

    let hasOrientationUpdated: Boolean = false;

    switch (this.parent.currentAnimationState.state) {
      case ActiveEntityAnimationState.State.IDLE:
        if (!this.parent.isDestinationReached()) {
          this.parent.currentAnimationState.state = ActiveEntityAnimationState.State.RUN;
        }
        if (this.spriteReference.anims && this.spriteReference.anims.isPlaying && this.spriteReference.anims.currentAnim && this.spriteReference.anims.currentAnim.key.split('_')[0] == ActiveEntityAnimationState.State.IDLE && !this.forceUpdateOnce) {
          break;
        }
        this.forceUpdateOnce = false;
        for (const sprite of this.sprites) {
          sprite.play(`${this.parent.currentAnimationState.state}_${getOrientationString(this.parent.orientation)}_${sprite.textureName.toUpperCase()}`);
        }
        break;
      case ActiveEntityAnimationState.State.RUN:
        hasOrientationUpdated = this.parent.updateOrientation();
        if (this.parent.isDestinationReached()) {
          this.parent.currentAnimationState.state = ActiveEntityAnimationState.State.IDLE;
          break;
        }
        if (this.spriteReference.anims.isPlaying && this.spriteReference.anims.currentAnim && this.spriteReference.anims.currentAnim.key.split('_')[0] == 'RUN' && !hasOrientationUpdated) {
          break;
        }
        for (const sprite of this.sprites) {
          sprite.play(`${this.parent.currentAnimationState.state}_${getOrientationString(this.parent.orientation)}_${sprite.textureName.toUpperCase()}`);
        }

        break;
      case ActiveEntityAnimationState.State.MELEEATTACK:
        if (this.spriteReference.anims.isPlaying && this.spriteReference.anims.currentAnim && this.spriteReference.anims.currentAnim.key.split('_')[0] == 'MELEEATTACK') {
          this.parent.updateOrientationWithTarget();
          break;
        }
        this.parent.updateOrientationWithTarget();
        for (const sprite of this.sprites) {
          sprite.play(`${this.parent.currentAnimationState.state}_${getOrientationString(this.parent.orientation)}_${sprite.textureName.toUpperCase()}`);
        }
        break;
      case ActiveEntityAnimationState.State.RANGEDATTACK_2:
        hasOrientationUpdated = this.parent.updateOrientationWithTarget();
        if (this.spriteReference.anims.isPlaying && this.spriteReference.anims.currentAnim && this.spriteReference.anims.currentAnim.key.split('_')[0] == 'MELEEATTACK_2' && !hasOrientationUpdated) {
          break;
        }
        for (const sprite of this.sprites) {
          sprite.play(`${this.parent.currentAnimationState.state}_${getOrientationString(this.parent.orientation)}_${sprite.textureName.toUpperCase()}`);
        }
        break;
      case ActiveEntityAnimationState.State.BLOCK:
        break;
      case ActiveEntityAnimationState.State.CHEER:
        break;
      case ActiveEntityAnimationState.State.DEATH:
        if (this.spriteReference.anims.isPlaying && this.spriteReference.anims.currentAnim && this.spriteReference.anims.currentAnim.key.split('_')[0] == 'DEATH' && !hasOrientationUpdated) {
          break;
        }
        for (const sprite of this.sprites) {
          sprite.play(`${this.parent.currentAnimationState.state}_${getOrientationString(this.parent.orientation)}_${sprite.textureName.toUpperCase()}`);
        }
        this.parent.currentAnimationState.state = ActiveEntityAnimationState.State.DEAD;
        break;
      case ActiveEntityAnimationState.State.DEAD:
        break;
      case ActiveEntityAnimationState.State.MELEEATTACK_2:
      case ActiveEntityAnimationState.State.RANGEDATTACK_2:
      case ActiveEntityAnimationState.State.CASTSPELL:
      case ActiveEntityAnimationState.State.CRITICALDEATH:
      case ActiveEntityAnimationState.State.HIT:
      default:
        break;
    }
  }

  public setAnimatorState(state: ActiveEntityAnimationState.State): void {
    this.parent.currentAnimationState.state = state;
  }

  public setFutureAnimatorState(state: ActiveEntityAnimationState.State): void {
    this.futureState = state;
  }

  public isNonReapeatingAnimationPlaying(): boolean {
    return ActiveEntityAnimationState.getNonRepeatingAnimationState().filter((state) => state === this.parent.currentAnimationState.state).length > 0;
  }

  private initialize(): void {
    this.sprites = this.parent.getAll().filter(gameObject => gameObject instanceof Phaser.GameObjects.Sprite) as InventorySprite[];
    const test = this.parent.getAll();
    if (this.sprites.length <= 0) {
      throw new NoSpriteFoundError("No sprite found in the parent entity.");
    }
    this.spriteReference = this.sprites[0];
    this.initializeEventHandlers();
  }

  private initializeEventHandlers(): void {
    for (const sprite of this.sprites) {
      sprite.on('animationstart', this.onAnimationStart);
      sprite.on('animationupdate', this.onAnimationUpdate);
      sprite.on('animationrepeat', this.onAnimationRepeat);
      sprite.on('animationcomplete', this.onAnimationComplete);
    }
  }

  onAnimationStart = (listener): void => {
    const action: string = listener.key.split('_')[0].toUpperCase();
    switch (action) {
      case ActiveEntityAnimationState.State.MELEEATTACK:
        // Some rat code since I'm not sure how the inventory system works
        const parentScene = this.parent.scene as MainScene;
        let equippedWeapon: Item = parentScene.playerTest.inventory.getPlayerEquipment().getEquippedWeapon()?.getItem() ?? new Item(parentScene, "Default Weapon", ItemType.WEAPON, 0, 0, "default-sprite", "default-sprite");
        const meleeAttackEvent = new ActiveEntityEvents.MeleeWeaponAttackEvent(this.parent, equippedWeapon);
        meleeAttackEvent.isStartingAttack = true;
        GeneralEventManager.getInstance().notifyObservers(meleeAttackEvent);
    }
  }

  onAnimationUpdate = (listener): void => {
    if (this.spriteReference.anims &&
      this.spriteReference.anims.currentFrame &&
      this.spriteReference.anims.currentAnim &&
      this.spriteReference.anims.currentFrame.index == this.spriteReference.anims.currentAnim.frames.length &&
      this.spriteReference.anims.isPlaying &&
      this.spriteReference.anims.forward == true) {
      this.onYoyoAnimationMiddleFrame.raise(() => {
        this.parent.currentAnimationState
      });
      const action: string = listener.key.split('_')[0].toUpperCase();
      switch (action) {
        case ActiveEntityAnimationState.State.MELEEATTACK:
          // Some rat code since I'm not sure how the inventory system works
          const parentScene = this.parent.scene as MainScene;
          let equippedWeapon: Item = parentScene.playerTest.inventory.getPlayerEquipment().getEquippedWeapon()?.getItem() ?? new Item(parentScene, "Default Weapon", ItemType.WEAPON, 0, 0, "default-sprite", "default-sprite");
          const meleeAttackEvent = new ActiveEntityEvents.MeleeWeaponAttackEvent(this.parent, equippedWeapon);
          meleeAttackEvent.isMiddleOfAttack = true;
          GeneralEventManager.getInstance().notifyObservers(meleeAttackEvent);
      }
    }
  }

  onAnimationRepeat = (listener): void => {
    this.onNonRepeatingAnimationComplete.raise(() => {
      this.parent.currentAnimationState
    });
    if (this.futureState !== null) {
      this.parent.currentAnimationState.state = this.futureState;
      this.futureState = null;
    }
    const action: string = listener.key.split('_')[0].toUpperCase();
    let activeEntity: ActiveEntity = this.parent as ActiveEntity;
    let animationStatesUpperCase: string[] = ActiveEntityAnimationState.getRepeatingAnimationState();
    animationStatesUpperCase.forEach((state) => state.toUpperCase());
    let isReapeating: boolean = animationStatesUpperCase.filter((state) => state === action).length > 0;
    if (isReapeating) {
      return;
    }
    if (animationStatesUpperCase.filter((state) => state === action).length > 0) {
      return;
    }
    activeEntity.currentAnimationState.state = ActiveEntityAnimationState.State.IDLE;
  }

  onAnimationComplete = (listener): void => {

  }
}
