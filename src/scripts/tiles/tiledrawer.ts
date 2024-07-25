import Spawner from './spawner';
import Tile from './tile'
import TileModule from './tilemodule'

export enum TileColor {
  Floor = 0x0000FF,
  Transition = 0xFFFF00,
  Player = 0xFF00FF,
  Delete = 0xFF0000,
  Configure = 0x00FF00,
  DefaultCursor = 0x00FF00,
  SpawnerRange = 0x00FF99
}

export default class TileDrawer {
  private graphics: Phaser.GameObjects.Graphics

  public constructor(graphics: Phaser.GameObjects.Graphics) {
    this.graphics = graphics;
    this.graphics.setDepth(999999);
  }

  public drawDebugTileList(tiles: Iterable<Tile>): void {
    for (const tile of tiles) {
      let lineColor = 0x000000;

      if (tile.transition)
        lineColor = TileColor.Transition;
      else
        lineColor = TileColor.Floor;

      this.drawDebugTilePos(tile.x, tile.y, lineColor);
    }
  }

  public drawDebugTilePos(tileX: number, tileY: number, fillColor: number): void {
    const points = TileModule.getPointsFromTilePos(tileX, tileY);

    this.graphics.lineStyle(2, 0x000000);
    this.graphics.fillStyle(fillColor, 0.5);
    this.graphics.beginPath();

    this.graphics.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++)
      this.graphics.lineTo(points[i].x, points[i].y);

    this.graphics.lineTo(points[0].x, points[0].y);
    this.graphics.closePath();
    this.graphics.strokePath();
    this.graphics.fillPath();
  }

  public drawDebugSpawnerRange(spawner: Spawner): void {
    this.graphics.lineStyle(2, 0x000000);
    this.graphics.fillStyle(TileColor.SpawnerRange, 0.5);
    this.graphics.beginPath();

    const pos = TileModule.getUnitPosFromTilePos(spawner.tileX, spawner.tileY);
    this.graphics.moveTo(pos.x, pos.y - Tile.HALF_HEIGHT - Tile.HEIGHT * spawner.range);
    this.graphics.lineTo(pos.x + Tile.HALF_WIDTH + Tile.WIDTH * spawner.range, pos.y);
    this.graphics.lineTo(pos.x, pos.y + Tile.HALF_HEIGHT + Tile.HEIGHT * spawner.range);
    this.graphics.lineTo(pos.x - Tile.HALF_WIDTH - Tile.WIDTH * spawner.range, pos.y);
    this.graphics.lineTo(pos.x, pos.y - Tile.HALF_HEIGHT - Tile.HEIGHT * spawner.range);

    this.graphics.closePath();
    this.graphics.strokePath();
    this.graphics.fillPath();
  }
}
