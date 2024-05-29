import { BaseEntity } from "../entities/baseEntity";

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
  }
}