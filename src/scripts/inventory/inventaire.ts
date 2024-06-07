import Item from './item'

export default class Inventaire {

  public occupied: boolean[][];
  public gridWidth: number;
  public gridHeight: number;
  private indexFound = -1;

  private item: [Item, number, number][] = []; // [item,posx,posy]

  constructor(gridWidth: number, gridHeight: number) {
    this.gridWidth = gridWidth;
    this.gridHeight = gridHeight;
    this.occupied = Array.from({ length: gridHeight }, () => Array(gridWidth).fill(true)); // true = occupe 
  }

  public isSpaceAvailable(item: Item, startX: number, startY: number): boolean {
    // verif si il y a assez d espace
    if (startX + item.width > this.gridWidth || startY + item.height > this.gridHeight)
      return false;

    // verif de dispo
    for (let y = startY; y < startY + item.height; y++)
      for (let x = startX; x < startX + item.width; x++)
        if (this.occupied[y][x])
          return false;

    return true;
  }

  addItem(item: Item, startX: number, startY: number): boolean {
    //verif si la place est libre
    if (!this.isSpaceAvailable(item, startX, startY))
      return false;

    //occupe la place
    for (let y = startY; y < startY + item.height; y++)
      for (let x = startX; x < startX + item.width; x++)
        this.occupied[startY + y][startX + x] = true;

    this.item.push([item, startX, startY]);
    return true;
  }

  removeItem(item: Item, selectedX: number, selectedY: number): boolean {
    //libere la place
    for (let y = 0; y < item.height; y++)
      for (let x = 0; x < item.width; x++)
        this.occupied[selectedX + y][selectedY + x] = false;

    // eneleve l item du tableau
    this.item.forEach((Item, index) => {
      if (Item[0] === item[0])
        this.indexFound = index; // Si la chaîne est trouvée, mettre à jour l'index
    });

    this.item.splice(this.indexFound);
    return true;
  }

  getItems(): [Item, number, number][] {
    return this.item;
  }
}
