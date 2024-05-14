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
  static readonly ZOOM_SPEED = 1;
  static readonly MIN_ZOOM = 0.5;
  static readonly MAX_ZOOM = 2;

  // Phaser refs/objects
  graphics : Phaser.GameObjects.Graphics;
  pointer : Phaser.Input.Pointer;
  centerPoint : Phaser.Geom.Point;
  uiCamera : Phaser.Cameras.Scene2D.Camera;

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
  zoomText : Phaser.GameObjects.Text;

  // Input keys
  aKey : Phaser.Input.Keyboard.Key; // Move left
  dKey : Phaser.Input.Keyboard.Key; // Move right
  sKey : Phaser.Input.Keyboard.Key; // Move down
  wKey : Phaser.Input.Keyboard.Key; // Move up

  zKey : Phaser.Input.Keyboard.Key; // TileMode Add
  xKey : Phaser.Input.Keyboard.Key; // TileMode Delete
  spaceKey : Phaser.Input.Keyboard.Key; // Swipe

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

    this.tileMode = TileMode.Add;
    this.swipeMode = SwipeMode.Off;

    const HW = 640; // Half cam width
    const HH = 360; // Half cam height
    this.moveText = this.add.text(30-HW, 30-HH, "Move (WASD)", {color: '#000000', fontSize: '24px'});
    this.tileModeText = this.add.text(30-HW, 80-HH, "TileMode : " + this.tileMode, {color: '#000000', fontSize: '24px'});
    this.addText = this.add.text(60-HW, 110-HH, "Add (Z)", {color: '#000000', fontSize: '24px'});
    this.deleteText = this.add.text(60-HW, 140-HH, "Delete (X)", {color: '#000000', fontSize: '24px'});
    this.swipeText = this.add.text(60-HW, 170-HH, "Swipe (Space) : " + this.swipeMode, {color: '#000000', fontSize: '24px'});
    this.zoomText = this.add.text(30-HW, 220-HH, "Zoom In/Out (Scroll)", {color: '#000000', fontSize: '24px'});

    this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.wKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.zKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    this.xKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
    this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.input.on('pointerdown', () => {
      this.tileModeClick();
    });

    this.input.on('wheel', (pointer, currentlyOver, dx, dy, dz, event) => {
      console.log(dx, dy, dz);
      this.zoom(dy);
    });

    // Handle cameras to make only specific elements affected by zoom
    this.cameras.main.ignore([this.moveText, this.tileModeText, this.addText, this.deleteText, this.swipeText, this.zoomText]);
    this.uiCamera = this.cameras.add(0, 0, 1280, 720);
    this.uiCamera.ignore([this.graphics]);
    this.uiCamera.setScroll(-this.cameras.main.width / 2, -this.cameras.main.height / 2);

    this.input.enabled = true;
  }

  update() {
    this.handleCameraMovement();
    this.checkTileModeUpdate();

    this.cameras.main.setScroll(
      this.playerPos.x + this.cameraOffsetPos.x - this.cameras.main.width / 2,
      this.playerPos.y + this.cameraOffsetPos.y - this.cameras.main.height / 2
    );

    // Detect swipe + hold click (tilemode)
    if (this.swipeMode === SwipeMode.On && this.pointer.leftButtonDown()) {
      this.tileModeClick();
    }

    this.drawTileSet();
  }

  private handleCameraMovement() {
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

    if (Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
      this.swipeMode = (this.swipeMode === SwipeMode.Off ? SwipeMode.On : SwipeMode.Off);
      this.swipeText.setText("Swipe (Space) : " + this.swipeMode);
    }
  }

  private tileModeClick() {
    const cursorTilePos = TileSet.getTilePosFromUnitPos(this.getCursorUnitPos());

    if      (this.tileMode === TileMode.Add)      this.tileSet.addTile(cursorTilePos);
    else if (this.tileMode === TileMode.Delete)   this.tileSet.deleteTile(cursorTilePos);
  }

  private zoom(dy : number) {
    let newZoom = this.cameras.main.zoom + (dy * MapEditor.ZOOM_SPEED / 1000);
    newZoom = Math.min(Math.max(newZoom, MapEditor.MIN_ZOOM), MapEditor.MAX_ZOOM);
    this.cameras.main.setZoom(newZoom);
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
    const cursorColor = (this.tileMode === TileMode.Add ? 0x00FFFF : 0xFF0000);
    const cursorTilePos = TileSet.getTilePosFromUnitPos(this.getCursorUnitPos());
    const cursorTilePoints = Tile.getPointsFromTilePos(cursorTilePos);
    this.tileDrawer.drawDebugTilePos(cursorTilePoints, 3, cursorColor);
  }

  private getCursorUnitPos() : Phaser.Geom.Point {
    return new Phaser.Geom.Point(
      ((this.pointer.x - this.centerPoint.x + this.playerPos.x) / this.cameras.main.zoom) + this.cameraOffsetPos.x,
      ((this.pointer.y - this.centerPoint.y + this.playerPos.y) / this.cameras.main.zoom) + this.cameraOffsetPos.y
    );
  }

  private changeTileMode(mode : TileMode) {
    this.tileMode = mode;
    this.tileModeText.setText("TileMode : " + mode);
  }
}