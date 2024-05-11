import Tile from './tile'

export default class TileSet {
  tiles : Map<String, Tile>

  constructor() {
    this.tiles = new Map();

    const TILESET_SIZE = 30;

    for (let i = -TILESET_SIZE; i <= TILESET_SIZE; i++) {
      for (let j = -TILESET_SIZE; j <= TILESET_SIZE; j++) {
        let tile = new Tile(i, j);
        this.tiles.set(Tile.getHash(tile.pos), tile);
      }
    }
  }

  public static getTilePosFromUnitPos(unitPos: Phaser.Geom.Point) : Phaser.Geom.Point {
    const adjustedX = unitPos.x;
    const adjustedY = unitPos.y - Tile.HALF_HEIGHT;

    return new Phaser.Geom.Point(
      Math.ceil(adjustedX / Tile.WIDTH + adjustedY / Tile.HEIGHT),
      Math.floor(adjustedX / Tile.WIDTH - adjustedY / Tile.HEIGHT)
    );
  }

  public getProximityTileList(tilePos: Phaser.Geom.Point, proximity: number) : Tile[] {
    const tileList : Tile[] = [];
    const point : Phaser.Geom.Point = new Phaser.Geom.Point;
    let tile : Tile | undefined;
    const P2 : number = proximity * proximity;

    // Select in a circle, column by column
    // Algorithm used: https://stackoverflow.com/a/14036626
    for (let x = tilePos.x - proximity; x <= tilePos.x + proximity; x++) {
      point.x = x;
      const X2 : number = Math.pow((tilePos.x - x), 2);
      const Y_DIST : number = Math.floor(Math.sqrt( P2 - X2 ));
      for (let y = tilePos.y - Y_DIST; y <= tilePos.y + Y_DIST; y++) {
        point.y = y;
        tile = this.tiles.get(Tile.getHash(point));
        if (tile) tileList.push(tile);
      }
    }

    return tileList;
  }
}
