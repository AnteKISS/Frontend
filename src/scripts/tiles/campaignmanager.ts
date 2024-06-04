import Campaign from './campaign'
import CampaignSerializer from './campaignserializer'
import Pathfinding from './pathfinding'
import TileDrawer from './tiledrawer'
import TileSprite from './tilesprite'
import Tile from './tile'
import TileSet from './tileset'

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

  /******************************/
  //       LOAD CAMPAIGN        //
  /******************************/

  public loadCampaign(json: string): void {
    this.campaign = CampaignSerializer.import(json);

    for (const tile of this.campaign.currentArea().tileSet.getTiles()) {
      const TILE_SPRITE = new TileSprite(this.scene, tile, "rocky_floor_tiles", 8);
      TILE_SPRITE.setDepth(-1);
      this.scene.cameras.getCamera("uiCamera").ignore(TILE_SPRITE);
    }
  }

  /******************************/
  //         DEBUG DRAW         //
  /******************************/

  public drawDebugPoint(pixelX: number, pixelY: number, color: number) {
    this.graphics.fillStyle(color, 1);
    this.graphics.fillCircle(pixelX, pixelY, 4);
  }

  public drawDebugTile(pixelX: number, pixelY: number, color: number) {
    const TILE_POS = Tile.getTilePosFromUnitPos(pixelX, pixelY);
    this.tiledrawer.drawDebugTilePos(TILE_POS.x, TILE_POS.y, color);
  }

  public drawDebugTileSet(tileSet: TileSet) {
    this.tiledrawer.drawDebugTileList(tileSet.getTiles());
  }

  public drawDebugProximityTiles(pixelX: number, pixelY: number, depth: number): void {
    const TILE_POS = Tile.getTilePosFromUnitPos(pixelX, pixelY);
    const PROXIMITY_TILES = this.campaign.currentArea().tileSet.getProximityTileList(TILE_POS.x, TILE_POS.y, depth);
    this.tiledrawer.drawDebugTileList(PROXIMITY_TILES);
  }

  public drawDebugProximityTilePos(pixelX: number, pixelY: number, color: number, brushSize: number) {
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

  public clearDebugTiles() {
    this.graphics.clear();
  }
}
