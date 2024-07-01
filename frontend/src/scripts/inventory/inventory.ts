import PlayerEquipment from './playerEquipment'
import ItemStorage from './itemStorage'
import InventoryConfig from './inventoryConfig'
import InventoryItem from './inventoryItem'
import EquipSlot from './equipSlot'
import Tooltip from '../label/tooltip'
import { EntityManager } from '../managers/entityManager'

export default class Inventory extends Phaser.GameObjects.Container {
  private closeButton: Phaser.GameObjects.Sprite;
  private background: Phaser.GameObjects.Sprite;

  private playerEquipment: PlayerEquipment;
  private itemStorage: ItemStorage;

  private selectedItem: InventoryItem | null = null;

  constructor(scene: Phaser.Scene) {
    super(scene, 640, 0);
    this.playerEquipment = new PlayerEquipment(scene);
    this.itemStorage = new ItemStorage(scene, -250, 470, InventoryConfig.INVENTORY_GRID_WIDTH, InventoryConfig.INVENTORY_GRID_HEIGHT);

    this.background = new Phaser.GameObjects.Sprite(scene, 0, 360, 'black_rock_background');

    this.closeButton = new Phaser.GameObjects.Sprite(scene, 243, 37, 'close_button').setInteractive();
    this.closeButton.on('pointerdown', () => this.hide());

    scene.input.on('pointermove', this.onPointerMove, this);
    scene.input.on('pointerdown', this.onPointerDown, this);

    this.add([this.background, this.closeButton, this.itemStorage, this.playerEquipment]);
    scene.add.existing(this);
  }

  private onPointerMove(pointer: Phaser.Input.Pointer): void {
    this.updateSelectedItemPosition(pointer);
  }

  private onPointerDown(pointer: Phaser.Input.Pointer): void {
    if (!this.visible)
      return;

    // If holding item, try dropping it
    if (this.selectedItem) {
      this.releaseHeldItem(pointer);
      return;
    }

    // Check if clicking an equip slot
    const EQUIP_SLOT = this.playerEquipment.getEquipSlotUnderMouse(pointer);
    if (EQUIP_SLOT) {
      this.setSelectedItem(EQUIP_SLOT.unequipItem());
      this.updateSelectedItemPosition(pointer);
      return;
    }

    // Check if clicking item in item storage
    for (let [item, startPos] of this.itemStorage.getItemsInfo())
      if (this.itemStorage.mouseIsOverItem(item, startPos.x, startPos.y)) {
        this.pickUpItem(item, startPos.x, startPos.y);
        this.updateSelectedItemPosition(pointer);
        return;
      }
  }

  public isPointerOnInventory(pointer: Phaser.Input.Pointer): boolean {
    const bounds = this.getBounds();
    return Phaser.Geom.Rectangle.Contains(bounds, pointer.x, pointer.y);
  }

  public show(): void {
    this.setVisible(true);
  }

  public hide(): void {
    this.dropHeldItem();
    this.setVisible(false);
  }

  public dropHeldItem(): void {
    if (this.selectedItem) {
      EntityManager.instance.createItem(this.scene, this.selectedItem.getItem());
      this.setSelectedItem(null);
    }
  }

  public updateSelectedItemPosition(pointer: Phaser.Input.Pointer): void {
    if (this.selectedItem) {
      this.selectedItem.setPosition(pointer.x, pointer.y);
      this.selectedItem.update(pointer);
    }
  }

  public isItemPickedUp(): boolean {
    return !!this.selectedItem;
  }

  public getPlayerEquipment(): PlayerEquipment {
    return this.playerEquipment;
  }

  public getItemStorage(): ItemStorage {
    return this.itemStorage;
  }

  private pickUpItem(item: InventoryItem, startX: number, startY: number): void {
    this.setSelectedItem(item);
    this.itemStorage.removeItem(item, startX, startY);
  }

  private releaseHeldItem(pointer: Phaser.Input.Pointer): void {
    if (!this.selectedItem)
      return;

    let itemAlreadyDropped = false;

    const EQUIP_SLOT = this.playerEquipment.getEquipSlotUnderMouse(pointer);
    if (EQUIP_SLOT)
      itemAlreadyDropped = this.dropItemInEquipSlot(EQUIP_SLOT);

    if (!itemAlreadyDropped)
      itemAlreadyDropped = this.dropItemInItemStorage();

    if (!itemAlreadyDropped && !this.isPointerOnInventory(pointer))
      this.dropHeldItem();

    this.updateSelectedItemPosition(pointer);
  }

  private dropItemInEquipSlot(slot: EquipSlot): boolean {
    if (!this.selectedItem)
      return false;

    const UNEQUIPPED_ITEM = slot.equipItem(this.selectedItem);
    if (UNEQUIPPED_ITEM === this.selectedItem) // Couldn't place item
      return false;

    if (UNEQUIPPED_ITEM) // Replaced item in equip slot
      this.setSelectedItem(UNEQUIPPED_ITEM);
    else // No item was in equip slot
      this.setSelectedItem(null);

    return true;
  }

  private dropItemInItemStorage(): boolean {
    if (!this.selectedItem)
      return false;

    const gridPos = this.itemStorage.getCurrentCellPosition();

    if (gridPos.x == -1 && gridPos.y == -1)
      return false;

    const swappedItem = this.itemStorage.swapItem(this.selectedItem, gridPos.x, gridPos.y);
    this.setSelectedItem(swappedItem);
    return true;
  }

  private setSelectedItem(item: InventoryItem | null): void {
    this.selectedItem = item;
  }
}

