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

export default class MainScene extends Phaser.Scene {
  uiCamera: Phaser.Cameras.Scene2D.Camera;
  fpsText: FpsText;
  versionText: Phaser.GameObjects.Text
  tileSet: TileSet;
  graphics: Phaser.GameObjects.Graphics;
  tileDrawer: TileDrawer;
  pointer: Phaser.Input.Pointer;
  centerPoint: Phaser.Geom.Point;
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
    this.tileSet = new TileSet();
    this.graphics = this.add.graphics();
    this.tileDrawer = new TileDrawer(this.graphics);
    this.pointer = this.input.activePointer;
    this.centerPoint = new Phaser.Geom.Point(
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
    this.playerTest.positionX = this.cameras.main.width / 2;
    this.playerTest.positionY = this.cameras.main.height / 2;
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
  }

  drawTileSet() {
    const playerTilePos = TileSet.getTilePosFromUnitPos(new Phaser.Geom.Point(this.playerTest.positionX, this.playerTest.positionY));

    // Clear previous drawn lines
    this.graphics.clear();

    // Center point
    this.graphics.fillStyle(TileColor.Player, 1);
    this.graphics.fillCircle(this.playerTest.positionX, this.playerTest.positionY, 4);

    // Draw tiles
    const proximityTiles = this.tileSet.getProximityTileList(playerTilePos.x, playerTilePos.y, 8);
    this.tileDrawer.drawDebugTileList(proximityTiles, 2);

    // Draw player tile
    const points = Tile.getPointsFromTilePos(playerTilePos.x, playerTilePos.y);
    this.tileDrawer.drawDebugTilePoints(points, TileColor.Player);

    // Draw cursor tile
    const cursorPos = new Phaser.Geom.Point(
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
