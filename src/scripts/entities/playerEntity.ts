import NotImplementedError from '../errors/notImplementedError';

class PlayerEntity extends ActiveEntity {

  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.type = 'PlayerEntity';
  }

  // Getters/Setters


  // Methods
  update(deltaTime: number): void {
    throw new NotImplementedError();
  }
}