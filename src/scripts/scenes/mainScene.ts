import GameLogo from '../objects/gameLogo'
import FpsText from '../objects/fpsText'
import TileSet from '../objects/tileset'
import Tile from '../objects/tile'

export default class MainScene extends Phaser.Scene {
  fpsText
  tileSet : TileSet
  graphics : Phaser.GameObjects.Graphics
  playerPosTest : Phaser.Geom.Point
  pointer : Phaser.Input.Pointer
  centerPoint : Phaser.Geom.Point

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    // new GameLogo(this, this.cameras.main.width / 2, this.cameras.main.height / 2);
    this.fpsText = new FpsText(this);
    this.tileSet = new TileSet();
    this.graphics = this.add.graphics();
    this.playerPosTest = new Phaser.Geom.Point;
    this.pointer = this.input.activePointer;
    this.centerPoint = new Phaser.Geom.Point(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2
    );

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px'
      })
      .setOrigin(1, 0);

    let music: Phaser.Sound.BaseSound;
    music = this.sound.add('spinning_rat_power', { loop: true});
    music.play();
  }

  update() {
    this.fpsText.update();
    this.drawTileSet();
    this.playerPosTest.x += 2;
    this.playerPosTest.y += 0.5;
  }

  drawTileSet() {
    const playerCenter = new Phaser.Geom.Point(
      this.centerPoint.x - this.playerPosTest.x,
      this.centerPoint.y - this.playerPosTest.y
    );

    const cursor = new Phaser.Geom.Point(
      this.pointer.x - this.centerPoint.x + this.playerPosTest.x,
      this.pointer.y - this.centerPoint.y + this.playerPosTest.y
    );

    // Clear previous drawn lines
    this.graphics.clear();

    // Center point
    this.graphics.fillStyle(0xFF0000, 1);
    this.graphics.fillCircle(this.centerPoint.x, this.centerPoint.y, 4);

    // Draw tiles
    const playerTilePos = TileSet.getTilePosFromUnitPos(this.playerPosTest);
    const proximityTiles = this.tileSet.getProximityTileList(playerTilePos, 8);

    proximityTiles.forEach((tile) => {
      const points = Tile.getPoints(tile.pos, playerCenter);
      this.drawDebugTile(points, 2, 0x0000FF);
    });

    // Draw player tile
    const points = Tile.getPoints(playerTilePos, playerCenter);
    this.drawDebugTile(points, 3, 0xFF0000);

    // Draw cursor tile
    const cursorTilePos = TileSet.getTilePosFromUnitPos(cursor)
    const cursorTilePoints = Tile.getPoints(cursorTilePos, playerCenter);
    this.drawDebugTile(cursorTilePoints, 3, 0xFFFF00);
  }

  drawDebugTile(points: Phaser.Geom.Point[], lineWidth: number, lineColor: number) {
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
