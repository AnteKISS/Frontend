import { BaseEntity } from './baseEntity';

export abstract class InactiveEntity extends BaseEntity {

  protected _stats: InactiveEntityStats;

  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.type = 'InactiveEntity';
  }

  // Getters/Setters
  public get stats(): InactiveEntityStats {
    return this._stats;
  }

  public set stats(v: InactiveEntityStats) {
    this._stats = v;
  }

  // Methods
  abstract update(deltaTime: number): void;
  abstract reset(): void;
  abstract initializeAnimations(): void;
  abstract updateOrientation(): boolean;
}