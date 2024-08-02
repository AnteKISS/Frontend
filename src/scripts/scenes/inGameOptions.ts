import Phaser from 'phaser';
import SoundManager from '../managers/soundManager';

export default class InGameOptions extends Phaser.GameObjects.Container {
  private closeButton: Phaser.GameObjects.Sprite;
  private background: Phaser.GameObjects.Sprite;

  private back: Phaser.GameObjects.Container;
  private optionstxt: Phaser.GameObjects.Image;

  //private setting: Setting;

  private sliderGameSound: Phaser.GameObjects.Container;
  private sliderEffectSound: Phaser.GameObjects.Container;
  private sliderMenuSound: Phaser.GameObjects.Container;

  public backgroundSound: number = 50;
  public effectSound: number = 50;
  public menuSound: number = 50;

  constructor(scene: Phaser.Scene) {
    super(scene, 0, 0);

    //this.background = new Phaser.GameObjects.Sprite(scene, 0, 360, 'black_rock_background');

    this.optionstxt = new Phaser.GameObjects.Image(scene, 0, 150, 'largeOptionstxt')
      .setInteractive().on('pointerdown', (_, __, ___, event) => event.stopPropagation());
    this.optionstxt.setScale(0.35);

    this.sliderGameSound = this.createSlider(`Game Sound:`, 55, 140, (value: number) => {
      this.backgroundSound = value;
      console.log(`Game Sound: ${this.backgroundSound}`);
    });
    this.sliderEffectSound = this.createSlider(`Effect Sound:`, 55, 200, (value: number) => {
      this.effectSound = value;
      console.log(`Effect Sound: ${this.effectSound}`);
    });
    this.sliderMenuSound = this.createSlider(`Menu Sound:`, 55, 260, (value: number) => {
      this.menuSound = value;
      console.log(`Menu Sound: ${this.menuSound}`);
    });

    this.add([this.sliderEffectSound, this.sliderGameSound, this.sliderMenuSound, this.optionstxt]);
    scene.add.existing(this);
  }

  createButton(x: number, y: number, frameKey: string, textKey: string, callback: () => void) {
    const buttonContainer = this.scene.add.container(x, y);

    const frame = this.scene.add.sprite(0, 0, frameKey)
      .setInteractive().on('pointerdown', (_, __, ___, event) => event.stopPropagation());
    const text = this.scene.add.sprite(0, 0, textKey)
      .setInteractive().on('pointerdown', (_, __, ___, event) => event.stopPropagation());

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



  previousScreen() {
    console.log('Exit button clicked');
    //this.scene.start('MainMenu'); 
  }

  public show(): void {
    this.setVisible(true);
  }

  public hide(): void {
    this.setVisible(false);
  }

  createSlider(textToAdd: string, x: number, y: number, toChange: (value: number) => void) {
    const sliderContainer = this.scene.add.container(x, y);

    const text = this.scene.add.text(x - 200, y, textToAdd, {
      font: '30px Arial',
      color: '#ffffff'
    });
    text.setOrigin(0.5, 0.5)
      .setInteractive().on('pointerdown', (_, __, ___, event) => event.stopPropagation());

    const sliderBar = this.scene.add.sprite(x, y, 'sliderBar')
      .setInteractive().on('pointerdown', (_, __, ___, event) => event.stopPropagation());

    const slider = this.scene.add.sprite(x, y, 'slider')
      .setInteractive().on('pointerdown', (_, __, ___, event) => event.stopPropagation());
    this.scene.input.setDraggable(slider);

    this.scene.input.on('drag', (pointer, gameObject, dragX, dragY) => {
      console.log("je suis la");
      if (gameObject === slider) {
        if (dragX >= sliderBar.x - sliderBar.width / 2 && dragX <= sliderBar.x + sliderBar.width / 2) {
          gameObject.x = dragX;
          const value = this.updateSliderValue(slider, sliderBar);
          toChange(value);
        }
      }
    });

    sliderContainer.add([sliderBar, slider, text]);
    return sliderContainer;
  }

  private updateSliderValue(slider: Phaser.GameObjects.Sprite, sliderBar: Phaser.GameObjects.Sprite): number {
    const sliderPosition = slider.x - (sliderBar.x - sliderBar.width / 2);
    const value = (sliderPosition / sliderBar.width) * 100;
    this.update();
    return value;
  }

  update(): void {
    SoundManager.getInstance().backgroundSoundManager.setVolume(this.backgroundSound/100) ;
    SoundManager.getInstance().uiSoundManager.setVolume(this.menuSound/100);
    SoundManager.getInstance().effectsSoundManager.setVolume(this.effectSound/100);
}
}


