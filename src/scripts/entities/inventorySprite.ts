import { InventorySlots } from "../enums/inventorySlots";

export class InventorySprite extends Phaser.GameObjects.Sprite {

  public slot: InventorySlots;
  public textureName: string;

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number) {
    super(scene, x, y, texture, frame);
  }
}