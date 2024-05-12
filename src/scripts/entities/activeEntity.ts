abstract class ActiveEntity extends BaseEntity {

  private _stats: ActiveEntityStats;
  private _species : EntitySpecies;
  
  constructor(scene) {
    super(scene);
    scene.add.existing(this);
    this.type = 'ActiveEntity';
  }

  // Getters/Setters
  public get stats(): ActiveEntityStats {
    return this._stats;
  }

  public set stats(v: ActiveEntityStats) {
    this._stats = v;
  }

  public get species(): EntitySpecies {
    return this._species;
  }

  public set species(v: EntitySpecies) {
    this._species = v;
  }

  // Methods
  abstract update(deltaTime: number): void;
  abstract reset(): void;
}