import { EntityOrientation, getOrientationString } from '../enums/entityOrientation';

export class AnimationManager {

  public constructor() {

  }

  public static createAnimations(container: Phaser.GameObjects.Container, animationConfig: any): void {
    for (const action in animationConfig) {
      const frames: any = animationConfig[action].frames;
      const frameRate: any = animationConfig[action].frameRate;

      frames.forEach((frameRange: any) => {
          const { start, end, sheet, orientation } = frameRange;
          const frameKey = `${action.toUpperCase()}_${getOrientationString(orientation)}_${sheet.toUpperCase()}`;

          container.scene.anims.create({
              key: frameKey,
              frames: container.scene.anims.generateFrameNumbers(sheet, { start, end }),
              frameRate: frameRate,
              repeat: -1
          });
      });
    }
  }

  public static getAnimationKey(action: string, orientation: EntityOrientation, sprite: string): string {
    // TODO: Check why animations don't play when the key of the animation is built with this function
    // The returned string is exactly the same as the key, but for some reasons, it doesn't work
    let animationKey: string = "";
    animationKey = `${action.toUpperCase()}_${getOrientationString(orientation).toUpperCase()}_${sprite.toUpperCase()}`;
    return animationKey;
  } 
}