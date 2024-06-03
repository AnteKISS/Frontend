import Tile from '../tiles/tile'

export default class TileSelector extends Phaser.GameObjects.Container {
  private static readonly TILES_PER_ROW = 6;
  private static readonly TILE_SPACING = 100;

  private tileSprites: Array<[string, number]>;
  private row: number;
  private selectedTileIndex: number;

  private outline: Phaser.GameObjects.Rectangle;
  private background: Phaser.GameObjects.Rectangle;
  private leftArrow: Phaser.GameObjects.Sprite;
  private rightArrow: Phaser.GameObjects.Sprite;
  private selectedTileGlow: Phaser.GameObjects.Sprite;
  private tiles: Array<Phaser.GameObjects.Sprite>;

  constructor(scene: Phaser.Scene) {
    super(scene, 640, 640);

    const TILE_BITMAPS = new Array<[string, number]>(['rocky_floor_tiles', 15]);

    this.tileSprites = [];
    for (const BITMAP of TILE_BITMAPS)
      for (let i = 1; i < BITMAP[1]; i++)
        this.tileSprites.push([BITMAP[0], i]);

    this.row = 0;
    this.selectedTileIndex = 0;

    this.scene = scene;
    this.outline = this.scene.add.rectangle(0, 0, 810, 110, 0xFFFFFF);
    this.background = this.scene.add.rectangle(0, 0, 800, 100, 0x222222);
    this.leftArrow = this.scene.add.sprite(55 - this.background.width / 2, 0, 'arrowLeft')
      .setInteractive();
    this.rightArrow = this.scene.add.sprite(this.background.width / 2 - 55, 0, 'arrowRight')
      .setInteractive();
    this.selectedTileGlow = this.scene.add.sprite(0, 0, 'whiteGlow')
      .setScale(0.2)
      .setAlpha(0.5);

    this.add([this.outline, this.background, this.leftArrow, this.rightArrow, this.selectedTileGlow]);
    this.scene.add.existing(this);

    this.leftArrow.on('pointerdown', () => this.previousRow());
    this.rightArrow.on('pointerdown', () => this.nextRow());

    this.tiles = [];
    this.updateTiles();
  }

  public previousRow() {
    this.row--;
    if (this.row < 0)
      this.row = Math.floor(this.tileSprites.length / TileSelector.TILES_PER_ROW);
    this.updateTiles();
  }

  public nextRow() {
    this.row++;
    if (this.row * TileSelector.TILES_PER_ROW > this.tileSprites.length)
      this.row = 0;
    this.updateTiles();
  }

  private updateTiles() {
    this.selectedTileGlow.setVisible(false);

    for (const TILE of this.tiles)
      TILE.destroy();

    this.tiles = [];

    for (let i = 0; i < TileSelector.TILES_PER_ROW; i++) {
      const TILE_SPRITE_INDEX = this.row * TileSelector.TILES_PER_ROW + i;
      console.log(TILE_SPRITE_INDEX);

      if (TILE_SPRITE_INDEX >= this.tileSprites.length)
        return;

      const X = (i * TileSelector.TILE_SPACING) - (TileSelector.TILE_SPACING * TileSelector.TILES_PER_ROW / 2) + (TileSelector.TILE_SPACING / 2);
      const TILE = this.scene.add.sprite(X, 0, this.tileSprites[TILE_SPRITE_INDEX][0], this.tileSprites[TILE_SPRITE_INDEX][1])
        .setInteractive();
      TILE.setScale(Tile.WIDTH / TILE.width);
      TILE.on('pointerdown', () => {
        this.selectedTileIndex = TILE_SPRITE_INDEX;
        this.selectedTileGlow.setPosition(X, 0);
        this.selectedTileGlow.setVisible(true);
      });

      if (TILE_SPRITE_INDEX == this.selectedTileIndex) {
        this.selectedTileGlow.setPosition(X, 0);
        this.selectedTileGlow.setVisible(true);
      }

      this.tiles.push(TILE);
      this.add(TILE);
    }
  }
}
