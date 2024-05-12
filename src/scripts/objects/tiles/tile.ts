import 'phaser'

export default class Tile {
  static readonly WIDTH : number = 100;
  static readonly HEIGHT : number = this.WIDTH / 2;
  static readonly HALF_WIDTH : number = this.WIDTH / 2;
  static readonly HALF_HEIGHT : number = this.HEIGHT / 2;

  pos: Phaser.Geom.Point;

  constructor(tx: number, ty: number) {
    this.pos = new Phaser.Geom.Point(tx, ty);
  }

  public static getPointsFromUnitPos(unitPos: Phaser.Geom.Point) : Phaser.Geom.Point[] {
    return [
      new Phaser.Geom.Point(unitPos.x, unitPos.y - Tile.HALF_HEIGHT),
      new Phaser.Geom.Point(unitPos.x + Tile.HALF_WIDTH, unitPos.y),
      new Phaser.Geom.Point(unitPos.x, unitPos.y + Tile.HALF_HEIGHT),
      new Phaser.Geom.Point(unitPos.x - Tile.HALF_WIDTH, unitPos.y),
    ];
  }

  public static getPointsFromTilePos(tilePos: Phaser.Geom.Point, cameraUnitPos: Phaser.Geom.Point) : Phaser.Geom.Point[] {
    return this.getPointsFromUnitPos(new Phaser.Geom.Point(
      (tilePos.x * Tile.HALF_WIDTH + tilePos.y * Tile.HALF_WIDTH) + cameraUnitPos.x,
      (tilePos.x * Tile.HALF_HEIGHT - tilePos.y * Tile.HALF_HEIGHT) + cameraUnitPos.y
    ));
  }

  public static getHash(tilePos: Phaser.Geom.Point) : String {
    return tilePos.x.toString() + "," + tilePos.y.toString();
  }
}
