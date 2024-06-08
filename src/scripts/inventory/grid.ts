import InventoryConfig from "./inventoryConfig";

export default class Grid extends Phaser.GameObjects.Container {

  public readonly gridWidth: number;
  public readonly gridHeight: number;
  private cells: Phaser.GameObjects.Rectangle[][];
  private currentCell: Phaser.GameObjects.Rectangle | null;

  public readonly cellSize: number;
  public mouseX: number;
  public mouseY: number;

  constructor(scene: Phaser.Scene, x: number, y: number, cellSize: number) {
    super(scene, x, y);
    this.cellSize = cellSize;
    this.gridWidth = 10;
    this.gridHeight = 10;

    this.mouseX = 0;
    this.mouseY = 0;

    this.cells = [];

    this.createGrid();
    scene.add.existing(this);

    scene.input.on('pointermove', this.handleMouseMove, this);
  }

  private createGrid(): void {
    for (let row = 0; row < this.gridWidth; row++) {
      this.cells[row] = [];
      for (let col = 0; col < this.gridHeight; col++) {
        const cell = this.scene.add.rectangle(
          col * this.cellSize,
          row * this.cellSize,
          this.cellSize,
          this.cellSize,
          InventoryConfig.FREE_COLOR
        );
        cell.setOrigin(0);
        cell.setStrokeStyle(1, InventoryConfig.BORDER_COLOR); // noir pr contour
        this.add(cell);
        this.cells[row][col] = cell;
      }
    }
  }

  private handleMouseMove(pointer: Phaser.Input.Pointer): void {
    this.mouseX = pointer.x;
    this.mouseY = pointer.y;
    this.detectCellUnderMouse();
  }

  public detectCellUnderMouse(): [number, number] {
    const adjustedX = this.mouseX - this.x;
    const adjustedY = this.mouseY - this.y;
    const col = Math.floor(adjustedX / this.cellSize);
    const row = Math.floor(adjustedY / this.cellSize);

    if (row >= 0 && row < this.gridHeight && col >= 0 && col < this.gridWidth) {
      const cell = this.cells[row][col];

      if (this.currentCell !== cell) {

        if (this.currentCell)
          this.currentCell.setFillStyle(InventoryConfig.FREE_COLOR);

        cell.setFillStyle(InventoryConfig.MOUSE_HOVER_COLOR);
        this.currentCell = cell;
      }

      return [col, row];
    } else {
      if (this.currentCell) {
        this.currentCell.setFillStyle(InventoryConfig.FREE_COLOR);
        this.currentCell = null;
        return [-1, -1];
      }
    }
    return [-1, -1];
  }
}
