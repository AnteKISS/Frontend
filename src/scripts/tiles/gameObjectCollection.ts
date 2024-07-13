import GameObject from "./gameobject";

export default class GameObjectCollection {
  // A map of gameobjects at a single tile. Each collection can only have one of a certain type of GameObject.
  // Ex. A GameObjectCollection can't have two tiles, but can have a tile and a wall.
  private collection: Map<string, GameObject>;

  public constructor() {
    this.collection = new Map();
  }

  public add(gameObject: GameObject): GameObject | undefined {
    const replacedGameObject = this.collection.get(gameObject.getCollectionId());
    this.collection.set(gameObject.getCollectionId(), gameObject);
    return replacedGameObject;
  }

  public delete(): Map<string, GameObject> | undefined {
    const gameObjectsToDelete = new Map<string, GameObject>;
    for (const gameObject of this.collection)
      gameObjectsToDelete.set(gameObject[0], gameObject[1]);
    this.collection.clear();
    return gameObjectsToDelete;
  }

  public getByType<T extends GameObject>(constructor: new (...args: any[]) => T): T | undefined {
    return this.collection.get(constructor.name) as T | undefined;
  }

  public getBySameType(gameObject: GameObject) {
    return this.collection.get(gameObject.getCollectionId());
  }

  public getAll(): IterableIterator<GameObject> {
    return this.collection.values();
  }

  public size(): number {
    return this.collection.size;
  }
}
