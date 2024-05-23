import Tile, {TileType} from './tile'

interface TileJson {
  x: number
  y: number
  type: TileType
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
        let tile = new Tile(i, j, TileType.Floor);
        this.tiles.set(Tile.getHash(tile.x, tile.y), tile);
      }
    }
  }

  public addTile(x: number, y: number, type: TileType) {
    this.tiles.set(Tile.getHash(x, y), new Tile(x, y, type))
  }

  public deleteTile(x: number, y: number) {
    const HASH : String = Tile.getHash(x, y);
    if (this.tiles.get(HASH) !== undefined)
      this.tiles.delete(HASH);
  }

  public getTile(x: number, y: number) : Tile | undefined {
    return this.tiles.get(Tile.getHash(x, y));
  }

  public getProximityTileList(x: number, y: number, proximity: number) : Tile[] {
    const tileList : Tile[] = [];
    let tile : Tile | undefined;
    const P2 : number = proximity * proximity;

    // Select tiles in a circle, column by column
    // Algorithm used: https://stackoverflow.com/a/14036626
    for (let cx = x - proximity; cx <= x + proximity; cx++) {
      const X2 : number = Math.pow((x - cx), 2);
      const Y_DIST : number = Math.floor(Math.sqrt( P2 - X2 ));
      for (let cy = y - Y_DIST; cy <= y + Y_DIST; cy++) {
        tile = this.getTile(cx, cy);
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
        x: tile.x,
        y: tile.y,
        type: tile.type
      });
    }

    return tileSetJson;
  }

  public importJson(tileSetJson: TileSetJson) {
    this.tiles.clear();

    for (const tileJson of tileSetJson.tiles) {
      const TILE = new Tile(tileJson.x, tileJson.y, tileJson.type);
      const TILE_HASH = Tile.getHash(TILE.x, TILE.y);
      this.tiles.set(TILE_HASH, TILE);
    }
  }

  public static getProximityTilePos(x: number, y: number, proximity: number) : Phaser.Geom.Point[] {
    const posList : Phaser.Geom.Point[] = [];
    const P2 : number = proximity * proximity;

    // Select tiles in a circle, column by column
    // Algorithm used: https://stackoverflow.com/a/14036626
    for (let cx = x - proximity; cx <= x + proximity; cx++) {
      const X2 : number = Math.pow((x - cx), 2);
      const Y_DIST : number = Math.floor(Math.sqrt( P2 - X2 ));
      for (let cy = y - Y_DIST; cy <= y + Y_DIST; cy++) {
        posList.push(new Phaser.Geom.Point(cx, cy));
      }
    }

    return posList;
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
