import Phaser from 'phaser';
import InGameOptions from './inGameOptions'

export default class PauseMenu extends Phaser.GameObjects.Container {
  private closeButton: Phaser.GameObjects.Sprite;
  private background: Phaser.GameObjects.Sprite;
  private resume: Phaser.GameObjects.Container;
  private options: Phaser.GameObjects.Container;
  private save: Phaser.GameObjects.Container;
  private exit: Phaser.GameObjects.Container;
  private pause: Phaser.GameObjects.Image;
  private pauseMenuElements: Phaser.GameObjects.Container;
  private inGameOptions: InGameOptions;

  constructor(scene: Phaser.Scene) {
    super(scene, 640, 0);
    this.background = new Phaser.GameObjects.Sprite(scene, 0, 360, 'black_rock_background')
      .setInteractive().on('pointerdown', (_, __, ___, event) => event.stopPropagation());

    this.inGameOptions = new InGameOptions(scene);
    this.pauseMenuElements = new Phaser.GameObjects.Container(scene);


    this.pause = new Phaser.GameObjects.Image(scene, 0, 150, 'pause')
      .setInteractive().on('pointerdown', (_, __, ___, event) => event.stopPropagation());
    this.pause.setScale(0.25);


    this.resume = this.createButton(0, 300, 'button', 'resumetxt', () => this.startGame())
    this.options = this.createButton(0, 400, 'button', 'optionstxt', () => this.openOptions())
    this.save = this.createButton(0, 500, 'button', 'savetxt', () => this.saveGame())
    this.exit = this.createButton(0, 600, 'button', 'exittxt', () => this.exitGame())

    this.closeButton = new Phaser.GameObjects.Sprite(scene, 243, 37, 'close_button').setInteractive();
    this.closeButton.on('pointerdown', (pointer, localX, localY, event) => {
      this.hide();
      event.stopPropagation();
    });

    this.pauseMenuElements.add([this.resume, this.options, this.save, this.exit, this.pause]);

    this.add([this.background, this.closeButton, this.pauseMenuElements, this.inGameOptions]);
    scene.add.existing(this);
    this.hide();
  }


  createButton(x: number, y: number, frameKey: string, textKey: string, callback: () => void) {
    const buttonContainer = this.scene.add.container(x, y);

    const frame = this.scene.add.sprite(0, 0, frameKey).setInteractive().on('pointerdown', (_, __, ___, event) => {
      callback();
      event.stopPropagation();
    });

    const text = this.scene.add.sprite(0, 0, textKey).setInteractive().on('pointerdown', (_, __, ___, event) => {
      callback();
      event.stopPropagation();
    });

    buttonContainer.add([frame, text]);

    frame.on('pointerover', () => {
      frame.setTint(0x909090);
    });

    frame.on('pointerout', () => {
      frame.clearTint();
    });

    frame.on('pointerdown', () => {
      frame.setTint(0xff4444);
      callback();
    });

    frame.on('pointerup', () => {
      frame.clearTint();
    });

    return buttonContainer;
  }

  startGame() {
    console.log('Resume button clicked');
    this.hide();
  }

  openOptions() {
    console.log('Options button clicked');
    this.pauseMenuElements.setVisible(false);
    this.inGameOptions.setVisible(true);

  }

  saveGame() {
    console.log('Save button clicked');
  }

  exitGame() {
    console.log('Exit button clicked');
    //this.scene.start('MainMenu'); 
  }

  public show(): void {
    this.setVisible(true);
    this.pauseMenuElements.setVisible(true);
    this.inGameOptions.setVisible(false);
  }

  public hide(): void {
    this.setVisible(false);
  }
}


