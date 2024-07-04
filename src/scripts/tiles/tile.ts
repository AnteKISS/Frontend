import Transition from './transition'
import Point from '../types/point'

export default class Tile {
  public static readonly WIDTH: number = 100;
  public static readonly HEIGHT: number = this.WIDTH / 2;
  public static readonly HALF_WIDTH: number = this.WIDTH / 2;
  public static readonly HALF_HEIGHT: number = this.HEIGHT / 2;

  public readonly x: number;
  public readonly y: number;
  public readonly bitmap: string;
  public readonly frame: number;

  public transition: Transition | undefined;

  public constructor(x: number, y: number, bitmap: string, frame: number, transition: Transition | undefined = undefined) {
    this.x = x;
    this.y = y;
    this.bitmap = bitmap;
    this.frame = frame;
    this.transition = transition;
  }

  public static getPointsFromTilePos(x: number, y: number): Point[] {
    const UNIT_POS = Tile.getUnitPosFromTilePos(x, y);

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

  public static getHash(x: number, y: number): String {
    return x.toString() + "," + y.toString();
  }
}
