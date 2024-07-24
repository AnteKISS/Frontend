import FpsText from '../objects/fpsText'
import Item from '../inventory/item'
import InventoryItem from '../inventory/inventoryItem'
import { ItemType } from '../inventory/itemType'

import GUI from '../objects/gui'
import { PlayerEntity } from '../entities/playerEntity';
import { EntityManager } from '../managers/entityManager';

import { TileColor } from '../tiles/tiledrawer'
import CampaignManager from '../managers/campaignmanager'
import Point from '../types/point'
import { EntityHealthBar } from '../uielements/entityHealthBar';
import { SignalHandler } from '../events/signal';
import Tooltip from '../label/tooltip'
import { SpellCollider } from '../physics/spellCollider';
import { SpellColliderManager } from '../managers/spellColliderManager'
import { AttributeGUI } from '../progression/attributeGUI'
import ItemEntity from '../entities/itemEntity'
import { MathModule } from '../utilities/mathModule'
import { GameInput } from '../inputs/gameInputs'
import SoundManager from '../managers/soundManager'
import { GeneralEventManager, PlayerEquipmentEventManager } from '../managers/eventManager'
import { UiEvents } from '../events/uiEvents'
import { KillQuest } from '../quest/killQuest'
import { QuestUI } from '../quest/questUI'

export default class MainScene extends Phaser.Scene {
  public uiCamera: Phaser.Cameras.Scene2D.Camera;
  public fpsText: FpsText;
  public versionText: Phaser.GameObjects.Text
  public campaignManager: CampaignManager;
  public pointer: Phaser.Input.Pointer;
  public centerPoint: Point;
  public mapEditorButton: Phaser.GameObjects.Text;
  public spellSpriteColliders: SpellCollider[] = [];

  public playerTest: PlayerEntity;
  private entityHealthBar: EntityHealthBar;
  private gui: GUI;
  private questUI: QuestUI;

  private attributeGUI: AttributeGUI;
  private gameInputs: GameInput;

  private deathScreenBackground: Phaser.GameObjects.Graphics;
  private deathScreenText: Phaser.GameObjects.Text;

  private music: Phaser.Sound.WebAudioSound;
  private playerLight: Phaser.GameObjects.PointLight;

  public constructor() {
    super({ key: 'MainScene' });
  }

  public init(data: any): void {
  }

  public create() {
    this.gameInputs = new GameInput(this);
    this.fpsText = new FpsText(this);
    this.uiCamera = this.cameras.add(0, 0, 1280, 720, false, "uiCamera");

    // new GameLogo(this, this.cameras.main.width / 2, this.cameras.main.height / 2);
    //this.campaign = new Campaign("Main");
    CampaignManager.init(this);
    CampaignManager.getInstance().loadCampaign('{"name":"Default Campaign","acts":[{"name":"Act I","areas":[{"name":"Area 1","gameObjects":[["Tile",-5,0,"rocky_floor_tiles",0,""],["Tile",-4,-3,"rocky_floor_tiles",0,""],["Tile",-4,-2,"rocky_floor_tiles",0,""],["Tile",-4,-1,"rocky_floor_tiles",0,""],["Tile",-4,0,"rocky_floor_tiles",0,""],["Tile",-4,1,"rocky_floor_tiles",0,""],["Tile",-4,2,"rocky_floor_tiles",0,""],["Tile",-4,3,"rocky_floor_tiles",0,""],["Tile",-3,-4,"rocky_floor_tiles",0,""],["Tile",-3,-3,"rocky_floor_tiles",0,""],["Tile",-3,-2,"rocky_floor_tiles",0,""],["Tile",-3,-1,"rocky_floor_tiles",0,""],["Tile",-3,0,"rocky_floor_tiles",0,""],["Tile",-3,1,"rocky_floor_tiles",0,""],["Tile",-3,2,"rocky_floor_tiles",0,""],["Tile",-3,3,"rocky_floor_tiles",0,""],["Tile",-3,4,"rocky_floor_tiles",0,""],["Tile",-2,-4,"rocky_floor_tiles",0,""],["Tile",-2,-3,"rocky_floor_tiles",0,""],["Tile",-2,-2,"rocky_floor_tiles",0,""],["Tile",-2,-1,"rocky_floor_tiles",0,""],["Tile",-2,0,"rocky_floor_tiles",0,""],["Tile",-2,1,"rocky_floor_tiles",0,""],["Tile",-2,2,"rocky_floor_tiles",0,""],["Tile",-2,3,"rocky_floor_tiles",0,""],["Tile",-2,4,"rocky_floor_tiles",0,""],["Tile",-1,-4,"rocky_floor_tiles",0,""],["Tile",-1,-3,"rocky_floor_tiles",0,""],["Tile",-1,-2,"rocky_floor_tiles",0,""],["Tile",-1,-1,"rocky_floor_tiles",0,""],["Tile",-1,0,"rocky_floor_tiles",0,""],["Tile",-1,1,"rocky_floor_tiles",0,""],["Tile",-1,2,"rocky_floor_tiles",0,""],["Tile",-1,3,"rocky_floor_tiles",0,""],["Tile",-1,4,"rocky_floor_tiles",0,""],["Tile",0,-5,"rocky_floor_tiles",0,""],["Tile",0,-4,"rocky_floor_tiles",0,""],["Tile",0,-3,"rocky_floor_tiles",0,""],["Tile",0,-2,"rocky_floor_tiles",0,""],["Tile",0,-1,"rocky_floor_tiles",0,""],["Tile",0,0,"rocky_floor_tiles",0,""],["Spawner",0,0,"basic_spawner","minotaur_0",15,3],["Tile",0,1,"rocky_floor_tiles",0,""],["Tile",0,2,"rocky_floor_tiles",0,""],["Tile",0,3,"rocky_floor_tiles",0,""],["Tile",0,4,"rocky_floor_tiles",0,""],["Tile",0,5,"rocky_floor_tiles",0,""],["Tile",1,-4,"rocky_floor_tiles",0,""],["Tile",1,-3,"rocky_floor_tiles",0,""],["Tile",1,-2,"rocky_floor_tiles",0,""],["Tile",1,-1,"rocky_floor_tiles",0,""],["Tile",1,0,"rocky_floor_tiles",0,""],["Tile",1,1,"rocky_floor_tiles",0,""],["Tile",1,2,"rocky_floor_tiles",0,""],["Tile",1,3,"rocky_floor_tiles",0,""],["Tile",1,4,"rocky_floor_tiles",0,""],["Tile",2,-4,"rocky_floor_tiles",0,""],["Tile",2,-3,"rocky_floor_tiles",0,""],["Tile",2,-2,"rocky_floor_tiles",0,""],["Tile",2,-1,"rocky_floor_tiles",0,""],["Tile",2,0,"rocky_floor_tiles",0,""],["Tile",2,1,"rocky_floor_tiles",0,""],["Tile",2,2,"rocky_floor_tiles",0,""],["Tile",2,3,"rocky_floor_tiles",0,""],["Tile",2,4,"rocky_floor_tiles",0,""],["Tile",3,-4,"rocky_floor_tiles",0,""],["Tile",3,-3,"rocky_floor_tiles",0,""],["Tile",3,-2,"rocky_floor_tiles",0,""],["Tile",3,-1,"rocky_floor_tiles",0,""],["Tile",3,0,"rocky_floor_tiles",0,""],["Tile",3,1,"rocky_floor_tiles",0,""],["Tile",3,2,"rocky_floor_tiles",0,""],["Tile",3,3,"rocky_floor_tiles",0,""],["Tile",3,4,"rocky_floor_tiles",0,""],["Tile",4,-3,"rocky_floor_tiles",0,""],["Tile",4,-2,"rocky_floor_tiles",0,""],["Tile",4,-1,"rocky_floor_tiles",0,""],["Tile",4,0,"rocky_floor_tiles",0,""],["Tile",4,1,"rocky_floor_tiles",0,""],["Tile",4,2,"rocky_floor_tiles",0,""],["Tile",4,3,"rocky_floor_tiles",0,""],["Tile",5,0,"rocky_floor_tiles",0,""],["Tile",-1,5,"rocky_floor_tiles",0,""],["Tile",0,6,"rocky_floor_tiles",0,""],["Tile",1,5,"rocky_floor_tiles",0,""],["Tile",-1,6,"rocky_floor_tiles",0,""],["Tile",0,7,"rocky_floor_tiles",0,"1 to 2"],["Tile",1,6,"rocky_floor_tiles",0,""],["Tile",-1,7,"rocky_floor_tiles",0,"1 to 2"],["Tile",0,8,"rocky_floor_tiles",0,"1 to 2"],["Tile",1,7,"rocky_floor_tiles",0,"1 to 2"],["Tile",-1,8,"rocky_floor_tiles",0,"1 to 2"],["Tile",1,8,"rocky_floor_tiles",0,"1 to 2"]]},{"name":"Area 2","gameObjects":[["Tile",-5,0,"rocky_floor_tiles",1,""],["Tile",-4,-3,"rocky_floor_tiles",1,""],["Tile",-4,-2,"rocky_floor_tiles",1,""],["Tile",-4,-1,"rocky_floor_tiles",1,""],["Tile",-4,0,"rocky_floor_tiles",1,""],["Tile",-4,1,"rocky_floor_tiles",1,""],["Tile",-4,2,"rocky_floor_tiles",1,""],["Tile",-4,3,"rocky_floor_tiles",1,""],["Tile",-3,-4,"rocky_floor_tiles",1,""],["Tile",-3,-3,"rocky_floor_tiles",1,""],["Tile",-3,-2,"rocky_floor_tiles",1,""],["Tile",-3,-1,"rocky_floor_tiles",1,""],["Tile",-3,0,"rocky_floor_tiles",1,""],["Tile",-3,1,"rocky_floor_tiles",1,""],["Tile",-3,2,"rocky_floor_tiles",1,""],["Tile",-3,3,"rocky_floor_tiles",1,""],["Tile",-3,4,"rocky_floor_tiles",1,""],["Tile",-2,-4,"rocky_floor_tiles",1,""],["Tile",-2,-3,"rocky_floor_tiles",1,""],["Tile",-2,-2,"rocky_floor_tiles",1,""],["Tile",-2,-1,"rocky_floor_tiles",1,""],["Tile",-2,0,"rocky_floor_tiles",1,""],["Tile",-2,1,"rocky_floor_tiles",1,""],["Tile",-2,2,"rocky_floor_tiles",1,""],["Tile",-2,3,"rocky_floor_tiles",1,""],["Tile",-2,4,"rocky_floor_tiles",1,""],["Tile",-1,-4,"rocky_floor_tiles",1,""],["Tile",-1,-3,"rocky_floor_tiles",1,""],["Tile",-1,-2,"rocky_floor_tiles",1,""],["Tile",-1,-1,"rocky_floor_tiles",1,""],["Tile",-1,0,"rocky_floor_tiles",1,""],["Tile",-1,1,"rocky_floor_tiles",1,""],["Tile",-1,2,"rocky_floor_tiles",1,""],["Tile",-1,3,"rocky_floor_tiles",1,""],["Tile",-1,4,"rocky_floor_tiles",1,""],["Tile",0,-5,"rocky_floor_tiles",1,""],["Tile",0,-4,"rocky_floor_tiles",1,""],["Tile",0,-3,"rocky_floor_tiles",1,""],["Tile",0,-2,"rocky_floor_tiles",1,""],["Tile",0,-1,"rocky_floor_tiles",1,""],["Tile",0,0,"rocky_floor_tiles",1,""],["Spawner",0,0,"basic_spawner","skeleton_0",2,1],["Tile",0,1,"rocky_floor_tiles",1,""],["Tile",0,2,"rocky_floor_tiles",1,""],["Tile",0,3,"rocky_floor_tiles",1,""],["Tile",0,4,"rocky_floor_tiles",1,""],["Tile",0,5,"rocky_floor_tiles",1,""],["Tile",1,-4,"rocky_floor_tiles",1,""],["Tile",1,-3,"rocky_floor_tiles",1,""],["Tile",1,-2,"rocky_floor_tiles",1,""],["Tile",1,-1,"rocky_floor_tiles",1,""],["Tile",1,0,"rocky_floor_tiles",1,""],["Tile",1,1,"rocky_floor_tiles",1,""],["Tile",1,2,"rocky_floor_tiles",1,""],["Tile",1,3,"rocky_floor_tiles",1,""],["Tile",1,4,"rocky_floor_tiles",1,""],["Tile",2,-4,"rocky_floor_tiles",1,""],["Tile",2,-3,"rocky_floor_tiles",1,""],["Tile",2,-2,"rocky_floor_tiles",1,""],["Tile",2,-1,"rocky_floor_tiles",1,""],["Tile",2,0,"rocky_floor_tiles",1,""],["Tile",2,1,"rocky_floor_tiles",1,""],["Tile",2,2,"rocky_floor_tiles",1,""],["Tile",2,3,"rocky_floor_tiles",1,""],["Tile",2,4,"rocky_floor_tiles",1,""],["Tile",3,-4,"rocky_floor_tiles",1,""],["Tile",3,-3,"rocky_floor_tiles",1,""],["Tile",3,-2,"rocky_floor_tiles",1,""],["Tile",3,-1,"rocky_floor_tiles",1,""],["Tile",3,0,"rocky_floor_tiles",1,""],["Tile",3,1,"rocky_floor_tiles",1,""],["Tile",3,2,"rocky_floor_tiles",1,""],["Tile",3,3,"rocky_floor_tiles",1,""],["Tile",3,4,"rocky_floor_tiles",1,""],["Tile",4,-3,"rocky_floor_tiles",1,""],["Tile",4,-2,"rocky_floor_tiles",1,""],["Tile",4,-1,"rocky_floor_tiles",1,""],["Tile",4,0,"rocky_floor_tiles",1,""],["Tile",4,1,"rocky_floor_tiles",1,""],["Tile",4,2,"rocky_floor_tiles",1,""],["Tile",4,3,"rocky_floor_tiles",1,""],["Tile",5,0,"rocky_floor_tiles",1,""],["Tile",-1,-5,"rocky_floor_tiles",1,""],["Tile",0,-6,"rocky_floor_tiles",1,""],["Tile",1,-5,"rocky_floor_tiles",1,""],["Tile",-1,-6,"rocky_floor_tiles",1,""],["Tile",0,-7,"rocky_floor_tiles",1,"2 to 1"],["Tile",1,-6,"rocky_floor_tiles",1,""],["Tile",-1,-7,"rocky_floor_tiles",1,"2 to 1"],["Tile",0,-8,"rocky_floor_tiles",1,"2 to 1"],["Tile",1,-7,"rocky_floor_tiles",1,"2 to 1"],["Tile",-1,-8,"rocky_floor_tiles",1,"2 to 1"],["Tile",1,-8,"rocky_floor_tiles",1,"2 to 1"]]}],"transitions":[{"name":"1 to 2","areaName":"Area 2","targetX":0,"targetY":0},{"name":"2 to 1","areaName":"Area 1","targetX":0,"targetY":0}]}]}');

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
        GeneralEventManager.getInstance().notifyObservers(clickEvent);
      });

    this.input!.mouse!.disableContextMenu();

    this.gui = new GUI(this, 0, 0);
    this.questUI = new QuestUI(this);
    this.playerTest = EntityManager.instance.createPlayer(this);
    this.playerTest.positionX = 0;
    this.playerTest.positionY = 0;
    this.playerTest.area = CampaignManager.getInstance().getCampaign().currentArea();
    new KillQuest(2, 'skeleton_0', 750);
    new KillQuest(15, 'minotaur_0', 40000);

    const playerDeathHandler: SignalHandler = {
      callback: this.onPlayerDeath.bind(this),
      parameters: []
    }
    this.playerTest.onPlayerDeath.addHandler(playerDeathHandler);

    this.entityHealthBar = new EntityHealthBar(this);
    // this.entityHealthBar.entity = this.monsterTest;
    this.gui.spellBar.setSpellBook(this.playerTest.spellBook);

    this.input.setDefaultCursor('default');

    //Setup Attribute Allocation Panel
    this.attributeGUI = new AttributeGUI(this, this.playerTest.attributeAllocation);

    this.input.keyboard?.on('keydown-A', () => this.attributeGUI.aKeyPressed());
    this.input.keyboard?.on('keydown-ESC', () => this.attributeGUI.hide());

    // Setup inventory test
    this.input.keyboard!.on('keydown-I', () => this.playerTest.inventory.visible ? this.playerTest.inventory.hide() : this.playerTest.inventory.show());
    this.input.keyboard!.on('keydown-ESC', () => this.playerTest.inventory.hide());

    // this.input.keyboard!.on('keydown-ESC', () => {
    //   if (this.playerTest.isDead()) {
    //     this.playerTest.resp
    //   }
    // });

    // Add items to player inventory
    const stoneDagger = new Item(this, "Stone Dagger", ItemType.WEAPON, 1, 2, "stone_dagger_inv", "dropped_sword");
    this.playerTest.inventory.getItemStorage().addItem(new InventoryItem(this, stoneDagger), 0, 0);

    const woodenShield = new Item(this, "Wooden Shield", ItemType.WEAPON, 2, 2, "wooden_shield_inv", "dropped_shield");
    this.playerTest.inventory.getItemStorage().autoLoot(new InventoryItem(this, woodenShield));

    const chainmailHood = new Item(this, "Chainmail Hood", ItemType.HELMET, 2, 2, "chainmail_hood_inv", "dropped_hood");
    this.playerTest.inventory.getItemStorage().autoLoot(new InventoryItem(this, chainmailHood));

    // const chainmailGloves = new Item(this, "Chainmail Gloves", ItemType.GLOVES, 2, 2, "chainmail_gloves_inv", "dropped_gloves");
    // this.playerTest.inventory.getItemStorage().autoLoot(new InventoryItem(this, chainmailGloves));

    // const leatherBoots = new Item(this, "Leather Boots", ItemType.BOOTS, 2, 2, "leather_boots_inv", "dropped_boots");
    // this.playerTest.inventory.getItemStorage().autoLoot(new InventoryItem(this, leatherBoots));

    const chainmailBelt = new Item(this, "Chainmail Belt", ItemType.BELT, 2, 1, "chainmail_belt_inv", "dropped_belt");
    this.playerTest.inventory.getItemStorage().autoLoot(new InventoryItem(this, chainmailBelt));

    const chainmailArmor = new Item(this, "Chainmail Armor", ItemType.ARMOR, 2, 3, "chainmail_armor_inv", "dropped_armor");
    this.playerTest.inventory.getItemStorage().autoLoot(new InventoryItem(this, chainmailArmor));

    // const leatherBelt = new Item(this, "Leather Belt", ItemType.BELT, 2, 1, "leather_belt_inv", "dropped_belt");
    // this.playerTest.inventory.getItemStorage().autoLoot(new InventoryItem(this, leatherBelt));

    const knightHelmet = new Item(this, "Knight Helmet", ItemType.HELMET, 2, 2, "knight_helmet_inv", "dropped_helmet");
    this.playerTest.inventory.getItemStorage().autoLoot(new InventoryItem(this, knightHelmet));

    // const leatherGloves = new Item(this, "Leather Gloves", ItemType.GLOVES, 2, 2, "leather_gloves_inv", "dropped_gloves");
    // this.playerTest.inventory.getItemStorage().autoLoot(new InventoryItem(this, leatherGloves));

    // const leatherArmor = new Item(this, "Leather Armor", ItemType.ARMOR, 2, 3, "leather_armor_inv", "dropped_armor");
    // this.playerTest.inventory.getItemStorage().autoLoot(new InventoryItem(this, leatherArmor));

    // const chainmailBoots = new Item(this, "Chainmail Boots", ItemType.BOOTS, 2, 2, "chainmail_boots_inv", "dropped_boots");
    // this.playerTest.inventory.getItemStorage().autoLoot(new InventoryItem(this, chainmailBoots));

    // const boneSword = new Item(this, "Bone Sword", ItemType.WEAPON, 1, 3, "bone_sword_inv", "dropped_sword");
    // this.playerTest.inventory.getItemStorage().autoLoot(new InventoryItem(this, boneSword));

    // const goldenKopis = new Item(this, "Golden Kopis", ItemType.WEAPON, 1, 3, "golden_kopis_inv", "dropped_sword");
    // this.playerTest.inventory.getItemStorage().autoLoot(new InventoryItem(this, goldenKopis));

    const bronzeRing = new Item(this, "Bronze Ring", ItemType.RING, 1, 1, "bronze_ring_inv", "dropped_ring");
    const silverRing = new Item(this, "Silver Ring", ItemType.RING, 1, 1, "silver_ring_inv", "dropped_ring");
    const goldRing = new Item(this, "Gold Ring", ItemType.RING, 1, 1, "gold_ring_inv", "dropped_ring");
    this.playerTest.inventory.getItemStorage().autoLoot(new InventoryItem(this, bronzeRing));
    this.playerTest.inventory.getItemStorage().autoLoot(new InventoryItem(this, silverRing));
    this.playerTest.inventory.getItemStorage().autoLoot(new InventoryItem(this, goldRing));

    const baphometsTalisman = new Item(this, "Baphomet's Talisman", ItemType.AMULET, 1, 1, "baphomets_talisman_inv", "dropped_amulet");
    const templeAmulet = new Item(this, "Temple Amulet", ItemType.AMULET, 1, 1, "temple_amulet_inv", "dropped_amulet");
    this.playerTest.inventory.getItemStorage().autoLoot(new InventoryItem(this, baphometsTalisman));
    this.playerTest.inventory.getItemStorage().autoLoot(new InventoryItem(this, templeAmulet));

    // const leatherHood = new Item(this, "Leather Hood", ItemType.HELMET, 2, 2, "leather_hood_inv", "dropped_hood");
    // this.playerTest.inventory.getItemStorage().autoLoot(new InventoryItem(this, leatherHood));

    Tooltip.init(this);
    this.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
      Tooltip.update(pointer);
    });

    // display the Phaser.VERSION
    this.versionText = this.add
      .text(1250, 30, ``, {
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
    // this.music = this.sound.add('spinning_rat_power', {
    //   mute: false,
    //   volume: 0.9,
    //   rate: 1,
    //   detune: 0,
    //   seek: 0,
    //   loop: true,
    //   delay: 0,
    //   // source of the spatial sound
    //   source: {
    //       x: this.monsterTest2.positionX,// - this.cameras.main.width / 2,
    //       y: this.monsterTest2.positionY,// - this.cameras.main.height / 2,
    //       z: 0,
    //       panningModel: 'equalpower',
    //       distanceModel: 'inverse',
    //       orientationX: 0,
    //       orientationY: 0,
    //       orientationZ: -1,
    //       refDistance: 1,
    //       maxDistance: 1000,
    //       rolloffFactor: 0.25,
    //       coneInnerAngle: 360,
    //       coneOuterAngle: 0,
    //       coneOuterGain: 0,
    //       follow: undefined
    //   }
    // }) as Phaser.Sound.WebAudioSound;
    // this.music.play();
    this.cameras.main.ignore(
      [
        this.fpsText,
        this.versionText,
        this.mapEditorButton,
        this.gui,
        this.entityHealthBar.graphics,
        this.entityHealthBar.lblEntityName,
        this.entityHealthBar.lblEntityDescription,
        this.playerTest.inventory,
        this.attributeGUI
      ]
    );
    // TODO: Find a way to make the ignore list more dynamic
    this.playerLight = this.add.pointlight(this.playerTest.positionX, this.playerTest.positionY, 0xE0E0E0, 250, 3, 0.01);
    this.playerLight.depth = 100;
    this.uiCamera.ignore(
      [
        this.playerTest,
        this.playerTest.collider.debugGraphics,
        this.playerLight
      ]
    );
    let soundManager = SoundManager.getInstance();
    soundManager.scene = this;
    soundManager.playerEntity = this.playerTest;
    SoundManager.getInstance().playOutsideBackgroundAmbience();

    GeneralEventManager.getInstance().addObserver(soundManager);
    PlayerEquipmentEventManager.getInstance().addObserver(this.playerTest);
    // EntityManager.instance.setDebugMode(true);
    (this.plugins.get('rexHorrifiPipeline') as any).add(this.cameras.main, {
      vignetteEnable: true,
      vignetteStrength: 1,
      vignetteIntensity: 1.5,
    });
    this.input.keyboard!.on('keydown-W', () => {
      (this.music.y as unknown as AudioParam).value -= 10;
      console.log('Y: ', this.music.y);
    });
    this.input.keyboard!.on('keydown-S', () => {
      (this.music.y as unknown as AudioParam).value += 10;
    });
    this.input.keyboard!.on('keydown-A', () => {
      (this.music.x as unknown as AudioParam).value -= 10;
    });
    this.input.keyboard!.on('keydown-D', () => {
      (this.music.x as unknown as AudioParam).value += 10;
    });

    //var youtubePlayer = new YoutubePlayer(this, this.cameras.main.width * 0.5, 100, 300, 150, {
    //  videoId: 'dQw4w9WgXcQ',
    //  autoPlay: true,
    //  controls: true,
    //  loop: true
    //});
    //this.add.existing(youtubePlayer);
    //youtubePlayer.play();
    this.sys.game.canvas.style.cursor = 'url(assets/gui/pointer05.png), auto';
  }

  public update(time: number, deltaTime: number) {
    this.cameras.main.setScroll(
      this.playerTest.positionX - this.cameras.main.width / 2,
      this.playerTest.positionY - this.cameras.main.height / 2
    );
    this.playerLight.x = this.playerTest.positionX;
    this.playerLight.y = this.playerTest.positionY;
    this.sound.setListenerPosition(this.playerTest.positionX, this.playerTest.positionY);
    SoundManager.getInstance().update(time, deltaTime);
    window['deltaTime'] = deltaTime;
    this.fpsText.update();
    EntityManager.instance.update(time, deltaTime);
    this.updateGUI();
    this.entityHealthBar.update();
    // this.drawDebugTileSet();
    this.attributeGUI.update();
    SpellColliderManager.getInstance.update();
    this.questUI.drawUI(this);

    if (this.gameInputs.showGroundItemsKey.isDown) {
      EntityManager.instance.toggleGroundItemsTooltip(true);
    } else {
      EntityManager.instance.toggleGroundItemsTooltip(false);
    }
  }

  public isPointerOnInventory(pointer: Phaser.Input.Pointer): boolean {
    return this.isInventoryOpen() && this.playerTest.inventory.isPointerOnInventory(pointer);
  }

  public isInventoryOpen(): boolean {
    return this.playerTest.inventory.visible;
  }

  public isItemPickedUp(): boolean {
    return this.playerTest.inventory.isItemPickedUp();
  }

  private onPointerMove(pointer: Phaser.Input.Pointer): void {
    if (!this.playerTest.inventory.wasItemDroppedLastClick())
      this.playerTest.controller.onPointerMove(pointer);
  }

  private onPointerDown(pointer: Phaser.Input.Pointer): void {
    this.playerTest.inventory.onPointerDown(pointer);

    if (!this.playerTest.inventory.wasItemDroppedLastClick()) {
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
      const itemAddedToInventory: boolean = this.playerTest.inventory.getItemStorage().autoLoot(new InventoryItem(this, itemEntity.item));
      if (itemAddedToInventory) {
        EntityManager.instance.destroyItem(itemEntity);
      }
    }
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
    this.gui.manaBar.setCurrentValue(this.playerTest.dynamicStats.mana);
    this.gui.manaBar.setMaxValue(this.playerTest.totalModifierStats.maxMana);
    this.gui.healthBar.setCurrentValue(this.playerTest.dynamicStats.health);
    this.gui.healthBar.setMaxValue(this.playerTest.totalModifierStats.maxHealth);
    this.gui.spellBar.updateSlots();
    this.gui.expBar.setMaxExp(this.playerTest.exp.getLevelExpToMax());
    this.gui.expBar.setCurrentExp(this.playerTest.exp.getcurrentExpToMax());
    this.gui.expBar.updateExpToolTip(this.pointer);
    this.gui.leftInfoBar.updateText(this.playerTest);
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
