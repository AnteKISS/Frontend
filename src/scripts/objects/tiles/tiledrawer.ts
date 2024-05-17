import 'phaser'
import Tile, { TileType } from './tile'

export default class TileDrawer {
  graphics: Phaser.GameObjects.Graphics

  constructor(graphics: Phaser.GameObjects.Graphics) {
    this.graphics = graphics;
  }

  public drawDebugTileList(tiles: Iterable<Tile>, lineWidth: number) {
    for (const tile of tiles) {
      const points = Tile.getPointsFromTilePos(tile.x, tile.y);
      let lineColor = 0x000000;
      switch (tile.type) {
        case TileType.Floor:      lineColor = 0x0000FF; break;
        case TileType.Transition: lineColor = 0xFFFF00; break;
      }
      this.drawDebugTilePos(points, lineWidth, lineColor);
    }
  }

  public drawDebugTilePos(points: Phaser.Geom.Point[], lineWidth: number, lineColor: number) {
    this.graphics.lineStyle(lineWidth, lineColor);
    this.graphics.fillStyle(lineColor, 0.2);
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
