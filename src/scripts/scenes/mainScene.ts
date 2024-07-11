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
    CampaignManager.getInstance().loadCampaign('{"name":"Default Campaign","acts":[{"name":"Act I","areas":[{"name":"Default","gameObjects":[["Tile",-2,-2,"rocky_floor_tiles",0,null],["Wall",-2,-2,"flat_stone_walls",20,"Left"],["Tile",-2,-1,"rocky_floor_tiles",0,null],["Tile",-2,0,"rocky_floor_tiles",0,null],["Tile",-2,1,"rocky_floor_tiles",0,null],["Tile",-2,2,"rocky_floor_tiles",0,null],["Tile",-1,-2,"rocky_floor_tiles",0,null],["Wall",-1,-2,"flat_stone_walls",20,"Left"],["Tile",-1,-1,"rocky_floor_tiles",0,null],["Tile",-1,0,"rocky_floor_tiles",0,null],["Tile",-1,1,"rocky_floor_tiles",0,null],["Tile",-1,2,"rocky_floor_tiles",0,null],["Tile",0,-2,"rocky_floor_tiles",0,null],["Wall",0,-2,"flat_stone_walls",20,"Left"],["Tile",0,-1,"rocky_floor_tiles",0,null],["Tile",0,0,"rocky_floor_tiles",0,null],["Tile",0,1,"rocky_floor_tiles",0,null],["Tile",0,2,"rocky_floor_tiles",7,null],["Tile",0,3,"rocky_floor_tiles",7,null],["Tile",1,-2,"rocky_floor_tiles",0,null],["Wall",1,-2,"flat_stone_walls",20,"Left"],["Tile",1,-1,"rocky_floor_tiles",0,null],["Tile",1,0,"rocky_floor_tiles",0,null],["Tile",1,1,"rocky_floor_tiles",0,null],["Tile",1,2,"rocky_floor_tiles",7,null],["Wall",1,2,"flat_stone_walls",13,"Right"],["Tile",2,-2,"rocky_floor_tiles",0,null],["Wall",2,-2,"flat_stone_walls",19,"Right"],["Wall",2,-2,"flat_stone_walls",20,"Left"],["Tile",2,-1,"rocky_floor_tiles",0,null],["Wall",2,-1,"flat_stone_walls",19,"Right"],["Tile",2,0,"rocky_floor_tiles",0,null],["Wall",2,0,"flat_stone_walls",19,"Right"],["Tile",2,1,"rocky_floor_tiles",0,null],["Wall",2,1,"flat_stone_walls",19,"Right"],["Tile",-7,18,"rocky_floor_tiles",9,null],["Tile",-6,15,"rocky_floor_tiles",9,null],["Tile",-6,16,"rocky_floor_tiles",9,null],["Tile",-6,17,"rocky_floor_tiles",9,null],["Tile",-6,18,"rocky_floor_tiles",9,null],["Tile",-6,19,"rocky_floor_tiles",9,null],["Tile",-6,20,"rocky_floor_tiles",9,null],["Tile",-6,21,"rocky_floor_tiles",9,null],["Tile",-5,14,"rocky_floor_tiles",9,null],["Tile",-5,15,"rocky_floor_tiles",9,null],["Tile",-5,16,"rocky_floor_tiles",9,null],["Tile",-5,17,"rocky_floor_tiles",9,null],["Tile",-5,18,"rocky_floor_tiles",9,null],["Tile",-5,19,"rocky_floor_tiles",9,null],["Tile",-5,20,"rocky_floor_tiles",9,null],["Tile",-5,21,"rocky_floor_tiles",9,null],["Tile",-5,22,"rocky_floor_tiles",9,null],["Tile",-4,14,"rocky_floor_tiles",9,null],["Tile",-4,15,"rocky_floor_tiles",9,null],["Tile",-4,16,"rocky_floor_tiles",9,null],["Tile",-4,17,"rocky_floor_tiles",9,null],["Tile",-4,18,"rocky_floor_tiles",9,null],["Tile",-4,19,"rocky_floor_tiles",9,null],["Tile",-4,20,"rocky_floor_tiles",9,null],["Tile",-4,21,"rocky_floor_tiles",9,null],["Tile",-4,22,"rocky_floor_tiles",9,null],["Tile",-3,14,"rocky_floor_tiles",9,null],["Tile",-3,15,"rocky_floor_tiles",9,null],["Tile",-3,16,"rocky_floor_tiles",9,null],["Tile",-3,17,"rocky_floor_tiles",9,null],["Tile",-3,18,"rocky_floor_tiles",9,null],["Tile",-3,19,"rocky_floor_tiles",9,null],["Tile",-3,20,"rocky_floor_tiles",9,null],["Tile",-3,21,"rocky_floor_tiles",9,null],["Tile",-3,22,"rocky_floor_tiles",9,null],["Tile",-2,13,"rocky_floor_tiles",9,null],["Tile",-2,14,"rocky_floor_tiles",9,null],["Tile",-2,15,"rocky_floor_tiles",9,null],["Tile",-2,16,"rocky_floor_tiles",9,null],["Tile",-2,17,"rocky_floor_tiles",9,null],["Tile",-2,18,"rocky_floor_tiles",9,null],["Tile",-2,19,"rocky_floor_tiles",9,null],["Tile",-2,20,"rocky_floor_tiles",9,null],["Tile",-2,21,"rocky_floor_tiles",9,null],["Tile",-2,22,"rocky_floor_tiles",9,null],["Tile",-2,23,"rocky_floor_tiles",9,null],["Tile",-1,14,"rocky_floor_tiles",9,null],["Tile",-1,15,"rocky_floor_tiles",9,null],["Tile",-1,16,"rocky_floor_tiles",9,null],["Tile",-1,17,"rocky_floor_tiles",9,null],["Tile",-1,18,"rocky_floor_tiles",9,null],["Tile",-1,19,"rocky_floor_tiles",9,null],["Tile",-1,20,"rocky_floor_tiles",9,null],["Tile",-1,21,"rocky_floor_tiles",9,null],["Tile",-1,22,"rocky_floor_tiles",9,null],["Tile",0,14,"rocky_floor_tiles",9,null],["Tile",0,15,"rocky_floor_tiles",9,null],["Tile",0,16,"rocky_floor_tiles",9,null],["Tile",0,17,"rocky_floor_tiles",9,null],["Tile",0,18,"rocky_floor_tiles",9,null],["Tile",0,19,"rocky_floor_tiles",9,null],["Tile",0,20,"rocky_floor_tiles",9,null],["Tile",0,21,"rocky_floor_tiles",9,null],["Spawner",0,21,"basic_spawner"],["Tile",0,22,"rocky_floor_tiles",9,null],["Tile",1,14,"rocky_floor_tiles",9,null],["Tile",1,15,"rocky_floor_tiles",9,null],["Tile",1,16,"rocky_floor_tiles",9,null],["Tile",1,17,"rocky_floor_tiles",9,null],["Tile",1,18,"rocky_floor_tiles",9,null],["Tile",1,19,"rocky_floor_tiles",9,null],["Tile",1,20,"rocky_floor_tiles",9,null],["Tile",1,21,"rocky_floor_tiles",9,null],["Tile",1,22,"rocky_floor_tiles",9,null],["Tile",2,15,"rocky_floor_tiles",9,null],["Tile",2,16,"rocky_floor_tiles",9,null],["Tile",2,17,"rocky_floor_tiles",9,null],["Tile",2,18,"rocky_floor_tiles",9,null],["Tile",2,19,"rocky_floor_tiles",9,null],["Tile",2,20,"rocky_floor_tiles",9,null],["Tile",2,21,"rocky_floor_tiles",9,null],["Tile",3,18,"rocky_floor_tiles",9,null],["Tile",-8,18,"rocky_floor_tiles",9,null],["Tile",-7,15,"rocky_floor_tiles",9,null],["Tile",-7,16,"rocky_floor_tiles",9,null],["Tile",-7,17,"rocky_floor_tiles",9,null],["Tile",-7,19,"rocky_floor_tiles",9,null],["Tile",-7,20,"rocky_floor_tiles",9,null],["Tile",-7,21,"rocky_floor_tiles",9,null],["Tile",-6,14,"rocky_floor_tiles",9,null],["Tile",-6,22,"rocky_floor_tiles",9,null],["Tile",-3,13,"rocky_floor_tiles",9,null],["Tile",-3,23,"rocky_floor_tiles",9,null],["Tile",-8,17,"rocky_floor_tiles",9,null],["Tile",-7,14,"rocky_floor_tiles",9,null],["Tile",-6,13,"rocky_floor_tiles",9,null],["Tile",-5,13,"rocky_floor_tiles",9,null],["Tile",-4,13,"rocky_floor_tiles",9,null],["Tile",-3,12,"rocky_floor_tiles",9,null],["Tile",-1,13,"rocky_floor_tiles",9,null],["Tile",0,13,"rocky_floor_tiles",9,null],["Tile",-5,12,"rocky_floor_tiles",9,null],["Tile",-4,12,"rocky_floor_tiles",9,null],["Tile",-2,11,"rocky_floor_tiles",9,null],["Tile",-2,12,"rocky_floor_tiles",9,null],["Tile",-1,12,"rocky_floor_tiles",9,null],["Tile",0,12,"rocky_floor_tiles",9,null],["Tile",1,12,"rocky_floor_tiles",9,null],["Tile",1,13,"rocky_floor_tiles",9,null],["Tile",2,13,"rocky_floor_tiles",9,null],["Tile",2,14,"rocky_floor_tiles",9,null],["Tile",3,16,"rocky_floor_tiles",9,null],["Tile",-4,11,"rocky_floor_tiles",9,null],["Tile",-3,11,"rocky_floor_tiles",9,null],["Tile",-1,10,"rocky_floor_tiles",7,null],["Tile",-1,11,"rocky_floor_tiles",9,null],["Tile",0,11,"rocky_floor_tiles",9,null],["Tile",1,11,"rocky_floor_tiles",9,null],["Tile",2,11,"rocky_floor_tiles",9,null],["Tile",2,12,"rocky_floor_tiles",9,null],["Tile",3,12,"rocky_floor_tiles",9,null],["Tile",3,13,"rocky_floor_tiles",9,null],["Tile",3,14,"rocky_floor_tiles",9,null],["Tile",3,15,"rocky_floor_tiles",9,null],["Tile",3,17,"rocky_floor_tiles",9,null],["Tile",4,15,"rocky_floor_tiles",9,null],["Tile",-3,10,"rocky_floor_tiles",9,null],["Tile",-2,10,"rocky_floor_tiles",7,null],["Tile",0,9,"rocky_floor_tiles",7,null],["Tile",0,10,"rocky_floor_tiles",7,null],["Tile",1,10,"rocky_floor_tiles",9,null],["Tile",2,10,"rocky_floor_tiles",9,null],["Tile",3,10,"rocky_floor_tiles",9,null],["Tile",3,11,"rocky_floor_tiles",9,null],["Tile",4,11,"rocky_floor_tiles",9,null],["Tile",4,12,"rocky_floor_tiles",9,null],["Tile",4,13,"rocky_floor_tiles",9,null],["Tile",4,14,"rocky_floor_tiles",9,null],["Tile",4,16,"rocky_floor_tiles",9,null],["Tile",4,17,"rocky_floor_tiles",9,null],["Tile",5,14,"rocky_floor_tiles",9,null],["Tile",3,19,"rocky_floor_tiles",9,null],["Tile",4,18,"rocky_floor_tiles",9,null],["Tile",5,15,"rocky_floor_tiles",9,null],["Tile",4,19,"rocky_floor_tiles",9,null],["Tile",5,12,"rocky_floor_tiles",9,null],["Tile",5,13,"rocky_floor_tiles",9,null],["Tile",5,16,"rocky_floor_tiles",9,null],["Tile",5,17,"rocky_floor_tiles",9,null],["Tile",5,18,"rocky_floor_tiles",9,null],["Tile",6,15,"rocky_floor_tiles",9,null],["Tile",3,20,"rocky_floor_tiles",9,null],["Tile",4,20,"rocky_floor_tiles",9,null],["Tile",5,19,"rocky_floor_tiles",9,null],["Tile",6,16,"rocky_floor_tiles",9,null],["Tile",1,23,"rocky_floor_tiles",9,null],["Tile",2,22,"rocky_floor_tiles",9,null],["Tile",3,21,"rocky_floor_tiles",9,null],["Tile",3,22,"rocky_floor_tiles",9,null],["Tile",4,21,"rocky_floor_tiles",9,null],["Tile",4,22,"rocky_floor_tiles",9,null],["Tile",5,20,"rocky_floor_tiles",9,null],["Tile",5,21,"rocky_floor_tiles",9,null],["Tile",6,18,"rocky_floor_tiles",9,null],["Tile",-1,23,"rocky_floor_tiles",9,null],["Tile",0,23,"rocky_floor_tiles",9,null],["Tile",1,24,"rocky_floor_tiles",9,null],["Tile",2,23,"rocky_floor_tiles",9,null],["Tile",3,23,"rocky_floor_tiles",9,null],["Tile",4,23,"rocky_floor_tiles",9,null],["Tile",5,22,"rocky_floor_tiles",9,null],["Tile",6,19,"rocky_floor_tiles",9,null],["Tile",0,24,"rocky_floor_tiles",9,null],["Tile",-5,23,"rocky_floor_tiles",9,null],["Tile",-4,23,"rocky_floor_tiles",9,null],["Tile",-4,24,"rocky_floor_tiles",9,null],["Tile",-3,24,"rocky_floor_tiles",9,null],["Tile",-2,24,"rocky_floor_tiles",9,null],["Tile",-1,24,"rocky_floor_tiles",9,null],["Tile",-1,25,"rocky_floor_tiles",9,null],["Tile",2,24,"rocky_floor_tiles",9,null],["Tile",-8,22,"rocky_floor_tiles",9,null],["Tile",-7,22,"rocky_floor_tiles",9,null],["Tile",-7,23,"rocky_floor_tiles",9,null],["Tile",-7,24,"rocky_floor_tiles",9,null],["Tile",-7,25,"rocky_floor_tiles",9,null],["Tile",-6,23,"rocky_floor_tiles",9,null],["Tile",-6,24,"rocky_floor_tiles",9,null],["Tile",-6,25,"rocky_floor_tiles",9,null],["Tile",-6,26,"rocky_floor_tiles",9,null],["Tile",-5,24,"rocky_floor_tiles",9,null],["Tile",-5,25,"rocky_floor_tiles",9,null],["Tile",-5,26,"rocky_floor_tiles",9,null],["Tile",-4,25,"rocky_floor_tiles",9,null],["Tile",-4,26,"rocky_floor_tiles",9,null],["Tile",-3,25,"rocky_floor_tiles",9,null],["Tile",-3,26,"rocky_floor_tiles",9,null],["Tile",-3,27,"rocky_floor_tiles",9,null],["Tile",-2,25,"rocky_floor_tiles",9,null],["Tile",-2,26,"rocky_floor_tiles",9,null],["Tile",-1,26,"rocky_floor_tiles",9,null],["Tile",0,25,"rocky_floor_tiles",9,null],["Tile",0,26,"rocky_floor_tiles",9,null],["Tile",1,25,"rocky_floor_tiles",9,null],["Tile",-10,22,"rocky_floor_tiles",9,null],["Tile",-9,19,"rocky_floor_tiles",9,null],["Tile",-9,20,"rocky_floor_tiles",9,null],["Tile",-9,21,"rocky_floor_tiles",9,null],["Tile",-9,22,"rocky_floor_tiles",9,null],["Tile",-9,23,"rocky_floor_tiles",9,null],["Tile",-9,24,"rocky_floor_tiles",9,null],["Tile",-9,25,"rocky_floor_tiles",9,null],["Tile",-8,19,"rocky_floor_tiles",9,null],["Tile",-8,20,"rocky_floor_tiles",9,null],["Tile",-8,21,"rocky_floor_tiles",9,null],["Tile",-8,23,"rocky_floor_tiles",9,null],["Tile",-8,24,"rocky_floor_tiles",9,null],["Tile",-8,25,"rocky_floor_tiles",9,null],["Tile",-8,26,"rocky_floor_tiles",9,null],["Tile",-7,26,"rocky_floor_tiles",9,null],["Tile",-5,27,"rocky_floor_tiles",9,null],["Tile",-12,22,"rocky_floor_tiles",9,null],["Tile",-11,19,"rocky_floor_tiles",9,null],["Tile",-11,20,"rocky_floor_tiles",9,null],["Tile",-11,21,"rocky_floor_tiles",9,null],["Tile",-11,22,"rocky_floor_tiles",9,null],["Tile",-11,23,"rocky_floor_tiles",9,null],["Tile",-11,24,"rocky_floor_tiles",9,null],["Tile",-11,25,"rocky_floor_tiles",9,null],["Tile",-10,18,"rocky_floor_tiles",9,null],["Tile",-10,19,"rocky_floor_tiles",9,null],["Tile",-10,20,"rocky_floor_tiles",9,null],["Tile",-10,21,"rocky_floor_tiles",9,null],["Tile",-10,23,"rocky_floor_tiles",9,null],["Tile",-10,24,"rocky_floor_tiles",9,null],["Tile",-10,25,"rocky_floor_tiles",9,null],["Tile",-10,26,"rocky_floor_tiles",9,null],["Tile",-9,18,"rocky_floor_tiles",9,null],["Tile",-9,26,"rocky_floor_tiles",9,null],["Tile",-7,27,"rocky_floor_tiles",9,null],["Tile",-13,22,"rocky_floor_tiles",9,null],["Tile",-12,19,"rocky_floor_tiles",9,null],["Tile",-12,20,"rocky_floor_tiles",9,null],["Tile",-12,21,"rocky_floor_tiles",9,null],["Tile",-12,23,"rocky_floor_tiles",9,null],["Tile",-12,24,"rocky_floor_tiles",9,null],["Tile",-12,25,"rocky_floor_tiles",9,null],["Tile",-11,18,"rocky_floor_tiles",9,null],["Tile",-11,26,"rocky_floor_tiles",9,null],["Tile",-8,27,"rocky_floor_tiles",9,null],["Tile",-14,22,"rocky_floor_tiles",9,null],["Tile",-13,19,"rocky_floor_tiles",9,null],["Tile",-13,20,"rocky_floor_tiles",9,null],["Tile",-13,21,"rocky_floor_tiles",9,null],["Tile",-13,23,"rocky_floor_tiles",9,null],["Tile",-13,24,"rocky_floor_tiles",9,null],["Tile",-13,25,"rocky_floor_tiles",9,null],["Tile",-12,18,"rocky_floor_tiles",9,null],["Tile",-12,26,"rocky_floor_tiles",9,null],["Tile",-9,17,"rocky_floor_tiles",9,null],["Tile",-9,27,"rocky_floor_tiles",9,null],["Tile",-15,22,"rocky_floor_tiles",9,null],["Tile",-14,19,"rocky_floor_tiles",9,null],["Tile",-14,20,"rocky_floor_tiles",9,null],["Tile",-14,21,"rocky_floor_tiles",9,null],["Tile",-14,23,"rocky_floor_tiles",9,null],["Tile",-14,24,"rocky_floor_tiles",9,null],["Tile",-14,25,"rocky_floor_tiles",9,null],["Tile",-13,18,"rocky_floor_tiles",9,null],["Tile",-13,26,"rocky_floor_tiles",9,null],["Tile",-10,17,"rocky_floor_tiles",9,null],["Tile",-10,27,"rocky_floor_tiles",9,null],["Tile",-12,17,"rocky_floor_tiles",9,null],["Tile",-11,16,"rocky_floor_tiles",9,null],["Tile",-11,17,"rocky_floor_tiles",9,null],["Tile",-10,16,"rocky_floor_tiles",9,null],["Tile",-9,16,"rocky_floor_tiles",9,null],["Tile",-8,15,"rocky_floor_tiles",9,null],["Tile",-8,16,"rocky_floor_tiles",9,null],["Tile",-9,15,"rocky_floor_tiles",9,null],["Tile",-8,14,"rocky_floor_tiles",9,null],["Tile",5,11,"rocky_floor_tiles",9,null],["Tile",6,11,"rocky_floor_tiles",9,null],["Tile",6,12,"rocky_floor_tiles",9,null],["Tile",6,13,"rocky_floor_tiles",9,null],["Tile",6,14,"rocky_floor_tiles",9,null],["Tile",6,17,"rocky_floor_tiles",9,null],["Tile",7,12,"rocky_floor_tiles",9,null],["Tile",7,13,"rocky_floor_tiles",9,null],["Tile",7,14,"rocky_floor_tiles",9,null],["Tile",7,15,"rocky_floor_tiles",9,null],["Tile",7,16,"rocky_floor_tiles",9,null],["Tile",7,17,"rocky_floor_tiles",9,null],["Tile",7,18,"rocky_floor_tiles",9,null],["Tile",8,15,"rocky_floor_tiles",9,null],["Tile",5,10,"rocky_floor_tiles",9,null],["Tile",7,11,"rocky_floor_tiles",9,null],["Tile",7,19,"rocky_floor_tiles",9,null],["Tile",8,11,"rocky_floor_tiles",9,null],["Tile",8,12,"rocky_floor_tiles",9,null],["Tile",8,13,"rocky_floor_tiles",9,null],["Tile",8,14,"rocky_floor_tiles",9,null],["Tile",8,16,"rocky_floor_tiles",9,null],["Tile",8,17,"rocky_floor_tiles",9,null],["Tile",8,18,"rocky_floor_tiles",9,null],["Tile",8,19,"rocky_floor_tiles",9,null],["Tile",9,12,"rocky_floor_tiles",9,null],["Tile",9,13,"rocky_floor_tiles",9,null],["Tile",9,14,"rocky_floor_tiles",9,null],["Tile",9,15,"rocky_floor_tiles",9,null],["Tile",9,16,"rocky_floor_tiles",9,null],["Tile",9,17,"rocky_floor_tiles",9,null],["Tile",9,18,"rocky_floor_tiles",9,null],["Tile",10,15,"rocky_floor_tiles",9,null],["Tile",6,10,"rocky_floor_tiles",9,null],["Tile",6,20,"rocky_floor_tiles",9,null],["Tile",9,11,"rocky_floor_tiles",9,null],["Tile",9,19,"rocky_floor_tiles",9,null],["Tile",10,12,"rocky_floor_tiles",9,null],["Tile",10,13,"rocky_floor_tiles",9,null],["Tile",10,14,"rocky_floor_tiles",9,null],["Tile",10,16,"rocky_floor_tiles",9,null],["Tile",10,17,"rocky_floor_tiles",9,null],["Tile",10,18,"rocky_floor_tiles",9,null],["Tile",11,15,"rocky_floor_tiles",9,null],["Tile",6,21,"rocky_floor_tiles",9,null],["Tile",7,20,"rocky_floor_tiles",9,null],["Tile",7,21,"rocky_floor_tiles",9,null],["Tile",7,22,"rocky_floor_tiles",9,null],["Tile",8,20,"rocky_floor_tiles",9,null],["Tile",8,21,"rocky_floor_tiles",9,null],["Tile",9,20,"rocky_floor_tiles",9,null],["Tile",9,21,"rocky_floor_tiles",9,null],["Tile",10,19,"rocky_floor_tiles",9,null],["Tile",10,20,"rocky_floor_tiles",9,null],["Tile",10,21,"rocky_floor_tiles",9,null],["Tile",11,14,"rocky_floor_tiles",9,null],["Tile",11,16,"rocky_floor_tiles",9,null],["Tile",11,17,"rocky_floor_tiles",9,null],["Tile",11,18,"rocky_floor_tiles",9,null],["Tile",11,19,"rocky_floor_tiles",9,null],["Tile",11,20,"rocky_floor_tiles",9,null],["Tile",12,17,"rocky_floor_tiles",9,null],["Tile",6,22,"rocky_floor_tiles",9,null],["Tile",8,22,"rocky_floor_tiles",9,null],["Tile",8,23,"rocky_floor_tiles",9,null],["Tile",9,22,"rocky_floor_tiles",9,null],["Tile",10,22,"rocky_floor_tiles",9,null],["Tile",11,21,"rocky_floor_tiles",9,null],["Tile",11,22,"rocky_floor_tiles",9,null],["Tile",12,15,"rocky_floor_tiles",9,null],["Tile",12,16,"rocky_floor_tiles",9,null],["Tile",12,18,"rocky_floor_tiles",9,null],["Tile",12,19,"rocky_floor_tiles",9,null],["Tile",12,20,"rocky_floor_tiles",9,null],["Tile",12,21,"rocky_floor_tiles",9,null],["Tile",13,18,"rocky_floor_tiles",9,null],["Tile",5,23,"rocky_floor_tiles",9,null],["Tile",6,23,"rocky_floor_tiles",9,null],["Tile",7,23,"rocky_floor_tiles",9,null],["Tile",7,24,"rocky_floor_tiles",9,null],["Tile",9,23,"rocky_floor_tiles",9,null],["Tile",10,23,"rocky_floor_tiles",9,null],["Tile",3,24,"rocky_floor_tiles",9,null],["Tile",4,24,"rocky_floor_tiles",9,null],["Tile",4,25,"rocky_floor_tiles",9,null],["Tile",5,24,"rocky_floor_tiles",9,null],["Tile",5,25,"rocky_floor_tiles",9,null],["Tile",6,24,"rocky_floor_tiles",9,null],["Tile",6,25,"rocky_floor_tiles",9,null],["Tile",7,25,"rocky_floor_tiles",9,null],["Tile",7,26,"rocky_floor_tiles",9,null],["Tile",8,24,"rocky_floor_tiles",9,null],["Tile",8,25,"rocky_floor_tiles",9,null],["Tile",9,24,"rocky_floor_tiles",9,null],["Tile",9,25,"rocky_floor_tiles",9,null],["Tile",10,24,"rocky_floor_tiles",9,null],["Tile",10,25,"rocky_floor_tiles",9,null],["Tile",11,23,"rocky_floor_tiles",9,null],["Tile",11,24,"rocky_floor_tiles",9,null],["Tile",2,25,"rocky_floor_tiles",9,null],["Tile",3,25,"rocky_floor_tiles",9,null],["Tile",3,26,"rocky_floor_tiles",9,null],["Tile",4,26,"rocky_floor_tiles",9,null],["Tile",5,26,"rocky_floor_tiles",9,null],["Tile",6,26,"rocky_floor_tiles",9,null],["Tile",6,27,"rocky_floor_tiles",9,null],["Tile",8,26,"rocky_floor_tiles",9,null],["Tile",9,26,"rocky_floor_tiles",9,null],["Tile",1,26,"rocky_floor_tiles",9,null],["Tile",1,27,"rocky_floor_tiles",9,null],["Tile",2,26,"rocky_floor_tiles",9,null],["Tile",2,27,"rocky_floor_tiles",9,null],["Tile",3,27,"rocky_floor_tiles",9,null],["Tile",4,27,"rocky_floor_tiles",9,null],["Tile",4,28,"rocky_floor_tiles",9,null],["Tile",5,27,"rocky_floor_tiles",9,null],["Tile",7,27,"rocky_floor_tiles",9,null],["Tile",-1,27,"rocky_floor_tiles",9,null],["Tile",0,27,"rocky_floor_tiles",9,null],["Tile",0,28,"rocky_floor_tiles",9,null],["Tile",1,28,"rocky_floor_tiles",9,null],["Tile",2,28,"rocky_floor_tiles",9,null],["Tile",3,28,"rocky_floor_tiles",9,null],["Tile",3,29,"rocky_floor_tiles",9,null],["Tile",5,28,"rocky_floor_tiles",9,null],["Tile",6,28,"rocky_floor_tiles",9,null],["Tile",-2,27,"rocky_floor_tiles",9,null],["Tile",-1,28,"rocky_floor_tiles",9,null],["Tile",2,29,"rocky_floor_tiles",9,null],["Tile",-4,27,"rocky_floor_tiles",9,null],["Tile",-3,28,"rocky_floor_tiles",9,null],["Tile",-2,28,"rocky_floor_tiles",9,null],["Tile",0,29,"rocky_floor_tiles",9,null],["Tile",4,10,"rocky_floor_tiles",9,null],["Tile",1,29,"rocky_floor_tiles",9,null],["Tile",-5,28,"rocky_floor_tiles",9,null],["Tile",-4,28,"rocky_floor_tiles",9,null],["Tile",-4,29,"rocky_floor_tiles",9,null],["Tile",-3,29,"rocky_floor_tiles",9,null],["Tile",-2,29,"rocky_floor_tiles",9,null],["Tile",-1,29,"rocky_floor_tiles",9,null],["Tile",-1,30,"rocky_floor_tiles",9,null],["Tile",-7,28,"rocky_floor_tiles",9,null],["Tile",-6,27,"rocky_floor_tiles",9,null],["Tile",-6,28,"rocky_floor_tiles",9,null],["Tile",-6,29,"rocky_floor_tiles",9,null],["Tile",-5,29,"rocky_floor_tiles",9,null],["Tile",-3,30,"rocky_floor_tiles",9,null],["Tile",-12,27,"rocky_floor_tiles",9,null],["Tile",-11,27,"rocky_floor_tiles",9,null],["Tile",-11,28,"rocky_floor_tiles",9,null],["Tile",-10,28,"rocky_floor_tiles",9,null],["Tile",-9,28,"rocky_floor_tiles",9,null],["Tile",-8,28,"rocky_floor_tiles",9,null],["Tile",-8,29,"rocky_floor_tiles",9,null],["Tile",-15,21,"rocky_floor_tiles",9,null],["Tile",-14,18,"rocky_floor_tiles",9,null],["Tile",-13,17,"rocky_floor_tiles",9,null],["Tile",-12,16,"rocky_floor_tiles",9,null],["Tile",-11,15,"rocky_floor_tiles",9,null],["Tile",-10,15,"rocky_floor_tiles",9,null],["Tile",-9,14,"rocky_floor_tiles",9,null],["Tile",-9,13,"rocky_floor_tiles",9,null],["Tile",-8,12,"rocky_floor_tiles",9,null],["Tile",-8,13,"rocky_floor_tiles",9,null],["Tile",-7,12,"rocky_floor_tiles",9,null],["Tile",-7,13,"rocky_floor_tiles",9,null],["Tile",-6,12,"rocky_floor_tiles",9,null],["Tile",-5,11,"rocky_floor_tiles",9,null],["Tile",-6,11,"rocky_floor_tiles",9,null],["Tile",-4,10,"rocky_floor_tiles",9,null],["Tile",-1,9,"rocky_floor_tiles",7,null],["Tile",-5,30,"rocky_floor_tiles",9,null],["Tile",-4,30,"rocky_floor_tiles",9,null],["Tile",-2,30,"rocky_floor_tiles",9,null],["Tile",-2,31,"rocky_floor_tiles",9,null],["Tile",0,30,"rocky_floor_tiles",9,null],["Tile",1,30,"rocky_floor_tiles",9,null],["Tile",-7,29,"rocky_floor_tiles",9,null],["Tile",-7,30,"rocky_floor_tiles",9,null],["Tile",-6,30,"rocky_floor_tiles",9,null],["Tile",-4,31,"rocky_floor_tiles",9,null],["Tile",-10,29,"rocky_floor_tiles",9,null],["Tile",-9,29,"rocky_floor_tiles",9,null],["Tile",-9,30,"rocky_floor_tiles",9,null],["Tile",-8,30,"rocky_floor_tiles",9,null],["Tile",-6,31,"rocky_floor_tiles",9,null],["Tile",-12,28,"rocky_floor_tiles",9,null],["Tile",-12,29,"rocky_floor_tiles",9,null],["Tile",-11,29,"rocky_floor_tiles",9,null],["Tile",-11,30,"rocky_floor_tiles",9,null],["Tile",-10,30,"rocky_floor_tiles",9,null],["Tile",-8,31,"rocky_floor_tiles",9,null],["Tile",-13,27,"rocky_floor_tiles",9,null],["Tile",-13,28,"rocky_floor_tiles",9,null],["Tile",-15,24,"rocky_floor_tiles",9,null],["Tile",-14,26,"rocky_floor_tiles",9,null],["Tile",-14,27,"rocky_floor_tiles",9,null],["Tile",1,9,"rocky_floor_tiles",7,null],["Tile",2,9,"rocky_floor_tiles",9,null],["Tile",8,27,"rocky_floor_tiles",9,null],["Tile",9,27,"rocky_floor_tiles",9,null],["Tile",10,26,"rocky_floor_tiles",9,null],["Tile",6,29,"rocky_floor_tiles",9,null],["Tile",7,28,"rocky_floor_tiles",9,null],["Tile",8,28,"rocky_floor_tiles",9,null],["Tile",9,28,"rocky_floor_tiles",9,null],["Tile",10,27,"rocky_floor_tiles",9,null],["Tile",5,29,"rocky_floor_tiles",9,null],["Tile",4,29,"rocky_floor_tiles",9,null],["Tile",5,30,"rocky_floor_tiles",9,null],["Tile",7,29,"rocky_floor_tiles",9,null],["Tile",8,29,"rocky_floor_tiles",9,null],["Tile",11,25,"rocky_floor_tiles",9,null],["Tile",11,26,"rocky_floor_tiles",9,null],["Tile",11,27,"rocky_floor_tiles",9,null],["Tile",12,22,"rocky_floor_tiles",9,null],["Tile",12,23,"rocky_floor_tiles",9,null],["Tile",12,24,"rocky_floor_tiles",9,null],["Tile",12,25,"rocky_floor_tiles",9,null],["Tile",12,26,"rocky_floor_tiles",9,null],["Tile",13,23,"rocky_floor_tiles",9,null],["Tile",10,28,"rocky_floor_tiles",9,null],["Tile",6,30,"rocky_floor_tiles",9,null],["Tile",9,29,"rocky_floor_tiles",9,null],["Tile",3,30,"rocky_floor_tiles",9,null],["Tile",4,30,"rocky_floor_tiles",9,null],["Tile",6,31,"rocky_floor_tiles",9,null],["Tile",7,30,"rocky_floor_tiles",9,null],["Tile",8,30,"rocky_floor_tiles",9,null],["Tile",9,30,"rocky_floor_tiles",9,null],["Tile",10,29,"rocky_floor_tiles",9,null],["Tile",1,31,"rocky_floor_tiles",9,null],["Tile",2,30,"rocky_floor_tiles",9,null],["Tile",2,31,"rocky_floor_tiles",9,null],["Tile",3,31,"rocky_floor_tiles",9,null],["Tile",4,31,"rocky_floor_tiles",9,null],["Tile",4,32,"rocky_floor_tiles",9,null],["Tile",5,31,"rocky_floor_tiles",9,null],["Tile",7,31,"rocky_floor_tiles",9,null],["Tile",0,31,"rocky_floor_tiles",9,null],["Tile",3,32,"rocky_floor_tiles",9,null],["Tile",-1,31,"rocky_floor_tiles",9,null],["Tile",-1,32,"rocky_floor_tiles",9,null],["Tile",0,32,"rocky_floor_tiles",9,null],["Tile",1,32,"rocky_floor_tiles",9,null],["Tile",2,32,"rocky_floor_tiles",9,null],["Tile",2,33,"rocky_floor_tiles",9,null],["Tile",5,32,"rocky_floor_tiles",9,null],["Tile",-3,31,"rocky_floor_tiles",9,null],["Tile",-2,32,"rocky_floor_tiles",9,null],["Tile",1,33,"rocky_floor_tiles",9,null],["Tile",-5,31,"rocky_floor_tiles",9,null],["Tile",-5,32,"rocky_floor_tiles",9,null],["Tile",-4,32,"rocky_floor_tiles",9,null],["Tile",-4,33,"rocky_floor_tiles",9,null],["Tile",-3,32,"rocky_floor_tiles",9,null],["Tile",-3,33,"rocky_floor_tiles",9,null],["Tile",-2,33,"rocky_floor_tiles",9,null],["Tile",-1,33,"rocky_floor_tiles",9,null],["Tile",-1,34,"rocky_floor_tiles",9,null],["Tile",0,33,"rocky_floor_tiles",9,null],["Tile",-6,32,"rocky_floor_tiles",9,null],["Tile",-5,33,"rocky_floor_tiles",9,null],["Tile",-2,34,"rocky_floor_tiles",9,null],["Tile",-8,32,"rocky_floor_tiles",9,null],["Tile",-7,31,"rocky_floor_tiles",9,null],["Tile",-7,32,"rocky_floor_tiles",9,null],["Tile",-7,33,"rocky_floor_tiles",9,null],["Tile",-6,33,"rocky_floor_tiles",9,null],["Tile",-4,34,"rocky_floor_tiles",9,null],["Tile",-9,31,"rocky_floor_tiles",9,null],["Tile",-9,32,"rocky_floor_tiles",9,null],["Tile",-8,33,"rocky_floor_tiles",9,null],["Tile",-5,34,"rocky_floor_tiles",9,null],["Tile",-10,31,"rocky_floor_tiles",9,null],["Tile",-10,32,"rocky_floor_tiles",9,null],["Tile",-9,33,"rocky_floor_tiles",9,null],["Tile",-6,34,"rocky_floor_tiles",9,null],["Tile",-11,31,"rocky_floor_tiles",9,null],["Tile",-12,30,"rocky_floor_tiles",9,null],["Tile",-12,31,"rocky_floor_tiles",9,null],["Tile",-11,32,"rocky_floor_tiles",9,null],["Tile",-13,29,"rocky_floor_tiles",9,null],["Tile",-13,30,"rocky_floor_tiles",9,null],["Tile",-15,26,"rocky_floor_tiles",9,null],["Tile",-14,28,"rocky_floor_tiles",9,null],["Tile",-14,29,"rocky_floor_tiles",9,null],["Tile",-15,25,"rocky_floor_tiles",9,null],["Tile",-16,24,"rocky_floor_tiles",9,null],["Tile",-15,23,"rocky_floor_tiles",9,null],["Tile",-15,27,"rocky_floor_tiles",9,null],["Tile",-5,10,"rocky_floor_tiles",9,null],["Tile",-2,9,"rocky_floor_tiles",7,null],["Tile",-1,8,"rocky_floor_tiles",7,null],["Tile",-3,9,"rocky_floor_tiles",7,null],["Wall",-3,9,"flat_stone_walls",12,"Left"],["Tile",-2,8,"rocky_floor_tiles",7,null],["Tile",-2,6,"rocky_floor_tiles",7,null],["Wall",-2,6,"flat_stone_walls",12,"Left"],["Tile",-1,7,"rocky_floor_tiles",7,null],["Tile",-1,6,"rocky_floor_tiles",7,null],["Tile",0,7,"rocky_floor_tiles",7,null],["Tile",-1,5,"rocky_floor_tiles",7,null],["Tile",0,6,"rocky_floor_tiles",7,null],["Tile",-1,4,"rocky_floor_tiles",7,null],["Tile",0,5,"rocky_floor_tiles",7,null],["Tile",0,4,"rocky_floor_tiles",7,null],["Tile",1,5,"rocky_floor_tiles",7,null],["Wall",1,5,"flat_stone_walls",13,"Right"],["Tile",1,4,"rocky_floor_tiles",7,null],["Wall",1,4,"flat_stone_walls",13,"Right"],["Tile",-1,3,"rocky_floor_tiles",7,null],["Tile",1,3,"rocky_floor_tiles",7,null],["Wall",1,3,"flat_stone_walls",13,"Right"],["Tile",1,6,"rocky_floor_tiles",7,null],["Wall",1,6,"flat_stone_walls",13,"Right"],["Tile",0,8,"rocky_floor_tiles",7,null],["Tile",1,8,"rocky_floor_tiles",7,null],["Wall",1,8,"flat_stone_walls",13,"Right"],["Tile",-2,7,"rocky_floor_tiles",7,null],["Tile",1,7,"rocky_floor_tiles",7,null],["Tile",2,7,"rocky_floor_tiles",7,null],["Wall",2,7,"flat_stone_walls",12,"Left"],["Wall",2,7,"flat_stone_walls",13,"Right"],["Wall",-3,2,"flat_stone_walls",19,"Right"],["Wall",-3,1,"flat_stone_walls",19,"Right"],["Wall",-3,0,"flat_stone_walls",19,"Right"],["Wall",-3,-1,"flat_stone_walls",19,"Right"],["Wall",-3,-2,"flat_stone_walls",19,"Right"],["Wall",-2,3,"flat_stone_walls",20,"Left"],["Wall",-2,3,"flat_stone_walls",13,"Right"],["Wall",2,2,"flat_stone_walls",20,"Left"],["Wall",-2,4,"flat_stone_walls",13,"Right"],["Wall",-3,8,"flat_stone_walls",13,"Right"],["Wall",2,8,"flat_stone_walls",12,"Left"],["Wall",-2,5,"flat_stone_walls",13,"Right"],["Wall",-3,7,"flat_stone_walls",13,"Right"],["Wall",-3,6,"flat_stone_walls",13,"Right"],["Wall",-4,9,"flat_stone_walls",13,"Right"]]}],"transitions":[]}]}');

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
