import Inventory from './inventory'
import Item from './item'

export default class InventoryManager extends Phaser.GameObjects.Container {
  private inventory: Inventory;
  private selectedItem: Item | null = null;
  private closeButton: Phaser.GameObjects.Sprite;

  private isDragging: boolean = false;
  private mouseX: number;
  private mouseY: number;

  constructor(scene: Phaser.Scene, inventory: Inventory) {
    super(scene, 0, 0);
    this.inventory = inventory;

    this.closeButton = new Phaser.GameObjects.Sprite(scene, 883, 37, 'close_button').setInteractive();
    this.closeButton.on('pointerdown', () => console.log(this.setVisible(false)));

    scene.input.on('pointermove', this.onPointerMove, this);
    scene.input.on('pointerdown', this.onPointerDown, this);

    this.add([this.inventory, this.closeButton]);
    scene.add.existing(this);
  }

  public updateItems() {
    // Update item sprites inside equip slots
    for (const EQUIP_SLOT of this.inventory.getEquipSlots()) {
      const EQUIP_SLOT_ITEM = EQUIP_SLOT.getItem();
      if (EQUIP_SLOT_ITEM)
        EQUIP_SLOT_ITEM.setPosition(EQUIP_SLOT.x - EQUIP_SLOT_ITEM.width / 2, EQUIP_SLOT.y - EQUIP_SLOT_ITEM.height / 2);
    }

    // Update item sprites inside inventory
    for (const [item, startX, startY] of this.inventory.getItemsInfo()) {
      item.setSize(item.inventoryWidth * this.inventory.getGrid().cellSize, item.inventoryHeight * this.inventory.getGrid().cellSize);

      if (!(item === this.selectedItem && this.isDragging))
        item.setPosition(this.inventory.getGrid().x + startX * this.inventory.getGrid().cellSize, this.inventory.getGrid().y + startY * this.inventory.getGrid().cellSize);
    }
  }

  private onPointerMove(pointer: Phaser.Input.Pointer): void {
    if (this.isDragging && this.selectedItem)
      this.selectedItem.setPosition(pointer.x - 640, pointer.y - 360); // TODO: Remove absolute values

    this.mouseX = pointer.x;
    this.mouseY = pointer.y;
    this.inventory.getGrid().detectCellUnderMouse(this.mouseX, this.mouseY);
  }

  private onPointerDown(pointer: Phaser.Input.Pointer): void {
    if (this.isDragging && this.selectedItem)
      this.dropItem();
    else {
      // Check if equip slot clicked
      for (const EQUIP_SLOT of this.inventory.getEquipSlots())
        if (Phaser.Geom.Rectangle.Contains(EQUIP_SLOT.getBounds(), this.mouseX, this.mouseY)) {
          this.selectedItem = EQUIP_SLOT.unequipItem();
          this.isDragging = true;
          return;
        }

      // Check if item in inventory clicked
      for (let [item, startX, startY] of this.inventory.getItemsInfo())
        if (this.mouseIsOverItem(item, startX, startY)) {
          this.pickUpItem(item, startX, startY);
          return;
        }
    }
  }

  private pickUpItem(item: Item, startX: number, startY: number): void {
    this.selectedItem = item;
    this.isDragging = true;
    this.inventory.removeItem(item, startX, startY);
    console.log(`Picked up item: ${item.name}`);
  }

  private dropItem(): void {
    if (this.selectedItem) {
      // Check if dropped in equip slot
      for (const EQUIP_SLOT of this.inventory.getEquipSlots()) {
        if (Phaser.Geom.Rectangle.Contains(EQUIP_SLOT.getBounds(), this.mouseX, this.mouseY)) {
          const UNEQUIPPED_ITEM = EQUIP_SLOT.equipItem(this.selectedItem);
          if (UNEQUIPPED_ITEM === this.selectedItem) // Couldn't place item
            return;

          if (UNEQUIPPED_ITEM) { // Replaced item in equip slot
            this.selectedItem = UNEQUIPPED_ITEM;
          }
          else { // No item was in equip slot
            this.selectedItem = null;
            this.isDragging = false;
          }
          return;
        }
      }

      // Check if dropped in inventory grid
      const [gridX, gridY] = this.inventory.getGrid().detectCellUnderMouse(this.mouseX, this.mouseY);

      if (gridX == -1 && gridY == -1) {
        this.selectedItem.destroy();
        this.selectedItem = null;
        this.isDragging = false;
      }
      else if (this.inventory.isSpaceAvailable(this.selectedItem, gridX, gridY)) {
        this.inventory.addItem(this.selectedItem, gridX, gridY);
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

  private mouseIsOverItem(item: Item, startX: number, startY: number): boolean {
    const [gridX, gridY] = this.inventory.getGrid().detectCellUnderMouse(this.mouseX, this.mouseY);
    return gridX >= startX && gridX < startX + item.inventoryWidth
      && gridY >= startY && gridY < startY + item.inventoryHeight;
  }
}

