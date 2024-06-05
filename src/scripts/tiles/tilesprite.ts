import Tile, { TileType } from './tile'

export enum TileBitMapType {
  Floor,
  LeftRightWall,
  FullWall,
}

export default class TileSprite extends Phaser.GameObjects.Sprite {
  public constructor(scene: Phaser.Scene, tile: Tile) {
    super(scene, 0, 0, tile.bitmap, tile.frame);

    const TILE_UNIT_POS = Tile.getUnitPosFromTilePos(tile.x, tile.y);

    if (tile.type === TileType.Floor) {
      this.setScale(Tile.WIDTH / this.width);
      this.setPosition(TILE_UNIT_POS.x, TILE_UNIT_POS.y);
    }
    else if (tile.type === TileType.LeftWall) {
      this.setScale((Tile.HEIGHT * 1.5) / this.height);
      this.setPosition(TILE_UNIT_POS.x - Tile.WIDTH / 4, TILE_UNIT_POS.y - Tile.HEIGHT / 4);
    }
    else if (tile.type === TileType.RightWall) {
      this.setScale((Tile.HEIGHT * 1.5) / this.height);
      this.setPosition(TILE_UNIT_POS.x + Tile.WIDTH / 4, TILE_UNIT_POS.y - Tile.HEIGHT / 4);
    }
    else if (tile.type === TileType.FullWall) {
      this.setScale((Tile.HEIGHT * 1.5) / this.height);
      this.setPosition(TILE_UNIT_POS.x, TILE_UNIT_POS.y - Tile.HEIGHT / 4);
    }

    scene.add.existing(this);
  }
}
