import NotImplementedError from '../errors/notImplementedError';

class ShrineEntity extends InactiveEntity {

  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.type = 'ShrineEntity';
  }

  // Getters/Setters


  // Methods
  update(deltaTime: number): void {
    throw new NotImplementedError();
  }
}