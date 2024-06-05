import Tile from './tile'

export default class TileSprite extends Phaser.GameObjects.Sprite {
  public constructor(scene: Phaser.Scene, tile: Tile) {
    super(scene, 0, 0, tile.bitmap, tile.frame);

    const TILE_UNIT_POS = Tile.getUnitPosFromTilePos(tile.x, tile.y);
    this.setPosition(TILE_UNIT_POS.x, TILE_UNIT_POS.y);

    this.setScale(Tile.WIDTH / this.width);

    scene.add.existing(this);
  }
}
