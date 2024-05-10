import Tile from './tile'

export default class TileSet {
  tiles : Map<String, Tile>

  constructor() {
    this.tiles = new Map();

    const TILESET_SIZE = 100;

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

    // Add center tile
    tile = this.tiles.get(Tile.getHash(tilePos));
    if (tile) tileList.push(tile);

    // Add each layer of tiles around tilePos
    for (let p = 1; p <= proximity; p++) {
      // Upper row
      point.y = p + tilePos.y;
      for (let x = -p; x <= p; x++) {
        point.x = x + tilePos.x;
        tile = this.tiles.get(Tile.getHash(point));
        if (tile) tileList.push(tile);
      }

      // Lower row
      point.y = -p + tilePos.y;
      for (let x = -p; x <= p; x++) {
        point.x = x + tilePos.x;
        tile = this.tiles.get(Tile.getHash(point));
        if (tile) tileList.push(tile);
      }

      // Right column
      point.x = p + tilePos.x;
      for (let y = -p + 1; y <= p - 1; y++) {
        point.y = y + tilePos.y;
        tile = this.tiles.get(Tile.getHash(point));
        if (tile) tileList.push(tile);
      }

      // Left column
      point.x = -p + tilePos.x;
      for (let y = -p + 1; y <= p - 1; y++) {
        point.y = y + tilePos.y;
        tile = this.tiles.get(Tile.getHash(point));
        if (tile) tileList.push(tile);
      }
    }

    return tileList;
  }
}
