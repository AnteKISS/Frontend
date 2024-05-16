import { EntityOrientation, getOrientationString } from '../enums/entityOrientation';

export class AnimationManager {
  // private static _instance: AnimationManager;
  
  // private static _scene: Phaser.Scene;
  // public get scene(): Phaser.Scene {
  //   return AnimationManager._scene;
  // }
  // public set scene(v: Phaser.Scene) {
  //   AnimationManager._scene = v;
  // }
  
  // private constructor() {
    
  // }

  // public static getInstance(): AnimationManager {
  //   if (!AnimationManager._instance) {
  //     AnimationManager._instance = new AnimationManager();
  //   }
  //   return AnimationManager._instance;
  // }

  public constructor() {

  }

  public static createAnimations(container: Phaser.GameObjects.Container, animationConfig: any): void {
    // assert(entity, 'Entity is not set for AnimationManager');
    // assert(entity.scene, 'Scene is not set for Entity');
    console.log('Creating animations for container:', container);
    console.log('Animation config:', animationConfig);
    for (const action in animationConfig) {
      const frames: any = animationConfig[action].frames;
      const frameRate: any = animationConfig[action].frameRate;

      frames.forEach((frameRange: any) => {
          const { start, end, sheet, orientation } = frameRange;
          const frameKey = `${action.toUpperCase()}_${getOrientationString(orientation)}_${sheet.toUpperCase()}`;
          console.log('Creating animation:', frameKey);
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