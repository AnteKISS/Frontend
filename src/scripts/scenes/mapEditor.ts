import 'phaser'
import Tile, { TileType } from '../objects/map/tile'
import TileDrawer, { TileColor } from '../objects/map/tiledrawer'
import TileSet from '../objects/map/tileset'
import Area from '../objects/map/area'
import GameMap from '../objects/map/gamemap'
import TextInput from '../objects/textInput'
import TransitionForm from '../objects/map/transitionform'

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
  static readonly MOVE_CAMERA_FASTER_MULTIPLIER = 2;
  static readonly ZOOM_SPEED = 1;
  static readonly MIN_ZOOM = 0.5;
  static readonly MAX_ZOOM = 2;

  // Phaser refs/objects
  graphics: Phaser.GameObjects.Graphics;
  pointer: Phaser.Input.Pointer;
  centerPoint: Phaser.Geom.Point;
  uiCamera: Phaser.Cameras.Scene2D.Camera;

  // Editor data / helpers
  gameMap: GameMap;
  tileDrawer: TileDrawer;
  playerPos: Phaser.Geom.Point;
  cameraOffsetPos: Phaser.Geom.Point;
  cursorUnitPos: Phaser.Geom.Point;
  cursorTilePos: Phaser.Geom.Point;

  // Editor states
  tileMode: TileMode;
  swipeMode: SwipeMode;
  tileType: TileType;
  canPlaceObject: boolean;
  inMenu: boolean;

  bruh: Phaser.GameObjects.Rectangle;
  // Texts
  moveText: Phaser.GameObjects.Text;
  moveFasterText: Phaser.GameObjects.Text;
  tileModeText: Phaser.GameObjects.Text;
  addText: Phaser.GameObjects.Text;
  deleteText: Phaser.GameObjects.Text;
  swipeText: Phaser.GameObjects.Text;
  zoomText: Phaser.GameObjects.Text;
  changeAreaText: Phaser.GameObjects.Text;
  renameAreaText: Phaser.GameObjects.Text;
  newAreaText: Phaser.GameObjects.Text;
  deleteAreaText: Phaser.GameObjects.Text;
  createTransitionText: Phaser.GameObjects.Text;
  unitPosText: Phaser.GameObjects.Text;
  tilePosText: Phaser.GameObjects.Text;
  currentAreaText: Phaser.GameObjects.Text;

  // Buttons
  floorTileButton: Phaser.GameObjects.Text;
  transitionTileButton: Phaser.GameObjects.Text;

  // Forms
  renameAreaInput: TextInput;
  transitionForm: TransitionForm;

  // Input keys
  aKey: Phaser.Input.Keyboard.Key; // Move left
  dKey: Phaser.Input.Keyboard.Key; // Move right
  sKey: Phaser.Input.Keyboard.Key; // Move down
  wKey: Phaser.Input.Keyboard.Key; // Move up

  zKey: Phaser.Input.Keyboard.Key; // TileMode Add
  xKey: Phaser.Input.Keyboard.Key; // TileMode Delete
  shiftKey: Phaser.Input.Keyboard.Key; // Move faster
  spaceKey: Phaser.Input.Keyboard.Key; // Swipe

  oKey: Phaser.Input.Keyboard.Key; // Previous area
  pKey: Phaser.Input.Keyboard.Key; // Next area
  nKey: Phaser.Input.Keyboard.Key; // Rename area
  mKey: Phaser.Input.Keyboard.Key; // New area
  deleteKey: Phaser.Input.Keyboard.Key; // Delete area

  tKey: Phaser.Input.Keyboard.Key; // New transition

  constructor() {
    super({key: 'MapEditor'});
  }

  create() {
    this.graphics = this.add.graphics();
    this.pointer = this.input.activePointer;
    this.centerPoint = new Phaser.Geom.Point(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2
    );

    // Tileset json import test
    this.gameMap = new GameMap;
    this.gameMap.addArea(new Area("Yooo"));
    this.gameMap.addArea(new Area("Allo"));
    this.tileDrawer = new TileDrawer(this.graphics);
    this.playerPos = new Phaser.Geom.Point;
    this.cameraOffsetPos = new Phaser.Geom.Point;

    this.tileMode = TileMode.Add;
    this.swipeMode = SwipeMode.Off;
    this.tileType = TileType.Floor;
    this.canPlaceObject = true;
    this.inMenu = false;

    // Texts
    this.moveText = this.add.text(30, 30, "Move (WASD)", {color: '#000000', fontSize: '24px'});
    this.moveFasterText = this.add.text(30, 60, "Move Faster (Hold Shift)", {color: '#000000', fontSize: '24px'});
    this.tileModeText = this.add.text(30, 110, "TileMode : " + this.tileMode, {color: '#000000', fontSize: '24px'});
    this.addText = this.add.text(60, 140, "Add (Z)", {color: '#000000', fontSize: '24px'});
    this.deleteText = this.add.text(60, 170, "Delete (X)", {color: '#000000', fontSize: '24px'});
    this.swipeText = this.add.text(60, 200, "Swipe (Space) : " + this.swipeMode, {color: '#000000', fontSize: '24px'});
    this.zoomText = this.add.text(30, 250, "Zoom In/Out (Scroll)", {color: '#000000', fontSize: '24px'});
    this.changeAreaText = this.add.text(30, 300, "Change Area (O/P)", {color: '#000000', fontSize: '24px'});
    this.renameAreaText = this.add.text(30, 330, "Rename Area (N)", {color: '#000000', fontSize: '24px'});
    this.newAreaText = this.add.text(30, 360, "New Area (M)", {color: '#000000', fontSize: '24px'});
    this.deleteAreaText = this.add.text(30, 390, "Delete Area (Delete)", {color: '#000000', fontSize: '24px'});
    this.createTransitionText = this.add.text(30, 440, "New Transition (T)", {color: '#000000', fontSize: '24px'});
    this.unitPosText = this.add.text(1250, 30, "Unit Pos : 0,0", {color: '#000000', fontSize: '24px', align: 'right'});
    this.tilePosText = this.add.text(1250, 60, "Tile Pos : 0,0", {color: '#000000', fontSize: '24px', align: 'right'});
    this.currentAreaText = this.add.text(1250, 90, "Area (1/1) : ", {color: '#000000', fontSize: '24px', align: 'right'});

    this.unitPosText.setOrigin(1, 0);
    this.tilePosText.setOrigin(1, 0);
    this.currentAreaText.setOrigin(1, 0);

    // Buttons
    this.floorTileButton = this.add.text(30, 670, "Floor Tile", {color: '#000000', fontSize: '24px'})
      .setInteractive()
      .on('pointerdown', () => {
        if (!this.inMenu) this.tileType = TileType.Floor;
      });
    this.transitionTileButton = this.add.text(300, 670, "Transition Tile", {color: '#000000', fontSize: '24px'})
      .setInteractive()
      .on('pointerdown', () => {
        if (!this.inMenu) this.tileType = TileType.Transition;
      });

    // Forms
    this.renameAreaInput = new TextInput(this, 1250, 90, 'Renaming area (Enter to submit): ', {color: '#000000', fontSize: '24px', align: 'right'});
    this.renameAreaInput.onSubmit = () => { this.renameArea() };
    this.renameAreaInput.visible = false;
    this.renameAreaInput.setOrigin(1, 0);

    this.transitionForm = new TransitionForm(this, this.gameMap.transitions, this.gameMap.areas, () => this.hideTransitionForm());
    this.transitionForm.hide();

    // Inputs
    this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.wKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.zKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    this.xKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
    this.shiftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);
    this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.oKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
    this.pKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    this.nKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);
    this.mKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
    this.deleteKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DELETE);
    this.tKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);

    this.input.on('pointerdown', (pointer, objects) => {
      if (objects.length === 0) {
        this.tileModeClick();
        this.canPlaceObject = true;
      }
      else
        this.canPlaceObject = false;
    });

    this.input.on('wheel', (pointer, currentlyOver, dx, dy, dz, event) => {
      this.zoom(dy);
    });

    // Handle cameras to make only specific elements affected by zoom
    this.cameras.main.ignore(
      [
        this.moveText,
        this.moveFasterText,
        this.tileModeText,
        this.addText,
        this.deleteText,
        this.swipeText,
        this.zoomText,
        this.changeAreaText,
        this.renameAreaText,
        this.newAreaText,
        this.deleteAreaText,
        this.createTransitionText,
        this.unitPosText,
        this.tilePosText,
        this.currentAreaText,
        this.floorTileButton,
        this.transitionTileButton,
        this.renameAreaInput,
        ...this.transitionForm.getGameObjects(),
      ]
    );
    this.uiCamera = this.cameras.add(0, 0, 1280, 720);
    this.uiCamera.ignore([this.graphics]);
  }

  update() {
    this.handleCameraMovement();
    this.handleUserInput();

    this.cursorUnitPos = this.getCursorUnitPos();
    this.cursorTilePos = TileSet.getTilePosFromUnitPos(this.cursorUnitPos);

    this.unitPosText.setText("Unit Pos : " + Math.round(this.cursorUnitPos.x) + ", " + Math.round(this.cursorUnitPos.y));
    this.tilePosText.setText("Tile Pos : " + this.cursorTilePos.x + ", " + this.cursorTilePos.y);
    this.currentAreaText.setText("Area (" + (this.gameMap.areaIndex + 1) + "/" + this.gameMap.areas.length + ") : "
      + this.gameMap.currentArea().name);
    this.cameras.main.setScroll(
      this.playerPos.x + this.cameraOffsetPos.x - this.cameras.main.width / 2,
      this.playerPos.y + this.cameraOffsetPos.y - this.cameras.main.height / 2
    );

    // Detect swipe + hold click (tilemode)
    if (this.swipeMode === SwipeMode.On && this.pointer.leftButtonDown() && this.canPlaceObject === true) {
      this.tileModeClick();
    }

    this.drawTileSet();
  }

  private handleCameraMovement() {
    const MOVE_SPEED = MapEditor.MOVE_CAMERA_SPEED * (this.shiftKey.isDown ? MapEditor.MOVE_CAMERA_FASTER_MULTIPLIER : 1);

    if (this.inMenu) return;

    // Move camera left
    if (this.aKey.isDown)
      this.cameraOffsetPos.x -= MOVE_SPEED;

    // Move camera right
    if (this.dKey.isDown)
      this.cameraOffsetPos.x += MOVE_SPEED;

    // Move camera up
    if (this.wKey.isDown)
      this.cameraOffsetPos.y -= MOVE_SPEED;

    // Move camera down
    if (this.sKey.isDown)
      this.cameraOffsetPos.y += MOVE_SPEED;
  }

  private handleUserInput() {
    if (this.inMenu) return;

    if (Phaser.Input.Keyboard.JustDown(this.zKey))
      this.changeTileMode(TileMode.Add);

    if (Phaser.Input.Keyboard.JustDown(this.xKey))
      this.changeTileMode(TileMode.Delete);

    if (Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
      this.swipeMode = (this.swipeMode === SwipeMode.Off ? SwipeMode.On : SwipeMode.Off);
      this.swipeText.setText("Swipe (Space) : " + this.swipeMode);
    }

    if (Phaser.Input.Keyboard.JustDown(this.oKey))
      this.gameMap.previousArea();

    if (Phaser.Input.Keyboard.JustDown(this.pKey))
      this.gameMap.nextArea();

    if (Phaser.Input.Keyboard.JustDown(this.nKey)) {
      this.inMenu = true;
      this.renameAreaInput.focused = true;
      this.renameAreaInput.visible = true;
      this.currentAreaText.visible = false;
      this.renameAreaInput.updateInputText(this.gameMap.currentArea().name);
    }

    if (Phaser.Input.Keyboard.JustDown(this.mKey))
      this.gameMap.addArea(new Area("New Area"));

    if (Phaser.Input.Keyboard.JustDown(this.deleteKey))
      this.gameMap.deleteCurrentArea();

    if (Phaser.Input.Keyboard.JustDown(this.tKey)) {
      this.transitionForm.show();
      this.inMenu = true;
    }
  }

  private tileModeClick() {
    const cursorTilePos = TileSet.getTilePosFromUnitPos(this.getCursorUnitPos());

    if (this.inMenu) return;

    if (this.tileMode === TileMode.Add)
      this.gameMap.currentArea().tileSet.addTile(cursorTilePos.x, cursorTilePos.y, this.tileType);
    else if (this.tileMode === TileMode.Delete)
      this.gameMap.currentArea().tileSet.deleteTile(cursorTilePos.x, cursorTilePos.y);
  }

  private zoom(dy : number) {
    let newZoom = this.cameras.main.zoom + (dy * MapEditor.ZOOM_SPEED / 1000);

    if (this.inMenu) return;

    newZoom = Math.min(Math.max(newZoom, MapEditor.MIN_ZOOM), MapEditor.MAX_ZOOM);
    this.cameras.main.setZoom(newZoom);
  }

  private drawTileSet() {
    const playerTilePos = TileSet.getTilePosFromUnitPos(this.playerPos);

    // Clear previous drawn lines
    this.graphics.clear();

    // Center point
    this.graphics.fillStyle(TileColor.Player, 1);
    this.graphics.fillCircle(this.playerPos.x, this.playerPos.y, 4);

    // Draw tiles
    this.tileDrawer.drawDebugTileList(this.gameMap.currentArea().tileSet.tiles.values(), 2);

    // Draw player tile
    const points = Tile.getPointsFromTilePos(playerTilePos.x, playerTilePos.y);
    this.tileDrawer.drawDebugTilePos(points, TileColor.Player);

    // Draw cursor tile
    let cursorColor = 0x000000;
    if (this.tileMode === TileMode.Add) {
      if (this.tileType === TileType.Floor)
        cursorColor = TileColor.Floor;
      else if (this.tileType === TileType.Transition)
        cursorColor = TileColor.Transition;
    }
    else if (this.tileMode === TileMode.Delete)
        cursorColor = TileColor.Delete;

    const cursorTilePoints = Tile.getPointsFromTilePos(this.cursorTilePos.x, this.cursorTilePos.y);
    this.tileDrawer.drawDebugTilePos(cursorTilePoints, cursorColor);
  }

  private renameArea() {
    this.gameMap.currentArea().name = this.renameAreaInput.inputText;
    this.renameAreaInput.visible = false;
    this.currentAreaText.visible = true;
    this.inMenu = false;
  }

  private hideTransitionForm() {
    this.inMenu = false;
    this.transitionForm.hide();
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
