abstract class ActiveEntity extends BaseEntity {

  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.type = 'ActiveEntity';
  }

  // Getters/Setters


  // Methods
  abstract update(): void;
  abstract getType(): string;
}