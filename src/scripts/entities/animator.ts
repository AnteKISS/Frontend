import { ActiveEntity } from "./activeEntity";
import { ActiveEntityState } from "./activeEntityState";
import { BaseEntity } from "./baseEntity";

export class Animator {
  public parent: BaseEntity;

  constructor(parent: BaseEntity) {
    this.parent = parent;
    this.initialize();
  }

  private initialize(): void {
    this.initializeEventHandlers();
  }

  private initializeEventHandlers(): void {
    const sprites = this.parent.getAll().filter(gameObject => gameObject instanceof Phaser.GameObjects.Sprite);
    if (sprites.length <= 0) {
      return;
    }
    for (const sprite of sprites) {
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
    let isReapeating = ActiveEntityState.getRepeatingAnimationState().filter((state) => state === action).length > 0;
    if (isReapeating) {
      return;
    }
    activeEntity.currentState.state = ActiveEntityState.State.IDLE;
  }

  onAnimationComplete = (listener): void => {
    
  }
}