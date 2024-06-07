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
      item.setSize(item.width * 10, item.height * 10);
      item.setPosition(this.grid.x + startX * 10, this.grid.y + startY * 10);
      console.log("Updating item: ", item);
    }
  }

  private onPointerMove(pointer: Phaser.Input.Pointer): void {
    if (this.isDragging && this.selectedItem)
      console.log(`item en main à (${this.grid.mouseX}, ${this.grid.mouseY})`); // position du cirseur avec objet
  }

  private onPointerDown(pointer: Phaser.Input.Pointer): void {
    if (this.isDragging && this.selectedItem)
      this.dropItem();
    else
      for (let [item, startX, startY] of this.inventory.getItems())
        if (this.mouseIsOver(startX, startY)) {
          this.pickUpItem(item, startX, startY);
          break;
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
        this.inventory.addItem(item, startX, startY);
      }
      this.selectedItem = null;
      this.selectedItemData = null;
      this.isDragging = false;
    }
  }

  private mouseIsOver(x: number, y: number): boolean {
    return this.inventory.occupied[y][x];
  }
}

