import { ItemType } from "./itemType";
import InventoryConfig from "./inventoryConfig";
import Item from "./item";

export default class EquipSlot extends Phaser.GameObjects.Rectangle {
  private itemType: ItemType;
  private item: Item | null;

  public constructor(scene: Phaser.Scene, itemType: ItemType, x: number, y: number, width: number, height: number) {
    super(scene, x, y, width, height, InventoryConfig.MOUSE_HOVER_COLOR);
    this.itemType = itemType;

    scene.add.existing(this);
  }

  public getItem(): Item | null {
    return this.item;
  }

  public unequipItem(): Item | null {
    const UNEQUIPPED_ITEM = this.item;
    this.item = null;
    return UNEQUIPPED_ITEM;
  }

  public equipItem(item: Item): Item | null {
    if (item.itemType !== this.itemType)
      return item;

    const LAST_ITEM = this.item;
    this.item = item;
    return LAST_ITEM;
  }
}
