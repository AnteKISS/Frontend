import 'phaser'
import Tile, { TileType } from './tile'

export enum TileColor {
  Floor = 0x0000FF,
  Transition = 0xFFFF00,
  Player = 0xFF00FF,
  Delete = 0xFF0000,
  DefaultCursor = 0x00FF00
}

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
        case TileType.Floor:      lineColor = TileColor.Floor;       break;
        case TileType.Transition: lineColor = TileColor.Transition;  break;
      }
      this.drawDebugTilePos(points, lineColor);
    }
  }

  public drawDebugTilePos(points: Phaser.Geom.Point[], lineColor: number) {
    this.graphics.lineStyle(2, 0x000000);
    this.graphics.fillStyle(lineColor, 0.5);
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
