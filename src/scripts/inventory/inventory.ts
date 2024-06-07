import Item from './item'

export default class Inventory {
  public occupied: boolean[][];
  public gridWidth: number;
  public gridHeight: number;
  private indexFound = -1;

  private infoItems: [Item, number, number][] = []; // [item,posx,posy]

  constructor(gridWidth: number, gridHeight: number) {
    this.gridWidth = gridWidth;
    this.gridHeight = gridHeight;
    this.occupied = Array.from({ length: gridHeight }, () => Array(gridWidth).fill(false)); // true = occupe
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

  getItems(): [Item, number, number][] {
    return this.infoItems;
  }
}
