import Phaser from 'phaser';
import Setting from './setting'

export default class InGameOptions extends Phaser.GameObjects.Container {
  private closeButton: Phaser.GameObjects.Sprite;
  private background: Phaser.GameObjects.Sprite;
  
  private back: Phaser.GameObjects.Container;
  private optionstxt : Phaser.GameObjects.Image;

  private setting: Setting;

  constructor(scene: Phaser.Scene) {
    super(scene, 640, 0);

    this.background = new Phaser.GameObjects.Sprite(scene, 0, 360, 'black_rock_background');

    /*this.optionstxt = new Phaser.GameObjects.Image(scene, 0, 150 , 'optionstxt');
    this.optionstxt.setScale(0.25);

    this.createSlider(`Game Sound:`,700, 200, (value: number) => {
      this.setting.backgroundSound = value;
      console.log(`Game Sound: ${this.setting.backgroundSound}`);
    });
    this.createSlider(`Effect Sound:`,700, 300, (value: number) => {
      this.setting.effectSound = value;
      console.log(`Effect Sound: ${this.setting.effectSound}`);
    });
    this.createSlider(`Menu Sound:`,700, 400, (value: number) => {
      this.setting.musicSound = value;
      console.log(`Menu Sound: ${this.setting.musicSound}`);
    });*/


    
    this.back = this.createButton(0, 600, 'button','exittxt', () => this.previousScreen());

    this.closeButton = new Phaser.GameObjects.Sprite(scene, 243, 37, 'close_button').setInteractive();
    this.closeButton.on('pointerdown', (event: { stopPropagation: () => void; }) => {
      this.hide();
      event.stopPropagation();
    });

    this.add([this.background, this.closeButton,]);
    scene.add.existing(this);
    this.hide();
  }

  createButton(x: number, y: number, frameKey: string, textKey: string, callback: () => void) {
    const buttonContainer = this.scene.add.container(x, y);

    const frame = this.scene.add.sprite(0, 0, frameKey).setInteractive();
    const text = this.scene.add.sprite(0, 0, textKey);

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

  /*createSlider(textToAdd: string ,x: number, y: number, toChange: (value: number) => void): void {
        
    const text = this.scene.add.text(x-200 , y, textToAdd, {
        font: '30px Arial',
        color: '#606060'
      });
      text.setOrigin(0.5, 0.5);
    
    const sliderBar = this.scene.add.sprite(x, y, 'sliderBar');
    sliderBar.setInteractive();

    const slider = this.scene.add.sprite(x, y, 'slider');
    slider.setInteractive();
    this.scene.input.setDraggable(slider);

    this.scene.input.on('drag', (pointer, gameObject, dragX, dragY) => {
        if (gameObject === slider) {
            if (dragX >= sliderBar.x - sliderBar.width / 2 && dragX <= sliderBar.x + sliderBar.width / 2) {
                gameObject.x = dragX;
                const value = this.updateSliderValue(slider, sliderBar);
                toChange(value);
            }
        }
    });
  }

  private updateSliderValue(slider: Phaser.GameObjects.Sprite, sliderBar: Phaser.GameObjects.Sprite): number {
    const sliderPosition = slider.x - (sliderBar.x - sliderBar.width / 2);
    const value = (sliderPosition / sliderBar.width) * 100;
    return value;
  }*/
  
}


