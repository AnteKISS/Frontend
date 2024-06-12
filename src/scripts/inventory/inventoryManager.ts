import Inventory from './inventory'
import InventoryConfig from './inventoryConfig'
import Grid from './grid'
import Item from './item'

export default class InventoryManager {
  private inventory: Inventory;
  private grid: Grid;
  private selectedItem: Item | null = null;
  private selectedItemData: [Item, number, number] | null = null;

  private isDragging: boolean = false;
  private mouseX: number;
  private mouseY: number;

  constructor(scene: Phaser.Scene, inventory: Inventory) {
    this.inventory = inventory;
    this.grid = new Grid(scene, 390, 460, 10, 4, InventoryConfig.CELL_SIZE);

    scene.input.on('pointermove', this.onPointerMove, this);
    scene.input.on('pointerdown', this.onPointerDown, this);
  }

  public updateItems() {
    // Update item sprites inside equip slots
    for (const EQUIP_SLOT of this.inventory.getEquipSlots()) {
      const EQUIP_SLOT_ITEM = EQUIP_SLOT.getItem();
      if (EQUIP_SLOT_ITEM)
        EQUIP_SLOT_ITEM.setPosition(this.inventory.x + EQUIP_SLOT.x - EQUIP_SLOT_ITEM.width / 2, this.inventory.y + EQUIP_SLOT.y - EQUIP_SLOT_ITEM.height / 2);
    }

    // Update item sprites inside inventory
    for (const [item, startX, startY] of this.inventory.getItemsInfo()) {
      item.setSize(item.inventoryWidth * this.grid.cellSize, item.inventoryHeight * this.grid.cellSize);

      if (!(item === this.selectedItem && this.isDragging))
        item.setPosition(this.grid.x + startX * this.grid.cellSize, this.grid.y + startY * this.grid.cellSize);
    }
  }

  private onPointerMove(pointer: Phaser.Input.Pointer): void {
    if (this.isDragging && this.selectedItem)
      this.selectedItem.setPosition(pointer.x, pointer.y);

    this.mouseX = pointer.x;
    this.mouseY = pointer.y;
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
    this.selectedItemData = [item, startX, startY];
    this.isDragging = true;
    this.inventory.removeItem(item, startX, startY);
    console.log(`Picked up item: ${item.name}`);
  }

  private dropItem(): void {
    if (this.selectedItem && this.selectedItemData) {
      // Check if dropped in equip slot
      for (const EQUIP_SLOT of this.inventory.getEquipSlots()) {
        if (Phaser.Geom.Rectangle.Contains(EQUIP_SLOT.getBounds(), this.mouseX, this.mouseY)) {
          const UNEQUIPPED_ITEM = EQUIP_SLOT.equipItem(this.selectedItem);
          if (UNEQUIPPED_ITEM === this.selectedItem) // Couldn't place item
            return;

          if (UNEQUIPPED_ITEM) { // Replaced item in equip slot
            this.selectedItem = UNEQUIPPED_ITEM;
            this.selectedItemData = null;
          }
          else { // No item was in equip slot
            this.selectedItem = null;
            this.selectedItemData = null;
            this.isDragging = false;
          }
          return;
        }
      }

      // Check if dropped in inventory grid
      const [gridX, gridY] = this.grid.detectCellUnderMouse();

      if (this.inventory.isSpaceAvailable(this.selectedItem, gridX, gridY)) {
        this.inventory.addItem(this.selectedItem, gridX, gridY);
        console.log(`Dropped item: ${this.selectedItem.name} at (${gridX}, ${gridY})`);
      } else {
        console.log("Cannot drop item here, space is occupied.");
        const [item, startX, startY] = this.selectedItemData;
        console.log("Space occupied add item result:", this.inventory.addItem(item, startX, startY));
        console.log(startX, startY, this.inventory.occupied);
      }
      this.selectedItem = null;
      this.selectedItemData = null;
      this.isDragging = false;
    }
  }

  private mouseIsOverItem(item: Item, startX: number, startY: number): boolean {
    const [gridX, gridY] = this.grid.detectCellUnderMouse();
    return gridX >= startX && gridX < startX + item.inventoryWidth
      && gridY >= startY && gridY < startY + item.inventoryHeight;
  }
}

