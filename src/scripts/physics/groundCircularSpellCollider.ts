import { SpellCollider } from "./spellCollider";
import { BaseEntity } from "../entities/baseEntity";
import { EntityManager } from "../managers/entityManager";
import { IFightable } from "../entities/IFightable";

export class GroundCircularSpellCollider extends SpellCollider
{
    constructor(owner: BaseEntity, parentObject: Phaser.Physics.Arcade.Sprite, collidingCallback: (hitEntity: BaseEntity) => void)
    {
        super(owner, parentObject, collidingCallback);
        if(this?.parentObject?.scene?.cameras?.getCamera("uiCamera"))
        {
            this.parentObject.scene.cameras.getCamera("uiCamera")!.ignore(this.debugGraphics);
        }
        
    }

    public displayDebugGraphics(): void 
    {
        this.debugGraphics.clear();

        this.debugGraphics.fillStyle(this.SPRITE_HITBOX_COLOR, 0.5);
        this.debugGraphics.fillEllipse(this.parentObject.x, this.parentObject.y, this.parentObject.displayWidth, this.parentObject.displayHeight);

        this.debugGraphics.fillStyle(this.SPRITE_ORIGIN_COLOR, 0.5);
        this.debugGraphics.fillCircle(this.parentObject.x, this.parentObject.y, 5);
    }

    public checkCollision(): boolean 
    {
        const entities: BaseEntity[] = EntityManager.instance.getEntities();
		if (!entities) 
        {
            console.error("Entities are undefined.");
            return false;
        }

        for (let index = 0; index < entities.length; index++)
        {
            if (entities[index] === this.owner)
            {
                continue;
            }
            if((entities[index] as unknown as IFightable).isDead() == true)
            {
                continue;
            }
            if(!this.checkCollisionWithEntity(entities[index]))
            {
                continue;
            }
            if(!this.alreadyHitEntities.includes(entities[index]))
            {
                this.alreadyHitEntities.push(entities[index]);
                this.collidingCallback(entities[index]);
            }
            return true;
        }
        return false;
    }

    private checkCollisonWithPoint(x: number, y: number): boolean
    {
        const h = this.parentObject.x;
        const k = this.parentObject.y;
        const a = this.parentObject.displayWidth / 2;
        const b = this.parentObject.displayHeight / 2;

        const value = ((x - h) * (x - h)) / (a * a) + ((y - k) * (y - k)) / (b * b);

        return value <= 1;
    }

    private checkCollisionWithEntity(entity: BaseEntity): boolean
    {
        const top = entity.positionY - (entity.truncatedSpriteWidth / 4);
        const bottom = entity.positionY + (entity.truncatedSpriteWidth / 4);
        const right = entity.positionX + (entity.truncatedSpriteWidth / 2);
        const left = entity.positionX - (entity.truncatedSpriteWidth / 2);

        return this.checkCollisonWithPoint(left, top) ||
                this.checkCollisonWithPoint(left, bottom) ||
                this.checkCollisonWithPoint(right, top) ||
                this.checkCollisonWithPoint(right, bottom);
    }
}