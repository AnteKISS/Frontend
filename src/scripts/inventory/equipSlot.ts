import { ItemType } from "./itemType";
import InventoryConfig from "./inventoryConfig";
import Item from "./item";

export default class EquipSlot extends Phaser.GameObjects.Container {
  private item: Item | null;
  private itemType: ItemType;

  private slot: Phaser.GameObjects.Sprite;
  private emptySlotSpritePath: string;
  private filledSlotSpritePath: string;

  public constructor(scene: Phaser.Scene, itemType: ItemType, x: number, y: number, emptySlotSpritePath: string, filledSlotSpritePath: string) {
    super(scene, x, y);
    this.itemType = itemType;

    this.slot = new Phaser.GameObjects.Sprite(scene, 0, 0, emptySlotSpritePath);
    this.emptySlotSpritePath = emptySlotSpritePath;
    this.filledSlotSpritePath = filledSlotSpritePath;

    const SPRITE_CELL_SIZE = 100;
    this.slot.setScale(InventoryConfig.CELL_SIZE * 1.05 / SPRITE_CELL_SIZE);

    this.add(this.slot);
    scene.add.existing(this);
  }

  public getItem(): Item | null {
    return this.item;
  }

  public unequipItem(): Item | null {
    if (this.item === null)
      return null;

    const UNEQUIPPED_ITEM = this.item;
    this.remove(this.item);
    this.item = null;
    this.slot.setTexture(this.emptySlotSpritePath);
    return UNEQUIPPED_ITEM;
  }

  public equipItem(item: Item): Item | null {
    if (item.itemType !== this.itemType)
      return item;

    const LAST_ITEM = this.item;
    if (LAST_ITEM !== null)
      this.remove(LAST_ITEM);
    this.item = item;
    this.item.setPosition(-this.item.width / 2, -this.item.height / 2);
    this.add(this.item);
    this.slot.setTexture(this.filledSlotSpritePath);
    return LAST_ITEM;
  }
}
