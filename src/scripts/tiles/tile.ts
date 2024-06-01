import Transition from './transition'
import Point from '../types/point'

export enum TileType {
  Floor,
}

export default class Tile {
  static readonly WIDTH: number = 100;
  static readonly HEIGHT: number = this.WIDTH / 2;
  static readonly HALF_WIDTH: number = this.WIDTH / 2;
  static readonly HALF_HEIGHT: number = this.HEIGHT / 2;

  x: number;
  y: number;
  type: TileType;
  transition: Transition | undefined;

  constructor(x: number, y: number, type: TileType, transition: Transition | undefined = undefined) {
    this.x = x;
    this.y = y;
    this.type = type;
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

  public static getTilePosFromUnitPos(unitPos: Point): Point {
    const adjustedX = unitPos.x;
    const adjustedY = unitPos.y - Tile.HALF_HEIGHT;

    return new Point(
      Math.ceil(adjustedX / Tile.WIDTH + adjustedY / Tile.HEIGHT),
      Math.floor(adjustedX / Tile.WIDTH - adjustedY / Tile.HEIGHT)
    );
  }

  public static getHash(x: number, y: number): String {
    return x.toString() + "," + y.toString();
  }
}
