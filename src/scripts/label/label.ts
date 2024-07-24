import 'phaser'

export default class Label extends Phaser.GameObjects.Container {
  private static readonly PADDING = 5;

  private text: Phaser.GameObjects.Text;
  private background: Phaser.GameObjects.Rectangle;

  public constructor(scene: Phaser.Scene, text: string) {
    super(scene, 0, 0);

    this.text = new Phaser.GameObjects.Text(scene, 0, 0, text, { color: '#FFFFFF', fontSize: '16px' })
      .setOrigin(0.5, 0.5);

    const BG_WIDTH = this.text.width + Label.PADDING * 2;
    const BG_HEIGHT = this.text.height + Label.PADDING * 2;
    this.background = new Phaser.GameObjects.Rectangle(scene, 0, 0, BG_WIDTH, BG_HEIGHT, 0x000000, 0x666666);

    this.add([this.background, this.text]);
    this.scene.add.existing(this);
  }

  public updateText(text: string) {
    const BG_WIDTH = this.text.width + Label.PADDING * 2;
    const BG_HEIGHT = this.text.height + Label.PADDING * 2;

    this.background.setSize(BG_WIDTH, BG_HEIGHT);
    this.text.setText(text);
  }

  public setBackgroundColor(color: number) {
    this.background.setFillStyle(color);
  }

  public setBackgroundAlpha(alpha: number) {
    this.background.setAlpha(alpha);
  }

  public setTextColor(color: string) {
    this.text.setColor(color);
  }
}
