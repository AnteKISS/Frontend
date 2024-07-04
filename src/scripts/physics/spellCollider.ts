import { BaseEntity } from "../entities/baseEntity";


export abstract class SpellCollider
{
    protected readonly SPRITE_HITBOX_COLOR: number = 0x0FFFFF;
    protected readonly SPRITE_ORIGIN_COLOR: number = 0x0000FF;

    protected parentObject: Phaser.Physics.Arcade.Sprite;
    protected debugGraphics: Phaser.GameObjects.Graphics;
	protected owner: BaseEntity;
    protected alreadyHitEntities: BaseEntity[];
    protected collidingCallback: (hitEntity: BaseEntity) => void;

    constructor(owner: BaseEntity, parentObject: Phaser.Physics.Arcade.Sprite, collidingCallback: (hitEntity: BaseEntity) => void)
    {
        this.owner = owner;
        this.parentObject = parentObject;
        this.debugGraphics = this.parentObject.scene.add.graphics();
        this.alreadyHitEntities = [];
    
        this.collidingCallback = collidingCallback;
    }

    public removeDebugGraphics()
    {
        this.debugGraphics.clear();
    }

    public abstract displayDebugGraphics(): void;
    public abstract checkCollision(): boolean;
}