import Transition from './transition'
import Point from '../types/point'
import GameObject from './gameobject';

export default class Tile extends GameObject {
  public static readonly WIDTH: number = 100;
  public static readonly HEIGHT: number = this.WIDTH / 2;
  public static readonly HALF_WIDTH: number = this.WIDTH / 2;
  public static readonly HALF_HEIGHT: number = this.HEIGHT / 2;

  public transition: Transition | undefined;

  public constructor(x: number, y: number, source: string, frame: number, transition: Transition | undefined = undefined) {
    super(x, y, source, frame);
    this.transition = transition;
  }

  public get x(): number {
    return this.tileX;
  }

  public get y(): number {
    return this.tileY;
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
