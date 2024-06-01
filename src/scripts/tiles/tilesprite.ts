import Tile from './tile'

export default class TileSprite extends Phaser.GameObjects.Sprite {
  tile: Tile;

  constructor(scene: Phaser.Scene, tile: Tile, texture: string, frame: number) {
    super(scene, 0, 0, texture, frame);
    this.tile = tile;

    const TILE_UNIT_POS = Tile.getUnitPosFromTilePos(tile.x, tile.y);
    this.setPosition(TILE_UNIT_POS.x, TILE_UNIT_POS.y);

    this.setScale(Tile.WIDTH / this.width);

    scene.add.existing(this);
  }
}
