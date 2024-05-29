import 'phaser'
import Tile, { TileType } from '../objects/map/tile'
import TileDrawer, { TileColor } from '../objects/map/tiledrawer'
import TileSet from '../objects/map/tileset'
import Area from '../objects/map/area'
import Act from '../objects/map/act'
import Campaign from '../objects/map/campaign'
import TextInput from '../objects/textInput'
import TransitionForm from '../objects/map/transitionform'
import ConfigureTileForm from '../objects/map/configuretileform'
import DeleteTransitionForm from '../objects/map/deletetransitionform'

enum TileMode {
  Add = "Add",
  Delete = "Delete",
  Configure = "Configure",
}

enum SwipeMode {
  On = "On",
  Off = "Off"
}

export default class MapEditor extends Phaser.Scene {
  static readonly MOVE_CAMERA_SPEED = 10;
  static readonly MOVE_CAMERA_FASTER_MULTIPLIER = 2;
  static readonly ZOOM_SPEED = 1;
  static readonly MIN_ZOOM = 0.2;
  static readonly MAX_ZOOM = 2;
  static readonly MIN_BRUSH_SIZE = 0;
  static readonly MAX_BRUSH_SIZE = 10;

  // Phaser refs/objects
  graphics: Phaser.GameObjects.Graphics;
  pointer: Phaser.Input.Pointer;
  centerPoint: Phaser.Geom.Point;
  uiCamera: Phaser.Cameras.Scene2D.Camera;

  // Editor data / helpers
  campaign: Campaign;
  tileDrawer: TileDrawer;
  playerPos: Phaser.Geom.Point;
  cameraOffsetPos: Phaser.Geom.Point;
  cursorUnitPos: Phaser.Geom.Point;
  cursorTilePos: Phaser.Geom.Point;
  brushSize: number;

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
  configureText: Phaser.GameObjects.Text;
  swipeText: Phaser.GameObjects.Text;
  brushSizeText: Phaser.GameObjects.Text;
  zoomText: Phaser.GameObjects.Text;
  changeAreaText: Phaser.GameObjects.Text;
  renameAreaText: Phaser.GameObjects.Text;
  newAreaText: Phaser.GameObjects.Text;
  deleteAreaText: Phaser.GameObjects.Text;
  changeActText: Phaser.GameObjects.Text;
  renameActText: Phaser.GameObjects.Text;
  newActText: Phaser.GameObjects.Text;
  deleteActText: Phaser.GameObjects.Text;
  createTransitionText: Phaser.GameObjects.Text;
  deleteTransitionText: Phaser.GameObjects.Text;
  quitText: Phaser.GameObjects.Text;
  unitPosText: Phaser.GameObjects.Text;
  tilePosText: Phaser.GameObjects.Text;
  currentActText: Phaser.GameObjects.Text;
  currentAreaText: Phaser.GameObjects.Text;

  // Forms
  renameActInput: TextInput;
  renameAreaInput: TextInput;
  transitionForm: TransitionForm;
  configureTileForm: ConfigureTileForm;
  deleteTransitionForm: DeleteTransitionForm;

  // Input keys
  aKey: Phaser.Input.Keyboard.Key; // Move left
  dKey: Phaser.Input.Keyboard.Key; // Move right
  sKey: Phaser.Input.Keyboard.Key; // Move down
  wKey: Phaser.Input.Keyboard.Key; // Move up
  shiftKey: Phaser.Input.Keyboard.Key; // Move faster

  constructor() {
    super({ key: 'MapEditor' });
  }

  create() {
    this.graphics = this.add.graphics();
    this.pointer = this.input.activePointer;
    this.centerPoint = new Phaser.Geom.Point(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2
    );

    // Tileset json import test
    this.campaign = new Campaign("Test campaign");
    this.campaign.currentAct().addArea(new Area("Allo"));
    this.tileDrawer = new TileDrawer(this.graphics);
    this.playerPos = new Phaser.Geom.Point;
    this.cameraOffsetPos = new Phaser.Geom.Point;

    this.tileMode = TileMode.Add;
    this.swipeMode = SwipeMode.Off;
    this.tileType = TileType.Floor;
    this.canPlaceObject = true;
    this.inMenu = false;
    this.brushSize = 0;

    // Texts
    this.moveText = this.add.text(30, 30, "Move (WASD)", { color: '#000000', fontSize: '18px' });
    this.moveFasterText = this.add.text(30, 50, "Move Faster (Hold Shift)", { color: '#000000', fontSize: '18px' });
    this.tileModeText = this.add.text(30, 80, "TileMode : " + this.tileMode, { color: '#000000', fontSize: '18px' });
    this.addText = this.add.text(60, 100, "Add (Z)", { color: '#000000', fontSize: '18px' });
    this.deleteText = this.add.text(60, 120, "Delete (X)", { color: '#000000', fontSize: '18px' });
    this.configureText = this.add.text(60, 140, "Configure (C)", { color: '#000000', fontSize: '18px' });
    this.swipeText = this.add.text(60, 160, "Swipe (Space) : " + this.swipeMode, { color: '#000000', fontSize: '18px' });
    this.brushSizeText = this.add.text(60, 180, "Brush Size (-/+) : " + this.brushSize, { color: '#000000', fontSize: '18px' });
    this.zoomText = this.add.text(30, 210, "Zoom In/Out (Scroll)", { color: '#000000', fontSize: '18px' });
    this.newActText = this.add.text(30, 240, "New Act (U)", { color: '#000000', fontSize: '18px' });
    this.renameActText = this.add.text(30, 260, "Rename Act (I)", { color: '#000000', fontSize: '18px' });
    this.changeActText = this.add.text(30, 280, "Change Act (O/P)", { color: '#000000', fontSize: '18px' });
    this.deleteActText = this.add.text(30, 300, "Delete Act (Delete)", { color: '#000000', fontSize: '18px' });
    this.newAreaText = this.add.text(30, 330, "New Area (H)", { color: '#000000', fontSize: '18px' });
    this.renameAreaText = this.add.text(30, 350, "Rename Area (J)", { color: '#000000', fontSize: '18px' });
    this.changeAreaText = this.add.text(30, 370, "Change Area (K/L)", { color: '#000000', fontSize: '18px' });
    this.deleteAreaText = this.add.text(30, 390, "Delete Area (~)", { color: '#000000', fontSize: '18px' });
    this.createTransitionText = this.add.text(30, 420, "New Transition (T)", { color: '#000000', fontSize: '18px' });
    this.deleteTransitionText = this.add.text(30, 440, "Delete Transition (Y)", { color: '#000000', fontSize: '18px' });
    this.quitText = this.add.text(30, 470, "Quit (\\)", { color: '#000000', fontSize: '18px' });

    this.unitPosText = this.add.text(1250, 30, "Unit Pos : 0,0", { color: '#000000', fontSize: '24px', align: 'right' });
    this.tilePosText = this.add.text(1250, 60, "Tile Pos : 0,0", { color: '#000000', fontSize: '24px', align: 'right' });
    this.currentActText = this.add.text(1250, 90, "Act (1/1) : ", { color: '#000000', fontSize: '24px', align: 'right' });
    this.currentAreaText = this.add.text(1250, 120, "Area (1/1) : ", { color: '#000000', fontSize: '24px', align: 'right' });

    this.unitPosText.setOrigin(1, 0);
    this.tilePosText.setOrigin(1, 0);
    this.currentActText.setOrigin(1, 0);
    this.currentAreaText.setOrigin(1, 0);

    // Forms
    this.renameActInput = new TextInput(this, 1250, 90, 0, 'Renaming act (Enter to submit): ', { color: '#000000', fontSize: '24px', align: 'right' });
    this.renameActInput.onSubmit = () => { this.renameAct() };
    this.renameActInput.focused = false;
    this.renameActInput.visible = false;
    this.renameActInput.setOrigin(1, 0);
    this.renameActInput.setBackgroundVisibility(false);
    this.renameActInput.setPadding(0);

    this.renameAreaInput = new TextInput(this, 1250, 120, 0, 'Renaming area (Enter to submit): ', { color: '#000000', fontSize: '24px', align: 'right' });
    this.renameAreaInput.onSubmit = () => { this.renameArea() };
    this.renameAreaInput.focused = false;
    this.renameAreaInput.visible = false;
    this.renameAreaInput.setOrigin(1, 0);
    this.renameAreaInput.setBackgroundVisibility(false);
    this.renameAreaInput.setPadding(0);

    this.transitionForm = new TransitionForm(this, this.campaign.currentAct(), () => this.hideTransitionForm());
    this.transitionForm.hide();

    this.configureTileForm = new ConfigureTileForm(this, this.campaign.currentAct(), () => this.hideConfigureTileForm());
    this.configureTileForm.hide();

    this.deleteTransitionForm = new DeleteTransitionForm(this, this.campaign.currentAct(), () => this.hideDeleteTransitionForm());
    this.deleteTransitionForm.hide();

    // Inputs
    this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.wKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.shiftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);

    // Prevent DOM from handling tab key
    this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TAB, true);

    this.input.on('pointerdown', (pointer, objects) => {
      if (objects.length === 0) {
        this.tileModeClick();
        this.canPlaceObject = true;
      }
      else
        this.canPlaceObject = false;
    });

    this.input.keyboard.on('keydown', (event: KeyboardEvent) => this.handleKeyDown(event));
    this.input.on('wheel', (pointer, currentlyOver, dx, dy, dz, event) => this.zoom(dy));

    // Handle cameras to make only specific elements affected by zoom
    this.cameras.main.ignore(
      [
        this.moveText,
        this.moveFasterText,
        this.tileModeText,
        this.addText,
        this.deleteText,
        this.configureText,
        this.swipeText,
        this.brushSizeText,
        this.zoomText,
        this.changeAreaText,
        this.renameAreaText,
        this.newAreaText,
        this.deleteAreaText,
        this.changeActText,
        this.renameActText,
        this.newActText,
        this.deleteActText,
        this.createTransitionText,
        this.deleteTransitionText,
        this.quitText,
        this.unitPosText,
        this.tilePosText,
        this.currentActText,
        this.currentAreaText,
        this.renameActInput,
        this.renameAreaInput,
        this.transitionForm,
        this.deleteTransitionForm,
        this.configureTileForm,
      ]
    );
    this.uiCamera = this.cameras.add(0, 0, 1280, 720);
    this.uiCamera.ignore([this.graphics]);
  }

  update() {
    this.handleCameraMovement();

    this.cursorUnitPos = this.getCursorUnitPos();
    this.cursorTilePos = TileSet.getTilePosFromUnitPos(this.cursorUnitPos);

    this.unitPosText.setText("Unit Pos : " + Math.round(this.cursorUnitPos.x) + ", " + Math.round(this.cursorUnitPos.y));
    this.tilePosText.setText("Tile Pos : " + this.cursorTilePos.x + ", " + this.cursorTilePos.y);
    this.currentActText.setText("Act (" + (this.campaign.actIndex + 1) + "/" + this.campaign.acts.length + ") : "
      + this.campaign.currentAct().name);
    this.currentAreaText.setText("Area (" + (this.campaign.currentAct().areaIndex + 1) + "/" + this.campaign.currentAct().areas.length + ") : "
      + this.campaign.currentArea().name);
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

  private handleKeyDown(event: KeyboardEvent) {
    if (this.inMenu) return;

    const PRESSED_KEY = event.key.toLowerCase();

    if (PRESSED_KEY === 'z')
      this.changeTileMode(TileMode.Add);

    else if (PRESSED_KEY === 'x')
      this.changeTileMode(TileMode.Delete);

    else if (PRESSED_KEY === 'c')
      this.changeTileMode(TileMode.Configure);

    else if (PRESSED_KEY === ' ') {
      this.swipeMode = (this.swipeMode === SwipeMode.Off ? SwipeMode.On : SwipeMode.Off);
      this.swipeText.setText("Swipe (Space) : " + this.swipeMode);
    }

    else if (PRESSED_KEY === '-' && this.brushSize > MapEditor.MIN_BRUSH_SIZE) {
      this.brushSize--;
      this.brushSizeText.setText("Brush Size (-/+) : " + this.brushSize);
    }

    else if (PRESSED_KEY === '+' && this.brushSize < MapEditor.MAX_BRUSH_SIZE) {
      this.brushSize++;
      this.brushSizeText.setText("Brush Size (-/+) : " + this.brushSize);
    }

    // New act
    else if (PRESSED_KEY === 'u') {
      this.campaign.addAct(new Act("New Act"));
    }

    // Rename current act
    else if (PRESSED_KEY === 'i') {
      this.inMenu = true;
      this.renameActInput.focused = true;
      this.renameActInput.visible = true;
      this.currentActText.visible = false;
      this.renameActInput.updateInputText(this.campaign.currentAct().name);
    }

    // Go to previous act
    else if (PRESSED_KEY === 'o') {
      this.campaign.previousAct();
    }

    // Go to next act
    else if (PRESSED_KEY === 'p') {
      this.campaign.nextAct();
    }

    // Delete current act
    else if (PRESSED_KEY === 'delete') {
      this.campaign.deleteCurrentAct();
    }

    // New area
    else if (PRESSED_KEY === 'h')
      this.campaign.currentAct().addArea(new Area("New Area"));

    // Rename current area
    else if (PRESSED_KEY === 'j') {
      this.inMenu = true;
      this.renameAreaInput.focused = true;
      this.renameAreaInput.visible = true;
      this.currentAreaText.visible = false;
      this.renameAreaInput.updateInputText(this.campaign.currentArea().name);
    }

    // Go to previous area
    else if (PRESSED_KEY === 'k')
      this.campaign.currentAct().previousArea();

    // Go to next area
    else if (PRESSED_KEY === 'l')
      this.campaign.currentAct().nextArea();

    // Delete current area
    else if (PRESSED_KEY === '~')
      this.campaign.currentAct().deleteCurrentArea();

    // Create transition
    else if (PRESSED_KEY === 't') {
      this.transitionForm.show();
      this.inMenu = true;
    }

    // Delete transition
    else if (PRESSED_KEY === 'y') {
      this.deleteTransitionForm.show();
      this.inMenu = true;
    }

    // Exit map editor
    else if (PRESSED_KEY === '\\') {
      this.scene.stop();
      this.scene.start('MainScene');
    }
  }

  private tileModeClick() {
    if (this.inMenu) return;

    const CURSOR_TILES_POS = TileSet.getProximityTilePos(this.cursorTilePos.x, this.cursorTilePos.y, this.brushSize);

    if (this.tileMode === TileMode.Add)
      for (const TILE_POS of CURSOR_TILES_POS)
        this.campaign.currentArea().tileSet.addTile(TILE_POS.x, TILE_POS.y, this.tileType);
    else if (this.tileMode === TileMode.Delete)
      for (const TILE_POS of CURSOR_TILES_POS)
        this.campaign.currentArea().tileSet.deleteTile(TILE_POS.x, TILE_POS.y);
    else if (this.tileMode === TileMode.Configure) {
      const TILE: Tile | undefined = this.campaign.currentArea().tileSet.getTile(this.cursorTilePos.x, this.cursorTilePos.y);
      if (TILE) {
        this.inMenu = true;
        this.configureTileForm.show(TILE);
      }
    }

  }

  private zoom(dy: number) {
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
    this.tileDrawer.drawDebugTileList(this.campaign.currentArea().tileSet.tiles.values(), 2);

    // Draw player tile
    const PLAYER_TILE_POINTS = Tile.getPointsFromTilePos(playerTilePos.x, playerTilePos.y);
    this.tileDrawer.drawDebugTilePoints(PLAYER_TILE_POINTS, TileColor.Player);

    // Draw cursor tile
    let cursorColor = 0x000000;
    if (this.tileMode === TileMode.Add)
      cursorColor = TileColor.Floor;
    else if (this.tileMode === TileMode.Delete)
      cursorColor = TileColor.Delete;
    else if (this.tileMode === TileMode.Configure)
      cursorColor = TileColor.Configure;

    if (this.tileMode === TileMode.Configure) {
      // Don't apply brush size when in "configure" mode
      const CURSOR_TILE_POINTS = Tile.getPointsFromTilePos(this.cursorTilePos.x, this.cursorTilePos.y);
      this.tileDrawer.drawDebugTilePoints(CURSOR_TILE_POINTS, cursorColor);
    }
    else {
      const CURSOR_TILES_POS = TileSet.getProximityTilePos(this.cursorTilePos.x, this.cursorTilePos.y, this.brushSize);
      this.tileDrawer.drawDebugTilePosList(CURSOR_TILES_POS, 2, cursorColor);
    }
  }

  private renameAct() {
    this.campaign.currentAct().name = this.renameActInput.inputText;
    this.renameActInput.focused = false;
    this.renameActInput.visible = false;
    this.currentActText.visible = true;
    this.inMenu = false;
  }

  private renameArea() {
    this.campaign.currentArea().name = this.renameAreaInput.inputText;
    this.renameAreaInput.focused = false;
    this.renameAreaInput.visible = false;
    this.currentAreaText.visible = true;
    this.inMenu = false;
  }

  private hideTransitionForm() {
    this.inMenu = false;
    this.transitionForm.hide();
  }

  private hideConfigureTileForm() {
    this.inMenu = false;
    this.configureTileForm.hide();
  }

  private hideDeleteTransitionForm() {
    this.inMenu = false;
    this.deleteTransitionForm.hide();
  }

  private getCursorUnitPos(): Phaser.Geom.Point {
    return new Phaser.Geom.Point(
      ((this.pointer.x - this.centerPoint.x + this.playerPos.x) / this.cameras.main.zoom) + this.cameraOffsetPos.x,
      ((this.pointer.y - this.centerPoint.y + this.playerPos.y) / this.cameras.main.zoom) + this.cameraOffsetPos.y
    );
  }

  private changeTileMode(mode: TileMode) {
    this.tileMode = mode;
    this.tileModeText.setText("TileMode : " + mode);
  }
}
