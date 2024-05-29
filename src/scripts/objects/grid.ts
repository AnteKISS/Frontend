export default class Grid extends Phaser.GameObjects.Container {
  private cellSize: number;
  private gridWidth: number;
  private gridHeight: number;
  private mouseX: number;
  private mouseY: number;
  private cells: Phaser.GameObjects.Rectangle[][];
  private currentCell: Phaser.GameObjects.Rectangle | null;

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
          0xffffff 
        );
        cell.setOrigin(0); // Set origin to top-left to align properly
        cell.setStrokeStyle(1, 0x000000); // Black border for the cell
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

  private detectCellUnderMouse(): void {

    // pour ajuster avec la position de la grille

    const adjustedX = this.mouseX - this.x;
    const adjustedY = this.mouseY - this.y;

    const col = Math.floor(adjustedX / this.cellSize);
    const row = Math.floor(adjustedY / this.cellSize);

    if (row >= 0 && row < this.gridHeight && col >= 0 && col < this.gridWidth) {
        const cell = this.cells[row][col];
        
        // Change the color of the new cell if it is different from the current one
        if (this.currentCell !== cell) {
          // Reset the color of the previous cell
          if (this.currentCell) {
            this.currentCell.setFillStyle(0xffffff);
          }
  
          // Set the color of the new cell
          cell.setFillStyle(0x0000ff); // Blue color for the cell
          this.currentCell = cell;
        }
      } else {
        // Reset the color of the previous cell if the mouse is not over any cell
        if (this.currentCell) {
          this.currentCell.setFillStyle(0xffffff);
          this.currentCell = null;
        }
      }
  }
}
