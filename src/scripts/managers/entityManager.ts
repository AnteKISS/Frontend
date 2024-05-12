class EntityManager {
    private static _instance: EntityManager;
    private _entities: BaseEntity[];

    private constructor() {
        this._entities = [];
    }

    public static get instance(): EntityManager {
        if (!EntityManager._instance) {
            EntityManager._instance = new EntityManager();
        }
        return EntityManager._instance;
    }

    public addEntity(entity: BaseEntity): void {
        this._entities.push(entity);
    }

    public removeEntity(entity: BaseEntity): void {
        const index = this._entities.indexOf(entity);
        if (index == -1) {
          return;
        }
        this._entities.splice(index, 1);
    }

    public update(deltaTime: number): void {
        this._entities.forEach(entity => {
            entity.update(deltaTime);
        });
    }
}