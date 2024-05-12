import NotImplementedError from '../../errors/notImplementedError';

class MonsterEntity extends ActiveEntity {

  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.type = 'MonsterEntity';
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