import Item from './item'
import EquipSlot from './equipSlot'
import { ItemType } from './itemType'
import InventoryConfig from "./inventoryConfig";

export default class Inventory {
  public occupied: boolean[][];
  public gridWidth: number;
  public gridHeight: number;
  private indexFound = -1;

  private weapon1: EquipSlot;

  private infoItems: [Item, number, number][] = []; // [item,posx,posy]

  constructor(scene: Phaser.Scene, gridWidth: number, gridHeight: number) {
    this.gridWidth = gridWidth;
    this.gridHeight = gridHeight;
    this.occupied = Array.from({ length: gridHeight }, () => Array(gridWidth).fill(false)); // true = occupe
    this.weapon1 = new EquipSlot(scene, ItemType.WEAPON, 500, 180, InventoryConfig.CELL_SIZE * 3, InventoryConfig.CELL_SIZE * 4);
  }

  public isSpaceAvailable(item: Item, startX: number, startY: number): boolean {
    // verif si il y a assez d espace
    if (startX + item.inventoryWidth > this.gridWidth || startY + item.inventoryHeight > this.gridHeight)
      return false;

    // verif de dispo
    for (let y = startY; y < startY + item.inventoryHeight; y++)
      for (let x = startX; x < startX + item.inventoryWidth; x++)
        if (this.occupied[y][x])
          return false;

    return true;
  }

  addItem(item: Item, startX: number, startY: number): boolean {
    //verif si la place est libre
    if (!this.isSpaceAvailable(item, startX, startY))
      return false;

    //occupe la place
    for (let y = 0; y < item.inventoryHeight; y++)
      for (let x = 0; x < item.inventoryWidth; x++)
        this.occupied[startY + y][startX + x] = true;

    this.infoItems.push([item, startX, startY]);
    return true;
  }

  removeItem(item: Item, selectedX: number, selectedY: number): boolean {
    //libere la place
    for (let y = 0; y < item.inventoryHeight; y++)
      for (let x = 0; x < item.inventoryWidth; x++)
        this.occupied[selectedY + y][selectedX + x] = false;
    console.log(selectedX, selectedY, "occupied after remove:", this.occupied);

    // eneleve l item du tableau
    this.indexFound = this.infoItems.findIndex((itemInfo) => item === itemInfo[0]);

    this.infoItems.splice(this.indexFound, 1);
    return true;
  }

  getItemsInfo(): [Item, number, number][] {
    return this.infoItems;
  }

  getEquipSlots(): [EquipSlot] {
    return [this.weapon1];
  }
}
