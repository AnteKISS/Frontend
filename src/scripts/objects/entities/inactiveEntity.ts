abstract class InactiveEntity extends BaseEntity {

  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.type = 'InactiveEntity';
  }

  // Getters/Setters


  // Methods
  abstract update(): void;
  abstract getType(): string;
}