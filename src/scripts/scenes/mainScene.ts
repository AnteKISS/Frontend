import GameLogo from '../objects/gameLogo'
import FpsText from '../objects/fpsText'
import Tile from '../objects/tiles/tile'
import TileDrawer from '../objects/tiles/tiledrawer'
import TileSet from '../objects/tiles/tileset'

export default class MainScene extends Phaser.Scene {
  fpsText : FpsText;
  tileSet : TileSet;
  graphics : Phaser.GameObjects.Graphics;
  tileDrawer : TileDrawer;
  playerPosTest : Phaser.Geom.Point;
  pointer : Phaser.Input.Pointer;
  centerPoint : Phaser.Geom.Point;
  mapEditorButton : Phaser.GameObjects.Text;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    // new GameLogo(this, this.cameras.main.width / 2, this.cameras.main.height / 2);
    this.fpsText = new FpsText(this);
    this.tileSet = new TileSet();
    this.graphics = this.add.graphics();
    this.tileDrawer = new TileDrawer(this.graphics);
    this.playerPosTest = new Phaser.Geom.Point;
    this.pointer = this.input.activePointer;
    this.centerPoint = new Phaser.Geom.Point(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2
    );
    this.mapEditorButton = this.add
      .text(50, this.cameras.main.height - 50, 'Map Editor', {
        color: '#000000',
        fontSize: '24px'
      })
      .setInteractive()
      .on('pointerdown', () => {this.scene.start('MapEditor')});

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
    const cameraUnitPos = new Phaser.Geom.Point(
      this.centerPoint.x - this.playerPosTest.x,
      this.centerPoint.y - this.playerPosTest.y
    );

    const cursorPos = new Phaser.Geom.Point(
      this.pointer.x - this.centerPoint.x + this.playerPosTest.x,
      this.pointer.y - this.centerPoint.y + this.playerPosTest.y
    );

    const playerTilePos = TileSet.getTilePosFromUnitPos(this.playerPosTest);

    // Clear previous drawn lines
    this.graphics.clear();

    // Center point
    this.graphics.fillStyle(0xFF0000, 1);
    this.graphics.fillCircle(this.centerPoint.x, this.centerPoint.y, 4);

    // Draw tiles
    const proximityTiles = this.tileSet.getProximityTileList(playerTilePos, 8);
    this.tileDrawer.drawDebugTileList(proximityTiles, cameraUnitPos, 2, 0x0000FF);

    // Draw player tile
    const points = Tile.getPoints(playerTilePos, cameraUnitPos);
    this.tileDrawer.drawDebugTilePos(points, 3, 0xFF0000);

    // Draw cursor tile
    const cursorTilePos = TileSet.getTilePosFromUnitPos(cursorPos)
    const cursorTilePoints = Tile.getPoints(cursorTilePos, cameraUnitPos);
    this.tileDrawer.drawDebugTilePos(cursorTilePoints, 3, 0xFFFF00);
  }
}
