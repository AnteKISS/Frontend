import NotImplementedError from '../../errors/notImplementedError';

class PlayerEntity extends ActiveEntity {

  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.type = 'PlayerEntity';
  }

  // Getters/Setters


  // Methods
  update(): void {
    throw new NotImplementedError();
  }

  getType(): string {
    throw new NotImplementedError();
  }
}