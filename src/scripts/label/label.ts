export default class Label extends Phaser.GameObjects.Container {
  private static readonly PADDING = 5;
  private static readonly VERTICAL_TEXT_SPACING = 24;

  private text: Array<Phaser.GameObjects.Text>;
  private background: Phaser.GameObjects.Rectangle;

  public constructor(scene: Phaser.Scene, text: string) {
    super(scene, 0, 0);

    this.text = new Array<Phaser.GameObjects.Text>();
    this.text.push(new Phaser.GameObjects.Text(scene, 0, 0, text, { color: '#FFFFFF', fontSize: '16px' }).setOrigin(0.5, 0.5));

    this.background = new Phaser.GameObjects.Rectangle(scene, 0, 0, 0, 0, 0x000000, 0x666666);
    this.updateBackgroundSize();

    this.add([this.background, ...this.text]);
    this.scene.add.existing(this);
  }

  public updateText(text: string): void {
    this.text[0].setText(text);
    this.text[0].setPosition(0, 0);

    while (this.text.length > 1)
      this.text.pop()!.destroy();

    this.updateBackgroundSize();
  }

  public updateMultiLineText(text: Array<[string, string]>): void {
    if (text.length === 0)
      return;

    while (this.text.length > text.length)
      this.text.pop()!.destroy();

    while (this.text.length < text.length) {
      const newText = new Phaser.GameObjects.Text(this.scene, 0, 0, "", { color: '#FFFFFF', fontSize: '16px' }).setOrigin(0.5, 0.5);
      this.text.push(newText);
      this.add(newText);
    }

    const offset = (this.text.length / 2 - 0.5) * -1;
    for (let i = 0; i < this.text.length; i++) {
      this.text[i].setText(text[i][0]);
      this.text[i].setColor(text[i][1]);
      this.text[i].setPosition(0, (i + offset) * Label.VERTICAL_TEXT_SPACING);
    }

    this.updateBackgroundSize();
  }

  public setTextColor(color: string): void {
    this.text[0].setColor(color);
  }

  public setBackgroundColor(color: number): void {
    this.background.setFillStyle(color);
  }

  public setBackgroundAlpha(alpha: number): void {
    this.background.setAlpha(alpha);
  }

  public getWidth(): number {
    return this.background.width;
  }

  public getHeight(): number {
    return this.background.height;
  }

  private updateBackgroundSize(): void {
    let maxTextWidth = 0;
    for (const text of this.text)
      if (text.width > maxTextWidth)
        maxTextWidth = text.width;

    const BG_WIDTH = maxTextWidth + Label.PADDING * 2;
    const BG_HEIGHT = this.text.length * Label.VERTICAL_TEXT_SPACING + Label.PADDING * 2;
    this.background.setSize(BG_WIDTH, BG_HEIGHT);
  }
}
