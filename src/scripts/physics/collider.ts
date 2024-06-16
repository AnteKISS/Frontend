import { IFightable } from "../entities/IFightable";
import { BaseEntity } from "../entities/baseEntity";
import { PlayerEntity } from "../entities/playerEntity";
import { EntityManager } from "../managers/entityManager";

export namespace Physics {

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
      this.debugGraphics.fillRect(
        this.parentEntity.positionX - (this.parentEntity.truncatedSpriteWidth / 2), 
        this.parentEntity.positionY - (this.parentEntity.truncatedSpriteWidth / 4), 
        this.parentEntity.truncatedSpriteWidth, 
        this.parentEntity.truncatedSpriteWidth / 2
      );

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

    public checkCollisions(): void {
      this.checkSpriteCollision();
      this.checkEntityCollision();
    }

    public checkSpriteCollision(): boolean {
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
        return true;
      }
      return false;
    }

    public checkEntityCollision(): boolean {
      const entities: BaseEntity[] = EntityManager.instance.getEntities();
      const positionX: number = this.parentEntity.positionX;
      const positionY: number = this.parentEntity.positionY;
      const truncatedSpriteWidth: number = this.parentEntity.truncatedSpriteWidth;

      for (let index = 0; index < entities.length; index++) {
        if (entities[index] === this.parentEntity) {
          continue;
        }
        if ((entities[index] as unknown as IFightable).isDead()) {
          continue;
        }
        if (!(positionX + (truncatedSpriteWidth / 2) > entities[index].positionX - (entities[index].truncatedSpriteWidth / 2))) {
          continue;
        }
        if (!(positionX - (truncatedSpriteWidth / 2) < entities[index].positionX + (entities[index].truncatedSpriteWidth / 2))) {
          continue;
        }
        if (!(positionY - (truncatedSpriteWidth / 4) < entities[index].positionY + (entities[index].truncatedSpriteWidth / 4))) {
          continue;
        }
        if (!(positionY + (truncatedSpriteWidth / 4) > entities[index].positionY - (entities[index].truncatedSpriteWidth / 4))) {
          continue;
        }
        this._collidingEntityCallback(entities[index]);
        return true;
      }
      return false;
    }
  }
}