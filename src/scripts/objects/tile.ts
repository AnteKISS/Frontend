import Phaser from 'phaser'

export default class Tile {
  static readonly WIDTH : number = 200;
  static readonly HEIGHT : number = this.WIDTH * Math.sin(0.5);
  static readonly HALF_WIDTH : number = this.WIDTH / 2;
  static readonly HALF_HEIGHT : number = this.HEIGHT / 2;

  pos: Phaser.Geom.Point;

  constructor(tx: number, ty: number) {
    this.pos = new Phaser.Geom.Point(tx, ty);
  }

  public static getPoints(tilePos: Phaser.Geom.Point, screenCenterPos: Phaser.Geom.Point) : Phaser.Geom.Point[] {
    let pixelX = (tilePos.x * Tile.HALF_WIDTH + tilePos.y * Tile.HALF_WIDTH) + screenCenterPos.x;
    let pixelY = (tilePos.x * Tile.HALF_HEIGHT - tilePos.y * Tile.HALF_HEIGHT) + screenCenterPos.y;

    return [
      new Phaser.Geom.Point(pixelX, pixelY - Tile.HALF_HEIGHT),
      new Phaser.Geom.Point(pixelX + Tile.HALF_WIDTH, pixelY),
      new Phaser.Geom.Point(pixelX, pixelY + Tile.HALF_HEIGHT),
      new Phaser.Geom.Point(pixelX - Tile.HALF_WIDTH, pixelY),
    ];
  }
}
