import { ItemType } from "./itemType";
import InventoryConfig from "./inventoryConfig";
import InventoryItem from './inventoryItem';
import { EntityManager } from "../managers/entityManager";

export default class EquipSlot extends Phaser.GameObjects.Container {
  private item: InventoryItem | null;
  public itemType: ItemType;

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

  public getInventoryItem(): InventoryItem | null {
    if (this.item)
      return this.item;
    return null;
  }

  public unequipItem(): InventoryItem | null {
    if (this.item === null)
      return null;

    const UNEQUIPPED_ITEM = this.item;
    this.remove(this.item);
    this.item = null;
    this.slot.setTexture(this.emptySlotSpritePath);
    EntityManager.instance.getPlayers()[0].updateStats();
    return UNEQUIPPED_ITEM;
  }

  public equipItem(item: InventoryItem): InventoryItem | null {
    if (item.getItem().itemType !== this.itemType)
      return item;

    const LAST_ITEM = this.item;
    if (LAST_ITEM !== null)
      this.remove(LAST_ITEM);
    this.item = item;
    this.item.setPosition(-this.item.width / 2, -this.item.height / 2);
    console.log(this.item.x, this.item.y);
    this.add(this.item);
    this.slot.setTexture(this.filledSlotSpritePath);
    EntityManager.instance.getPlayers()[0].updateStats();
    return LAST_ITEM;
  }
}
