import Tile, { TileType } from './tile'
import Transition from './transition'
import Point from '../types/point'

export default class TileSet {
  private tiles: Map<String, Tile>

  public constructor(size: number = 30) {
    this.tiles = new Map();

    for (let i = -size; i <= size; i++) {
      for (let j = -size; j <= size; j++) {
        let tile = new Tile(i, j, TileType.Floor);
        this.tiles.set(Tile.getHash(tile.x, tile.y), tile);
      }
    }
  }

  public addTile(x: number, y: number, type: TileType, transition: Transition | undefined = undefined): void {
    this.tiles.set(Tile.getHash(x, y), new Tile(x, y, type, transition))
  }

  public deleteTile(x: number, y: number): void {
    const HASH: String = Tile.getHash(x, y);
    if (this.tiles.get(HASH) !== undefined)
      this.tiles.delete(HASH);
  }

  public getTile(x: number, y: number): Tile | undefined {
    return this.tiles.get(Tile.getHash(x, y));
  }

  public getTiles(): IterableIterator<Tile> {
    return this.tiles.values();
  }

  public getProximityTileList(x: number, y: number, proximity: number): Tile[] {
    const tileList: Tile[] = [];
    let tile: Tile | undefined;
    const P2: number = proximity * proximity;

    // Select tiles in a circle, column by column
    // Algorithm used: https://stackoverflow.com/a/14036626
    for (let cx = x - proximity; cx <= x + proximity; cx++) {
      const X2: number = Math.pow((x - cx), 2);
      const Y_DIST: number = Math.floor(Math.sqrt(P2 - X2));
      for (let cy = y - Y_DIST; cy <= y + Y_DIST; cy++) {
        tile = this.getTile(cx, cy);
        if (tile) tileList.push(tile);
      }
    }

    return tileList;
  }

  public static getProximityTilePos(x: number, y: number, proximity: number): Point[] {
    const posList: Point[] = [];
    const P2: number = proximity * proximity;

    // Select tiles in a circle, column by column
    // Algorithm used: https://stackoverflow.com/a/14036626
    for (let cx = x - proximity; cx <= x + proximity; cx++) {
      const X2: number = Math.pow((x - cx), 2);
      const Y_DIST: number = Math.floor(Math.sqrt(P2 - X2));
      for (let cy = y - Y_DIST; cy <= y + Y_DIST; cy++) {
        posList.push(new Point(cx, cy));
      }
    }

    return posList;
  }
}
