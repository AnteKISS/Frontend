import { BaseEntity } from './baseEntity';

export abstract class InactiveEntity extends BaseEntity {

  public stats: InactiveEntityStats;
  public testProperty: string;

  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.type = 'InactiveEntity';
    this.isTargetable = false;
  }

  // Getters/Setters

  // Methods
  abstract update(deltaTime: number): void;
  abstract reset(): void;
  abstract initializeAnimations(): void;
}