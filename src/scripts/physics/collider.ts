import { IFightable } from "../entities/IFightable";
import { BaseEntity } from "../entities/baseEntity";
import { InventorySprite } from "../entities/inventorySprite";
import { PlayerEntity } from "../entities/playerEntity";
import { EntityManager } from "../managers/entityManager";

export namespace Physics {

  export type CollisionInformation = {
    collidingEntity: BaseEntity | null;
    collidingSprite: Phaser.GameObjects.Sprite | null;
  }

  export class Collider {
    
    private readonly SPRITE_HITBOX_COLOR: number = 0x00FF00;
    private readonly ENTITY_HITBOX_COLOR: number = 0xFF0000;
    private readonly ENTITY_ORIGIN_COLOR: number = 0x0000FF;
    
    public parentEntity: BaseEntity;
    public parentSprite: Phaser.GameObjects.Sprite;
    public debugGraphics: Phaser.GameObjects.Graphics;

    private _collidingSpriteCallback: (hitEntity: BaseEntity) => void;
    private _collidingEntityCallback: (hitEntity: BaseEntity) => void;
    
    constructor(parentEntity: BaseEntity, parentSprite: Phaser.GameObjects.Sprite, collidingSpriteCallback: (hitEntity: BaseEntity) => void, collidingEntityCallback: (hitEntity: BaseEntity) => void) {
      this.parentEntity = parentEntity;
      this.parentSprite = parentSprite;
      this.debugGraphics = this.parentEntity.scene.add.graphics();
      this._collidingSpriteCallback = collidingSpriteCallback;
      this._collidingEntityCallback = collidingEntityCallback;
    }

    public displayDebugGraphics(): void {
      this.debugGraphics.clear();

      let players: PlayerEntity = EntityManager.instance.getPlayers()[0];
      this.debugGraphics.fillStyle(this.SPRITE_HITBOX_COLOR, 0.5);

      const radiusX = this.parentEntity.truncatedSpriteWidth;
      const radiusY = this.parentEntity.truncatedSpriteWidth / 2;
      
      this.debugGraphics.beginPath();
      this.debugGraphics.fillEllipse(
        this.parentEntity.positionX, 
        this.parentEntity.positionY, 
        radiusX, 
        radiusY
      );
      this.debugGraphics.fillPath();

      this.debugGraphics.lineStyle(2, this.ENTITY_HITBOX_COLOR, 0.5);
      this.debugGraphics.strokeRect(
        this.parentEntity.positionX - (this.parentEntity.truncatedSpriteWidth / 2), 
        this.parentEntity.positionY - (this.parentEntity.truncatedSpriteHeight * this.parentSprite.originY), 
        this.parentEntity.truncatedSpriteWidth, 
        this.parentEntity.truncatedSpriteHeight
      );

      this.debugGraphics.fillStyle(this.ENTITY_ORIGIN_COLOR, 0.5);
      this.debugGraphics.fillCircle(this.parentEntity.positionX, this.parentEntity.positionY, 5);
    }

    public checkCollisions(): CollisionInformation {
      let collisionInfo: CollisionInformation = {collidingEntity: null, collidingSprite: null};
      collisionInfo.collidingSprite = this.checkSpriteCollision();
      collisionInfo.collidingEntity = this.checkEntityCollision();
      return collisionInfo;
    }

    public checkSpriteCollision(): Phaser.GameObjects.Sprite | null {
      const entities: BaseEntity[] = EntityManager.instance.getEntities();
      const positionX: number = this.parentEntity.positionX;
      const positionY: number = this.parentEntity.positionY;
      const truncatedSpriteWidth: number = this.parentEntity.truncatedSpriteWidth;
      const truncatedSpriteHeight: number = this.parentEntity.truncatedSpriteHeight;
      const originX: number = this.parentSprite.originX;
      const originY: number = this.parentSprite.originY;

      for (let index = 0; index < entities.length; index++) {
        if (entities[index] === this.parentEntity) {
          continue;
        }
        if (!(positionX + (truncatedSpriteWidth / 2) > entities[index].positionX - (entities[index].truncatedSpriteWidth / 2))) {
          continue;
        }
        if (!(positionX - (truncatedSpriteWidth / 2) < entities[index].positionX + (entities[index].truncatedSpriteWidth / 2))) {
          continue;
        }
        if (!(positionY - (truncatedSpriteHeight * originY) < entities[index].positionY + (entities[index].truncatedSpriteHeight - (entities[index].truncatedSpriteHeight * originY)))) {
          continue;
        }
        if (!(positionY + (truncatedSpriteHeight - (truncatedSpriteHeight * originY)) > entities[index].positionY - (entities[index].truncatedSpriteHeight * originY))) {
          continue;
        }
        this._collidingSpriteCallback(entities[index]);
        return entities[index].getAll()[0] as InventorySprite;
      }
      return null;
    }

    public checkEntityCollision(): BaseEntity | null {
      const entities: BaseEntity[] = EntityManager.instance.getEntities();
      const positionX: number = this.parentEntity.positionX;
      const positionY: number = this.parentEntity.positionY;
      const truncatedSpriteWidth: number = this.parentEntity.truncatedSpriteWidth;
    
      for (let index = 0; index < entities.length; index++) {
        if (entities[index] === this.parentEntity) {
          continue;
        }
        let entity = (entities[index] as unknown as IFightable);
        if (entities[index].type == "ItemEntity") {
          continue;
        }
        if (entity.isDead()) {
          continue;
        }
    
        const radiusX = truncatedSpriteWidth;
        const radiusY = truncatedSpriteWidth / 2;
    
        const dx = positionX - entities[index].positionX;
        const dy = positionY - entities[index].positionY;
        if ((dx * dx) / (radiusX * radiusX) + (dy * dy) / (radiusY * radiusY) <= 1) {
          this._collidingEntityCallback(entities[index]);
          return entities[index];
        }
      }
      return null;
    }
  }
}