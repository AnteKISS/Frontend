import Phaser from 'phaser'

export default class Tile {
  static readonly WIDTH : number = 200;
  static readonly HEIGHT : number = this.WIDTH * Math.sin(0.5);
  static readonly HALF_WIDTH : number = this.WIDTH / 2;
  static readonly HALF_HEIGHT : number = this.HEIGHT / 2;

  tx: number; // X tile coordinate
  ty: number; // Y tile coordinate

  constructor(tx: number, ty: number) {
    this.tx = tx;
    this.ty = ty;
  }

  getPoints(screenCenterPos: Phaser.Geom.Point) : Phaser.Geom.Point[] {
    let pixelX = (this.tx * Tile.HALF_WIDTH + this.ty * Tile.HALF_WIDTH) + screenCenterPos.x;
    let pixelY = (this.tx * Tile.HALF_HEIGHT - this.ty * Tile.HALF_HEIGHT) + screenCenterPos.y;

    return [
      new Phaser.Geom.Point(pixelX, pixelY - Tile.HALF_HEIGHT),
      new Phaser.Geom.Point(pixelX + Tile.HALF_WIDTH, pixelY),
      new Phaser.Geom.Point(pixelX, pixelY + Tile.HALF_HEIGHT),
      new Phaser.Geom.Point(pixelX - Tile.HALF_WIDTH, pixelY),
    ];
  }
}
