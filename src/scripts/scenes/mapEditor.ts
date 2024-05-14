import 'phaser'
import Tile from '../objects/tiles/tile'
import TileDrawer from '../objects/tiles/tiledrawer'
import TileSet from '../objects/tiles/tileset'

enum TileMode {
  Add = "Add",
  Delete = "Delete"
}

enum SwipeMode {
  On = "On",
  Off = "Off"
}

export default class MapEditor extends Phaser.Scene {
  static readonly MOVE_CAMERA_SPEED = 10;

  // Phaser refs/objects
  graphics : Phaser.GameObjects.Graphics;
  pointer : Phaser.Input.Pointer;
  centerPoint : Phaser.Geom.Point;

  // Editor data / helpers
  tileSet : TileSet;
  tileDrawer : TileDrawer;
  playerPos : Phaser.Geom.Point;
  cameraOffsetPos : Phaser.Geom.Point;

  // Editor states
  tileMode : TileMode;
  swipeMode : SwipeMode;

  // Texts
  moveText : Phaser.GameObjects.Text;
  tileModeText : Phaser.GameObjects.Text;
  addText : Phaser.GameObjects.Text;
  deleteText : Phaser.GameObjects.Text;
  swipeText : Phaser.GameObjects.Text;

  // Input keys
  aKey : Phaser.Input.Keyboard.Key; // Move left
  dKey : Phaser.Input.Keyboard.Key; // Move right
  sKey : Phaser.Input.Keyboard.Key; // Move down
  wKey : Phaser.Input.Keyboard.Key; // Move up

  zKey : Phaser.Input.Keyboard.Key; // TileMode Add
  xKey : Phaser.Input.Keyboard.Key; // TileMode Delete
  shiftKey : Phaser.Input.Keyboard.Key; // Swipe

  constructor() {
    super({key: 'MapEditor'});
  }

  create() {
    this.input.enabled = false;

    this.graphics = this.add.graphics();
    this.pointer = this.input.activePointer;
    this.centerPoint = new Phaser.Geom.Point(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2
    );

    this.tileSet = new TileSet(3);
    this.tileDrawer = new TileDrawer(this.graphics);
    this.playerPos = new Phaser.Geom.Point;
    this.cameraOffsetPos = new Phaser.Geom.Point;

    // Move
    this.moveText = this.add.text(0, 0, "Move (WASD)", {color: '#000000', fontSize: '24px'});

    this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.wKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

    // TileMode
    this.tileMode = TileMode.Add;
    this.swipeMode = SwipeMode.Off;

    this.tileModeText = this.add.text(0, 0, "TileMode : " + this.tileMode, {color: '#000000', fontSize: '24px'});
    this.addText = this.add.text(0, 0, "Add (Z)", {color: '#000000', fontSize: '24px'});
    this.deleteText = this.add.text(0, 0, "Delete (X)", {color: '#000000', fontSize: '24px'});
    this.swipeText = this.add.text(0, 0, "Swipe (Shift) : " + this.swipeMode, {color: '#000000', fontSize: '24px'});

    this.zKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    this.xKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
    this.shiftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);

    this.input.on('pointerdown', () => {
      this.tileModeClick();
    });

    this.input.enabled = true;
  }

  update() {
    this.cursorMoveCamera();
    this.checkTileModeUpdate();

    this.cameras.main.setScroll(
      this.playerPos.x + this.cameraOffsetPos.x - this.cameras.main.width / 2,
      this.playerPos.y + this.cameraOffsetPos.y - this.cameras.main.height / 2
    );

    // Detect swipe + hold click (tilemode)
    if (this.swipeMode === SwipeMode.On && this.pointer.leftButtonDown()) {
      this.tileModeClick();
    }

    this.moveText.setPosition(this.cameras.main.scrollX + 30, this.cameras.main.scrollY + 30);
    this.tileModeText.setPosition(this.cameras.main.scrollX + 30, this.cameras.main.scrollY + 80);
    this.addText.setPosition(this.cameras.main.scrollX + 60, this.cameras.main.scrollY + 110);
    this.deleteText.setPosition(this.cameras.main.scrollX + 60, this.cameras.main.scrollY + 140);
    this.swipeText.setPosition(this.cameras.main.scrollX + 60, this.cameras.main.scrollY + 170);

    this.drawTileSet();
  }

  private cursorMoveCamera() {
    // // Move camera left
    if (this.aKey.isDown) {
      this.cameraOffsetPos.x -= MapEditor.MOVE_CAMERA_SPEED;
    }

    // Move camera right
    if (this.dKey.isDown) {
      this.cameraOffsetPos.x += MapEditor.MOVE_CAMERA_SPEED;
    }

    // Move camera up
    if (this.wKey.isDown) {
      this.cameraOffsetPos.y -= MapEditor.MOVE_CAMERA_SPEED;
    }

    // Move camera down
    if (this.sKey.isDown) {
      this.cameraOffsetPos.y += MapEditor.MOVE_CAMERA_SPEED;
    }
  }

  private checkTileModeUpdate() {
    if (Phaser.Input.Keyboard.JustDown(this.zKey)) {
      this.changeTileMode(TileMode.Add);
    }
    
    if (Phaser.Input.Keyboard.JustDown(this.xKey)) {
      this.changeTileMode(TileMode.Delete);
    }

    if (Phaser.Input.Keyboard.JustDown(this.shiftKey)) {
      this.swipeMode = (this.swipeMode === SwipeMode.Off ? SwipeMode.On : SwipeMode.Off);
      this.swipeText.setText("Swipe (Shift) : " + this.swipeMode);
    }
  }

  private tileModeClick() {
    const cursorTilePos = TileSet.getTilePosFromUnitPos(this.getCursorUnitPos());

    if      (this.tileMode === TileMode.Add)      this.tileSet.addTile(cursorTilePos);
    else if (this.tileMode === TileMode.Delete)   this.tileSet.deleteTile(cursorTilePos);
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

  private changeTileMode(mode : TileMode) {
    this.tileMode = mode;
    this.tileModeText.setText("TileMode : " + mode);
  }
}
