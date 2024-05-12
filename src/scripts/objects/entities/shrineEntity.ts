import NotImplementedError from '../../errors/notImplementedError';

class ShrineEntity extends InactiveEntity {

  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.type = 'ShrineEntity';
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