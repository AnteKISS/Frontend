import Phaser from 'phaser';
import Username from './username';

export default class Pregame extends Phaser.Scene {
  TintColorClicked: number = 0x660000;
  TintColorUnclicked: number = 0xff0000;
  muteClicked: boolean = false;
  volume: number = 50;
  tempVolume: number = 0;
  private WP: Phaser.GameObjects.Image;
  private exit: Phaser.GameObjects.Container;

  private OpenSaveButton: Phaser.GameObjects.Container;
  private NewGameButton: Phaser.GameObjects.Container;

  private username: Username;

  constructor() {
    super('Pregame');
  }

  create() {
    const { width, height } = this.scale;
    this.WP = this.add.image(width / 2, height / 2.5, 'backGround');
    this.WP.setScale(1.7);

    // Créer les boutons
    this.OpenSaveButton = this.createButton((width / 2) - 170, height / 2, 'button', 'OS', () => this.openSave());
    this.NewGameButton = this.createButton((width / 2) + 170, height / 2, 'button', 'NG', () => this.newGame());

    this.username = new Username(this, 640, 500);
    this.username.hide();

    this.exit = this.createButton(150, height - 50, 'button', 'back', () => this.return())
  }

  createButton(x: number, y: number, frameKey: string, textKey: string, callback: () => void) {
    const buttonContainer = this.add.container(x, y);

    const frame = this.add.sprite(0, 0, frameKey).setInteractive().on('pointerdown', (_, __, ___, event) => {
      callback();
      event.stopPropagation();
    });

    const text = this.add.sprite(0, 0, textKey).setInteractive().on('pointerdown', (_, __, ___, event) => {
      callback();
      event.stopPropagation();
    });

    buttonContainer.add([frame, text]);

    frame.on('pointerover', () => {
      frame.setTint(0x909090);
      text.setTint(0x909090);
    });

    frame.on('pointerout', () => {
      frame.clearTint();
      text.clearTint();
    });

    frame.on('pointerdown', () => {
      frame.setTint(0xff4444);
      text.setTint(0xff4444);
      callback();
    });

    frame.on('pointerup', () => {
      frame.clearTint();
      text.clearTint();
    });

    text.on('pointerover', () => {
      frame.setTint(0x909090);
      text.setTint(0x909090);
    });

    text.on('pointerout', () => {
      frame.clearTint();
      text.clearTint();
    });

    text.on('pointerdown', () => {
      frame.setTint(0xff4444);
      text.setTint(0xff4444);
      callback();
    });

    text.on('pointerup', () => {
      frame.clearTint();
      text.clearTint();
    });

    return buttonContainer;
  }

  createButtonPlayer(x: number, y: number, key: string, callback: () => void) {
    const button = this.add.image(x, y, key).setInteractive();

    button.clearTint();
    button.on('pointerout', () => {
      button.clearTint();
    });

    button.on('pointerdown', () => {
      button.setTint(this.TintColorClicked);
      callback();
    });

    button.on('pointerup', () => {
      button.clearTint();
    });

    return button;
  }

  return() {
    console.log('return button clicked');
    this.scene.start('MainMenu');
  }

  openSave() {
    this.scene.start('PregameOpenSave');
  }

  newGame() {
    this.username.show();
  }
}
