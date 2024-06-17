import PlayerEquipment from './playerEquipment'
import ItemStorage from './itemStorage'
import InventoryConfig from './inventoryConfig'
import Item from './item'

export default class Inventory extends Phaser.GameObjects.Container {
  private closeButton: Phaser.GameObjects.Sprite;
  private background: Phaser.GameObjects.Sprite;

  private playerEquipment: PlayerEquipment;
  private itemStorage: ItemStorage;

  private selectedItem: Item | null = null;
  private isDragging: boolean = false;
  private mouseX: number; // TODO: We shouldn't have to track mouse position like this, should only use pointer events
  private mouseY: number;

  constructor(scene: Phaser.Scene) {
    super(scene, 640, 0);
    this.playerEquipment = new PlayerEquipment(scene);
    this.itemStorage = new ItemStorage(scene, -250, 470, InventoryConfig.INVENTORY_GRID_WIDTH, InventoryConfig.INVENTORY_GRID_HEIGHT, InventoryConfig.CELL_SIZE);

    this.background = new Phaser.GameObjects.Sprite(scene, 0, 360, 'black_rock_background');

    this.closeButton = new Phaser.GameObjects.Sprite(scene, 243, 37, 'close_button').setInteractive();
    this.closeButton.on('pointerdown', () => this.hide());

    scene.input.on('pointermove', this.onPointerMove, this);
    scene.input.on('pointerdown', this.onPointerDown, this);

    this.add([this.background, this.closeButton, this.itemStorage, this.playerEquipment]);
    scene.add.existing(this);
  }

  private onPointerMove(pointer: Phaser.Input.Pointer): void {
    this.updateSelectedItemPosition(pointer.x, pointer.y);
    this.mouseX = pointer.x;
    this.mouseY = pointer.y;
  }

  private onPointerDown(pointer: Phaser.Input.Pointer): void {
    if (!this.visible)
      return;

    // TODO: Instead of calling this.updateSelectedItemPosition everywhere, it should be called here

    if (this.isDragging && this.selectedItem)
      this.dropItem();
    else {
      // Check if equip slot clicked
      for (const EQUIP_SLOT of this.playerEquipment.getEquipSlots())
        if (Phaser.Geom.Rectangle.Contains(EQUIP_SLOT.getBounds(), pointer.x, pointer.y)) {
          this.selectedItem = EQUIP_SLOT.unequipItem();
          this.isDragging = true;
          this.updateSelectedItemPosition(pointer.x, pointer.y);
          return;
        }

      // Check if item in inventory clicked
      for (let [item, startX, startY] of this.itemStorage.getItemsInfo())
        if (this.itemStorage.mouseIsOverItem(item, startX, startY)) {
          this.pickUpItem(item, startX, startY);
          this.updateSelectedItemPosition(pointer.x, pointer.y);
          return;
        }
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

  public updateSelectedItemPosition(mouseX: number, mouseY: number): void {
    if (this.isDragging && this.selectedItem)
      this.selectedItem.setPosition(mouseX, mouseY);
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
    console.log(`Picked up item: ${item.name}`);
  }

  private dropItem(): void {
    if (this.selectedItem) {
      // Check if dropped in equip slot
      for (const EQUIP_SLOT of this.playerEquipment.getEquipSlots()) {
        if (Phaser.Geom.Rectangle.Contains(EQUIP_SLOT.getBounds(), this.mouseX, this.mouseY)) {
          const UNEQUIPPED_ITEM = EQUIP_SLOT.equipItem(this.selectedItem);
          if (UNEQUIPPED_ITEM === this.selectedItem) // Couldn't place item
            return;

          if (UNEQUIPPED_ITEM) { // Replaced item in equip slot
            this.selectedItem = UNEQUIPPED_ITEM;
            this.updateSelectedItemPosition(this.mouseX, this.mouseY);
          }
          else { // No item was in equip slot
            this.selectedItem = null;
            this.isDragging = false;
          }
          return;
        }
      }

      // Check if dropped in inventory grid
      const [gridX, gridY] = this.itemStorage.getCurrentCellPosition();

      if (gridX == -1 && gridY == -1)
        this.dropHeldItem();
      else if (this.itemStorage.isSpaceAvailable(this.selectedItem, gridX, gridY)) {
        this.itemStorage.addItem(this.selectedItem, gridX, gridY);
        console.log(`Dropped item: ${this.selectedItem.name} at (${gridX}, ${gridY})`);
        this.selectedItem = null;
        this.isDragging = false;
      }
      else {
        console.log("Cannot drop item here, space is occupied.");
        console.log("Space occupied add item result:");
      }
    }
  }
}

