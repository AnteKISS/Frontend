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

      if (tile.type === TileType.Floor) {
        if (tile.transition !== undefined)
          lineColor = TileColor.Transition;
        else
          lineColor = TileColor.Floor;
      }

      this.drawDebugTilePos(points, lineColor);
    }
  }

  public drawDebugTilePosList(tilesPos: Iterable<Phaser.Geom.Point>, lineWidth: number, fillColor: number) {
    for (const pos of tilesPos) {
      const points = Tile.getPointsFromTilePos(pos.x, pos.y);
      this.drawDebugTilePos(points, fillColor);
    }
  }

  public drawDebugTilePos(points: Phaser.Geom.Point[], fillColor: number) {
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
