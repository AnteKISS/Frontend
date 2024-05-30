import Inventaire from "./inventaire";


class InventoryManager {
    private inventaire: Inventaire;
    private selectedItem: Item | null = null;
    private selectedItemData: [Item, number, number] | null = null;
    private mouseX: number = 0;
    private mouseY: number = 0;
    private isDragging: boolean = false;
    private scene: Phaser.Scene;
  
    constructor(scene: Phaser.Scene, inventaire: Inventaire) {
      this.scene = scene;
      this.inventaire = inventaire;
  
      
      scene.input.on('pointermove', this.onPointerMove, this);
      scene.input.on('pointerdown', this.onPointerDown, this);
    }
  
    private onPointerMove(pointer: Phaser.Input.Pointer): void {
      this.mouseX = pointer.x;
      this.mouseY = pointer.y;
  
      if (this.isDragging && this.selectedItem) {
        // position du cirseur avec objet
        console.log(`item en main à (${this.mouseX}, ${this.mouseY})`);
      }
    }
  
    private onPointerDown(pointer: Phaser.Input.Pointer): void {
      if (this.isDragging && this.selectedItem) {
        this.dropItem();
      } else {
        for (let [item, startX, startY] of this.inventaire.getItems()) {
          if (this.mouseIsOver(item, startX, startY)) {
            this.pickUpItem(item, startX, startY);
            break;
          }
        }
      }
    }
  
    private pickUpItem(item: Item, startX: number, startY: number): void {
      this.selectedItem = item;
      this.selectedItemData = [item, startX, startY];
      this.isDragging = true;
      this.inventaire.removeItem(item,startX,startY);
      console.log(`Picked up item: ${item.name}`);
    }
  
    private dropItem(): void {
      if (this.selectedItem && this.selectedItemData) {
        const [gridX, gridY] = this.getGridPosition(this.mouseX, this.mouseY);
        if (this.inventaire.isSpaceAvailable(this.selectedItem, gridX, gridY)) {
          this.inventaire.addItem(this.selectedItem, gridX, gridY);
          console.log(`Dropped item: ${this.selectedItem.name} at (${gridX}, ${gridY})`);
        } else {
          console.log("Cannot drop item here, space is occupied.");
          const [item, startX, startY] = this.selectedItemData;
          this.inventaire.addItem(item, startX, startY);
        }
        this.selectedItem = null;
        this.selectedItemData = null;
        this.isDragging = false;
      }
    }
  
    private getGridPosition(x: number, y: number): [number, number] {
      const gridX = Math.floor(x / (800 / this.inventaire.gridWidth));
      const gridY = Math.floor(y / (600 / this.inventaire.gridHeight));
      return [gridX, gridY];
    }
  
    private mouseIsOver(item: Item, startX: number, startY: number): boolean {
      const endX = startX + item.width;
      const endY = startY + item.height;
  
      return this.mouseX >= startX * (800 / this.inventaire.gridWidth) &&
             this.mouseX <= endX * (800 / this.inventaire.gridWidth) &&
             this.mouseY >= startY * (600 / this.inventaire.gridHeight) &&
             this.mouseY <= endY * (600 / this.inventaire.gridHeight);
    }
  }
  