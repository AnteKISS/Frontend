import { animationConfigKeys } from '../configs/animationConfig';
import { EntityOrientation, getOrientationString } from '../enums/entityOrientation';

export class AnimationManager {

  public constructor() {

  }

  public static createAnimations(container: Phaser.GameObjects.Container, animationConfigKey: any): void {
    let animConfig = animationConfigKeys[animationConfigKey];
    for (const action in animConfig) {
      const frames: any = animConfig[action].frames;
      const frameRate: any = animConfig[action].frameRate;

      frames.forEach((frameRange: any) => {
          const { start, end, sheet, orientation } = frameRange;
          const frameKey = `${action.toUpperCase()}_${getOrientationString(orientation)}_${sheet.toUpperCase()}`;

          // console.log(`start: ${start}`);
          // console.log(`end: ${end}`);
          // console.log(`sheet: ${sheet}`);
          // console.log(`orientation: ${orientation}`);
          // console.log(`orientation enum: ${getOrientationString(orientation)}`);
          // console.log(`frameKey: ${frameKey}`);

          let animExists: Boolean = container.scene.anims.exists(frameKey);

          if (!animExists) {
            container.scene.anims.create({
              key: frameKey,
              frames: container.scene.anims.generateFrameNumbers(sheet, { start, end }),
              frameRate: frameRate,
              repeat: -1
            });
          }
      });
    }
  }

  public static getAnimationConfig(monsterCode: string) {

  }

  public static getAnimationKey(action: string, orientation: EntityOrientation, sprite: string): string {
    // TODO: Check why animations don't play when the key of the animation is built with this function
    // The returned string is exactly the same as the key, but for some reasons, it doesn't work
    let animationKey: string = "";
    animationKey = `${action.toUpperCase()}_${getOrientationString(orientation).toUpperCase()}_${sprite.toUpperCase()}`;
    return animationKey;
  } 
}