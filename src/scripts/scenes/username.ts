import Phaser from 'phaser';

export default class Username extends Phaser.GameObjects.Container {
  public background: Phaser.GameObjects.Rectangle;
  public label: Phaser.GameObjects.Text;
  public username: Phaser.GameObjects.Text;
  public submit: Phaser.GameObjects.Sprite;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);

    this.background = scene.add.rectangle(0, 0, 500, 100, 0xFFFFFF);
    this.label = scene.add.text(-200, 0, "Username: ", { color: '#000000', fontSize: '24px', align: 'right' });
    this.username = scene.add.text(0, 0, "test", { color: '#000000', fontSize: '24px', align: 'right' });
    this.submit = scene.add.sprite(250, 0, "submit")
      .setInteractive();

    scene.input.keyboard!.on("keydown", (event: KeyboardEvent) => this.handleKeyPress(event));
    this.submit.on("pointerdown", () => this.handleSubmit())

    this.add([this.background, this.label, this.username, this.submit]);
    scene.add.existing(this);
  }

  public handleKeyPress(event: KeyboardEvent): void {
    if (!this.visible)
      return;

    if (event.key === "Backspace") {
      this.username.setText(this.username.text.slice(0, -1));
    }
    else if (event.key.length === 1) {
      this.username.setText(this.username.text + event.key);
    }
  }

  public handleSubmit(): void {
    if (this.username.text.length === 0)
      return;

    this.scene.scene.start("MainScene", { playerName: this.username.text, saveSlot: 1 });
  }

  public show(): void {
    this.setVisible(true);
  }

  public hide(): void {
    this.setVisible(false);
  }
}
