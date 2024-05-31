import 'phaser'
import Transition from './transition'

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

  public static getPointsFromTilePos(x: number, y: number): Phaser.Geom.Point[] {
    const UNIT_X = x * Tile.HALF_WIDTH + y * Tile.HALF_WIDTH;
    const UNIT_Y = x * Tile.HALF_HEIGHT - y * Tile.HALF_HEIGHT;

    return [
      new Phaser.Geom.Point(UNIT_X, UNIT_Y - Tile.HALF_HEIGHT),
      new Phaser.Geom.Point(UNIT_X + Tile.HALF_WIDTH, UNIT_Y),
      new Phaser.Geom.Point(UNIT_X, UNIT_Y + Tile.HALF_HEIGHT),
      new Phaser.Geom.Point(UNIT_X - Tile.HALF_WIDTH, UNIT_Y),
    ];
  }

  public static getHash(x: number, y: number): String {
    return x.toString() + "," + y.toString();
  }
}
