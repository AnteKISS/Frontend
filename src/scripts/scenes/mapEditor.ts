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
    this.playerPos = new Phaser.Geom.Point;
    this.cameraOffsetPos = new Phaser.Geom.Point(300, 0);
    this.centerPoint = new Phaser.Geom.Point(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2
    );
  }

  update() {
    this.cameraOffsetPos.x -= 0.5;

    const cameraUnitPos = new Phaser.Geom.Point(
      this.centerPoint.x - this.playerPos.x,
      this.centerPoint.y - this.playerPos.y
    );

    const centerPointWithCameraOffset = new Phaser.Geom.Point(
      this.centerPoint.x - this.cameraOffsetPos.x,
      this.centerPoint.y - this.cameraOffsetPos.y
    );

    const cameraUnitPosWithCameraOffset = new Phaser.Geom.Point(
      cameraUnitPos.x - this.cameraOffsetPos.x,
      cameraUnitPos.y - this.cameraOffsetPos.y
    );

    // const cursorPos = new Phaser.Geom.Point(
    //   this.pointer.x - this.centerPoint.x + this.playerPos.x,
    //   this.pointer.y - this.centerPoint.y + this.playerPos.y
    // );
    
    // const cursorTileUnitPos = new Phaser.Geom.Point(
    //   cameraUnitPos.x - this.cameraOffsetPos.x,
    //   cameraUnitPos.y - this.cameraOffsetPos.y
    // );

    const playerTilePos = TileSet.getTilePosFromUnitPos(this.playerPos);
    // const cursorTilePos = TileSet.getTilePosFromUnitPos(cursorPos)

    // Clear previous drawn lines
    this.graphics.clear();

    // Center point
    this.graphics.fillStyle(0xFF0000, 1);
    this.graphics.fillCircle(centerPointWithCameraOffset.x, centerPointWithCameraOffset.y, 4);

    // Draw tiles
    this.tileDrawer.drawDebugTileList(Array.from( this.tileSet.tiles.values() ), cameraUnitPosWithCameraOffset, 2, 0x0000FF);

    // Draw player tile
    const points = Tile.getPoints(playerTilePos, cameraUnitPosWithCameraOffset);
    this.tileDrawer.drawDebugTilePos(points, 3, 0xFF0000);

    // Draw cursor tile
    // const cursorTilePoints = Tile.getPoints(cursorTilePos, cursorTileUnitPos);
    // this.tileDrawer.drawDebugTilePos(cursorTilePoints, 3, 0xFFFF00);
  }
}
