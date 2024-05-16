import Tile from './tile'

interface TileJson {
  x: number
  y: number
}

interface TileSetJson {
  tiles: TileJson[]
}

export default class TileSet {
  tiles : Map<String, Tile>

  constructor(size: number = 30) {
    this.tiles = new Map();

    for (let i = -size; i <= size; i++) {
      for (let j = -size; j <= size; j++) {
        let tile = new Tile(i, j);
        this.tiles.set(Tile.getHash(tile.pos), tile);
      }
    }
  }

  public addTile(tilePos: Phaser.Geom.Point) {
    const HASH : String = Tile.getHash(tilePos);
    if (this.tiles.get(HASH) === undefined)
      this.tiles.set(HASH, new Tile(tilePos.x, tilePos.y))
  }

  public deleteTile(tilePos: Phaser.Geom.Point) {
    const HASH : String = Tile.getHash(tilePos);
    if (this.tiles.get(HASH) !== undefined)
      this.tiles.delete(HASH);
  }

  public getProximityTileList(tilePos: Phaser.Geom.Point, proximity: number) : Tile[] {
    const tileList : Tile[] = [];
    const point : Phaser.Geom.Point = new Phaser.Geom.Point;
    let tile : Tile | undefined;
    const P2 : number = proximity * proximity;

    // Select tiles in a circle, column by column
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

  public exportToJson() : TileSetJson {
    let tileSetJson : TileSetJson = {
      tiles: []
    };

    for (const tile of this.tiles.values()) {
      tileSetJson.tiles.push({
        x: tile.pos.x,
        y: tile.pos.y
      });
    }

    return tileSetJson;
  }

  public importJson(tileSetJson: TileSetJson) {
    this.tiles.clear();

    for (const tileJson of tileSetJson.tiles) {
      const TILE = new Tile(tileJson.x, tileJson.y);
      const TILE_HASH = Tile.getHash(TILE.pos);
      this.tiles.set(TILE_HASH, TILE);
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
}
