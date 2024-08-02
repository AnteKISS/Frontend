import Phaser from 'phaser';

export default class Username extends Phaser.GameObjects.Container {
  public background: Phaser.GameObjects.Image;
  public label: Phaser.GameObjects.Image;
  //public label: Phaser.GameObjects.Text;
  public username: Phaser.GameObjects.Text;
  public submit: Phaser.GameObjects.Sprite;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);

    this.background = scene.add.image(0, 25, 'dialog');
    this.label = scene.add.image(0, -50, 'choose_your_username');
    this.label.setScale(0.5); 

    this.username = scene.add.text(-280, 5, "username", { color: '#ffffff', fontSize: '30px', align: 'right' });
  

    this.submit = scene.add.sprite(0, 105, 'start')
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
    if(this.username.text.length >= 20)
    {
      return;

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
