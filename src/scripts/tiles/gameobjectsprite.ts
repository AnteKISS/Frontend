import GameObject from './gameobject';
import Tile from './tile';
import TileModule from './tilemodule';
import Wall, { WallType } from './wall';

export default class GameObjectSprite extends Phaser.GameObjects.Sprite {
  public constructor(scene: Phaser.Scene, gameObject: GameObject) {
    super(scene, 0, 0, gameObject.source, gameObject.frame);

    const TILE_UNIT_POS = TileModule.getUnitPosFromTilePos(gameObject.tileX, gameObject.tileY);
    this.setPosition(TILE_UNIT_POS.x, TILE_UNIT_POS.y);

    if (gameObject instanceof Tile) {
      this.setScale(Tile.WIDTH / this.width);
    }
    else if (gameObject instanceof Wall) {
      const WALL = gameObject as Wall;
      this.setScale(Tile.HEIGHT * 1.5 / this.height);

      if (WALL.type === WallType.Left)
        this.setOrigin(1, 0.66666666);
      else if (WALL.type === WallType.Right)
        this.setOrigin(0, 0.66666666);
    }

    scene.add.existing(this);
    this.setDepth(TILE_UNIT_POS.y - Tile.HALF_HEIGHT + gameObject.getCollectionDepth());
  }

  public static getSpriteScale(type: String, sprite: Phaser.GameObjects.Sprite): number {
    if (type === "Tile")
      return Tile.WIDTH / sprite.width;

    else if (type === "Wall")
      return Tile.HEIGHT * 1.5 / sprite.height;

    return 1;
  }
}
