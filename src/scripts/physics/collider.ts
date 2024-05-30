import { BaseEntity } from "../entities/baseEntity";
import { EntityManager } from "../managers/entityManager";

export namespace Physics {

  export class Collider {
    
    private readonly SPRITE_HITBOX_COLOR: number = 0x00FF00;
    private readonly ENTITY_HITBOX_COLOR: number = 0xFF0000;
    private readonly ENTITY_ORIGIN_COLOR: number = 0x0000FF;
    
    private _parentEntity: BaseEntity;
    private _parentSprite: Phaser.GameObjects.Sprite;
    private _debugGraphics: Phaser.GameObjects.Graphics;
    
    constructor(parentEntity: BaseEntity, parentSprite: Phaser.GameObjects.Sprite) {
      this._parentEntity = parentEntity;
      this._parentSprite = parentSprite;
      this._debugGraphics = this._parentEntity.scene.add.graphics();
    }

    public displayDebugGraphics(): void {
      this._debugGraphics.clear();

      // console.log(this._parentEntity.positionX - (this._parentEntity.displayWidth / 2));
      // console.log(this._parentEntity.positionY - (this._parentEntity.displayHeight / 2));
      // console.log(this._parentEntity.displayWidth);
      // console.log(this._parentEntity.displayHeight);
      // this._debugGraphics.lineStyle(2, this.ENTITY_HITBOX_COLOR, 1);
      // this._debugGraphics.strokeRect(
      //   this._parentEntity.positionX - (this._parentSprite.displayWidth / 2), 
      //   this._parentEntity.positionY - (this._parentSprite.displayHeight / 2), 
      //   this._parentSprite.displayWidth, 
      //   this._parentSprite.displayHeight
      // );

      this._debugGraphics.fillStyle(this.SPRITE_HITBOX_COLOR, 0.5);
      this._debugGraphics.fillRect(
        this._parentEntity.positionX - (this._parentEntity.truncatedSpriteWidth / 2), 
        this._parentEntity.positionY - (this._parentEntity.truncatedSpriteWidth / 4), 
        this._parentEntity.truncatedSpriteWidth, 
        this._parentEntity.truncatedSpriteWidth / 2
      );

      this._debugGraphics.lineStyle(2, this.ENTITY_HITBOX_COLOR, 0.5);
      this._debugGraphics.strokeRect(
        this._parentEntity.positionX - (this._parentEntity.truncatedSpriteWidth / 2), 
        this._parentEntity.positionY - (this._parentEntity.truncatedSpriteHeight * this._parentSprite.originY), 
        this._parentEntity.truncatedSpriteWidth, 
        this._parentEntity.truncatedSpriteHeight
      );

      this._debugGraphics.fillStyle(this.ENTITY_ORIGIN_COLOR, 0.5);
      this._debugGraphics.fillCircle(this._parentEntity.positionX, this._parentEntity.positionY, 5);
    }

    public checkCollision(): void {
      const entities: BaseEntity[] = EntityManager.instance.getEntities();
      const positionX: number = this._parentEntity.positionX;
      const positionY: number = this._parentEntity.positionY;
      const truncatedSpriteWidth: number = this._parentEntity.truncatedSpriteWidth;
      const truncatedSpriteHeight: number = this._parentEntity.truncatedSpriteHeight;
      const originX: number = this._parentSprite.originX;
      const originY: number = this._parentSprite.originY;

      for (let index = 0; index < entities.length; index++) {
        if (entities[index] === this._parentEntity) {
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
        console.log('Collision detected');
      }
    }

    public checkOverlap(): void {

    }
  }
}