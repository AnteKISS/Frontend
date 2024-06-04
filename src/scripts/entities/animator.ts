import { animationConfigKeys } from "../configs/animationConfig";
import { getOrientationString } from "../enums/entityOrientation";
import { ActiveEntityState } from "./activeEntityState";
import { BaseEntity } from "./baseEntity";
import { PlayerEntity } from "./playerEntity";

export class Animator {
  public parent: BaseEntity;
  // public anims: Phaser.Animations.AnimationManager;

  constructor(parent: BaseEntity) {
    this.parent = parent;
    this.initialize();
    // this.anims = new Phaser.Animations.AnimationManager(parent.scene.game);
    // this.createAnimations();
  }

  private initialize(): void {
    this.initializeEventHandlers();
  }

  private initializeEventHandlers(): void {
    // console.log('Initializing event handlers');
    const sprites = this.parent.getAll().filter(gameObject => gameObject instanceof Phaser.GameObjects.Sprite);
    if (sprites.length <= 0) {
      return;
    }
    // console.log('Sprites:', sprites);
    // for (let i = 0; i < sprites.length; i++) {
    //   console.log('Sprite:', sprites[i]);
    // }
    for (const sprite of sprites) {
      // sprite.on('animationstart', this.onAnimationStart);
      // sprite.on('animationupdate', this.onAnimationUpdate);
      // sprite.on('animationrepeat', this.onAnimationRepeat);
      // sprite.on('animationcomplete', this.onAnimationComplete);
      sprite.on('animationstart', (listener) => {
        // console.log('Animation start for sprite:', listener.key);
      });
      sprite.on('animationupdate', (listener) => {
        // console.log('Animation update for sprite:', listener.key);
      });
      sprite.on('animationrepeat', (listener) => {
        if (this.parent.code === 'player') {
          const action = listener.key.split('_')[0];
          // console.log('Action:', action);
          if (action !== 'MELEEATTACK' && action !== 'RANGEDATTACK' && action !== 'BLOCK' && action !== 'CHEER' && action !== 'DEATH') {
            return;
          }
          // (sprite as Phaser.GameObjects.Sprite).anims.stop();
          // (this.parent as PlayerEntity).currentState = ActiveEntityState.MELEEATTACK;
          (this.parent as PlayerEntity).currentState = ActiveEntityState.IDLE;
          // console.log('Animation repeat for sprite:', listener.key);
        }
        // console.log('Animation repeat for sprite:', listener.key);
      });
      sprite.on('animationcomplete', (listener) => {
        // console.log('Animation complete for sprite:', listener.key);
      });
      sprite.on('animationstop', (listener) => {
        // console.log('Animation stopped for sprite:', listener.key);
      });
    }
  }

  onAnimationStart = (listener): void => {

  }

  onAnimationUpdate = (listener): void => {

  }

  onAnimationRepeat = (listener): void => {

  }

  onAnimationComplete = (listener): void => {
    console.log('Animation complete for sprite:', listener.key);
  }

    // this.bodySprite.on('animationcomplete', (listener) => {
    //   if (listener.key.split('_')[0] == "MELEEATTACK") {
    //     this.bodySprite.play(`${action}_${getOrientationString(this.orientation)}_ZOMBIE_0`);
    //   }
    // });

  // public playAnimation(key: string): void {
  //   let sprites = this.parent.getAll().filter(gameObject => gameObject instanceof Phaser.GameObjects.Sprite);
  //   if (sprites.length <= 0) {
  //     throw new Error('Animator: No sprite found in entity');
  //   }

  //   sprites.forEach(sprite => {
  //     (sprite as Phaser.GameObjects.Sprite).play(key);
  //   });
  // }

  // public createAnimations(): void {
  //   if (this.parent.code === '') {
  //     throw new Error('Animator: Entity code is empty');
  //   }
  //   let animConfig = animationConfigKeys[`${this.parent.code}_AnimationConfig`];

  //   for (const action in animConfig) {
  //     const frames: any = animConfig[action].frames;
  //     const frameRate: any = animConfig[action].frameRate;

  //     frames.forEach((frameRange: any) => {
  //         const { start, end, sheet, orientation } = frameRange;
  //         const frameKey = `${action.toUpperCase()}_${getOrientationString(orientation)}_${sheet.toUpperCase()}`;

  //         let animExists: Boolean = this.parent.scene.anims.exists(frameKey);
  //         let sprites = this.parent.getAll().filter(gameObject => gameObject instanceof Phaser.GameObjects.Sprite);
  //         if (sprites.length <= 0) {
  //           throw new Error('Animator: No sprite found in entity');
  //         }

  //         if (!animExists) {
  //           this.anims.create({
  //             key: frameKey,
  //             frames: this.anims.generateFrameNumbers(sheet, { start, end }),
  //             frameRate: frameRate,
  //             repeat: -1
  //           });
  //         }
  //     });
  //   }
  // }

  // public playAnimationOnGroup(key: string): void {
  //   this.parent.getAll().forEach(sprite => {
  //     (sprite as Phaser.GameObjects.Sprite).play(key);
  //   });
  // }
}