import { SpellCollider } from "../physics/spellCollider";


export class SpellColliderManager
{
    private static instance: SpellColliderManager;
    private colliders: SpellCollider[];

    private constructor() 
    {
        this.colliders = [];
    }

    public static get getInstance(): SpellColliderManager
    {
        if (!SpellColliderManager.instance) 
        {
            SpellColliderManager.instance = new SpellColliderManager();
        }
        return SpellColliderManager.instance;
    }

    public addCollider(collider: SpellCollider): void 
    {
        this.colliders.push(collider);
    }

    public removeCollider(collider: SpellCollider): void 
    {
        const index = this.colliders.indexOf(collider);
        if (index == -1) 
        {
            return;
        }
        this.colliders.splice(index, 1);
    }
    
    public update(): void 
    {
        this.colliders.forEach(collider => {
          //collider.displayDebugGraphics();
          collider.checkCollision();
        });
    }
}