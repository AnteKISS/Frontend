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

export default class MainScene extends Phaser.Scene {
  uiCamera: Phaser.Cameras.Scene2D.Camera;
  fpsText: FpsText;
  versionText: Phaser.GameObjects.Text
  campaignManager: CampaignManager;
  pointer: Phaser.Input.Pointer;
  centerPoint: Point;
  mapEditorButton: Phaser.GameObjects.Text;
  spellSpriteColliders: SpellCollider[] = [];

  private playerTest: PlayerEntity;
  private monsterTest: MonsterEntity;
  private monsterTest2: MonsterEntity;
  private monsterTest3: MonsterEntity;
  private entityHealthBar: EntityHealthBar;
  private gui: GUI;

  private inventory: Inventory;

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
    this.fpsText = new FpsText(this);
    this.uiCamera = this.cameras.add(0, 0, 1280, 720, false, "uiCamera");

    // new GameLogo(this, this.cameras.main.width / 2, this.cameras.main.height / 2);
    this.fpsText = new FpsText(this);
    //this.campaign = new Campaign("Main");
    this.campaignManager = new CampaignManager(this);
    this.campaignManager.loadCampaign('{"name":"Default Campaign","acts":[{"name":"Act I","areas":[{"name":"Area 1","tileset":{"tiles":[{"x":-3,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-3,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-3,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-3,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-3,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-3,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-3,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-2,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-2,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-2,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-2,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-2,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-2,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-2,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-1,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-1,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-1,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-1,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-1,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-1,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-1,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":0,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":0,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":0,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":0,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":0,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":0,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":0,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":1,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":1,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":1,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":1,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":1,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":1,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":1,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":2,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":2,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":2,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":2,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":2,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":2,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":2,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":3,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":3,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":3,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":3,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":3,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":3,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":3,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-1,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":0,"transitionName":""},{"x":0,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":0,"transitionName":""},{"x":1,"y":4,"type":0,"bitmap":"rocky_floor_tiles","frame":0,"transitionName":""},{"x":-1,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":0,"transitionName":"Area 2"},{"x":0,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":0,"transitionName":"Area 2"},{"x":1,"y":5,"type":0,"bitmap":"rocky_floor_tiles","frame":0,"transitionName":"Area 2"},{"x":-1,"y":6,"type":0,"bitmap":"rocky_floor_tiles","frame":0,"transitionName":"Area 2"},{"x":0,"y":6,"type":0,"bitmap":"rocky_floor_tiles","frame":0,"transitionName":"Area 2"},{"x":1,"y":6,"type":0,"bitmap":"rocky_floor_tiles","frame":0,"transitionName":"Area 2"}]}},{"name":"Area 2","tileset":{"tiles":[{"x":-3,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-3,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-3,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-3,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-3,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-3,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-3,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-2,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-2,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-2,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-2,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-2,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-2,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-2,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-1,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-1,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-1,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-1,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-1,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-1,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-1,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":0,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":0,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":0,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":0,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":0,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":0,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":0,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":1,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":1,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":1,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":1,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":1,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":1,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":1,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":2,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":2,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":2,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":2,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":2,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":2,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":2,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":3,"y":-3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":3,"y":-2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":3,"y":-1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":3,"y":0,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":3,"y":1,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":3,"y":2,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":3,"y":3,"type":0,"bitmap":"rocky_floor_tiles","frame":8,"transitionName":""},{"x":-1,"y":-4,"type":0,"bitmap":"rocky_floor_tiles","frame":0,"transitionName":""},{"x":1,"y":-4,"type":0,"bitmap":"rocky_floor_tiles","frame":0,"transitionName":""},{"x":0,"y":-4,"type":0,"bitmap":"rocky_floor_tiles","frame":0,"transitionName":""},{"x":-1,"y":-5,"type":0,"bitmap":"rocky_floor_tiles","frame":0,"transitionName":"Area 1"},{"x":0,"y":-5,"type":0,"bitmap":"rocky_floor_tiles","frame":0,"transitionName":"Area 1"},{"x":1,"y":-5,"type":0,"bitmap":"rocky_floor_tiles","frame":0,"transitionName":"Area 1"},{"x":0,"y":-6,"type":0,"bitmap":"rocky_floor_tiles","frame":0,"transitionName":"Area 1"},{"x":-1,"y":-6,"type":0,"bitmap":"rocky_floor_tiles","frame":0,"transitionName":"Area 1"},{"x":1,"y":-6,"type":0,"bitmap":"rocky_floor_tiles","frame":0,"transitionName":"Area 1"}]}}],"transitions":[{"name":"Area 2","areaName":"Area 2","targetX":0,"targetY":0},{"name":"Area 1","areaName":"Area 1","targetX":3,"targetY":3}]}]}');
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
    this.monsterTest2.positionX = this.monsterTest.positionX;
    this.monsterTest2.positionY = this.monsterTest.positionY - 60;
    this.monsterTest2.stats.movementSpeed = 150;
    this.monsterTest2.area = this.campaignManager.getCampaign().currentArea();
    this.monsterTest3 = EntityManager.instance.createMonster(this, 'skeleton_0');
    this.monsterTest3.name = 'Skeletenotaur';
    this.monsterTest3.positionX = this.monsterTest.positionX - 250;
    this.monsterTest3.positionY = this.monsterTest.positionY + 120;
    this.monsterTest3.area = this.campaignManager.getCampaign().currentArea();
    this.entityHealthBar = new EntityHealthBar(this);
    // this.entityHealthBar.entity = this.monsterTest;
    this.gui.spellBar.setSpellBook(this.playerTest.mySpellBook);

    this.input.setDefaultCursor('default');

    // Setup inventory test
    this.inventory = new Inventory(this);
    this.input.keyboard.on('keydown-I', () => this.inventory.show());
    this.input.keyboard.on('keydown-ESC', () => this.inventory.hide());

    const stoneSword = new Item(this, "Stone Sword", ItemType.WEAPON, 1, 2, "stone_sword_inventory", "dropped_sword");
    this.inventory.getItemStorage().addItem(new InventoryItem(this, stoneSword), 0, 0);

    const woodenShield = new Item(this, "Wooden Shield", ItemType.WEAPON, 2, 2, "wooden_shield_inventory", "dropped_shield");
    this.inventory.getItemStorage().autoLoot(new InventoryItem(this, woodenShield));

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

    // let music: Phaser.Sound.BaseSound;
    // music = this.sound.add('spinning_rat_power', { loop: true});
    // music.play();
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
      ]
    );
    // EntityManager.instance.setDebugMode(true);
  }

  public update(time: number, deltaTime: number) {
    this.cameras.main.setScroll(
      this.playerTest.positionX - this.cameras.main.width / 2,
      this.playerTest.positionY - this.cameras.main.height / 2
    );

    window['deltaTime'] = deltaTime;
    this.fpsText.update();
    this.playerTest.update(time, deltaTime);
    this.monsterTest.update(time, deltaTime);
    this.monsterTest2.update(time, deltaTime);
    this.monsterTest3.update(time, deltaTime);
    this.updateGUI();
    this.entityHealthBar.update();
    this.drawDebugTileSet();
    SpellColliderManager.getInstance.update();
  }

  public isInventoryOpen(): boolean {
    return this.inventory.visible;
  }

  public isItemPickedUp(): boolean {
    return this.inventory.isItemPickedUp();
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
    let background = this.add.graphics({ fillStyle: { color: 0x0F0000, alpha: 0.8 } });
    background.fillRect(0, 0, this.sys.game.config.width as number, this.sys.game.config.height as number);

    let deathText = this.add.text(this.sys.game.config.width as number / 2, this.sys.game.config.height as number / 2, 'You are deader than dead\n Press  \'ESC\' to continue', {
      fontSize: '64px',
      color: '#ff0000',
      fontFamily: 'Doodle'
    });
    deathText.setOrigin(0.5, 0.5);
    this.cameras.main.ignore([background, deathText]);
  }
}
