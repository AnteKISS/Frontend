import Act from '../tiles/act'
import Area from '../tiles/area'
import Campaign from '../tiles/campaign'
import CampaignSerializer from '../tiles/campaignserializer'
import Pathfinding from '../tiles/pathfinding'
import TileDrawer from '../tiles/tiledrawer'
import GameObjectSprite from '../tiles/gameobjectsprite'
import Tile from '../tiles/tile'
import TileModule from '../tiles/tilemodule'
import Transition from '../tiles/transition'
import GameObject from '../tiles/gameobject'
import { EntityManager } from './entityManager'
import { PlayerEntity } from '../entities/playerEntity'

export default class CampaignManager {
  private static instance: CampaignManager;

  private scene: Phaser.Scene;
  private campaign: Campaign;
  private graphics: Phaser.GameObjects.Graphics;
  private tiledrawer: TileDrawer;
  private gameObjectSprites: Map<GameObject, GameObjectSprite>;
  private showEditorSprites: boolean;

  private constructor() { }

  public static init(scene: Phaser.Scene) {
    let instance = CampaignManager.instance;

    if (instance?.gameObjectSprites)
      for (const sprite of instance.gameObjectSprites.values())
        sprite.destroy();

    CampaignManager.instance = new CampaignManager();
    instance = CampaignManager.instance;
    instance.scene = scene;
    instance.graphics = instance.scene.add.graphics();
    instance.tiledrawer = new TileDrawer(instance.graphics);
    instance.campaign = new Campaign("Default Campaign");
    instance.gameObjectSprites = new Map();
    instance.showEditorSprites = false;
    instance.scene.cameras.getCamera("uiCamera")!.ignore(instance.graphics);
    instance.scene.cameras.getCamera("minimapCamera")!.ignore(instance.graphics);
  }

  public static getInstance(): CampaignManager {
    return CampaignManager.instance;
  }

  public setVisibleEditorSprites(show: boolean): void {
    this.showEditorSprites = show;
  }

  public getCampaign(): Campaign {
    return this.campaign;
  }

  public getScene(): Phaser.Scene {
    return this.scene;
  }

  /******************************/
  //        LOAD / SAVE         //
  /******************************/

  public loadCampaign(json: string): void {
    this.campaign = CampaignSerializer.import(json);
    this.loadCurrentArea();
  }

  public loadCurrentArea(): void {
    for (const GAME_OBJECT_SPRITE of this.gameObjectSprites.values())
      GAME_OBJECT_SPRITE.destroy();
    this.gameObjectSprites.clear();

    for (const GAME_OBJECT of this.campaign.currentArea().getGameObjects()) {
      const GAME_OBJECT_SPRITE = new GameObjectSprite(this.scene, GAME_OBJECT, this.showEditorSprites);
      this.gameObjectSprites.set(GAME_OBJECT, GAME_OBJECT_SPRITE);
      this.scene.cameras.getCamera("uiCamera")!.ignore(GAME_OBJECT_SPRITE);
      this.scene.cameras.getCamera("minimapCamera")!.ignore(GAME_OBJECT_SPRITE);
    }

    this.campaign.currentArea().activateSpawners();
  }

  /******************************/
  //            ACTS            //
  /******************************/

  public addAct(name: string): void {
    this.campaign.addAct(new Act(name));
    this.loadCurrentArea();
  }

  public deleteCurrentAct(): void {
    this.campaign.deleteCurrentAct();
    this.loadCurrentArea();
  }

  public previousAct(): void {
    this.campaign.previousAct();
    this.loadCurrentArea();
  }

  public nextAct(): void {
    this.campaign.nextAct();
    this.loadCurrentArea();
  }

  public renameAct(name: string): void {
    this.campaign.currentAct().name = name;
  }

  public getActIndex(): number {
    return this.campaign.actIndex;
  }

  public getActAmount(): number {
    return this.campaign.acts.length;
  }

  public getActName(): string {
    return this.campaign.currentAct().name;
  }

  /******************************/
  //           AREAS            //
  /******************************/

  public addArea(name: string): void {
    this.campaign.currentAct().addArea(new Area(name));
    this.loadCurrentArea();
  }

  public deleteCurrentArea(): void {
    this.campaign.currentAct().deleteCurrentArea();
    this.loadCurrentArea();
  }

  public previousArea(): void {
    this.campaign.currentAct().previousArea();
    this.loadCurrentArea();
  }

  public nextArea(): void {
    this.campaign.currentAct().nextArea();
    this.loadCurrentArea();
  }

  public renameArea(name: string): void {
    this.campaign.currentArea().name = name;
  }

  public getAreaIndex(): number {
    return this.campaign.currentAct().areaIndex;
  }

  public getAreaAmount(): number {
    return this.campaign.currentAct().areas.length;
  }

  public getAreaName(): string {
    return this.campaign.currentArea().name;
  }

  /******************************/
  //        GAME OBJECTS        //
  /******************************/

  public getTile(x: number, y: number): Tile | undefined {
    return this.campaign.currentArea().getGameObjectByType(x, y, Tile);
  }

  public getTileFromPixelPosition(pixelX: number, pixelY: number): Tile | undefined {
    const PIXEL_POS = TileModule.getTilePosFromUnitPos(pixelX, pixelY);
    return this.getTile(PIXEL_POS.x, PIXEL_POS.y);
  }

  public getGameObjectByType<T extends GameObject>(tileX: number, tileY: number, constructor: new (...args: any[]) => T): T | undefined {
    return this.campaign.currentArea().getGameObjectByType(tileX, tileY, constructor);
  }

  public addGameObject(gameObject: GameObject) {
    const EXISTING_GAME_OBJECT = this.campaign.currentArea().getGameObjectOfSameType(gameObject.tileX, gameObject.tileY, gameObject);
    if (EXISTING_GAME_OBJECT) {
      const SPRITE = this.gameObjectSprites.get(EXISTING_GAME_OBJECT);
      if (SPRITE)
        SPRITE.destroy();
      else {
        console.error("CampaignManager::addGame - Found GameObject to overwrite, but no associated GameObjectSprite");
        return;
      }
    }

    this.campaign.currentArea().addGameObject(gameObject);
    const SPRITE = new GameObjectSprite(this.scene, gameObject, this.showEditorSprites);
    this.scene.cameras.getCamera("uiCamera")!.ignore(SPRITE);
    this.scene.cameras.getCamera("minimapCamera")!.ignore(SPRITE);
    this.gameObjectSprites.set(gameObject, SPRITE);
  }

  public deleteGameObjects(x: number, y: number): void {
    const GAME_OBJECTS_TO_DELETE = this.campaign.currentArea().removeGameObjects(x, y);
    if (GAME_OBJECTS_TO_DELETE) {
      for (const GAME_OBJECT of GAME_OBJECTS_TO_DELETE) {
        const GAME_OBJECT_SPRITE = this.gameObjectSprites.get(GAME_OBJECT);
        if (GAME_OBJECT_SPRITE)
          GAME_OBJECT_SPRITE.destroy();
        else
          console.error("CampaignManager::deleteGameObjects - GameObject to delete has no associated GameObjectSprite.");
        this.gameObjectSprites.delete(GAME_OBJECT);
      }
    }
  }

  /******************************/
  //         TRANSITION         //
  /******************************/

  public transition(player: PlayerEntity, transitionName: string): Transition | null {
    const transition = this.campaign.currentAct().getTransition(transitionName);
    if (!transition) return null;

    EntityManager.instance.hideAreaEntities();
    EntityManager.instance.removeAreaEntity(player);

    const transitionSuccessful = this.campaign.currentAct().transition(transition.targetArea);
    if (transitionSuccessful) this.loadCurrentArea();

    EntityManager.instance.addAreaEntity(player);
    EntityManager.instance.showAreaEntities();

    return transition;
  }

  /******************************/
  //         DEBUG DRAW         //
  /******************************/

  public drawDebugPoint(pixelX: number, pixelY: number, color: number): void {
    this.graphics.fillStyle(color, 1);
    this.graphics.fillCircle(pixelX, pixelY, 4);
  }

  public drawDebugTile(pixelX: number, pixelY: number, color: number): void {
    const TILE_POS = TileModule.getTilePosFromUnitPos(pixelX, pixelY);
    this.tiledrawer.drawDebugTilePos(TILE_POS.x, TILE_POS.y, color);
  }

  public drawDebugCurrentTileSet(): void {
    this.tiledrawer.drawDebugTileList(this.campaign.currentArea().getTiles());
  }

  public drawDebugProximityTiles(pixelX: number, pixelY: number, depth: number): void {
    const TILE_POS = TileModule.getTilePosFromUnitPos(pixelX, pixelY);
    const PROXIMITY_TILES = this.campaign.currentArea().getProximityTileList(TILE_POS.x, TILE_POS.y, depth);
    this.tiledrawer.drawDebugTileList(PROXIMITY_TILES);
  }

  public drawDebugProximityTilePos(pixelX: number, pixelY: number, color: number, brushSize: number): void {
    const TILE_POS = TileModule.getTilePosFromUnitPos(pixelX, pixelY);
    const TILES_POS = TileModule.getProximityTilePos(TILE_POS.x, TILE_POS.y, brushSize);
    for (const POS of TILES_POS)
      this.tiledrawer.drawDebugTilePos(POS.x, POS.y, color);
  }

  public drawDebugPathfinding(px1: number, py1: number, px2: number, py2: number): void {
    const TILE_1 = TileModule.getTilePosFromUnitPos(px1, py1);
    const TILE_2 = TileModule.getTilePosFromUnitPos(px2, py2);
    for (const POINT of Pathfinding.findPath(this.campaign.currentArea(), TILE_1.x, TILE_1.y, TILE_2.x, TILE_2.y))
      this.tiledrawer.drawDebugTilePos(POINT.x, POINT.y, 0x000000);
  }

  public drawDebugSpawnerRange(): void {
    for (const spawner of this.campaign.currentArea().spawners)
      this.tiledrawer.drawDebugSpawnerRange(spawner);
  }

  public clearDebugTiles(): void {
    this.graphics.clear();
  }
}
