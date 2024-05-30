import { InactiveEntity } from './inactiveEntity';
import NotImplementedError from '../errors/notImplementedError';
import { BaseEntity } from './baseEntity';

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

  onColliding(hitEntity: BaseEntity): void {
    console.log('Hit entity:', hitEntity.getType());
  }
  onOverlapping(hitEntity: BaseEntity): void {
    console.log('Hit entity:', hitEntity.getType());
  }

  initializeAnimations(): void {
    
  }
}