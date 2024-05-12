abstract class NpcEntity extends ActiveEntity {

  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.type = 'NpcEntity';
  }

  // Getters/Setters


  // Methods
  abstract update(): void;
  abstract getType(): string;
}