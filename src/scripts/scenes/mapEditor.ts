import 'phaser'
import Tile from '../objects/tiles/tile'
import TileDrawer from '../objects/tiles/tiledrawer'
import TileSet from '../objects/tiles/tileset'

export default class MapEditor extends Phaser.Scene {
  tileSet : TileSet;
  graphics : Phaser.GameObjects.Graphics;
  tileDrawer : TileDrawer;
  pointer : Phaser.Input.Pointer;
  playerPos : Phaser.Geom.Point;
  cameraOffsetPos : Phaser.Geom.Point;
  centerPoint : Phaser.Geom.Point;

  constructor() {
    super({key: 'MapEditor'});
  }

  create() {
    this.tileSet = new TileSet();
    this.graphics = this.add.graphics();
    this.tileDrawer = new TileDrawer(this.graphics);
    this.pointer = this.input.activePointer;
    this.playerPos = new Phaser.Geom.Point(0, 0);
    this.cameraOffsetPos = new Phaser.Geom.Point(0, 0);
    this.centerPoint = new Phaser.Geom.Point(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2
    );
  }

  update() {
    this.cameraOffsetPos.x -= 0.5;
    this.playerPos.y += -0.2;

    this.cameras.main.setScroll(
      this.playerPos.x + this.cameraOffsetPos.x - this.cameras.main.width / 2,
      this.playerPos.y + this.cameraOffsetPos.y - this.cameras.main.height / 2
    );

    this.drawTileSet();
  }

  drawTileSet() {
    const playerTilePos = TileSet.getTilePosFromUnitPos(this.playerPos);

    // Clear previous drawn lines
    this.graphics.clear();

    // Center point
    this.graphics.fillStyle(0xFF0000, 1);
    this.graphics.fillCircle(this.playerPos.x, this.playerPos.y, 4);

    // Draw tiles
    this.tileDrawer.drawDebugTileList(this.tileSet.tiles.values(), 2, 0x0000FF);

    // Draw player tile
    const points = Tile.getPointsFromTilePos(playerTilePos);
    this.tileDrawer.drawDebugTilePos(points, 3, 0xFF0000);

    // Draw cursor tile
    const cursorPos = new Phaser.Geom.Point(
      this.pointer.x - this.centerPoint.x + this.playerPos.x + this.cameraOffsetPos.x,
      this.pointer.y - this.centerPoint.y + this.playerPos.y + this.cameraOffsetPos.y
    );
    const cursorTilePos = TileSet.getTilePosFromUnitPos(cursorPos);
    const cursorTilePoints = Tile.getPointsFromTilePos(cursorTilePos);
    this.tileDrawer.drawDebugTilePos(cursorTilePoints, 3, 0xFFFF00);
  }
}
