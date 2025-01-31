import GameObject from './gameobject';
import GameObjectCollection from './gameObjectCollection';
import Spawner from './spawner';
import Tile from './tile';
import TileModule from './tilemodule';

export default class Area {
  public name: string;
  public gameObjects: Map<string, GameObjectCollection>;
  public tiles: Set<Tile>;
  public spawners: Set<Spawner>;

  public constructor(name: string) {
    this.name = name;
    this.gameObjects = new Map();
    this.tiles = new Set();
    this.spawners = new Set();
  }

  public addGameObject(gameObject: GameObject): void {
    let collection = this.getGameObjectCollection(gameObject.tileX, gameObject.tileY);
    if (!collection) collection = this.createGameObjectCollection(gameObject.tileX, gameObject.tileY);
    const replacedGameObject = collection.add(gameObject);

    if (gameObject instanceof Tile) {
      this.tiles.delete(replacedGameObject as Tile);
      this.tiles.add(gameObject);
    }
    else if (gameObject instanceof Spawner) {
      this.spawners.delete(replacedGameObject as Spawner);
      this.spawners.add(gameObject);
    }
  }

  public removeGameObjects(x: number, y: number): IterableIterator<GameObject> | undefined {
    const hash = TileModule.getTileHash(x, y);
    const collection = this.gameObjects.get(hash);
    const gameObjectsToDelete = collection?.delete();

    // Delete area's extra references to gameobjects
    if (gameObjectsToDelete) {
      const tile = gameObjectsToDelete.get("Tile");
      const spawner = gameObjectsToDelete.get("Spawner");

      if (tile) this.tiles.delete(tile as Tile);
      if (spawner) this.spawners.delete(spawner as Spawner);
    }

    if (gameObjectsToDelete) this.gameObjects.delete(hash);
    return gameObjectsToDelete?.values();
  }

  public getGameObjectByType<T extends GameObject>(x: number, y: number, constructor: new (...args: any[]) => T): T | undefined {
    return this.getGameObjectCollection(x, y)?.getByType(constructor);
  }

  public getGameObjectOfSameType(x: number, y: number, gameObject: GameObject) {
    return this.getGameObjectCollection(x, y)?.getBySameType(gameObject);
  }

  public getGameObjects(): GameObject[] {
    const gameObjects: GameObject[] = [];

    for (const collection of this.gameObjects.values())
      for (const gameObject of collection.getAll())
        gameObjects.push(gameObject);

    return gameObjects;
  }

  public getTiles(): IterableIterator<Tile> {
    return this.tiles.values();
  }

  public activateSpawners(): void {
    for (const spawner of this.spawners)
      spawner.spawn();
  }

  public getProximityTileList(x: number, y: number, proximity: number): Tile[] {
    const tileList: Tile[] = [];
    let tile: Tile | undefined;
    const P2: number = proximity * proximity;

    // Select tiles in a circle, column by column
    // Algorithm used: https://stackoverflow.com/a/14036626
    for (let cx = x - proximity; cx <= x + proximity; cx++) {
      const X2: number = Math.pow((x - cx), 2);
      const Y_DIST: number = Math.floor(Math.sqrt(P2 - X2));
      for (let cy = y - Y_DIST; cy <= y + Y_DIST; cy++) {
        tile = this.getGameObjectCollection(cx, cy)?.getByType(Tile);
        if (tile) tileList.push(tile);
      }
    }
    return tileList;
  }

  private createGameObjectCollection(x: number, y: number): GameObjectCollection {
    const collection = new GameObjectCollection();
    this.gameObjects.set(TileModule.getTileHash(x, y), collection);
    return collection;
  }

  private getGameObjectCollection(x: number, y: number): GameObjectCollection | undefined {
    return this.gameObjects.get(TileModule.getTileHash(x, y));
  }
}
