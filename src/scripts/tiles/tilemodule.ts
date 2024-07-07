import Point from "../types/point";
import Tile from "./tile";

export default class TileModule {
  public static getPointsFromTilePos(x: number, y: number): Point[] {
    const UNIT_POS = TileModule.getUnitPosFromTilePos(x, y);

    return [
      new Point(UNIT_POS.x, UNIT_POS.y - Tile.HALF_HEIGHT),
      new Point(UNIT_POS.x + Tile.HALF_WIDTH, UNIT_POS.y),
      new Point(UNIT_POS.x, UNIT_POS.y + Tile.HALF_HEIGHT),
      new Point(UNIT_POS.x - Tile.HALF_WIDTH, UNIT_POS.y),
    ];
  }

  public static getUnitPosFromTilePos(x: number, y: number): Point {
    return new Point(
      x * Tile.HALF_WIDTH + y * Tile.HALF_WIDTH,
      x * Tile.HALF_HEIGHT - y * Tile.HALF_HEIGHT
    );
  }

  public static getTilePosFromUnitPos(pixelX: number, pixelY: number): Point {
    const adjustedX = pixelX;
    const adjustedY = pixelY - Tile.HALF_HEIGHT;

    return new Point(
      Math.ceil(adjustedX / Tile.WIDTH + adjustedY / Tile.HEIGHT),
      Math.floor(adjustedX / Tile.WIDTH - adjustedY / Tile.HEIGHT)
    );
  }

  public static getTileHash(x: number, y: number): string {
    return x.toString() + "," + y.toString();
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
