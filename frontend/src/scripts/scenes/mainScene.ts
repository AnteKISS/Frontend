import FpsText from '../objects/fpsText'
import Inventory from '../inventory/inventory'
import Item from '../inventory/item'
import InventoryItem from '../inventory/inventoryItem'
import { ItemType } from '../inventory/itemType'

import GUI from '../objects/gui'
import { PlayerEntity } from '../entities/playerEntity';
import { MonsterEntity } from '../entities/monsterEntity';
import { EntityManager } from '../managers/entityManager';
import { OutlinePipeline } from '../pipelines/outlinePipeline';

import { TileColor } from '../tiles/tiledrawer'
import CampaignManager from '../tiles/campaignmanager'
import Point from '../types/point'
import { EntityHealthBar } from '../uielements/entityHealthBar';
import { SignalHandler } from '../events/signal';
import Tooltip from '../label/tooltip'
import { SpellCollider } from '../physics/spellCollider';
import { SpellColliderManager } from '../managers/spellColliderManager'
import { ActiveEntity } from '../entities/activeEntity'
import ItemEntity from '../entities/itemEntity'
import { MathModule } from '../utilities/mathModule'
import { GameInput } from '../inputs/gameInputs'
import { GameObjects } from 'phaser'
import SoundManager from '../managers/soundManager'
import EventManager from '../managers/eventManager'
import { UiEvents } from '../events/uiEvents'

export default class MainScene extends Phaser.Scene {
  public uiCamera: Phaser.Cameras.Scene2D.Camera;
  public fpsText: FpsText;
  public versionText: Phaser.GameObjects.Text
  public campaignManager: CampaignManager;
  public pointer: Phaser.Input.Pointer;
  public centerPoint: Point;
  public mapEditorButton: Phaser.GameObjects.Text;
  public spellSpriteColliders: SpellCollider[] = [];

  private playerTest: PlayerEntity;
  private monsterTest: MonsterEntity;
  private monsterTest2: MonsterEntity;
  private monsterTest3: MonsterEntity;
  private entityHealthBar: EntityHealthBar;
  private gui: GUI;

  private gameInputs: GameInput;

  private deathScreenBackground: Phaser.GameObjects.Graphics;
  private deathScreenText: Phaser.GameObjects.Text;

  public inventory: Inventory;

  private music: Phaser.Sound.WebAudioSound;

  public constructor() {
    super({ key: 'MainScene' });
  }

  public init(data: any): void {
    if (this.game.renderer instanceof Phaser.Renderer.WebGL.WebGLRenderer) {
      this.game.renderer.pipelines.add(
        OutlinePipeline.KEY,
        new OutlinePipeline(this.game)
      );
    }
  }

  public create() {
    this.gameInputs = new GameInput(this);
    this.fpsText = new FpsText(this);
    this.uiCamera = this.cameras.add(0, 0, 1280, 720, false, "uiCamera");

    // new GameLogo(this, this.cameras.main.width / 2, this.cameras.main.height / 2);
    this.fpsText = new FpsText(this);

    //this.campaign = new Campaign("Main");
    this.campaignManager = new CampaignManager(this);
    this.campaignManager.loadCampaign('{"name":"Default Campaign","acts":[{"name":"Act I","areas":[{"name":"Default","tileset":{"tiles":[{"x":0,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-6,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-5,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-5,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-5,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-5,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-5,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-5,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-5,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-4,"y":-4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-4,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-4,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-4,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-4,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-4,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-4,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-4,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-4,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-3,"y":-5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-3,"y":-4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-3,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-3,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-3,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-3,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":0,"transitionName":""},{"x":-3,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":0,"transitionName":""},{"x":-3,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-3,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-3,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-3,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-2,"y":-5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-2,"y":-4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-2,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-2,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-2,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-2,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":0,"transitionName":""},{"x":-2,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":0,"transitionName":""},{"x":-2,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-2,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-2,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-2,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-1,"y":-5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-1,"y":-4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-1,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-1,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-1,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-1,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-1,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-1,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-1,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-1,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":-1,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":0,"y":-6,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":0,"y":-5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":0,"y":-4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":0,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":0,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":0,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":0,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":0,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":0,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":0,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":0,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":0,"y":6,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":1,"y":-5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":1,"y":-4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":1,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":1,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":1,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":1,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":1,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":1,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":1,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":1,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":1,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":2,"y":-5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":2,"y":-4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":2,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":2,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":2,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":2,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":2,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":2,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":2,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":2,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":2,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":3,"y":-5,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":3,"y":-4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":3,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":3,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":3,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":3,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":3,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":3,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":3,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":3,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":3,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":4,"y":-4,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":4,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":4,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":4,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":4,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":4,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":4,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":4,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":4,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":5,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":5,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":5,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":5,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":5,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":5,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":5,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":6,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":1,"transitionName":""},{"x":4,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":4,"y":6,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":5,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":5,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":5,"y":6,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":5,"y":7,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":6,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":6,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":6,"y":6,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":7,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":6,"y":7,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":6,"y":8,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":7,"y":6,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":7,"y":7,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":7,"y":8,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":7,"y":9,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":8,"y":6,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":8,"y":7,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":8,"y":8,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":9,"y":7,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":8,"y":9,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":8,"y":10,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":9,"y":8,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":9,"y":9,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":9,"y":10,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":9,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":10,"y":8,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":10,"y":9,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":10,"y":10,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":9,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":7,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":8,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":8,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":8,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":8,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":8,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":8,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":8,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":9,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":9,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":9,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":9,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":9,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":9,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":9,"y":18,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":10,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":10,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":10,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":10,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":10,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":10,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":10,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":10,"y":18,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":10,"y":19,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":8,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":10,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":18,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":19,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":11,"y":20,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":8,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":9,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":10,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":18,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":19,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":12,"y":20,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":8,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":9,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":10,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":18,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":19,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":13,"y":20,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":7,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":8,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":9,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":10,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":18,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":19,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":20,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":14,"y":21,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":8,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":9,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":10,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":18,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":19,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":15,"y":20,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":8,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":9,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":10,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":18,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":19,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":16,"y":20,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":8,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":9,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":10,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":18,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":19,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":17,"y":20,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":18,"y":9,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":18,"y":10,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":18,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":18,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":18,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":18,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":18,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":18,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":18,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":18,"y":18,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":18,"y":19,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":19,"y":10,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":19,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":19,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":19,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":19,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":19,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":19,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":19,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":19,"y":18,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":20,"y":11,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":20,"y":12,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":20,"y":13,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":20,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":20,"y":15,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":20,"y":16,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":20,"y":17,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":21,"y":14,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":6,"y":20,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":7,"y":19,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":7,"y":20,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":7,"y":21,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":8,"y":18,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":8,"y":19,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":8,"y":20,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":8,"y":21,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":8,"y":22,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":9,"y":19,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":9,"y":20,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":9,"y":21,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":10,"y":20,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":4,"y":22,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":5,"y":21,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":5,"y":22,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":5,"y":23,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":6,"y":21,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":6,"y":22,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":6,"y":23,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":6,"y":24,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":7,"y":22,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":7,"y":23,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":2,"y":24,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":3,"y":23,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":3,"y":24,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":3,"y":25,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":4,"y":23,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":4,"y":24,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":4,"y":25,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":4,"y":26,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":5,"y":24,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":5,"y":25,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-4,"y":28,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-3,"y":26,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-3,"y":27,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-3,"y":28,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-3,"y":29,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-3,"y":30,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-2,"y":25,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-2,"y":26,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-2,"y":27,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-2,"y":28,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-2,"y":29,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-2,"y":30,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-2,"y":31,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-1,"y":25,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-1,"y":26,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-1,"y":27,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-1,"y":28,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-1,"y":29,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-1,"y":30,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":-1,"y":31,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":0,"y":24,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":0,"y":25,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":0,"y":26,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":0,"y":27,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":0,"y":28,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":0,"y":29,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":0,"y":30,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":0,"y":31,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":0,"y":32,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":1,"y":25,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":1,"y":26,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":1,"y":27,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":1,"y":28,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":1,"y":29,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":1,"y":30,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":1,"y":31,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":2,"y":25,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":2,"y":26,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":2,"y":27,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":2,"y":28,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":2,"y":29,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":2,"y":30,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":2,"y":31,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":3,"y":26,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":3,"y":27,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":3,"y":28,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":3,"y":29,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":3,"y":30,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""},{"x":4,"y":28,"type":0,"bitmap":"rocky_floor_tiles","frame":13,"transitionName":""}]}}],"transitions":[]}]}');
    this.campaignManager.previousAct();

    this.pointer = this.input.activePointer;
    this.centerPoint = new Point(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2
    );
    this.mapEditorButton = this.add
      .text(13, 50, 'Map Editor (Click me!)', {
        color: '#000000',
        fontSize: '24px'
      })
      .setInteractive()
      .on('pointerdown', (pointer, localX, localY, event) => {
        event.stopPropagation();
        this.scene.launch('MapEditor');
        this.scene.pause('MainScene');
        this.scene.setVisible(false, 'MainScene');
        const clickEvent = new UiEvents.ButtonClickEvent(this.mapEditorButton);
        EventManager.notifyObservers(clickEvent);
      });

    this.input!.mouse!.disableContextMenu();

    ActiveEntity.setCampaignManager(this.campaignManager);

    this.gui = new GUI(this, 0, 0);
    this.playerTest = EntityManager.instance.createPlayer(this);
    this.playerTest.positionX = 0;
    this.playerTest.positionY = 0;
    this.playerTest.area = this.campaignManager.getCampaign().currentArea();

    const playerDeathHandler: SignalHandler = {
      callback: this.onPlayerDeath.bind(this),
      parameters: []
    }
    this.playerTest.onPlayerDeath.addHandler(playerDeathHandler);

    this.monsterTest = EntityManager.instance.createMonster(this, 'zombie_0');
    this.monsterTest.name = 'Zembie';
    this.monsterTest.positionX = this.cameras.main.width / 4;
    this.monsterTest.positionY = this.cameras.main.height / 4;
    this.monsterTest.area = this.campaignManager.getCampaign().currentArea();
    this.monsterTest2 = EntityManager.instance.createMonster(this, 'minotaur_0');
    this.monsterTest2.name = 'Menotaur';
    this.monsterTest2.positionX = this.monsterTest.positionX - 240;
    this.monsterTest2.positionY = this.monsterTest.positionY - 60;
    this.monsterTest2.stats.movementSpeed = 150;
    this.monsterTest2.stats.basePhysicalDamage = 20;
    this.monsterTest2.area = this.campaignManager.getCampaign().currentArea();
    this.monsterTest3 = EntityManager.instance.createMonster(this, 'skeleton_0');
    this.monsterTest3.name = 'Skeletenotaur';
    this.monsterTest3.positionX = this.monsterTest.positionX - 250;
    this.monsterTest3.positionY = this.monsterTest.positionY + 120;
    this.monsterTest3.area = this.campaignManager.getCampaign().currentArea();
    this.entityHealthBar = new EntityHealthBar(this);
    this.gui.spellBar.setSpellBook(this.playerTest.spellBook);

    this.input.setDefaultCursor('default');

    // Setup inventory test
    this.inventory = new Inventory(this);
    this.input.keyboard!.on('keydown-I', () => this.inventory.visible ? this.inventory.hide() : this.inventory.show());
    this.input.keyboard!.on('keydown-ESC', () => this.inventory.hide());

    const stoneSword = new Item(this, "Stone Sword", ItemType.WEAPON, 1, 2, "stone_sword_inventory", "dropped_sword");
    this.inventory.getItemStorage().addItem(new InventoryItem(this, stoneSword), 0, 0);

    const woodenShield = new Item(this, "Wooden Shield", ItemType.WEAPON, 2, 2, "wooden_shield_inventory", "dropped_shield");
    this.inventory.getItemStorage().autoLoot(new InventoryItem(this, woodenShield));

    const chainmailHood = new Item(this, "Chainmail Hood", ItemType.HELMET, 2, 2, "chainmail_hood_inventory", "dropped_chainmail_hood");
    this.inventory.getItemStorage().autoLoot(new InventoryItem(this, chainmailHood));

    const chainmailGloves = new Item(this, "Chainmail Gloves", ItemType.GLOVES, 2, 2, "chainmail_gloves_inventory", "dropped_chainmail_gloves");
    this.inventory.getItemStorage().autoLoot(new InventoryItem(this, chainmailGloves));

    Tooltip.init(this);
    this.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
      Tooltip.update(pointer);
    });

    // display the Phaser.VERSION
    this.versionText = this.add
      .text(1250, 30, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px'
      })
      .setOrigin(1, 0);

    this.input.on('pointermove', (pointer: Phaser.Input.Pointer) => this.onPointerMove(pointer));
    this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => this.onPointerDown(pointer));

    // let distanceThreshold = 400; //This is the max distance from the object. Any farther and no sound is played.
    // let distanceToObject = Phaser.Math.Distance.Between(player.x, player.y, soundObj.x, soundObj.y);
    // let normalizedSound = 1 - (distanceToObject / distanceThreshold);
    // sound.volume = normalizedSound; turns into sound.volume = Phaser.Math.Easing.Sine.In(normalizedSound);
    this.music = this.sound.add('spinning_rat_power', {
      mute: false,
      volume: 0.9,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0,
      // source of the spatial sound
      source: {
          x: this.monsterTest2.positionX,// - this.cameras.main.width / 2,
          y: this.monsterTest2.positionY,// - this.cameras.main.height / 2,
          z: 0,
          panningModel: 'equalpower',
          distanceModel: 'inverse',
          orientationX: 0,
          orientationY: 0,
          orientationZ: -1,
          refDistance: 1,
          maxDistance: 10000,
          rolloffFactor: 1,
          coneInnerAngle: 360,
          coneOuterAngle: 0,
          coneOuterGain: 0,
          follow: undefined
      }
    }) as Phaser.Sound.WebAudioSound;
    this.music.play();
    this.cameras.main.ignore(
      [
        this.fpsText,
        this.versionText,
        this.mapEditorButton,
        this.gui,
        this.entityHealthBar.graphics,
        this.entityHealthBar.lblEntityName,
        this.entityHealthBar.lblEntityDescription,
        this.inventory
      ]
    );
    // TODO: Find a way to make the ignore list more dynamic
    // var pointLight = this.add.pointlight(this.playerTest.positionX, this.playerTest.positionY, 0x7777aa, 250, 100, 0.005);
    // pointLight.depth = 100;
    this.uiCamera.ignore(
      [
        this.playerTest,
        this.monsterTest,
        this.monsterTest2,
        this.monsterTest3,
        this.playerTest.collider.debugGraphics,
        this.monsterTest.collider.debugGraphics,
        this.monsterTest2.collider.debugGraphics,
        this.monsterTest3.collider.debugGraphics,
        // pointLight
      ]
    );
    let soundManager = SoundManager.getInstance();
    soundManager.scene = this;
    soundManager.playerEntity = this.playerTest;
    EventManager.addObserver(soundManager);
    // EntityManager.instance.setDebugMode(true);
  }

  public update(time: number, deltaTime: number) {
    this.cameras.main.setScroll(
      this.playerTest.positionX - this.cameras.main.width / 2,
      this.playerTest.positionY - this.cameras.main.height / 2
    );
    let directionX = this.playerTest.positionX - this.monsterTest2.positionX;
    let directionY = this.playerTest.positionY - this.monsterTest2.positionY;
    let length = Math.sqrt((directionX * directionX) + (directionY * directionY));
    let normalizedDirectionX = directionX / length;
    let normalizedDirectionY = directionY / length;
    let angle = Math.atan2(normalizedDirectionY, normalizedDirectionX);
    let panningValueX = Math.sin(angle);
    let panningValueY = Math.cos(angle);
    // console.log('panningValueX: ', panningValueX, 'panningValueY: ', panningValueY);
    // this.music.setPan(panningValueX);
    this.music.x = panningValueX;
    this.music.y = panningValueY;
    this.sound.setListenerPosition(this.playerTest.positionX, this.playerTest.positionY);
    // this.sound.setListenerPosition(this.playerTest.positionX - this.cameras.main.width / 2, this.playerTest.positionY - this.cameras.main.height / 2);
    // console.log('Player pos: ', this.playerTest.positionX, this.playerTest.positionY);
    // console.log('Listener pos: ', this.sound.listenerPosition);
    // this.music.x = this.monsterTest2.positionX;
    // this.music.x = this.playerTest.positionX + this.monsterTest2.positionX - this.cameras.main.width / 2;
    // this.music.y = this.monsterTest2.positionY;
    // this.music.y = this.playerTest.positionY + this.monsterTest2.positionY - this.cameras.main.height / 2;
    // console.log('Music pos: ', this.music.x, this.music.y);
    // console.log('----------------------------------------------------------------------');
    window['deltaTime'] = deltaTime;
    this.fpsText.update();
    EntityManager.instance.update(time, deltaTime);
    this.updateGUI();
    this.entityHealthBar.update();
    this.drawDebugTileSet();
    SpellColliderManager.getInstance.update();

    if (this.gameInputs.showGroundItemsKey.isDown) {
      EntityManager.instance.toggleGroundItemsTooltip(true);
    } else {
      EntityManager.instance.toggleGroundItemsTooltip(false);
    }
  }

  public isPointerOnInventory(pointer: Phaser.Input.Pointer): boolean {
    return this.isInventoryOpen() && this.inventory.isPointerOnInventory(pointer);
  }

  public isInventoryOpen(): boolean {
    return this.inventory.visible;
  }

  public isItemPickedUp(): boolean {
    return this.inventory.isItemPickedUp();
  }

  private onPointerMove(pointer: Phaser.Input.Pointer): void {
    if (!this.inventory.wasItemDroppedLastClick())
      this.playerTest.controller.onPointerMove(pointer);
  }

  private onPointerDown(pointer: Phaser.Input.Pointer): void {
    this.inventory.onPointerDown(pointer);

    if (!this.inventory.wasItemDroppedLastClick()) {
      this.playerTest.controller.onPointerDown(pointer);
    }

    const itemEntity: ItemEntity | null = EntityManager.instance.getItemAtPosition(
      pointer.x + this.playerTest.positionX - this.playerTest.scene.cameras.main.width * 0.5, 
      pointer.y + this.playerTest.positionY - this.playerTest.scene.cameras.main.height * 0.5
    );
    if (!itemEntity) {
      return;
    }
    if (MathModule.scaledDistanceBetween(this.playerTest.positionX, this.playerTest.positionY, itemEntity.x, itemEntity.y) < 100) {
      const itemAddedToInventory: boolean = this.inventory.getItemStorage().autoLoot(new InventoryItem(this, itemEntity.item));
      if (itemAddedToInventory) {
        EntityManager.instance.destroyItem(itemEntity);
      }
    }
  }

  private drawDebugTileSet(): void {
    const CURSOR_X = this.pointer.x + this.playerTest.positionX - 640;
    const CURSOR_Y = this.pointer.y + this.playerTest.positionY - 360;

    this.campaignManager.clearDebugTiles();
    this.campaignManager.drawDebugPoint(this.playerTest.positionX, this.playerTest.positionY, TileColor.Player);
    this.campaignManager.drawDebugTile(this.playerTest.positionX, this.playerTest.positionY, TileColor.Player);
    // this.campaignManager.drawDebugProximityTiles(this.playerTest.positionX, this.playerTest.positionY, 8);
    this.campaignManager.drawDebugTile(CURSOR_X, CURSOR_Y, TileColor.DefaultCursor);
    this.campaignManager.drawDebugPathfinding(0, 0, this.playerTest.positionX, this.playerTest.positionY);
  }

  private updateGUI(): void {
    this.gui.manaBar.setCurrentValue(this.playerTest.stats.mana);
    this.gui.manaBar.setMaxValue(this.playerTest.maxMana);
    this.gui.healthBar.setCurrentValue(this.playerTest.stats.health);
    this.gui.healthBar.setMaxValue(this.playerTest.stats.maxHealth);
    this.gui.spellBar.updateSlots();
    this.gui.expBar.setMaxExp(this.playerTest.exp.getLevelExpToMax());
    this.gui.expBar.setCurrentExp(this.playerTest.exp.getcurrentExpToMax());
  }

  public onPlayerDeath(): void {
    this.showDeathScreen();
  }

  public showDeathScreen(): void {
    this.deathScreenBackground = this.add.graphics({ fillStyle: { color: 0x0F0000, alpha: 0.8 } });
    this.deathScreenBackground.fillRect(0, 0, this.sys.game.config.width as number, this.sys.game.config.height as number);

    this.deathScreenText = this.add.text(this.sys.game.config.width as number / 2, this.sys.game.config.height as number / 2, 'You are deader than dead\n Press  \'ESC\' to continue', {
      fontSize: '64px',
      color: '#ff0000',
      fontFamily: 'Doodle'
    });
    this.deathScreenText.setOrigin(0.5, 0.5);
    this.cameras.main.ignore([this.deathScreenBackground, this.deathScreenText]);
  }

  public hideDeathScreen(): void {
    this.deathScreenBackground.clear();
    this.deathScreenText.destroy();
  }
}
