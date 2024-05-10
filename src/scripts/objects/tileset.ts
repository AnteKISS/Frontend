import Tile from './tile'

export default class TileSet {
  tiles : Tile[]

  constructor() {
    this.tiles = [];

    const TILESET_SIZE = 30;

    for (let i = -TILESET_SIZE; i <= TILESET_SIZE; i++)
      for (let j = -TILESET_SIZE; j <= TILESET_SIZE; j++)
        this.tiles.push(new Tile(i, j));
  }

  getTilePosFromUnitPos(unitPos: Phaser.Geom.Point) : Phaser.Geom.Point {
    const adjustedX = unitPos.x;
    const adjustedY = unitPos.y - Tile.HALF_HEIGHT;

    return new Phaser.Geom.Point(
      Math.ceil(adjustedX / Tile.WIDTH + adjustedY / Tile.HEIGHT),
      Math.floor(adjustedX / Tile.WIDTH - adjustedY / Tile.HEIGHT)
    );
  }
}
