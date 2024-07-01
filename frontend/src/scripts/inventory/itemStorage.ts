import InventoryItem from './inventoryItem'
import InventoryConfig from './inventoryConfig'
import Point from '../types/point'

export default class ItemStorage extends Phaser.GameObjects.Container {
  public readonly gridWidth: number;
  public readonly gridHeight: number;

  private infoItems: Map<InventoryItem, Point>;

  private occupied: InventoryItem | null[][];
  private cells: Phaser.GameObjects.Sprite[][];
  private currentCell: Phaser.GameObjects.Sprite | null;
  private currentCellPosition: Point;

  constructor(scene: Phaser.Scene, x: number, y: number, gridWidth: number, gridHeight: number) {
    super(scene, x, y);
    this.gridWidth = gridWidth;
    this.gridHeight = gridHeight;
    this.infoItems = new Map<InventoryItem, Point>;
    this.currentCellPosition = new Point(-1, -1);

    this.occupied = Array.from({ length: gridHeight }, () => Array(gridWidth).fill(null));
    this.cells = [];

    scene.input.on('pointermove', (pointer: Phaser.Input.Pointer) => this.onPointerMove(pointer));
    this.createGrid();
    scene.add.existing(this);
  }

  public onPointerMove(pointer: Phaser.Input.Pointer): void {
    this.updateCurrentCell(pointer);
    for (const item of this.infoItems.keys()) item.update(pointer);
  }

  public createGrid(): void {
    for (let row = 0; row < this.gridHeight; row++) {
      this.cells[row] = [];
      for (let col = 0; col < this.gridWidth; col++) {
        const cell = this.scene.add.sprite(col * InventoryConfig.CELL_SIZE, row * InventoryConfig.CELL_SIZE, 'inventory_slot');
        cell.setOrigin(0);
        this.add(cell);
        this.cells[row][col] = cell;
      }
    }
  }

  public autoLoot(item: InventoryItem): void {
    for (let y = 0; y < this.gridHeight; y++)
      for (let x = 0; x < this.gridWidth; x++)
        if (this.addItem(item, x, y))
          return;
  }

  public addItem(item: InventoryItem, startX: number, startY: number): boolean {
    //verif si la place est libre
    if (!this.isSpaceAvailable(item, startX, startY))
      return false;

    //occupe la place
    for (let y = 0; y < item.getItem().inventoryHeight; y++)
      for (let x = 0; x < item.getItem().inventoryWidth; x++)
        this.occupied[startY + y][startX + x] = item;

    this.infoItems.set(item, new Point(startX, startY));
    this.add(item);
    item.getItem().changeToInventorySprite();
    item.setSize(item.getItem().inventoryWidth * InventoryConfig.CELL_SIZE, item.getItem().inventoryHeight * InventoryConfig.CELL_SIZE);
    item.setPosition(startX * InventoryConfig.CELL_SIZE, startY * InventoryConfig.CELL_SIZE);
    return true;
  }

  public removeItem(item: InventoryItem, selectedX: number, selectedY: number): boolean {
    const itemInfo = this.infoItems.get(item);

    if (!itemInfo) {
      console.error("Can't remove item, not in inventory.");
      return false;
    }

    //libere la place
    for (let y = 0; y < item.getItem().inventoryHeight; y++)
      for (let x = 0; x < item.getItem().inventoryWidth; x++)
        this.occupied[itemInfo.y + y][itemInfo.x + x] = null;

    this.infoItems.delete(item);
    this.remove(item);
    return true;
  }

  public isSpaceAvailable(item: InventoryItem, startX: number, startY: number): boolean {
    // verif si il y a assez d espace
    if (startX + item.getItem().inventoryWidth > this.gridWidth || startY + item.getItem().inventoryHeight > this.gridHeight) {
      return false;
    }
    // verif de dispo
    for (let y = startY; y < startY + item.getItem().inventoryHeight; y++)
      for (let x = startX; x < startX + item.getItem().inventoryWidth; x++)
        if (this.occupied[y][x])
          return false;

    return true;
  }

  public swapItem(item: InventoryItem, startX: number, startY: number): InventoryItem | null {
    if (startX + item.getItem().inventoryWidth > this.gridWidth || startY + item.getItem().inventoryHeight > this.gridHeight)
      return item;

    const itemsInTheWay = new Set<InventoryItem>();
    let newItemInHand = null;

    for (let y = startY; y < startY + item.getItem().inventoryHeight; y++) {
      for (let x = startX; x < startX + item.getItem().inventoryWidth; x++) {
        if (this.occupied[y][x])
          itemsInTheWay.add(this.occupied[y][x]);
        if (itemsInTheWay.size > 1)
          return item;
      }
    }

    if (itemsInTheWay.size === 1) {
      const itemToSwap = itemsInTheWay.values().next().value;
      this.removeItem(itemToSwap, startX, startY);
      newItemInHand = itemToSwap;
    }

    this.addItem(item, startX, startY);

    return newItemInHand;
  }

  public mouseIsOverItem(item: InventoryItem, startX: number, startY: number): boolean {
    const gridX = this.currentCellPosition.x;
    const gridY = this.currentCellPosition.y;
    return gridX >= startX && gridX < startX + item.getItem().inventoryWidth
      && gridY >= startY && gridY < startY + item.getItem().inventoryHeight;
  }

  public getItemsInfo(): Map<InventoryItem, Point> {
    return this.infoItems;
  }

  public getCurrentCellPosition(): Point {
    return this.currentCellPosition;
  }

  public getHeldItemCell(pointer: Phaser.Input.Pointer, item: InventoryItem): Point | null {
    const worldTransformMatrix = this.getWorldTransformMatrix();
    const adjustedX = pointer.x - worldTransformMatrix.tx;
    const adjustedY = pointer.y - worldTransformMatrix.ty;
    const col = Math.round((adjustedX - item.width / 2) / InventoryConfig.CELL_SIZE);
    const row = Math.round((adjustedY - item.height / 2) / InventoryConfig.CELL_SIZE);

    if (row < 0 || row > this.gridHeight - 1 || col < 0 || col > this.gridWidth - 1)
      return null;

    return new Point(col, row);
  }

  private updateCurrentCell(pointer: Phaser.Input.Pointer): void {
    const worldTransformMatrix = this.getWorldTransformMatrix();
    const adjustedX = pointer.x - worldTransformMatrix.tx;
    const adjustedY = pointer.y - worldTransformMatrix.ty;
    const col = Math.floor(adjustedX / InventoryConfig.CELL_SIZE);
    const row = Math.floor(adjustedY / InventoryConfig.CELL_SIZE);

    // If mouse is outside grid
    if (row < 0 || row > this.gridHeight - 1 || col < 0 || col > this.gridWidth - 1) {
      if (this.currentCell) {
        this.currentCell.clearTint();
        this.currentCell = null;
      }
      this.currentCellPosition = new Point(-1, -1);
      return;
    }

    const cell = this.cells[row][col];

    if (this.currentCell !== cell) {
      if (this.currentCell)
        this.currentCell.clearTint();

      cell.tint = InventoryConfig.CELL_HOVER_COLOR;
      this.currentCell = cell;
    }

    this.currentCellPosition = new Point(col, row);
  }
}
