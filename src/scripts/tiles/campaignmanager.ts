import Campaign from './campaign'
import CampaignSerializer from './campaignserializer'

// TODO: Remove imports when they aren't necessary anymore
import TileSprite from './tilesprite'
import TileDrawer from './tiledrawer'
import Pathfinding from './pathfinding'

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

  public loadCampaign(json: string) {
    this.campaign = CampaignSerializer.import(json);

    // TODO: Abstract so we just call currentArea().getTiles()
    for (const tile of this.campaign.currentArea().tileSet.tiles.values()) {
      const TILE_SPRITE = new TileSprite(this.scene, tile, "rocky_floor_tiles", 8);
      TILE_SPRITE.setDepth(-1);
      this.scene.cameras.getCamera("uiCamera").ignore(TILE_SPRITE);
    }
  }

  // TODO: Move to drawer module/tiledrawer
  public drawPathfinding(x1, y1, x2, y2) {
    const path = Pathfinding.findPath(this.campaign.currentArea().tileSet, x1, y1, x2, y2);
    this.tiledrawer.drawDebugTilePosList(path, 2, 0x000000);
  }

  // TODO: Move to drawer module/tiledrawer
  public drawProximityTiles(x, y, depth) {
    const proximityTiles = this.campaign.currentArea().tileSet.getProximityTileList(x, y, depth);
    this.tiledrawer.drawDebugTileList(proximityTiles, 2);
  }

  // TODO: remove this later
  public clearGraphics() {
    this.graphics.clear();
  }
}
