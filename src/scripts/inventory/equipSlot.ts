import { ItemType } from "./itemType";
import InventoryConfig from "./inventoryConfig";
import Item from "./item";

export default class EquipSlot extends Phaser.GameObjects.Sprite {
  private itemType: ItemType;
  private item: Item | null;
  private emptySlotSpritePath: string;
  private filledSlotSpritePath: string;

  public constructor(scene: Phaser.Scene, itemType: ItemType, x: number, y: number, emptySlotSpritePath: string, filledSlotSpritePath: string) {
    super(scene, x, y, emptySlotSpritePath);
    this.itemType = itemType;
    this.emptySlotSpritePath = emptySlotSpritePath;
    this.filledSlotSpritePath = filledSlotSpritePath;

    const SPRITE_CELL_SIZE = 100;
    this.setScale(InventoryConfig.CELL_SIZE * 1.05 / SPRITE_CELL_SIZE);

    scene.add.existing(this);
  }

  public getItem(): Item | null {
    return this.item;
  }

  public unequipItem(): Item | null {
    const UNEQUIPPED_ITEM = this.item;
    this.item = null;
    this.setTexture(this.emptySlotSpritePath);
    return UNEQUIPPED_ITEM;
  }

  public equipItem(item: Item): Item | null {
    if (item.itemType !== this.itemType)
      return item;

    const LAST_ITEM = this.item;
    this.item = item;
    this.setTexture(this.filledSlotSpritePath);
    return LAST_ITEM;
  }
}
