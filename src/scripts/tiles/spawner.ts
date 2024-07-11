import GameObject from './gameobject';

export default class Spawner extends GameObject {
  private entityId: string;
  private respawn: boolean;
  private spawnRate: number; // in seconds
  private lastSpawn: number;
  private maxEntities: number;
  private range: number; // in tiles

  public constructor(tileX: number, tileY: number) {
    super(tileX, tileY, "basic_spawner");
    this.entityId = "zombie";
    this.respawn = true;
    this.spawnRate = 60;
    this.lastSpawn = 0;
    this.maxEntities = 5;
    this.range = 10;
  }

  public getArgs(): any[] {
    return ["Spawner", this.tileX, this.tileY, this.source];
  }

  public getCollectionId(): string {
    return "Spawner";
  }

  public getCollectionDepth(): number {
    return 0;
  }
}
