import 'phaser'
import Tile, { TileType } from '../tiles/tile'
import { TileColor } from '../tiles/tiledrawer'
import TileSet from '../tiles/tileset'
import CampaignManager from '../managers/campaignmanager'
import CampaignSerializer from '../tiles/campaignserializer'
import TextInput from '../editor/textInput'
import TransitionForm from '../editor/transitionform'
import ConfigureTileForm from '../editor/configuretileform'
import DeleteTransitionForm from '../editor/deletetransitionform'
import TileSelector from '../editor/tileSelector'
import Point from '../types/point'

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
  private static readonly MOVE_CAMERA_SPEED = 10;
  private static readonly MOVE_CAMERA_FASTER_MULTIPLIER = 2;
  private static readonly ZOOM_SPEED = 1;
  private static readonly MIN_ZOOM = 0.2;
  private static readonly MAX_ZOOM = 2;
  private static readonly MIN_BRUSH_SIZE = 0;
  private static readonly MAX_BRUSH_SIZE = 10;

  // Phaser refs/objects
  private pointer: Phaser.Input.Pointer;
  private centerPoint: Point;
  private uiCamera: Phaser.Cameras.Scene2D.Camera;

  // Editor data / helpers
  private campaignManager: CampaignManager;
  private playerPos: Point;
  private cameraOffsetPos: Point;
  private cursorUnitPos: Point;
  private cursorTilePos: Point;
  private brushSize: number;
  private showDebugTiles: boolean;

  // Editor states
  private tileMode: TileMode;
  private swipeMode: SwipeMode;
  private canPlaceObject: boolean;
  private inMenu: boolean;

  // Texts
  private moveText: Phaser.GameObjects.Text;
  private moveFasterText: Phaser.GameObjects.Text;
  private tileModeText: Phaser.GameObjects.Text;
  private addText: Phaser.GameObjects.Text;
  private deleteText: Phaser.GameObjects.Text;
  private configureText: Phaser.GameObjects.Text;
  private swipeText: Phaser.GameObjects.Text;
  private brushSizeText: Phaser.GameObjects.Text;
  private zoomText: Phaser.GameObjects.Text;
  private changeAreaText: Phaser.GameObjects.Text;
  private renameAreaText: Phaser.GameObjects.Text;
  private newAreaText: Phaser.GameObjects.Text;
  private deleteAreaText: Phaser.GameObjects.Text;
  private changeActText: Phaser.GameObjects.Text;
  private renameActText: Phaser.GameObjects.Text;
  private newActText: Phaser.GameObjects.Text;
  private deleteActText: Phaser.GameObjects.Text;
  private createTransitionText: Phaser.GameObjects.Text;
  private deleteTransitionText: Phaser.GameObjects.Text;
  private toggleDebugTiles: Phaser.GameObjects.Text;
  private quitText: Phaser.GameObjects.Text;
  private unitPosText: Phaser.GameObjects.Text;
  private tilePosText: Phaser.GameObjects.Text;
  private currentActText: Phaser.GameObjects.Text;
  private currentAreaText: Phaser.GameObjects.Text;

  // Forms
  private renameActInput: TextInput;
  private renameAreaInput: TextInput;
  private transitionForm: TransitionForm;
  private configureTileForm: ConfigureTileForm;
  private deleteTransitionForm: DeleteTransitionForm;
  private tileSelector: TileSelector;

  // Input keys
  private aKey: Phaser.Input.Keyboard.Key; // Move left
  private dKey: Phaser.Input.Keyboard.Key; // Move right
  private sKey: Phaser.Input.Keyboard.Key; // Move down
  private wKey: Phaser.Input.Keyboard.Key; // Move up
  private shiftKey: Phaser.Input.Keyboard.Key; // Move faster

  constructor() {
    super({ key: 'MapEditor' });
  }

  create() {
    this.uiCamera = this.cameras.add(0, 0, 1280, 720);
    this.uiCamera.setName('uiCamera');

    this.pointer = this.input.activePointer;
    this.centerPoint = new Point(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2
    );

    this.campaignManager = new CampaignManager(this);
    this.campaignManager.loadCampaign('{"name":"Default Campaign","acts":[{"name":"Act I","areas":[{"name":"Default","tileset":{"tiles":[{"x":-6,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-5,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-5,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-5,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-5,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-5,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-5,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-5,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-4,"y":-4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-4,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-4,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-4,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-4,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-4,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-4,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-4,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-4,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-3,"y":-5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-3,"y":-4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-3,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-3,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-3,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-3,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-3,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-3,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-3,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-3,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-3,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-2,"y":-5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-2,"y":-4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-2,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-2,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-2,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-2,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-2,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-2,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-2,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-2,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-2,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-1,"y":-5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-1,"y":-4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-1,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-1,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-1,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-1,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-1,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-1,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-1,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-1,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-1,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":0,"y":-6,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":0,"y":-5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":0,"y":-4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":0,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":0,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":0,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":0,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":0,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":0,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":0,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":0,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":0,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":0,"y":6,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":1,"y":-5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":1,"y":-4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":1,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":1,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":1,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":1,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":1,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":1,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":1,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":1,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":1,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":2,"y":-5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":2,"y":-4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":2,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":2,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":2,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":2,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":2,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":2,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":2,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":2,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":2,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":3,"y":-5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":3,"y":-4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":3,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":3,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":3,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":3,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":3,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":3,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":3,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":3,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":3,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":4,"y":-4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":4,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":4,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":4,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":4,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":4,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":4,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":4,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":4,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":5,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":5,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":5,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":5,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":5,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":5,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":5,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":6,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":4,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":4,"y":6,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":5,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":5,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":5,"y":6,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":5,"y":7,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":6,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":6,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":6,"y":6,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":7,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":6,"y":7,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":6,"y":8,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":7,"y":6,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":7,"y":7,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":7,"y":8,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":7,"y":9,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":8,"y":6,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":8,"y":7,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":8,"y":8,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":9,"y":7,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":8,"y":9,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":8,"y":10,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":9,"y":8,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":9,"y":9,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":9,"y":10,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":9,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":10,"y":8,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":10,"y":9,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":10,"y":10,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":9,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":7,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":8,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":8,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":8,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":8,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":8,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":8,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":8,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":9,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":9,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":9,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":9,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":9,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":9,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":9,"y":18,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":10,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":10,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":10,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":10,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":10,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":10,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":10,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":10,"y":18,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":10,"y":19,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":8,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":10,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":18,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":19,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":20,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":8,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":9,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":10,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":18,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":19,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":20,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":8,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":9,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":10,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":18,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":19,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":20,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":7,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":8,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":9,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":10,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":18,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":19,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":20,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":21,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":8,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":9,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":10,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":18,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":19,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":20,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":8,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":9,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":10,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":18,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":19,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":20,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":8,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":9,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":10,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":18,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":19,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":20,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":18,"y":9,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":18,"y":10,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":18,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":18,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":18,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":18,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":18,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":18,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":18,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":18,"y":18,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":18,"y":19,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":19,"y":10,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":19,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":19,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":19,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":19,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":19,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":19,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":19,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":19,"y":18,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":20,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":20,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":20,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":20,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":20,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":20,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":20,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":21,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":6,"y":20,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":7,"y":19,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":7,"y":20,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":7,"y":21,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":8,"y":18,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":8,"y":19,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":8,"y":20,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":8,"y":21,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":8,"y":22,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":9,"y":19,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":9,"y":20,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":9,"y":21,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":10,"y":20,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":4,"y":22,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":5,"y":21,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":5,"y":22,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":5,"y":23,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":6,"y":21,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":6,"y":22,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":6,"y":23,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":6,"y":24,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":7,"y":22,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":7,"y":23,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":2,"y":24,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":3,"y":23,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":3,"y":24,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":3,"y":25,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":4,"y":23,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":4,"y":24,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":4,"y":25,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":4,"y":26,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":5,"y":24,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":5,"y":25,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-4,"y":28,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-3,"y":26,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-3,"y":27,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-3,"y":28,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-3,"y":29,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-3,"y":30,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-2,"y":25,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-2,"y":26,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-2,"y":27,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-2,"y":28,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-2,"y":29,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-2,"y":30,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-2,"y":31,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-1,"y":25,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-1,"y":26,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-1,"y":27,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-1,"y":28,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-1,"y":29,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-1,"y":30,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-1,"y":31,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":0,"y":24,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":0,"y":25,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":0,"y":26,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":0,"y":27,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":0,"y":28,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":0,"y":29,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":0,"y":30,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":0,"y":31,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":0,"y":32,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":1,"y":25,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":1,"y":26,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":1,"y":27,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":1,"y":28,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":1,"y":29,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":1,"y":30,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":1,"y":31,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":2,"y":25,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":2,"y":26,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":2,"y":27,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":2,"y":28,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":2,"y":29,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":2,"y":30,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":2,"y":31,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":3,"y":26,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":3,"y":27,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":3,"y":28,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":3,"y":29,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":3,"y":30,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":4,"y":28,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""}]}}],"transitions":[]}]}');
    this.playerPos = new Point();
    this.cameraOffsetPos = new Point();

    this.tileMode = TileMode.Add;
    this.swipeMode = SwipeMode.Off;
    this.canPlaceObject = true;
    this.inMenu = false;
    this.brushSize = 0;
    this.showDebugTiles = false;

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
    this.toggleDebugTiles = this.add.text(30, 470, "Toggle Debug Tiles (.)", { color: '#000000', fontSize: '18px' });
    this.quitText = this.add.text(30, 500, "Quit (\\)", { color: '#000000', fontSize: '18px' });

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

    this.transitionForm = new TransitionForm(this, this.campaignManager.getCampaign(), () => this.hideTransitionForm());
    this.transitionForm.hide();

    this.configureTileForm = new ConfigureTileForm(this, this.campaignManager.getCampaign(), () => this.hideConfigureTileForm());
    this.configureTileForm.hide();

    this.deleteTransitionForm = new DeleteTransitionForm(this, this.campaignManager.getCampaign(), () => this.hideDeleteTransitionForm());
    this.deleteTransitionForm.hide();

    this.tileSelector = new TileSelector(this);

    // Inputs
    if (this.input && this.input.keyboard) {
      this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
      this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
      this.wKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      this.shiftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);
    }

    // Prevent DOM from handling tab key
    this.input!.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.TAB, true);

    this.input.on('pointerdown', (pointer, objects) => {
      if (objects.length === 0) {
        this.tileModeClick();
        this.canPlaceObject = true;
      }
      else
        this.canPlaceObject = false;
    });

    this.input!.keyboard!.on('keydown', (event: KeyboardEvent) => this.handleKeyDown(event));
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
        this.toggleDebugTiles,
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
        this.tileSelector,
      ]
    );
  }

  update() {
    this.handleCameraMovement();

    this.cursorUnitPos = new Phaser.Geom.Point(
      ((this.pointer.x - this.centerPoint.x + this.playerPos.x) / this.cameras.main.zoom) + this.cameraOffsetPos.x,
      ((this.pointer.y - this.centerPoint.y + this.playerPos.y) / this.cameras.main.zoom) + this.cameraOffsetPos.y
    );
    this.cursorTilePos = Tile.getTilePosFromUnitPos(this.cursorUnitPos.x, this.cursorUnitPos.y);

    this.unitPosText.setText("Unit Pos : " + Math.round(this.cursorUnitPos.x) + ", " + Math.round(this.cursorUnitPos.y));
    this.tilePosText.setText("Tile Pos : " + this.cursorTilePos.x + ", " + this.cursorTilePos.y);
    this.currentActText.setText("Act (" + (this.campaignManager.getActIndex() + 1) + "/" + this.campaignManager.getActAmount() + ") : " + this.campaignManager.getActName());
    this.currentAreaText.setText("Area (" + (this.campaignManager.getAreaIndex() + 1) + "/" + this.campaignManager.getAreaAmount() + ") : " + this.campaignManager.getAreaName());
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

  private handleCameraMovement(): void {
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

  private handleKeyDown(event: KeyboardEvent): void {
    if (this.inMenu) return;

    const PRESSED_KEY = event.key.toLowerCase();

    if (PRESSED_KEY === 'z') {
      this.changeTileMode(TileMode.Add);
      this.tileSelector.setVisible(true);
    }

    else if (PRESSED_KEY === 'x') {
      this.changeTileMode(TileMode.Delete);
      this.tileSelector.setVisible(false);
    }

    else if (PRESSED_KEY === 'c') {
      this.changeTileMode(TileMode.Configure);
      this.tileSelector.setVisible(false);
    }

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
      this.campaignManager.addAct("New Act");
    }

    // Rename current act
    else if (PRESSED_KEY === 'i') {
      this.inMenu = true;
      this.renameActInput.focused = true;
      this.renameActInput.visible = true;
      this.currentActText.visible = false;
      this.renameActInput.updateInputText(this.campaignManager.getActName());
    }

    // Go to previous act
    else if (PRESSED_KEY === 'o')
      this.campaignManager.previousAct();

    // Go to next act
    else if (PRESSED_KEY === 'p')
      this.campaignManager.nextAct();

    // Delete current act
    else if (PRESSED_KEY === 'delete')
      this.campaignManager.deleteCurrentAct();

    // New area
    else if (PRESSED_KEY === 'h')
      this.campaignManager.addArea("New Area");

    // Rename current area
    else if (PRESSED_KEY === 'j') {
      this.inMenu = true;
      this.renameAreaInput.focused = true;
      this.renameAreaInput.visible = true;
      this.currentAreaText.visible = false;
      this.renameAreaInput.updateInputText(this.campaignManager.getAreaName());
    }

    // Go to previous area
    else if (PRESSED_KEY === 'k')
      this.campaignManager.previousArea();

    // Go to next area
    else if (PRESSED_KEY === 'l')
      this.campaignManager.nextArea();

    // Delete current area
    else if (PRESSED_KEY === '~')
      this.campaignManager.deleteCurrentArea();

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

    // Toggle debug tiles
    else if (PRESSED_KEY === '.')
      this.showDebugTiles = !this.showDebugTiles;

    // Exit map editor
    else if (PRESSED_KEY === '\\')
      this.scene.start('MainScene');

    const EXPORT = CampaignSerializer.export(this.campaignManager.getCampaign());
    console.log(EXPORT);
  }

  private tileModeClick(): void {
    if (this.inMenu) return;

    const CURSOR_TILES_POS = TileSet.getProximityTilePos(this.cursorTilePos.x, this.cursorTilePos.y, this.brushSize);

    if (this.tileMode === TileMode.Add)
      for (const TILE_POS of CURSOR_TILES_POS)
        this.campaignManager.addTile(TILE_POS.x, TILE_POS.y, TileType.Floor, this.tileSelector.getTileBitMap(), this.tileSelector.getTileFrame());
    else if (this.tileMode === TileMode.Delete)
      for (const TILE_POS of CURSOR_TILES_POS)
        this.campaignManager.deleteTile(TILE_POS.x, TILE_POS.y);
    else if (this.tileMode === TileMode.Configure) {
      const TILE: Tile | undefined = this.campaignManager.getTile(this.cursorTilePos.x, this.cursorTilePos.y);
      if (TILE) {
        this.inMenu = true;
        this.configureTileForm.show(TILE);
      }
    }

  }

  private zoom(dy: number): void {
    if (this.inMenu) return;

    let newZoom = this.cameras.main.zoom + (dy * MapEditor.ZOOM_SPEED / 1000);
    newZoom = Math.min(Math.max(newZoom, MapEditor.MIN_ZOOM), MapEditor.MAX_ZOOM);
    this.cameras.main.setZoom(newZoom);
  }

  private drawTileSet(): void {
    this.campaignManager.clearDebugTiles();

    if (this.showDebugTiles) {
      this.campaignManager.drawDebugCurrentTileSet();
      this.campaignManager.drawDebugPoint(this.playerPos.x, this.playerPos.y, TileColor.Player);
      this.campaignManager.drawDebugTile(this.playerPos.x, this.playerPos.y, TileColor.Player);
    }

    // Draw cursor tile
    let cursorColor = 0x000000;
    if (this.tileMode === TileMode.Add) cursorColor = TileColor.Floor;
    else if (this.tileMode === TileMode.Delete) cursorColor = TileColor.Delete;
    else if (this.tileMode === TileMode.Configure) cursorColor = TileColor.Configure;

    if (this.tileMode === TileMode.Configure)
      // Don't apply brush size when in "configure" mode
      this.campaignManager.drawDebugTile(this.cursorUnitPos.x, this.cursorUnitPos.y, cursorColor);
    else
      this.campaignManager.drawDebugProximityTilePos(this.cursorUnitPos.x, this.cursorUnitPos.y, cursorColor, this.brushSize);
  }

  private renameAct(): void {
    this.campaignManager.renameAct(this.renameActInput.inputText);
    this.renameActInput.focused = false;
    this.renameActInput.visible = false;
    this.currentActText.visible = true;
    this.inMenu = false;
  }

  private renameArea(): void {
    this.campaignManager.renameArea(this.renameAreaInput.inputText);
    this.renameAreaInput.focused = false;
    this.renameAreaInput.visible = false;
    this.currentAreaText.visible = true;
    this.inMenu = false;
  }

  private hideTransitionForm(): void {
    this.inMenu = false;
    this.transitionForm.hide();
  }

  private hideConfigureTileForm(): void {
    this.inMenu = false;
    this.configureTileForm.hide();
  }

  private hideDeleteTransitionForm(): void {
    this.inMenu = false;
    this.deleteTransitionForm.hide();
  }

  private changeTileMode(mode: TileMode): void {
    this.tileMode = mode;
    this.tileModeText.setText("TileMode : " + mode);
  }
}
