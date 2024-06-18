import 'phaser'
import Tile, { TileType } from './tile'

export enum TileColor {
  Floor = 0x0000FF,
  Transition = 0xFFFF00,
  Player = 0xFF00FF,
  Delete = 0xFF0000,
  Configure = 0x00FF00,
  DefaultCursor = 0x00FF00
}

export default class TileDrawer {
  private graphics: Phaser.GameObjects.Graphics

  public constructor(graphics: Phaser.GameObjects.Graphics) {
    this.graphics = graphics;
  }

  public drawDebugTileList(tiles: Iterable<Tile>): void {
    for (const tile of tiles) {
      let lineColor = 0x000000;

      if (tile.type === TileType.Floor) {
        if (tile.transition !== undefined)
          lineColor = TileColor.Transition;
        else
          lineColor = TileColor.Floor;
      }

      this.drawDebugTilePos(tile.x, tile.y, lineColor);
    }
  }

  public drawDebugTilePos(tileX: number, tileY: number, fillColor: number): void {
    const points = Tile.getPointsFromTilePos(tileX, tileY);

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
}
