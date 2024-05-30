import Inventaire from "./inventaire";
import Grid from './grid';


class InventoryManager {
    private inventaire: Inventaire;
    private grid : Grid;
    private selectedItem: Item | null = null;
    private selectedItemData: [Item, number, number] | null = null;
    
    private isDragging: boolean = false;
    private scene: Phaser.Scene;
  
    constructor(scene: Phaser.Scene, inventaire: Inventaire) {
      this.scene = scene;
      this.inventaire = inventaire;
  
      
      scene.input.on('pointermove', this.onPointerMove, this);
      scene.input.on('pointerdown', this.onPointerDown, this);
    }
  
    private onPointerMove(pointer: Phaser.Input.Pointer): void {
      
  
      if (this.isDragging && this.selectedItem) {
        // position du cirseur avec objet
        console.log(`item en main à (${this.grid.mouseX}, ${this.grid.mouseY})`);
      }
    }
  
    private onPointerDown(pointer: Phaser.Input.Pointer): void {
      if (this.isDragging && this.selectedItem) {
        this.dropItem();
      } else {
        for (let [item, startX, startY] of this.inventaire.getItems()) {
          if (this.mouseIsOver( startX, startY)) {
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
        const [gridX, gridY] = this.grid.detectCellUnderMouse();
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
  
    
  
    private mouseIsOver( x: number, y: number): boolean {
      if(this.inventaire.occupied[y][x]){
        return true;
      }
      else{
        return false;
      }
      
        //const endX = startX + item.width;
      //const endY = startY + item.height;
  
      /*return this.grid.mouseX >= startX * (800 / this.inventaire.gridWidth) &&
             this.grid.mouseX <= endX * (800 / this.inventaire.gridWidth) &&
             this.grid.mouseY >= startY * (600 / this.inventaire.gridHeight) &&
             this.grid.mouseY <= endY * (600 / this.inventaire.gridHeight);*/
    }
  }
  