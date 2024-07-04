import 'phaser';

export default class Tab extends Phaser.GameObjects.Container {
  private background: Phaser.GameObjects.Rectangle;
  private border: Phaser.GameObjects.Rectangle;
  private text: Phaser.GameObjects.Text;
  private onPointerDownFunc: Function;

  private static readonly BORDER_SIZE = 5;
  private static readonly BACKGROUND_COLOR = 0x222222;
  private static readonly HOVER_COLOR = 0x333333;

  public constructor(scene: Phaser.Scene, x: number, y: number, w: number, h: number, text: string) {
    super(scene, x, y);
    this.background = scene.add.rectangle(x, y, w, h, Tab.BACKGROUND_COLOR).setInteractive();
    this.border = scene.add.rectangle(x, y, w + Tab.BORDER_SIZE, h + Tab.BORDER_SIZE, 0xFFFFFF);
    this.text = scene.add.text(x, y, text, { color: '#FFFFFF', fontSize: '18px' }).setOrigin(0.5, 0.5);
    this.onPointerDownFunc = () => console.error("No 'onPointerDown' function set for this tab.");

    this.background.on('pointerdown', this.onPointerDownFunc);
    this.background.on('pointerover', () => this.background.setFillStyle(Tab.HOVER_COLOR));
    this.background.on('pointerout', () => this.background.setFillStyle(Tab.BACKGROUND_COLOR));

    this.add([this.border, this.background, this.text]);
    this.scene.add.existing(this);
  }

  public setOnPointerDown(func: Function) {
    this.onPointerDownFunc = func;
    this.removeListener('pointerdown');
    this.on('pointerdown', this.onPointerDownFunc);
  }
}
