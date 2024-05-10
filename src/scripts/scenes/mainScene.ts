import GameLogo from '../objects/gameLogo'
import FpsText from '../objects/fpsText'
import TileSet from '../objects/tileset'

export default class MainScene extends Phaser.Scene {
  fpsText
  tileSet : TileSet
  graphics : Phaser.GameObjects.Graphics
  playerPosTest : Phaser.Geom.Point

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    new GameLogo(this, this.cameras.main.width / 2, this.cameras.main.height / 2);
    this.fpsText = new FpsText(this);
    this.tileSet = new TileSet();
    this.graphics = this.add.graphics();
    this.playerPosTest = new Phaser.Geom.Point(0, 0);

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
    const center = new Phaser.Geom.Point(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2
    );

    const playerCenter = new Phaser.Geom.Point(
      center.x - this.playerPosTest.x,
      center.y - this.playerPosTest.y
    );

    // Clear previous drawn lines
    this.graphics.clear();

    // Center point
    this.graphics.fillStyle(0xFF0000, 1);
    this.graphics.fillCircle(center.x, center.y, 4);

    // Draw tiles
    this.tileSet.tiles.forEach((tile) => {
      const points = tile.getPoints(playerCenter);

      this.graphics.lineStyle(2, 0x0000FF);
      this.graphics.beginPath();
      this.graphics.moveTo(points[0].x, points[0].y);

      for (let i = 1; i < points.length; i++)
        this.graphics.lineTo(points[i].x, points[i].y);

      this.graphics.lineTo(points[0].x, points[0].y);
      this.graphics.closePath();
      this.graphics.strokePath();
    });

    // Draw player tile
    const playerTile = this.tileSet.getTileFromUnitPos(this.playerPosTest);
    const points = playerTile.getPoints(playerCenter);

    this.graphics.lineStyle(3, 0xFF0000);
    this.graphics.beginPath();
    this.graphics.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < points.length; i++)
      this.graphics.lineTo(points[i].x, points[i].y);

    this.graphics.lineTo(points[0].x, points[0].y);
    this.graphics.closePath();
    this.graphics.strokePath();
  }
}
