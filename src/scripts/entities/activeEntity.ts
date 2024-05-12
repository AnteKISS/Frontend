import NotImplementedError from '../errors/notImplementedError';

export abstract class ActiveEntity extends BaseEntity implements IMovable {

  protected _stats: ActiveEntityStats;
  protected _species: EntitySpecies;
  
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
  move(coordinate: MapCoordinateEntity): void {
    throw new NotImplementedError();
  }

  setDestination(coordinate: MapCoordinateEntity): void {
    throw new NotImplementedError();
  }

  getDestination(): MapCoordinateEntity {
    throw new NotImplementedError();
  }

  getMovementSpeed(): number {
    throw new NotImplementedError();
  }

  setMovementSpeed(speed: number): void {
    throw new NotImplementedError();
  }

  getSpeed(): number {
    throw new NotImplementedError();
  }

  getGravity(): number {
    throw new NotImplementedError();
  }

  setGravity(gravity: number): void {
    throw new NotImplementedError();
  }

  abstract update(deltaTime: number): void;
  abstract reset(): void;
}