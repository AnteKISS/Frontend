import NotImplementedError from '../errors/notImplementedError';

class MonsterEntity extends ActiveEntity {

  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.type = 'MonsterEntity';
  }

  // Getters/Setters


  // Methods
  update(deltaTime: number): void {
    throw new NotImplementedError();
  }
}