import { InactiveEntity } from './inactiveEntity';
import NotImplementedError from '../errors/notImplementedError';

export class ShrineEntity extends InactiveEntity {

  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.type = 'ShrineEntity';
  }

  // Getters/Setters


  // Methods
  public update(deltaTime: number): void {
    throw new NotImplementedError();
  }

  public reset(): void {
    throw new NotImplementedError();
  }

  initializeAnimations(): void {
    
  }
}