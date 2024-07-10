import GameObject from "./gameobject";
import Tile from "./tile";

export default class GameObjectCollection {
  // A map of gameobjects at a single tile. Each collection can only have one of a certain type of GameObject.
  // Ex. A GameObjectCollection can't have two tiles, but can have a tile and a wall.
  private collection: Map<string, GameObject>;

  public constructor() {
    this.collection = new Map();
  }

  public add(gameObject: GameObject): Map<string, GameObject> {
    return this.collection.set(gameObject.constructor.name, gameObject);
  }

  public delete(): Array<GameObject> | undefined {
    const gameObjectsToDelete = new Array<GameObject>;
    for (const gameObject of this.collection.values())
      gameObjectsToDelete.push(gameObject);
    this.collection.clear();
    return gameObjectsToDelete;
  }

  public getByType<T extends GameObject>(constructor: new (...args: any[]) => T): T | undefined {
    return this.collection.get(constructor.name) as T | undefined;
  }

  public getBySameType(gameObject: GameObject) {
    return this.collection.get(gameObject.constructor.name);
  }

  public getAll(): IterableIterator<GameObject> {
    return this.collection.values();
  }

  public size(): number {
    return this.collection.size;
  }
}
