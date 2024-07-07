import GameObject from "./gameobject";

export default class GameObjectCollection {
  // A map of gameobjects at a single tile. Each collection can only have one of a certain type of GameObject.
  // Ex. A GameObjectCollection can't have two tiles, but can have a tile and a wall.
  private collection: Map<string, GameObject>;

  public constructor() {
    this.collection = new Map();
  }

  public add(gameObject: GameObject): Map<string, GameObject> {
    return this.collection.set(typeof (gameObject), gameObject);
  }

  public delete(): void {
    this.collection.delete("Tile"); // TODO: Delete any gameObject, implement priority system of which gameobject to delete first?
  }

  public get<T extends GameObject>(constructor: new (...args: any[]) => T): T | undefined {
    return this.collection.get(constructor.name) as T | undefined;
  }

  public getAll(): IterableIterator<GameObject> {
    return this.collection.values();
  }
}
