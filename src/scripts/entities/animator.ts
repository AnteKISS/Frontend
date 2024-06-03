import { animationConfigKeys } from "../configs/animationConfig";
import { getOrientationString } from "../enums/entityOrientation";
import { BaseEntity } from "./baseEntity";

export class Animator {
  public parent: BaseEntity;
  public anims: Phaser.Animations.AnimationManager;

  constructor(parent: BaseEntity) {
    this.parent = parent;
    this.createAnimations();
  }

  public createAnimations(): void {
    if (this.parent.code === '') {
      throw new Error('Animator: Entity code is empty');
    }

    let animConfig = animationConfigKeys[`${this.parent.code}_AnimationConfig`];

    for (const action in animConfig) {
      const frames: any = animConfig[action].frames;
      const frameRate: any = animConfig[action].frameRate;

      frames.forEach((frameRange: any) => {
          const { start, end, sheet, orientation } = frameRange;
          const frameKey = `${action.toUpperCase()}_${getOrientationString(orientation)}_${sheet.toUpperCase()}`;

          let animExists: Boolean = this.parent.scene.anims.exists(frameKey);
          let sprites = this.parent.getAll().filter(gameObject => gameObject instanceof Phaser.GameObjects.Sprite);
          if (sprites.length <= 0) {
            throw new Error('Animator: No sprite found in entity');
          }

          if (!animExists) {
            this.anims.create({
              key: frameKey,
              frames: this.anims.generateFrameNumbers(sheet, { start, end }),
              frameRate: frameRate,
              repeat: -1
            });
          }
      });
    }
  }

  public playAnimationOnGroup(key: string): void {
    this.parent.getAll().forEach(sprite => {
      (sprite as Phaser.GameObjects.Sprite).play(key);
    });
  }
}