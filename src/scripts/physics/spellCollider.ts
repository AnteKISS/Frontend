import { BaseEntity } from "../entities/baseEntity";
import { EntityManager } from "../managers/entityManager";
import { Projectile } from "./projectile";

export namespace Physics {

  export class SpellCollider {
    
    private readonly SPRITE_HITBOX_COLOR: number = 0x0FFFFF;
    private readonly SPRITE_ORIGIN_COLOR: number = 0x0000FF;
    
    private _parentObject: Phaser.Physics.Arcade.Sprite;
    private _debugGraphics: Phaser.GameObjects.Graphics;
		private _owner: BaseEntity;
    private _collidingSpriteCallback: (hitEntity: BaseEntity) => void;
		private _collidingSpriteCallback2?: (sprite: Phaser.Physics.Arcade.Sprite, collider: Physics.SpellCollider) => void;
		private _alreadyHitEntities: BaseEntity[]
    
    constructor(owner: BaseEntity, parentObject: Phaser.Physics.Arcade.Sprite, collidingSpriteCallback: (hitEntity: BaseEntity) => void, collidingSpriteCallback2?: (sprite: Phaser.Physics.Arcade.Sprite, collider: Physics.SpellCollider) => void) {
			this._parentObject = parentObject;
      this._debugGraphics = this._parentObject.scene.add.graphics();
      this._collidingSpriteCallback = collidingSpriteCallback;
			this._collidingSpriteCallback2 = collidingSpriteCallback2;
			this._owner = owner;
			this._alreadyHitEntities = [];
    }

    public displayDebugGraphics(): void {
      this._debugGraphics.clear();

      this._debugGraphics.fillStyle(this.SPRITE_HITBOX_COLOR, 0.5);
      this._debugGraphics.fillRect(
        this._parentObject.x - (this._parentObject.displayWidth / 4), 
        this._parentObject.y - (this._parentObject.displayHeight / 4), 
        this._parentObject.displayWidth / 2, 
        this._parentObject.displayHeight / 2
      );

      this._debugGraphics.fillStyle(this.SPRITE_ORIGIN_COLOR, 0.5);
      this._debugGraphics.fillCircle(this._parentObject.x, this._parentObject.y, 5);
      if(this?._parentObject?.scene?.cameras?.getCamera("uiCamera"))
      {
            this._parentObject.scene.cameras.getCamera("uiCamera")!.ignore(this._debugGraphics);
      }
    }

		public removeDebugGraphics()
    {
      this._debugGraphics.clear();
    }

    public checkSpriteCollision(): boolean {
      const entities: BaseEntity[] = EntityManager.instance.getEntities();
			if (!entities) {
        console.error("Entities are undefined.");
        return false;
    }
      const positionX: number = this._parentObject.x;
      const positionY: number = this._parentObject.y + this._parentObject.displayHeight / 2;
      const truncatedSpriteWidth: number = this._parentObject.displayWidth / 2;
      const truncatedSpriteHeight: number = this._parentObject.displayHeight / 2;
      const originX: number = this._parentObject.originX;
      const originY: number = this._parentObject.originY;

      for (let index = 0; index < entities.length; index++) {
			 if(entities[index] === this._owner){
					continue;
				}
       if (!(positionX + (truncatedSpriteWidth / 2) > entities[index].positionX - (entities[index].truncatedSpriteWidth / 2))) {
          continue;
        }
        if (!(positionX - (truncatedSpriteWidth / 2) < entities[index].positionX + (entities[index].truncatedSpriteWidth / 2))) {
          continue;
        }
        if (!(positionY - (truncatedSpriteHeight / 2) < entities[index].positionY + (entities[index].truncatedSpriteHeight - (entities[index].truncatedSpriteHeight * originY)))) {
          continue;
        }
        if (!(positionY + (truncatedSpriteHeight / 2) > entities[index].positionY - (entities[index].truncatedSpriteHeight * originY))) {
          continue;
        }
				if(!this._alreadyHitEntities.includes(entities[index]))
				{
					this._alreadyHitEntities.push(entities[index]);
        	this._collidingSpriteCallback(entities[index]);
					if(this._collidingSpriteCallback2)
					{
						this._collidingSpriteCallback2(this._parentObject, this);
					}
				}
        return true;
      }
      return false;
    }
  }
}