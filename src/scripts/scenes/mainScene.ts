import GameLogo from '../objects/gameLogo'
import FpsText from '../objects/fpsText'
import GUI from '../objects/gui'
import { BaseEntity } from '../entities/baseEntity';
import { ActiveEntity } from '../entities/activeEntity';
import { PlayerEntity } from '../entities/playerEntity';
import { MonsterEntity } from '../entities/monsterEntity';
import { EntityManager } from '../managers/entityManager';
import { OutlinePipeline } from '../pipelines/outlinePipeline';

import { TileColor } from '../tiles/tiledrawer'
import CampaignManager from '../tiles/campaignmanager'
import Point from '../types/point'

export default class MainScene extends Phaser.Scene {
  uiCamera: Phaser.Cameras.Scene2D.Camera;
  fpsText: FpsText;
  versionText: Phaser.GameObjects.Text
  campaignManager: CampaignManager;
  pointer: Phaser.Input.Pointer;
  centerPoint: Point;
  mapEditorButton: Phaser.GameObjects.Text;

  private playerTest: PlayerEntity;
  private monsterTest: MonsterEntity;
  private gui: GUI;

  constructor() {
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

  create() {
    this.uiCamera = this.cameras.add(0, 0, 1280, 720, false, "uiCamera");

    // new GameLogo(this, this.cameras.main.width / 2, this.cameras.main.height / 2);
    this.fpsText = new FpsText(this);
    //this.campaign = new Campaign("Main");
    this.campaignManager = new CampaignManager(this);
    this.campaignManager.loadCampaign('{"name":"Default Campaign","acts":[{"name":"Act I","areas":[{"name":"Default","tileset":{"tiles":[{"x":-3,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":-2,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":-2,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":-2,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":-2,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":-2,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":-1,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":-1,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":-1,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":-1,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":-1,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":0,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":0,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":0,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":0,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":0,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":0,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":0,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":1,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":1,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":1,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":1,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":1,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":2,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":2,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":2,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":2,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":2,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":3,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":5,"transitionName":""},{"x":0,"y":-4,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":0,"y":-5,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":0,"y":-6,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":1,"y":-6,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":2,"y":-6,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":3,"y":-6,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":4,"y":-6,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":5,"y":-6,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":4,"y":-5,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":4,"y":-4,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":3,"y":-4,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":3,"y":-7,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":3,"y":-8,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":2,"y":-8,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":1,"y":-8,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-1,"y":-5,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-2,"y":-5,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-2,"y":-6,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-2,"y":-7,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-2,"y":-8,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-3,"y":-7,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-4,"y":-7,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-4,"y":-6,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-4,"y":-5,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-4,"y":-4,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-5,"y":-5,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-6,"y":-5,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-6,"y":-6,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-6,"y":-7,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-6,"y":-8,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-7,"y":-8,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-8,"y":-8,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-7,"y":-9,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-7,"y":-10,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-6,"y":-10,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-5,"y":-10,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-4,"y":-10,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-4,"y":-9,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-3,"y":-10,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-5,"y":-11,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-5,"y":-12,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-4,"y":-12,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-3,"y":-12,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-2,"y":-12,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-1,"y":-12,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-1,"y":-11,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":0,"y":-11,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":1,"y":-11,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-1,"y":-13,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":0,"y":-13,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":1,"y":-13,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":2,"y":-13,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":3,"y":-13,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":3,"y":-12,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":3,"y":-11,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":4,"y":-11,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":4,"y":-8,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":5,"y":-8,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":5,"y":-9,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":5,"y":-10,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":6,"y":-10,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":4,"y":-13,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":2,"y":-14,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":2,"y":-15,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":3,"y":-15,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":4,"y":-15,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":6,"y":-11,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":6,"y":-12,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":6,"y":-8,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":7,"y":-8,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":8,"y":-8,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":0,"y":-10,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-3,"y":-13,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-3,"y":-14,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-3,"y":-15,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-4,"y":-14,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-5,"y":-14,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-7,"y":-14,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-6,"y":-14,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-7,"y":-13,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-7,"y":-12,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-8,"y":-12,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-9,"y":-11,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-9,"y":-12,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-9,"y":-13,"type":0,"bitmap":"rocky_floor_tiles","frame":12,"transitionName":""},{"x":-4,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":-5,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":-6,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":-7,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":-8,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":-8,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":-8,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":-9,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":-10,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":-10,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":-9,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":-9,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":-10,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":10,"transitionName":""},{"x":0,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":14,"transitionName":""},{"x":0,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":14,"transitionName":""},{"x":-1,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":14,"transitionName":""},{"x":-2,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":14,"transitionName":""},{"x":-2,"y":6,"type":0,"bitmap":"rocky_floor_tiles","frame":14,"transitionName":""},{"x":-2,"y":7,"type":0,"bitmap":"rocky_floor_tiles","frame":14,"transitionName":""},{"x":-1,"y":7,"type":0,"bitmap":"rocky_floor_tiles","frame":14,"transitionName":""},{"x":0,"y":7,"type":0,"bitmap":"rocky_floor_tiles","frame":14,"transitionName":""},{"x":1,"y":7,"type":0,"bitmap":"rocky_floor_tiles","frame":14,"transitionName":""},{"x":2,"y":6,"type":0,"bitmap":"rocky_floor_tiles","frame":14,"transitionName":""},{"x":2,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":14,"transitionName":""},{"x":1,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":14,"transitionName":""},{"x":2,"y":7,"type":0,"bitmap":"rocky_floor_tiles","frame":14,"transitionName":""},{"x":4,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":2,"transitionName":""},{"x":5,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":2,"transitionName":""},{"x":6,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":2,"transitionName":""},{"x":7,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":2,"transitionName":""},{"x":7,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":2,"transitionName":""},{"x":7,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":2,"transitionName":""},{"x":8,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":2,"transitionName":""},{"x":8,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":2,"transitionName":""},{"x":8,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":2,"transitionName":""},{"x":8,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":2,"transitionName":""},{"x":8,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":2,"transitionName":""},{"x":9,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":2,"transitionName":""},{"x":9,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":2,"transitionName":""},{"x":9,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":2,"transitionName":""},{"x":9,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":2,"transitionName":""},{"x":10,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":2,"transitionName":""},{"x":10,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":2,"transitionName":""},{"x":10,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":2,"transitionName":""},{"x":10,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":2,"transitionName":""},{"x":10,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":2,"transitionName":""},{"x":11,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":2,"transitionName":""},{"x":11,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":2,"transitionName":""},{"x":11,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":2,"transitionName":""}]}}],"transitions":[]}]}');

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
      .on('pointerdown', () => this.scene.start('MapEditor'));

    this.input.mouse.disableContextMenu();

    this.gui = new GUI(this, 0, 0);
    this.playerTest = EntityManager.instance.createPlayer(this);
    this.playerTest.positionX = 0;
    this.playerTest.positionY = 0;
    this.monsterTest = EntityManager.instance.createMonster(this, 'zombie_0');
    this.monsterTest.positionX = this.cameras.main.width / 4;
    this.monsterTest.positionY = this.cameras.main.height / 4;
    this.gui.spellBar.setSpellBook(this.playerTest.mySpellBook);

    this.input.setDefaultCursor('default');

    // display the Phaser.VERSION
    this.versionText = this.add
      .text(1250, 30, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px'
      })
      .setOrigin(1, 0);

    // let music: Phaser.Sound.BaseSound;
    // music = this.sound.add('spinning_rat_power', { loop: true});
    // music.play();
    this.cameras.main.ignore(
      [
        this.fpsText,
        this.versionText,
        this.mapEditorButton,
        this.gui,
      ]
    );
    this.uiCamera.ignore([
      this.playerTest,
      this.monsterTest,
    ]);
  }

  update(time: number, deltaTime: number) {
    this.cameras.main.setScroll(
      this.playerTest.positionX - this.cameras.main.width / 2,
      this.playerTest.positionY - this.cameras.main.height / 2
    );

    window['deltaTime'] = deltaTime;
    this.fpsText.update();
    this.playerTest.update(deltaTime);
    this.monsterTest.update(deltaTime);
    this.updateGUI();
    this.drawDebugTileSet();

    // Test pathfinding
  }

  drawDebugTileSet() {
    const CURSOR_X = this.pointer.x + this.playerTest.positionX - 640;
    const CURSOR_Y = this.pointer.y + this.playerTest.positionY - 360;

    this.campaignManager.clearDebugTiles();
    this.campaignManager.drawDebugPoint(this.playerTest.positionX, this.playerTest.positionY, TileColor.Player);
    this.campaignManager.drawDebugTile(this.playerTest.positionX, this.playerTest.positionY, TileColor.Player);
    // this.campaignManager.drawDebugProximityTiles(this.playerTest.positionX, this.playerTest.positionY, 8);
    this.campaignManager.drawDebugTile(CURSOR_X, CURSOR_Y, TileColor.DefaultCursor);
    this.campaignManager.drawDebugPathfinding(0, 0, this.playerTest.positionX, this.playerTest.positionY);
  }

  updateGUI(): void {
    this.gui.manaBar.setCurrentValue(this.playerTest.stats.mana);
    this.gui.manaBar.setMaxValue(this.playerTest.maxMana);
    this.gui.healthBar.setCurrentValue(this.playerTest.stats.health);
    this.gui.healthBar.setMaxValue(this.playerTest.getMaxHealth());
    this.gui.spellBar.updateSlots();
    //ajouter les autres barres
  }
}
