import 'phaser'
import Tile from '../objects/tiles/tile'
import TileDrawer from '../objects/tiles/tiledrawer'
import TileSet from '../objects/tiles/tileset'

export default class MapEditor extends Phaser.Scene {
  static readonly CURSOR_MOVE_CAMERA_AREA_WIDTH = 100;
  static readonly MOVE_CAMERA_SPEED = 10;

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
    this.tileSet = new TileSet(3);
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
    this.cursorMoveCamera();
    
    this.cameras.main.setScroll(
      this.playerPos.x + this.cameraOffsetPos.x - this.cameras.main.width / 2,
      this.playerPos.y + this.cameraOffsetPos.y - this.cameras.main.height / 2
    );

    if (this.pointer.isDown === true) {
      this.handlePointerIsDown();
    }

    this.drawTileSet();
  }

  private cursorMoveCamera() {
    // Move camera left
    if (this.pointer.x < MapEditor.CURSOR_MOVE_CAMERA_AREA_WIDTH) {
      this.cameraOffsetPos.x -= MapEditor.MOVE_CAMERA_SPEED;
    }

    // Move camera right
    if (this.pointer.x > this.cameras.main.width - MapEditor.CURSOR_MOVE_CAMERA_AREA_WIDTH) {
      this.cameraOffsetPos.x += MapEditor.MOVE_CAMERA_SPEED;
    }

    // Move camera up
    if (this.pointer.y < MapEditor.CURSOR_MOVE_CAMERA_AREA_WIDTH) {
      this.cameraOffsetPos.y -= MapEditor.MOVE_CAMERA_SPEED;
    }

    // Move camera down
    if (this.pointer.y > this.cameras.main.height - MapEditor.CURSOR_MOVE_CAMERA_AREA_WIDTH) {
      this.cameraOffsetPos.y += MapEditor.MOVE_CAMERA_SPEED;
    }
  }

  private handlePointerIsDown() {
    const cursorTilePos = TileSet.getTilePosFromUnitPos(this.getCursorUnitPos());
    this.tileSet.addTile(cursorTilePos);
  }

  private drawTileSet() {
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
    const cursorTilePos = TileSet.getTilePosFromUnitPos(this.getCursorUnitPos());
    const cursorTilePoints = Tile.getPointsFromTilePos(cursorTilePos);
    this.tileDrawer.drawDebugTilePos(cursorTilePoints, 3, 0xFFFF00);
  }
  
  private getCursorUnitPos() : Phaser.Geom.Point {
    return new Phaser.Geom.Point(
      this.pointer.x - this.centerPoint.x + this.playerPos.x + this.cameraOffsetPos.x,
      this.pointer.y - this.centerPoint.y + this.playerPos.y + this.cameraOffsetPos.y
    );
  }
}
