import { animationConfigKeys, minotaur_0_AnimationConfig } from '../configs/animationConfig';
import { EntityOrientation, getOrientationString } from '../enums/entityOrientation';

export class AnimationManager {

  public static createAnimations(container: Phaser.GameObjects.Container, animationConfigKey: string): void {
    let animConfig = animationConfigKeys[animationConfigKey];
    for (const action in animConfig) {
      const frames: any = animConfig[action].frames;
      const frameRate: any = animConfig[action].frameRate;

      frames.forEach((frameRange: any) => {
          const { start, end, sheet, orientation } = frameRange;
          const frameKey = `${action.toUpperCase()}_${getOrientationString(orientation)}_${sheet.toUpperCase()}`;

          let animExists: Boolean = container.scene.anims.exists(frameKey);

          if (!animExists) {
            if (action == 'death' || action == 'death2') {
              container.scene.anims.create({
                key: frameKey,
                frames: container.scene.anims.generateFrameNumbers(sheet, { start, end }),
                frameRate: frameRate,
                repeat: 0,
              });
            } else if (action == 'idle' || action == 'meleeAttack' || action == 'meleeAttack_2' || action == 'block') {
              container.scene.anims.create({
                key: frameKey,
                frames: container.scene.anims.generateFrameNumbers(sheet, { start, end }),
                frameRate: frameRate,
                repeat: -1,
                yoyo: true,
                skipMissedFrames: false
              });
            } else {
              container.scene.anims.create({
                key: frameKey,
                frames: container.scene.anims.generateFrameNumbers(sheet, { start, end }),
                frameRate: frameRate,
                repeat: -1,
              });
            }
          }
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