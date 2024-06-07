import Inventory from "./inventory"
import Grid from './grid'
import Item from './item'

export default class InventoryManager {
  private inventory: Inventory;
  private grid: Grid;
  private selectedItem: Item | null = null;
  private selectedItemData: [Item, number, number] | null = null;

  private isDragging: boolean = false;

  constructor(scene: Phaser.Scene, inventory: Inventory) {
    this.inventory = inventory;
    this.grid = new Grid(scene, 100, 100, 32);

    scene.input.on('pointermove', this.onPointerMove, this);
    scene.input.on('pointerdown', this.onPointerDown, this);
  }

  public updateItems() {
    for (const [item, startX, startY] of this.inventory.getItems()) {
      item.setSize(item.inventoryWidth * 32, item.inventoryHeight * 32);

      if (!(item === this.selectedItem && this.isDragging))
        item.setPosition(this.grid.x + startX * 32, this.grid.y + startY * 32);
    }
  }

  private onPointerMove(pointer: Phaser.Input.Pointer): void {
    if (this.isDragging && this.selectedItem) {
      this.selectedItem.setPosition(pointer.x, pointer.y);
      // console.log(`item en main à (${this.grid.mouseX}, ${this.grid.mouseY})`); // position du cirseur avec objet
    }
  }

  private onPointerDown(pointer: Phaser.Input.Pointer): void {
    if (this.isDragging && this.selectedItem)
      this.dropItem();
    else
      for (let [item, startX, startY] of this.inventory.getItems())
        if (this.mouseIsOverItem(item, startX, startY)) {
          this.pickUpItem(item, startX, startY);
          return;
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

