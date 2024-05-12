import { ActiveEntity } from './activeEntity';
import NotImplementedError from '../errors/notImplementedError';

export class PlayerEntity extends ActiveEntity {

  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.type = 'PlayerEntity';
  }

  // Getters/Setters


  // Methods
  public update(deltaTime: number): void {
    throw new NotImplementedError();
  }

  public reset(): void {
    throw new NotImplementedError();
  }
}