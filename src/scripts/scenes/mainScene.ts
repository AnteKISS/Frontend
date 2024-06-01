import GameLogo from '../objects/gameLogo'
import FpsText from '../objects/fpsText'
import GUI from '../objects/gui'
import { BaseEntity } from '../entities/baseEntity';
import { ActiveEntity } from '../entities/activeEntity';
import { PlayerEntity } from '../entities/playerEntity';
import { MonsterEntity } from '../entities/monsterEntity';
import { EntityManager } from '../managers/entityManager';
import { OutlinePipeline } from '../pipelines/outlinePipeline';

import Tile from '../tiles/tile'
import TileDrawer, { TileColor } from '../tiles/tiledrawer'
import TileSet from '../tiles/tileset'
import Campaign from '../tiles/campaign'
import CampaignSerializer from '../tiles/campaignserializer'
import Pathfinding from '../tiles/pathfinding'
import Point from '../types/point'

export default class MainScene extends Phaser.Scene {
  uiCamera: Phaser.Cameras.Scene2D.Camera;
  fpsText: FpsText;
  versionText: Phaser.GameObjects.Text
  campaign: Campaign;
  graphics: Phaser.GameObjects.Graphics;
  tileDrawer: TileDrawer;
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
    // new GameLogo(this, this.cameras.main.width / 2, this.cameras.main.height / 2);
    this.fpsText = new FpsText(this);
    //this.campaign = new Campaign("Main");
    this.campaign = CampaignSerializer.import('{"name":"Test campaign","acts":[{"name":"New Act","areas":[{"name":"Default","tileset":{"tiles":[{"x":-3,"y":-3,"type":0,"transitionName":""},{"x":-3,"y":-2,"type":0,"transitionName":""},{"x":-3,"y":-1,"type":0,"transitionName":""},{"x":-3,"y":0,"type":0,"transitionName":""},{"x":-2,"y":-3,"type":0,"transitionName":""},{"x":-2,"y":-2,"type":0,"transitionName":""},{"x":-2,"y":-1,"type":0,"transitionName":""},{"x":-2,"y":0,"type":0,"transitionName":""},{"x":-1,"y":-3,"type":0,"transitionName":""},{"x":-1,"y":-2,"type":0,"transitionName":""},{"x":-1,"y":-1,"type":0,"transitionName":""},{"x":-1,"y":0,"type":0,"transitionName":""},{"x":0,"y":-3,"type":0,"transitionName":""},{"x":0,"y":-2,"type":0,"transitionName":""},{"x":0,"y":-1,"type":0,"transitionName":""},{"x":0,"y":0,"type":0,"transitionName":""},{"x":1,"y":-3,"type":0,"transitionName":""},{"x":1,"y":-2,"type":0,"transitionName":""},{"x":1,"y":-1,"type":0,"transitionName":""},{"x":1,"y":0,"type":0,"transitionName":""},{"x":2,"y":-3,"type":0,"transitionName":""},{"x":2,"y":-2,"type":0,"transitionName":""},{"x":2,"y":-1,"type":0,"transitionName":""},{"x":2,"y":0,"type":0,"transitionName":""},{"x":3,"y":-3,"type":0,"transitionName":""},{"x":3,"y":-2,"type":0,"transitionName":""},{"x":3,"y":-1,"type":0,"transitionName":""},{"x":3,"y":0,"type":0,"transitionName":""},{"x":-3,"y":1,"type":0,"transitionName":""},{"x":-2,"y":1,"type":0,"transitionName":""},{"x":-1,"y":1,"type":0,"transitionName":""},{"x":0,"y":1,"type":0,"transitionName":""},{"x":1,"y":1,"type":0,"transitionName":""},{"x":2,"y":1,"type":0,"transitionName":""},{"x":3,"y":1,"type":0,"transitionName":""},{"x":-6,"y":-2,"type":0,"transitionName":""},{"x":-5,"y":-3,"type":0,"transitionName":""},{"x":-5,"y":-2,"type":0,"transitionName":""},{"x":-5,"y":-1,"type":0,"transitionName":""},{"x":-5,"y":0,"type":0,"transitionName":""},{"x":-4,"y":-3,"type":0,"transitionName":""},{"x":-4,"y":-2,"type":0,"transitionName":""},{"x":-4,"y":-1,"type":0,"transitionName":""},{"x":-4,"y":0,"type":0,"transitionName":""},{"x":-3,"y":-5,"type":0,"transitionName":""},{"x":-6,"y":-3,"type":0,"transitionName":""},{"x":-6,"y":-1,"type":0,"transitionName":""},{"x":-6,"y":0,"type":0,"transitionName":""},{"x":-4,"y":-5,"type":0,"transitionName":""},{"x":-4,"y":1,"type":0,"transitionName":""},{"x":-8,"y":-2,"type":0,"transitionName":""},{"x":-5,"y":-5,"type":0,"transitionName":""},{"x":-5,"y":1,"type":0,"transitionName":""},{"x":-9,"y":-2,"type":0,"transitionName":""},{"x":-8,"y":-4,"type":0,"transitionName":""},{"x":-8,"y":-3,"type":0,"transitionName":""},{"x":-8,"y":-1,"type":0,"transitionName":""},{"x":-8,"y":0,"type":0,"transitionName":""},{"x":-6,"y":-5,"type":0,"transitionName":""},{"x":-6,"y":1,"type":0,"transitionName":""},{"x":-9,"y":-1,"type":0,"transitionName":""},{"x":-8,"y":1,"type":0,"transitionName":""},{"x":-7,"y":1,"type":0,"transitionName":""},{"x":-9,"y":-3,"type":0,"transitionName":""},{"x":-9,"y":0,"type":0,"transitionName":""},{"x":-9,"y":1,"type":0,"transitionName":""},{"x":-9,"y":-4,"type":0,"transitionName":""},{"x":-7,"y":-5,"type":0,"transitionName":""},{"x":3,"y":-5,"type":0,"transitionName":""},{"x":4,"y":-3,"type":0,"transitionName":""},{"x":4,"y":-2,"type":0,"transitionName":""},{"x":4,"y":-1,"type":0,"transitionName":""},{"x":4,"y":0,"type":0,"transitionName":""},{"x":5,"y":-2,"type":0,"transitionName":""},{"x":5,"y":-1,"type":0,"transitionName":""},{"x":5,"y":0,"type":0,"transitionName":""},{"x":6,"y":-2,"type":0,"transitionName":""},{"x":4,"y":-5,"type":0,"transitionName":""},{"x":4,"y":1,"type":0,"transitionName":""},{"x":6,"y":-1,"type":0,"transitionName":""},{"x":6,"y":0,"type":0,"transitionName":""},{"x":7,"y":-2,"type":0,"transitionName":""},{"x":5,"y":-5,"type":0,"transitionName":""},{"x":5,"y":1,"type":0,"transitionName":""},{"x":7,"y":-1,"type":0,"transitionName":""},{"x":7,"y":0,"type":0,"transitionName":""},{"x":8,"y":-2,"type":0,"transitionName":""},{"x":6,"y":-5,"type":0,"transitionName":""},{"x":6,"y":1,"type":0,"transitionName":""},{"x":8,"y":-1,"type":0,"transitionName":""},{"x":8,"y":0,"type":0,"transitionName":""},{"x":9,"y":-2,"type":0,"transitionName":""},{"x":6,"y":-6,"type":0,"transitionName":""},{"x":7,"y":-5,"type":0,"transitionName":""},{"x":8,"y":-5,"type":0,"transitionName":""},{"x":9,"y":-3,"type":0,"transitionName":""},{"x":7,"y":1,"type":0,"transitionName":""},{"x":9,"y":-1,"type":0,"transitionName":""},{"x":9,"y":0,"type":0,"transitionName":""},{"x":7,"y":-6,"type":0,"transitionName":""},{"x":9,"y":-5,"type":0,"transitionName":""},{"x":10,"y":-3,"type":0,"transitionName":""},{"x":8,"y":-6,"type":0,"transitionName":""},{"x":10,"y":-5,"type":0,"transitionName":""},{"x":8,"y":1,"type":0,"transitionName":""},{"x":9,"y":1,"type":0,"transitionName":""},{"x":10,"y":-2,"type":0,"transitionName":""},{"x":10,"y":-1,"type":0,"transitionName":""},{"x":10,"y":0,"type":0,"transitionName":""},{"x":11,"y":-4,"type":0,"transitionName":""},{"x":11,"y":-3,"type":0,"transitionName":""},{"x":11,"y":-2,"type":0,"transitionName":""},{"x":11,"y":-1,"type":0,"transitionName":""},{"x":11,"y":0,"type":0,"transitionName":""},{"x":12,"y":-2,"type":0,"transitionName":""},{"x":9,"y":-6,"type":0,"transitionName":""},{"x":11,"y":-5,"type":0,"transitionName":""},{"x":12,"y":-3,"type":0,"transitionName":""},{"x":9,"y":-7,"type":0,"transitionName":""},{"x":10,"y":-6,"type":0,"transitionName":""},{"x":11,"y":-6,"type":0,"transitionName":""},{"x":12,"y":-4,"type":0,"transitionName":""},{"x":8,"y":-7,"type":0,"transitionName":""},{"x":9,"y":-8,"type":0,"transitionName":""},{"x":10,"y":-7,"type":0,"transitionName":""},{"x":11,"y":-7,"type":0,"transitionName":""},{"x":12,"y":-5,"type":0,"transitionName":""},{"x":8,"y":-8,"type":0,"transitionName":""},{"x":9,"y":-9,"type":0,"transitionName":""},{"x":10,"y":-8,"type":0,"transitionName":""},{"x":11,"y":-8,"type":0,"transitionName":""},{"x":12,"y":-6,"type":0,"transitionName":""},{"x":6,"y":-7,"type":0,"transitionName":""},{"x":8,"y":-9,"type":0,"transitionName":""},{"x":9,"y":-10,"type":0,"transitionName":""},{"x":10,"y":-9,"type":0,"transitionName":""},{"x":11,"y":-9,"type":0,"transitionName":""},{"x":12,"y":-7,"type":0,"transitionName":""},{"x":6,"y":-8,"type":0,"transitionName":""},{"x":7,"y":-10,"type":0,"transitionName":""},{"x":8,"y":-10,"type":0,"transitionName":""},{"x":9,"y":-11,"type":0,"transitionName":""},{"x":10,"y":-10,"type":0,"transitionName":""},{"x":11,"y":-10,"type":0,"transitionName":""},{"x":12,"y":-8,"type":0,"transitionName":""},{"x":7,"y":-11,"type":0,"transitionName":""},{"x":8,"y":-11,"type":0,"transitionName":""},{"x":9,"y":-12,"type":0,"transitionName":""},{"x":10,"y":-11,"type":0,"transitionName":""},{"x":11,"y":-11,"type":0,"transitionName":""},{"x":12,"y":-9,"type":0,"transitionName":""},{"x":6,"y":-10,"type":0,"transitionName":""},{"x":7,"y":-12,"type":0,"transitionName":""},{"x":8,"y":-12,"type":0,"transitionName":""},{"x":9,"y":-13,"type":0,"transitionName":""},{"x":10,"y":-12,"type":0,"transitionName":""},{"x":11,"y":-12,"type":0,"transitionName":""},{"x":12,"y":-10,"type":0,"transitionName":""},{"x":5,"y":-10,"type":0,"transitionName":""},{"x":6,"y":-11,"type":0,"transitionName":""},{"x":8,"y":-13,"type":0,"transitionName":""},{"x":5,"y":-11,"type":0,"transitionName":""},{"x":6,"y":-13,"type":0,"transitionName":""},{"x":7,"y":-13,"type":0,"transitionName":""},{"x":8,"y":-14,"type":0,"transitionName":""},{"x":10,"y":-13,"type":0,"transitionName":""},{"x":4,"y":-11,"type":0,"transitionName":""},{"x":5,"y":-13,"type":0,"transitionName":""},{"x":7,"y":-14,"type":0,"transitionName":""},{"x":5,"y":-14,"type":0,"transitionName":""},{"x":6,"y":-14,"type":0,"transitionName":""},{"x":7,"y":-15,"type":0,"transitionName":""},{"x":9,"y":-14,"type":0,"transitionName":""},{"x":4,"y":-13,"type":0,"transitionName":""},{"x":4,"y":-10,"type":0,"transitionName":""},{"x":2,"y":-10,"type":0,"transitionName":""},{"x":3,"y":-10,"type":0,"transitionName":""},{"x":3,"y":-9,"type":0,"transitionName":""},{"x":3,"y":-8,"type":0,"transitionName":""},{"x":2,"y":-12,"type":0,"transitionName":""},{"x":2,"y":-11,"type":0,"transitionName":""},{"x":2,"y":-9,"type":0,"transitionName":""},{"x":2,"y":-8,"type":0,"transitionName":""},{"x":1,"y":-9,"type":0,"transitionName":""},{"x":2,"y":-7,"type":0,"transitionName":""},{"x":3,"y":-7,"type":0,"transitionName":""},{"x":1,"y":-8,"type":0,"transitionName":""},{"x":1,"y":-7,"type":0,"transitionName":""},{"x":1,"y":-6,"type":0,"transitionName":""},{"x":5,"y":-6,"type":0,"transitionName":""},{"x":0,"y":-9,"type":0,"transitionName":""},{"x":0,"y":-7,"type":0,"transitionName":""},{"x":0,"y":-6,"type":0,"transitionName":""},{"x":2,"y":-5,"type":0,"transitionName":""},{"x":-2,"y":-7,"type":0,"transitionName":""},{"x":-1,"y":-9,"type":0,"transitionName":""},{"x":-1,"y":-7,"type":0,"transitionName":""},{"x":-1,"y":-6,"type":0,"transitionName":""},{"x":-1,"y":-5,"type":0,"transitionName":""},{"x":0,"y":-5,"type":0,"transitionName":""},{"x":1,"y":-5,"type":0,"transitionName":""},{"x":-3,"y":-7,"type":0,"transitionName":""},{"x":-2,"y":-9,"type":0,"transitionName":""},{"x":-2,"y":-6,"type":0,"transitionName":""},{"x":-2,"y":-5,"type":0,"transitionName":""},{"x":-3,"y":-9,"type":0,"transitionName":""},{"x":-3,"y":-6,"type":0,"transitionName":""},{"x":-5,"y":-6,"type":0,"transitionName":""},{"x":-5,"y":-7,"type":0,"transitionName":""},{"x":-4,"y":-9,"type":0,"transitionName":""},{"x":-6,"y":-7,"type":0,"transitionName":""},{"x":-5,"y":-9,"type":0,"transitionName":""},{"x":-5,"y":-8,"type":0,"transitionName":""},{"x":-3,"y":-10,"type":0,"transitionName":""},{"x":-4,"y":-10,"type":0,"transitionName":""},{"x":-2,"y":-11,"type":0,"transitionName":""},{"x":-4,"y":-11,"type":0,"transitionName":""},{"x":-3,"y":-11,"type":0,"transitionName":""},{"x":-1,"y":-11,"type":0,"transitionName":""},{"x":0,"y":-11,"type":0,"transitionName":""},{"x":-3,"y":-12,"type":0,"transitionName":""},{"x":-1,"y":-13,"type":0,"transitionName":""},{"x":0,"y":-13,"type":0,"transitionName":""},{"x":1,"y":-13,"type":0,"transitionName":""},{"x":2,"y":-13,"type":0,"transitionName":""},{"x":3,"y":-13,"type":0,"transitionName":""},{"x":-6,"y":-6,"type":0,"transitionName":""},{"x":-7,"y":-6,"type":0,"transitionName":""},{"x":-8,"y":-5,"type":0,"transitionName":""},{"x":-7,"y":-7,"type":0,"transitionName":""},{"x":-8,"y":-6,"type":0,"transitionName":""},{"x":-7,"y":-8,"type":0,"transitionName":""},{"x":-6,"y":-8,"type":0,"transitionName":""},{"x":-8,"y":-7,"type":0,"transitionName":""},{"x":-7,"y":-9,"type":0,"transitionName":""},{"x":-6,"y":-9,"type":0,"transitionName":""},{"x":-5,"y":-10,"type":0,"transitionName":""},{"x":-8,"y":-8,"type":0,"transitionName":""},{"x":-7,"y":-10,"type":0,"transitionName":""},{"x":-6,"y":-10,"type":0,"transitionName":""},{"x":-5,"y":-11,"type":0,"transitionName":""},{"x":-9,"y":-7,"type":0,"transitionName":""},{"x":-8,"y":-9,"type":0,"transitionName":""},{"x":-9,"y":-6,"type":0,"transitionName":""},{"x":-9,"y":-5,"type":0,"transitionName":""},{"x":-7,"y":-11,"type":0,"transitionName":""},{"x":-6,"y":-11,"type":0,"transitionName":""},{"x":-5,"y":-12,"type":0,"transitionName":""},{"x":-8,"y":-10,"type":0,"transitionName":""},{"x":-7,"y":-12,"type":0,"transitionName":""},{"x":-6,"y":-12,"type":0,"transitionName":""},{"x":-5,"y":-13,"type":0,"transitionName":""},{"x":-4,"y":-12,"type":0,"transitionName":""},{"x":-9,"y":-8,"type":0,"transitionName":""},{"x":-9,"y":-9,"type":0,"transitionName":""},{"x":-8,"y":-11,"type":0,"transitionName":""},{"x":-9,"y":-10,"type":0,"transitionName":""},{"x":-8,"y":-12,"type":0,"transitionName":""},{"x":-6,"y":-13,"type":0,"transitionName":""},{"x":-7,"y":-13,"type":0,"transitionName":""},{"x":-5,"y":-14,"type":0,"transitionName":""},{"x":-4,"y":-13,"type":0,"transitionName":""},{"x":-3,"y":-13,"type":0,"transitionName":""},{"x":-7,"y":-14,"type":0,"transitionName":""},{"x":-6,"y":-14,"type":0,"transitionName":""},{"x":-5,"y":-15,"type":0,"transitionName":""},{"x":-4,"y":-14,"type":0,"transitionName":""},{"x":-3,"y":-14,"type":0,"transitionName":""},{"x":-4,"y":-15,"type":0,"transitionName":""},{"x":-2,"y":-14,"type":0,"transitionName":""},{"x":-2,"y":-13,"type":0,"transitionName":""},{"x":-3,"y":-15,"type":0,"transitionName":""},{"x":-1,"y":-14,"type":0,"transitionName":""},{"x":-2,"y":-15,"type":0,"transitionName":""},{"x":0,"y":-14,"type":0,"transitionName":""},{"x":-2,"y":-16,"type":0,"transitionName":""},{"x":-1,"y":-15,"type":0,"transitionName":""},{"x":0,"y":-15,"type":0,"transitionName":""},{"x":-1,"y":-16,"type":0,"transitionName":""},{"x":1,"y":-15,"type":0,"transitionName":""},{"x":1,"y":-14,"type":0,"transitionName":""},{"x":0,"y":-16,"type":0,"transitionName":""},{"x":2,"y":-15,"type":0,"transitionName":""},{"x":2,"y":-14,"type":0,"transitionName":""},{"x":1,"y":-16,"type":0,"transitionName":""},{"x":3,"y":-15,"type":0,"transitionName":""},{"x":3,"y":-14,"type":0,"transitionName":""},{"x":2,"y":-16,"type":0,"transitionName":""},{"x":4,"y":-15,"type":0,"transitionName":""},{"x":4,"y":-14,"type":0,"transitionName":""},{"x":3,"y":-16,"type":0,"transitionName":""},{"x":5,"y":-15,"type":0,"transitionName":""},{"x":4,"y":-16,"type":0,"transitionName":""},{"x":6,"y":-15,"type":0,"transitionName":""},{"x":5,"y":-16,"type":0,"transitionName":""},{"x":6,"y":-16,"type":0,"transitionName":""},{"x":8,"y":-15,"type":0,"transitionName":""},{"x":10,"y":-14,"type":0,"transitionName":""},{"x":9,"y":-15,"type":0,"transitionName":""},{"x":11,"y":-14,"type":0,"transitionName":""},{"x":11,"y":-13,"type":0,"transitionName":""},{"x":12,"y":-12,"type":0,"transitionName":""},{"x":12,"y":-13,"type":0,"transitionName":""},{"x":10,"y":1,"type":0,"transitionName":""},{"x":11,"y":1,"type":0,"transitionName":""},{"x":12,"y":1,"type":0,"transitionName":""},{"x":12,"y":0,"type":0,"transitionName":""},{"x":12,"y":-1,"type":0,"transitionName":""},{"x":12,"y":-11,"type":0,"transitionName":""},{"x":-9,"y":-11,"type":0,"transitionName":""},{"x":-9,"y":-12,"type":0,"transitionName":""},{"x":-9,"y":-13,"type":0,"transitionName":""},{"x":-8,"y":-13,"type":0,"transitionName":""},{"x":-8,"y":-14,"type":0,"transitionName":""},{"x":-8,"y":-15,"type":0,"transitionName":""},{"x":-7,"y":-15,"type":0,"transitionName":""},{"x":-6,"y":-15,"type":0,"transitionName":""},{"x":-4,"y":-16,"type":0,"transitionName":""},{"x":-3,"y":-16,"type":0,"transitionName":""},{"x":-5,"y":-16,"type":0,"transitionName":""},{"x":-6,"y":-16,"type":0,"transitionName":""},{"x":-7,"y":-16,"type":0,"transitionName":""},{"x":-8,"y":-16,"type":0,"transitionName":""},{"x":-9,"y":-15,"type":0,"transitionName":""},{"x":-9,"y":-14,"type":0,"transitionName":""},{"x":-9,"y":-16,"type":0,"transitionName":""},{"x":7,"y":-16,"type":0,"transitionName":""},{"x":8,"y":-16,"type":0,"transitionName":""},{"x":9,"y":-16,"type":0,"transitionName":""},{"x":10,"y":-16,"type":0,"transitionName":""},{"x":11,"y":-16,"type":0,"transitionName":""},{"x":12,"y":-16,"type":0,"transitionName":""},{"x":12,"y":-15,"type":0,"transitionName":""},{"x":12,"y":-14,"type":0,"transitionName":""},{"x":11,"y":-15,"type":0,"transitionName":""},{"x":10,"y":-15,"type":0,"transitionName":""},{"x":8,"y":-3,"type":0,"transitionName":""},{"x":7,"y":-3,"type":0,"transitionName":""},{"x":6,"y":-3,"type":0,"transitionName":""},{"x":5,"y":-3,"type":0,"transitionName":""},{"x":5,"y":-7,"type":0,"transitionName":""},{"x":5,"y":-8,"type":0,"transitionName":""},{"x":5,"y":-9,"type":0,"transitionName":""},{"x":-7,"y":0,"type":0,"transitionName":""},{"x":-7,"y":-1,"type":0,"transitionName":""}]}}],"transitions":[]}]}');
    this.graphics = this.add.graphics();
    this.tileDrawer = new TileDrawer(this.graphics);
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
      .on('pointerdown', () => { this.scene.start('MapEditor'); });

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
    this.uiCamera = this.cameras.add(0, 0, 1280, 720, false, "uiCamera");
    this.uiCamera.ignore([
      this.graphics,
      this.playerTest,
      this.monsterTest,
    ]);
  }

  update(time, deltaTime) {
    this.cameras.main.setScroll(
      this.playerTest.positionX - this.cameras.main.width / 2,
      this.playerTest.positionY - this.cameras.main.height / 2
    );

    window['deltaTime'] = deltaTime;
    this.fpsText.update();
    this.playerTest.update(deltaTime);
    this.monsterTest.update(deltaTime);
    this.updateGUI();
    this.drawTileSet();

    // Test pathfinding
    console.time("Pathfinding");
    const playerTile = TileSet.getTilePosFromUnitPos(new Point(this.playerTest.positionX, this.playerTest.positionY));
    const path = Pathfinding.findPath(this.campaign.currentArea().tileSet, 0, 0, playerTile.x, playerTile.y);
    this.tileDrawer.drawDebugTilePosList(path, 2, 0x000000);
    console.timeEnd("Pathfinding");
  }

  drawTileSet() {
    const playerTilePos = TileSet.getTilePosFromUnitPos(new Point(this.playerTest.positionX, this.playerTest.positionY));

    // Clear previous drawn lines
    this.graphics.clear();

    // Center point
    this.graphics.fillStyle(TileColor.Player, 1);
    this.graphics.fillCircle(this.playerTest.positionX, this.playerTest.positionY, 4);

    // Draw tiles
    const proximityTiles = this.campaign.currentArea().tileSet.getProximityTileList(playerTilePos.x, playerTilePos.y, 8);
    this.tileDrawer.drawDebugTileList(proximityTiles, 2);

    // Draw player tile
    const points = Tile.getPointsFromTilePos(playerTilePos.x, playerTilePos.y);
    this.tileDrawer.drawDebugTilePoints(points, TileColor.Player);

    // Draw cursor tile
    const cursorPos = new Point(
      this.pointer.x - this.centerPoint.x + this.playerTest.positionX,
      this.pointer.y - this.centerPoint.y + this.playerTest.positionY
    );
    const cursorTilePos = TileSet.getTilePosFromUnitPos(cursorPos)
    const cursorTilePoints = Tile.getPointsFromTilePos(cursorTilePos.x, cursorTilePos.y);
    this.tileDrawer.drawDebugTilePoints(cursorTilePoints, TileColor.DefaultCursor);
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
