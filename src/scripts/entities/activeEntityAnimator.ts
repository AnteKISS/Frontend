import { ActiveEntity } from "./activeEntity";
import { ActiveEntityAnimationState } from "./entityState";
import { BaseEntity } from "./baseEntity";
import { assert } from "console";
import NoSpriteFoundError from "../errors/noSpriteFoundError";
import { getOrientationString } from "../enums/entityOrientation";
import { InventorySprite } from "./inventorySprite";
import { InventorySlots } from "../enums/inventorySlots";

export class ActiveEntityAnimator {
  public parent: ActiveEntity;
  public sprites: InventorySprite[] = [];

  private spriteReference: InventorySprite;

  constructor(parent: ActiveEntity) {
    this.parent = parent;
    this.initialize();
  }

  public update(time: number, deltaTime: number): void {

    let hasOrientationUpdated: Boolean = false;

    switch(this.parent.currentAnimationState.state) {
      case ActiveEntityAnimationState.State.IDLE:
        if (!this.parent.isDestinationReached()) {
          this.parent.currentAnimationState.state = ActiveEntityAnimationState.State.RUN;
        }
        if (this.spriteReference.anims.isPlaying && this.spriteReference.anims.currentAnim.key.split('_')[0] == ActiveEntityAnimationState.State.IDLE) {
          break;
        }
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
        if (this.spriteReference.anims.isPlaying && this.spriteReference.anims.currentAnim.key.split('_')[0] == 'RUN' && !hasOrientationUpdated) {
          break;
        }
        for (const sprite of this.sprites) {
          sprite.play(`${this.parent.currentAnimationState.state}_${getOrientationString(this.parent.orientation)}_${sprite.textureName.toUpperCase()}`);
        }
        
        break;
      case ActiveEntityAnimationState.State.MELEEATTACK:
        hasOrientationUpdated = this.parent.updateOrientation();
        if (this.spriteReference.anims.isPlaying && this.spriteReference.anims.currentAnim.key.split('_')[0] == 'MELEEATTACK' && !hasOrientationUpdated) {
          break;
        }
        for (const sprite of this.sprites) {
          sprite.play(`${this.parent.currentAnimationState.state}_${getOrientationString(this.parent.orientation)}_${sprite.textureName.toUpperCase()}`);
        }
        break;
      case ActiveEntityAnimationState.State.RANGEDATTACK_2:
        break;
      case ActiveEntityAnimationState.State.BLOCK:
        break;
      case ActiveEntityAnimationState.State.CHEER:
        break;
      case ActiveEntityAnimationState.State.DEATH:
        if (this.spriteReference.anims.isPlaying && this.spriteReference.anims.currentAnim.key.split('_')[0] == 'DEATH' && !hasOrientationUpdated) {
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

  }

  onAnimationUpdate = (listener): void => {

  }

  onAnimationRepeat = (listener): void => {
    const action = listener.key.split('_')[0];
    let activeEntity = this.parent as ActiveEntity;
    let isReapeating = ActiveEntityAnimationState.getRepeatingAnimationState().filter((state) => state === action).length > 0;
    if (isReapeating) {
      return;
    }
    // console.log(action);
    if (action.toUpperCase() == ActiveEntityAnimationState.State.DEATH || action.toUpperCase() == ActiveEntityAnimationState.State.CRITICALDEATH) {
      // this.parent.currentAnimationState.state = ActiveEntityAnimationState.State.DEAD;
      return;
    }
    activeEntity.currentAnimationState.state = ActiveEntityAnimationState.State.IDLE;
  }

  onAnimationComplete = (listener): void => {
    
  }
}