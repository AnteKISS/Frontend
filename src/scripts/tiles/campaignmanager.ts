import Campaign from './campaign'
import CampaignSerializer from './campaignserializer'
import Pathfinding from './pathfinding'
import TileDrawer from './tiledrawer'
import TileSprite from './tilesprite'

export default class CampaignManager {
  private scene: Phaser.Scene;
  private campaign: Campaign;
  private graphics: Phaser.GameObjects.Graphics;
  private tiledrawer: TileDrawer;

  public constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.graphics = this.scene.add.graphics();
    this.tiledrawer = new TileDrawer(this.graphics);
    this.campaign = new Campaign("Default Campaign");

    this.scene.cameras.getCamera("uiCamera").ignore(this.graphics);
  }

  public loadCampaign(json: string): void {
    this.campaign = CampaignSerializer.import(json);

    for (const tile of this.campaign.currentArea().tileSet.getTiles()) {
      const TILE_SPRITE = new TileSprite(this.scene, tile, "rocky_floor_tiles", 8);
      TILE_SPRITE.setDepth(-1);
      this.scene.cameras.getCamera("uiCamera").ignore(TILE_SPRITE);
    }
  }

  public drawDebugPathfinding(x1: number, y1: number, x2: number, y2: number): void {
    for (const POINT of Pathfinding.findPath(this.campaign.currentArea().tileSet, x1, y1, x2, y2))
      this.tiledrawer.drawDebugTilePos(POINT.x, POINT.y, 0x000000);
  }

  public drawDebugProximityTiles(x: number, y: number, depth: number): void {
    const proximityTiles = this.campaign.currentArea().tileSet.getProximityTileList(x, y, depth);
    this.tiledrawer.drawDebugTileList(proximityTiles);
  }

  public clearDebugTiles() {
    this.graphics.clear();
  }
}
