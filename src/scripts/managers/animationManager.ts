import { EntityOrientation, getOrientationString } from '../enums/entityOrientation';

export class AnimationManager {

  public constructor() {

  }

  public static createAnimations(container: Phaser.GameObjects.Container, animationConfig: any): void {
    // console.log('Creating animations for container:', container);
    // console.log('Animation config:', animationConfig);
    for (const action in animationConfig) {
      const frames: any = animationConfig[action].frames;
      const frameRate: any = animationConfig[action].frameRate;

      frames.forEach((frameRange: any) => {
          const { start, end, sheet, orientation } = frameRange;
          const frameKey = `${action.toUpperCase()}_${getOrientationString(orientation)}_${sheet.toUpperCase()}`;
          // console.log('Creating animation:', frameKey);
          // const frameKey = `${entity.type}-${action}-${sheet}`;

          container.scene.anims.create({
              key: frameKey,
              frames: container.scene.anims.generateFrameNumbers(sheet, { start, end }),
              frameRate: frameRate,
              repeat: -1
          });
      });
    }
  }
}