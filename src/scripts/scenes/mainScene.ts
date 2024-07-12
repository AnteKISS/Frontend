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
import CampaignManager from '../managers/campaignmanager'
import Point from '../types/point'
import { EntityHealthBar } from '../uielements/entityHealthBar';
import { SignalHandler } from '../events/signal';
import Tooltip from '../label/tooltip'
import { SpellCollider } from '../physics/spellCollider';
import { SpellColliderManager } from '../managers/spellColliderManager'
import { ActiveEntity } from '../entities/activeEntity'
import { AttributeGUI } from '../progression/attributeGUI'
import { AttributeAllocation } from '../progression/attributeAllocation'

export default class MainScene extends Phaser.Scene {
  uiCamera: Phaser.Cameras.Scene2D.Camera;
  fpsText: FpsText;
  versionText: Phaser.GameObjects.Text
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

  private attributeGUI: AttributeGUI;

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
    CampaignManager.init(this);
    CampaignManager.getInstance().loadCampaign('{"name":"Default Campaign","acts":[{"name":"Act I","areas":[{"name":"Default","gameObjects":[["Tile",-4,0,"rocky_floor_tiles",0,null],["Tile",-3,-2,"rocky_floor_tiles",0,null],["Tile",-3,-1,"rocky_floor_tiles",0,null],["Tile",-3,0,"rocky_floor_tiles",0,null],["Tile",-3,1,"rocky_floor_tiles",0,null],["Tile",-3,2,"rocky_floor_tiles",0,null],["Tile",-2,-3,"rocky_floor_tiles",0,null],["Tile",-2,-2,"rocky_floor_tiles",0,null],["Tile",-2,-1,"rocky_floor_tiles",0,null],["Tile",-2,0,"rocky_floor_tiles",0,null],["Tile",-2,1,"rocky_floor_tiles",0,null],["Tile",-2,2,"rocky_floor_tiles",0,null],["Tile",-2,3,"rocky_floor_tiles",0,null],["Tile",-1,-3,"rocky_floor_tiles",0,null],["Tile",-1,-2,"rocky_floor_tiles",0,null],["Tile",-1,-1,"rocky_floor_tiles",0,null],["Tile",-1,0,"rocky_floor_tiles",0,null],["Tile",-1,1,"rocky_floor_tiles",0,null],["Tile",-1,2,"rocky_floor_tiles",0,null],["Tile",-1,3,"rocky_floor_tiles",0,null],["Tile",0,-4,"rocky_floor_tiles",0,null],["Tile",0,-3,"rocky_floor_tiles",0,null],["Tile",0,-2,"rocky_floor_tiles",0,null],["Tile",0,-1,"rocky_floor_tiles",0,null],["Tile",0,0,"rocky_floor_tiles",0,null],["Tile",0,1,"rocky_floor_tiles",0,null],["Tile",0,2,"rocky_floor_tiles",0,null],["Tile",0,3,"rocky_floor_tiles",0,null],["Tile",0,4,"rocky_floor_tiles",0,null],["Tile",1,-3,"rocky_floor_tiles",0,null],["Tile",1,-2,"rocky_floor_tiles",0,null],["Tile",1,-1,"rocky_floor_tiles",0,null],["Tile",1,0,"rocky_floor_tiles",0,null],["Tile",1,1,"rocky_floor_tiles",0,null],["Tile",1,2,"rocky_floor_tiles",0,null],["Tile",1,3,"rocky_floor_tiles",0,null],["Tile",2,-3,"rocky_floor_tiles",0,null],["Tile",2,-2,"rocky_floor_tiles",0,null],["Tile",2,-1,"rocky_floor_tiles",0,null],["Tile",2,0,"rocky_floor_tiles",0,null],["Tile",2,1,"rocky_floor_tiles",0,null],["Tile",2,2,"rocky_floor_tiles",0,null],["Tile",2,3,"rocky_floor_tiles",0,null],["Tile",3,-2,"rocky_floor_tiles",0,null],["Tile",3,-1,"rocky_floor_tiles",0,null],["Tile",3,0,"rocky_floor_tiles",0,null],["Tile",3,1,"rocky_floor_tiles",0,null],["Tile",3,2,"rocky_floor_tiles",0,null],["Tile",4,0,"rocky_floor_tiles",0,null],["Tile",-1,4,"rocky_floor_tiles",0,null],["Tile",0,5,"rocky_floor_tiles",0,null],["Tile",1,4,"rocky_floor_tiles",0,null],["Tile",-1,5,"rocky_floor_tiles",0,null],["Tile",0,6,"rocky_floor_tiles",0,null],["Tile",1,5,"rocky_floor_tiles",0,null],["Tile",1,6,"rocky_floor_tiles",0,null],["Tile",-1,6,"rocky_floor_tiles",0,null],["Tile",0,7,"rocky_floor_tiles",0,"test"],["Tile",-1,7,"rocky_floor_tiles",0,"test"],["Tile",0,8,"rocky_floor_tiles",0,"test"],["Tile",1,7,"rocky_floor_tiles",0,"test"],["Tile",-1,8,"rocky_floor_tiles",0,"test"],["Tile",1,8,"rocky_floor_tiles",0,"test"]]},{"name":"New Area","gameObjects":[["Tile",-3,7,"rocky_floor_tiles",0,null],["Tile",-2,5,"rocky_floor_tiles",0,null],["Tile",-2,6,"rocky_floor_tiles",0,null],["Tile",-2,7,"rocky_floor_tiles",0,null],["Tile",-2,8,"rocky_floor_tiles",0,null],["Tile",-2,9,"rocky_floor_tiles",0,null],["Tile",-1,5,"rocky_floor_tiles",0,null],["Tile",-1,6,"rocky_floor_tiles",0,null],["Tile",-1,7,"rocky_floor_tiles",0,null],["Tile",-1,8,"rocky_floor_tiles",0,null],["Tile",-1,9,"rocky_floor_tiles",0,null],["Tile",0,4,"rocky_floor_tiles",0,null],["Tile",0,5,"rocky_floor_tiles",0,null],["Tile",0,6,"rocky_floor_tiles",0,null],["Tile",0,7,"rocky_floor_tiles",0,null],["Tile",0,8,"rocky_floor_tiles",0,null],["Tile",0,9,"rocky_floor_tiles",0,null],["Tile",0,10,"rocky_floor_tiles",0,null],["Tile",1,5,"rocky_floor_tiles",0,null],["Tile",1,6,"rocky_floor_tiles",0,null],["Tile",1,7,"rocky_floor_tiles",0,null],["Tile",1,8,"rocky_floor_tiles",0,null],["Tile",1,9,"rocky_floor_tiles",0,null],["Tile",2,5,"rocky_floor_tiles",0,null],["Tile",2,6,"rocky_floor_tiles",0,null],["Tile",2,7,"rocky_floor_tiles",0,null],["Tile",2,8,"rocky_floor_tiles",0,null],["Tile",2,9,"rocky_floor_tiles",0,null],["Tile",3,7,"rocky_floor_tiles",0,null],["Tile",-1,4,"rocky_floor_tiles",0,null],["Tile",0,3,"rocky_floor_tiles",0,null],["Tile",1,4,"rocky_floor_tiles",0,null],["Tile",-1,3,"rocky_floor_tiles",0,null],["Tile",0,2,"rocky_floor_tiles",0,null],["Tile",1,3,"rocky_floor_tiles",0,null],["Tile",-1,2,"rocky_floor_tiles",0,null],["Tile",0,1,"rocky_floor_tiles",0,null],["Tile",1,2,"rocky_floor_tiles",0,null],["Tile",-1,1,"rocky_floor_tiles",0,null],["Tile",0,0,"rocky_floor_tiles",0,null],["Tile",1,1,"rocky_floor_tiles",0,null],["Tile",-1,0,"rocky_floor_tiles",0,null],["Tile",0,-1,"rocky_floor_tiles",0,null],["Tile",1,0,"rocky_floor_tiles",0,null],["Tile",-1,-1,"rocky_floor_tiles",0,null],["Tile",0,-2,"rocky_floor_tiles",0,"back"],["Tile",1,-1,"rocky_floor_tiles",0,null],["Tile",-1,-2,"rocky_floor_tiles",0,"back"],["Tile",1,-2,"rocky_floor_tiles",0,"back"],["Tile",-1,-3,"rocky_floor_tiles",0,"back"],["Tile",0,-3,"rocky_floor_tiles",0,"back"],["Tile",1,-3,"rocky_floor_tiles",0,"back"]]}],"transitions":[{"name":"test","areaName":"New Area","targetX":0,"targetY":0},{"name":"back","areaName":"Default","targetX":0,"targetY":0}]}]}');

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

    this.gui = new GUI(this, 0, 0);
    this.playerTest = EntityManager.instance.createPlayer(this);
    this.playerTest.positionX = 0;
    this.playerTest.positionY = 0;
    this.playerTest.area = CampaignManager.getInstance().getCampaign().currentArea();

    const playerDeathHandler: SignalHandler = {
      callback: this.onPlayerDeath.bind(this),
      parameters: []
    }
    this.playerTest.onPlayerDeath.addHandler(playerDeathHandler);

    this.monsterTest = EntityManager.instance.createMonster(this, 'zombie_0');
    this.monsterTest.name = 'Zembie';
    this.monsterTest.positionX = this.cameras.main.width / 4;
    this.monsterTest.positionY = this.cameras.main.height / 4;
    this.monsterTest.area = CampaignManager.getInstance().getCampaign().currentArea();
    this.monsterTest2 = EntityManager.instance.createMonster(this, 'minotaur_0');
    this.monsterTest2.name = 'Menotaur';
    this.monsterTest2.positionX = this.monsterTest.positionX;
    this.monsterTest2.positionY = this.monsterTest.positionY - 60;
    this.monsterTest2.stats.movementSpeed = 150;
    this.monsterTest2.area = CampaignManager.getInstance().getCampaign().currentArea();
    this.monsterTest3 = EntityManager.instance.createMonster(this, 'skeleton_0');
    this.monsterTest3.name = 'Skeletenotaur';
    this.monsterTest3.positionX = this.monsterTest.positionX - 250;
    this.monsterTest3.positionY = this.monsterTest.positionY + 120;
    this.monsterTest3.area = CampaignManager.getInstance().getCampaign().currentArea();
    this.entityHealthBar = new EntityHealthBar(this);
    // this.entityHealthBar.entity = this.monsterTest;
    this.gui.spellBar.setSpellBook(this.playerTest.mySpellBook);

    this.input.setDefaultCursor('default');

    //Setup Attribute Allocation Panel
    this.attributeGUI = new AttributeGUI(this, this.playerTest.attributeAllocation);

    this.input.keyboard?.on('keydown-A', () => this.attributeGUI.aKeyPressed());
    this.input.keyboard?.on('keydown-ESC', () => this.attributeGUI.hide());

    // Setup inventory test
    this.inventory = new Inventory(this);
    this.input.keyboard?.on('keydown-I', () => this.inventory.show());
    this.input.keyboard?.on('keydown-ESC', () => this.inventory.hide());

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
        this.inventory,
        this.attributeGUI
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
    EntityManager.instance.update(time, deltaTime);
    this.updateGUI();
    this.entityHealthBar.update();
    // this.drawDebugTileSet();
    this.attributeGUI.update();
    SpellColliderManager.getInstance.update();
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

    if (!this.inventory.wasItemDroppedLastClick())
      this.playerTest.controller.onPointerDown(pointer);
  }

  private drawDebugTileSet(): void {
    const CURSOR_X = this.pointer.x + this.playerTest.positionX - 640;
    const CURSOR_Y = this.pointer.y + this.playerTest.positionY - 360;

    CampaignManager.getInstance().clearDebugTiles();
    CampaignManager.getInstance().drawDebugPoint(this.playerTest.positionX, this.playerTest.positionY, TileColor.Player);
    CampaignManager.getInstance().drawDebugTile(this.playerTest.positionX, this.playerTest.positionY, TileColor.Player);
    // CampaignManager.getInstance().drawDebugProximityTiles(this.playerTest.positionX, this.playerTest.positionY, 8);
    CampaignManager.getInstance().drawDebugTile(CURSOR_X, CURSOR_Y, TileColor.DefaultCursor);
    CampaignManager.getInstance().drawDebugPathfinding(0, 0, this.playerTest.positionX, this.playerTest.positionY);
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
