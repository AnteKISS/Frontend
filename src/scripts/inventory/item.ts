import InventoryConfig from './inventoryConfig'
import { ItemType } from './itemType'

export default class Item extends Phaser.GameObjects.Sprite {
  name: string;
  inventoryWidth: number;
  inventoryHeight: number;
  itemType: ItemType;

  constructor(scene: Phaser.Scene, name: string, type: ItemType, width: number, height: number, img: string) {
    super(scene, 0, 0, img);
    this.name = name;
    this.itemType = type;
    this.inventoryWidth = width;
    this.inventoryHeight = height;

    this.setOrigin(0, 0);
    this.setScale(width * InventoryConfig.CELL_SIZE / this.width);

    scene.add.existing(this);
  }
}
