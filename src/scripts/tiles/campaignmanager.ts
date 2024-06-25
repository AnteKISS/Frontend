import Act from './act'
import Area from './area'
import Campaign from './campaign'
import CampaignSerializer from './campaignserializer'
import Pathfinding from './pathfinding'
import TileDrawer from './tiledrawer'
import TileSprite from './tilesprite'
import Tile, { TileType } from './tile'
import TileSet from './tileset'

export default class CampaignManager {
  private scene: Phaser.Scene;
  private campaign: Campaign;
  private graphics: Phaser.GameObjects.Graphics;
  private tiledrawer: TileDrawer;
  private tileSprites: Map<Tile, TileSprite>;

  public constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.graphics = this.scene.add.graphics();
    this.tiledrawer = new TileDrawer(this.graphics);
    this.campaign = new Campaign("Default Campaign");
    this.tileSprites = new Map();

    if (this.scene.cameras.getCamera("uiCamera"))
      this.scene.cameras.getCamera("uiCamera").ignore(this.graphics);
  }

  // TODO: Remove this
  public getCampaign(): Campaign {
    return this.campaign;
  }

  /******************************/
  //        LOAD / SAVE         //
  /******************************/

  public loadCampaign(json: string): void {
    this.campaign = CampaignSerializer.import(json);

    for (const TILE of this.campaign.currentArea().tileSet.getTiles()) {
      const TILE_SPRITE = new TileSprite(this.scene, TILE).setDepth(-1);
      this.tileSprites.set(TILE, TILE_SPRITE);
      if (this.scene.cameras.getCamera("uiCamera"))
        this.scene.cameras.getCamera("uiCamera").ignore(TILE_SPRITE);
    }
  }

  /******************************/
  //            ACTS            //
  /******************************/

  public addAct(name: string): void {
    this.campaign.addAct(new Act(name));
  }

  public deleteCurrentAct(): void {
    this.campaign.deleteCurrentAct();
  }

  public previousAct(): void {
    this.campaign.previousAct();
  }

  public nextAct(): void {
    this.campaign.nextAct();
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
  }

  public deleteCurrentArea(): void {
    this.campaign.currentAct().deleteCurrentArea();
  }

  public previousArea(): void {
    this.campaign.currentAct().previousArea();
  }

  public nextArea(): void {
    this.campaign.currentAct().nextArea();
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
  //           TILES            //
  /******************************/

  public getTile(x: number, y: number): Tile | undefined {
    return this.campaign.currentArea().tileSet.getTile(x, y);
  }

  public addTile(x: number, y: number, type: TileType, bitmap: string, frame: number): void {
    // Overwrite existing tile
    const EXISTING_TILE = this.getTile(x, y);
    if (EXISTING_TILE) {
      const EXISTING_TILE_SPRITE = this.tileSprites.get(EXISTING_TILE);
      if (EXISTING_TILE_SPRITE)
        EXISTING_TILE_SPRITE.destroy();
      else {
        console.log("CampaignManager::addTile - Found tile to overwrite, but not associated tile sprite.");
        return;
      }
    }

    const TILE = this.campaign.currentArea().tileSet.addTile(x, y, type, bitmap, frame);
    const TILE_SPRITE = new TileSprite(this.scene, TILE).setDepth(-1);
    if (this.scene.cameras.getCamera("uiCamera"))
      this.scene.cameras.getCamera("uiCamera").ignore(TILE_SPRITE);
    this.tileSprites.set(TILE, TILE_SPRITE);
  }

  public deleteTile(x: number, y: number): void {
    const TILE = this.campaign.currentArea().tileSet.deleteTile(x, y);
    if (TILE) {
      const TILE_SPRITE = this.tileSprites.get(TILE);
      if (TILE_SPRITE)
        TILE_SPRITE.destroy();
      else
        console.error("CampaignManager::deleteTile - Tile to delete has no associated tile sprite.");
      this.tileSprites.delete(TILE);
    }
  }

  /******************************/
  //         DEBUG DRAW         //
  /******************************/

  public drawDebugPoint(pixelX: number, pixelY: number, color: number): void {
    this.graphics.fillStyle(color, 1);
    this.graphics.fillCircle(pixelX, pixelY, 4);
  }

  public drawDebugTile(pixelX: number, pixelY: number, color: number): void {
    const TILE_POS = Tile.getTilePosFromUnitPos(pixelX, pixelY);
    this.tiledrawer.drawDebugTilePos(TILE_POS.x, TILE_POS.y, color);
  }

  public drawDebugCurrentTileSet(): void {
    this.tiledrawer.drawDebugTileList(this.campaign.currentArea().tileSet.getTiles());
  }

  public drawDebugProximityTiles(pixelX: number, pixelY: number, depth: number): void {
    const TILE_POS = Tile.getTilePosFromUnitPos(pixelX, pixelY);
    const PROXIMITY_TILES = this.campaign.currentArea().tileSet.getProximityTileList(TILE_POS.x, TILE_POS.y, depth);
    this.tiledrawer.drawDebugTileList(PROXIMITY_TILES);
  }

  public drawDebugProximityTilePos(pixelX: number, pixelY: number, color: number, brushSize: number): void {
    const TILE_POS = Tile.getTilePosFromUnitPos(pixelX, pixelY);
    const TILES_POS = TileSet.getProximityTilePos(TILE_POS.x, TILE_POS.y, brushSize);
    for (const POS of TILES_POS)
      this.tiledrawer.drawDebugTilePos(POS.x, POS.y, color);
  }

  public drawDebugPathfinding(px1: number, py1: number, px2: number, py2: number): void {
    const TILE_1 = Tile.getTilePosFromUnitPos(px1, py1);
    const TILE_2 = Tile.getTilePosFromUnitPos(px2, py2);
    for (const POINT of Pathfinding.findPath(this.campaign.currentArea().tileSet, TILE_1.x, TILE_1.y, TILE_2.x, TILE_2.y))
      this.tiledrawer.drawDebugTilePos(POINT.x, POINT.y, 0x000000);
  }

  public clearDebugTiles(): void {
    this.graphics.clear();
  }
}
