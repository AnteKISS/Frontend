import 'phaser'
import Tile from './tile'

export default class TileDrawer {
  graphics: Phaser.GameObjects.Graphics

  constructor(graphics: Phaser.GameObjects.Graphics) {
    this.graphics = graphics;
  }

  public drawDebugTileList(tiles: Tile[], cameraUnitPos: Phaser.Geom.Point, lineWidth: number, lineColor: number) {
    tiles.forEach((tile) => {
      const points = Tile.getPoints(tile.pos, cameraUnitPos);
      this.drawDebugTilePos(points, lineWidth, lineColor);
    });
  }

  public drawDebugTilePos(points: Phaser.Geom.Point[], lineWidth: number, lineColor: number) {
    this.graphics.lineStyle(lineWidth, lineColor);
    this.graphics.beginPath();
    this.graphics.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < points.length; i++)
      this.graphics.lineTo(points[i].x, points[i].y);

    this.graphics.lineTo(points[0].x, points[0].y);
    this.graphics.closePath();
    this.graphics.strokePath();
  }
}
