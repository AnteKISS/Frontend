import Tile from './tile'

export enum TileBitMapType {
  Floor,
  LeftRightWall,
  FullWall,
}

export default class TileSprite extends Phaser.GameObjects.Sprite {
  public constructor(scene: Phaser.Scene, tile: Tile) {
    super(scene, 0, 0, tile.bitmap, tile.frame);

    const TILE_UNIT_POS = Tile.getUnitPosFromTilePos(tile.x, tile.y);

    this.setScale(Tile.WIDTH / this.width);
    this.setPosition(TILE_UNIT_POS.x, TILE_UNIT_POS.y);

    scene.add.existing(this);
  }
}
