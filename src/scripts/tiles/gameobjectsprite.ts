import GameObject from './gameobject';
import Tile from './tile';
import TileModule from './tilemodule';
import Wall, { WallType } from './wall';

export default class GameObjectSprite extends Phaser.GameObjects.Sprite {
  public constructor(scene: Phaser.Scene, gameObject: GameObject) {
    super(scene, 0, 0, gameObject.source, gameObject.frame);

    const TILE_UNIT_POS = TileModule.getUnitPosFromTilePos(gameObject.tileX, gameObject.tileY);

    if (gameObject instanceof Tile) {
      this.setScale(Tile.WIDTH / this.width);
      this.setPosition(TILE_UNIT_POS.x, TILE_UNIT_POS.y);
    }
    else if (gameObject instanceof Wall) {
      const WALL = gameObject as Wall;
      this.setScale(Tile.HEIGHT * 1.5 / this.height);

      if (WALL.type === WallType.Left)
        this.setPosition(TILE_UNIT_POS.x - Tile.WIDTH / 4, TILE_UNIT_POS.y - Tile.HEIGHT / 4);
      else if (WALL.type === WallType.Right)
        this.setPosition(TILE_UNIT_POS.x + Tile.WIDTH / 4, TILE_UNIT_POS.y - Tile.HEIGHT / 4);
    }

    scene.add.existing(this);
  }

  public static getSpriteScale(type: String, sprite: Phaser.GameObjects.Sprite): number {
    if (type === "Tile")
      return Tile.WIDTH / sprite.width;

    else if (type === "Wall")
      return Tile.HEIGHT * 1.5 / sprite.height;

    return 1;
  }
}
