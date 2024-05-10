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

  getTileFromUnitPos(unitPos: Phaser.Geom.Point) : Tile {
    const adjustedX = unitPos.x; + Tile.HALF_WIDTH;
    const adjustedY = -unitPos.y + Tile.HALF_HEIGHT;

    const tileX = Math.ceil(adjustedX / Tile.WIDTH - adjustedY / Tile.HEIGHT);
    const tileY = Math.floor(adjustedX / Tile.WIDTH + adjustedY / Tile.HEIGHT);

    return new Tile(tileX, tileY);
  }
}
