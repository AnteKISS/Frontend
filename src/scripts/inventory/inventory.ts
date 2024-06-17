import PlayerEquipment from './playerEquipment'
import ItemStorage from './itemStorage'
import InventoryConfig from './inventoryConfig'
import Item from './item'
import EquipSlot from './equipSlot'

export default class Inventory extends Phaser.GameObjects.Container {
  private closeButton: Phaser.GameObjects.Sprite;
  private background: Phaser.GameObjects.Sprite;

  private playerEquipment: PlayerEquipment;
  private itemStorage: ItemStorage;

  private selectedItem: Item | null = null;
  private isDragging: boolean = false;

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
    if (this.isDragging && this.selectedItem) {
      this.releaseHeldItem(pointer);
      return;
    }

    // Check if clicking an equip slot
    const EQUIP_SLOT = this.playerEquipment.getEquipSlotUnderMouse(pointer);
    if (EQUIP_SLOT) {
      this.selectedItem = EQUIP_SLOT.unequipItem();
      this.isDragging = true;
      this.updateSelectedItemPosition(pointer);
      return;
    }

    // Check if clicking item in item storage
    for (let [item, startX, startY] of this.itemStorage.getItemsInfo())
      if (this.itemStorage.mouseIsOverItem(item, startX, startY)) {
        this.pickUpItem(item, startX, startY);
        this.updateSelectedItemPosition(pointer);
        return;
      }
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
      this.selectedItem.destroy();
      this.selectedItem = null;
      this.isDragging = false;
    }
  }

  public updateSelectedItemPosition(pointer: Phaser.Input.Pointer): void {
    if (this.isDragging && this.selectedItem)
      this.selectedItem.setPosition(pointer.x, pointer.y);
  }

  public getPlayerEquipment(): PlayerEquipment {
    return this.playerEquipment;
  }

  public getItemStorage(): ItemStorage {
    return this.itemStorage;
  }

  private pickUpItem(item: Item, startX: number, startY: number): void {
    this.selectedItem = item;
    this.isDragging = true;
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
      this.dropItemInItemStorage();

    this.updateSelectedItemPosition(pointer);
  }

  private dropItemInEquipSlot(slot: EquipSlot): boolean {
    if (!this.selectedItem)
      return false;

    const UNEQUIPPED_ITEM = slot.equipItem(this.selectedItem);
    if (UNEQUIPPED_ITEM === this.selectedItem) // Couldn't place item
      return false;

    if (UNEQUIPPED_ITEM) { // Replaced item in equip slot
      this.selectedItem = UNEQUIPPED_ITEM;
    }
    else { // No item was in equip slot
      this.selectedItem = null;
      this.isDragging = false;
    }

    return true;
  }

  private dropItemInItemStorage(): boolean {
    if (!this.selectedItem)
      return false;

    const [gridX, gridY] = this.itemStorage.getCurrentCellPosition();

    if (gridX == -1 && gridY == -1) {
      this.dropHeldItem();
      return true;
    }

    if (this.itemStorage.isSpaceAvailable(this.selectedItem, gridX, gridY)) {
      this.itemStorage.addItem(this.selectedItem, gridX, gridY);
      this.selectedItem = null;
      this.isDragging = false;
      return true;
    }

    return false;
  }
}

