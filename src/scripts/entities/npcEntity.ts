import { ActiveEntity } from './activeEntity';

abstract class NpcEntity extends ActiveEntity {

  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.type = 'NpcEntity';
  }

  // Getters/Setters


  // Methods
  abstract update(deltaTime: number): void;
  abstract reset(): void;
}