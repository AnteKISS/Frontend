
import Phaser from 'phaser';


export default class Setting extends Phaser.Scene {

    private WP : Phaser.GameObjects.Image;
    public backgroundSound: number = 50;
    public effectSound: number = 50;
    public musicSound: number = 50;

    
    muteClicked: boolean = false;
    volume: number = 50;
    tempVolume;number = 0;

    private slider!: Phaser.GameObjects.Sprite;
    private sliderBar!: Phaser.GameObjects.Sprite;

    constructor() {
        super('Setting');
    }

    create() {
        
    const { width, height } = this.scale;
    this.WP = this.add.image(width/2, height/2.5, 'backGround');
    this.WP.setScale(1.7); 

    this.createSlider(`background Sound :`,700, 200, (value: number) => {
        this.backgroundSound = value;
        console.log(`background Sound : ${this.backgroundSound}`);
    });
    this.createSlider(`Effect Sound:`,700, 300, (value: number) => {
        this.effectSound = value;
        console.log(`Effect Sound: ${this.effectSound}`);
    });
    this.createSlider(`Music Sound:`,700, 400, (value: number) => {
        this.musicSound = value;
        console.log(`Music Sound: ${this.musicSound}`);
    });

    const returnButton = this.createButton(60,60 , 'return', () => this.return());

    
    }
    


    createSlider(textToAdd: string ,x: number, y: number, toChange: (value: number) => void): void {
        
        const text = this.add.text(x-200 , y, textToAdd, {
            font: '30px Arial',
            color: '#606060'
          });
          text.setOrigin(0.5, 0.5);
        
        const sliderBar = this.add.sprite(x, y, 'sliderBar');
        sliderBar.setInteractive();

        const slider = this.add.sprite(x, y, 'slider');
        slider.setInteractive();
        this.input.setDraggable(slider);

        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            if (gameObject === slider) {
                if (dragX >= sliderBar.x - sliderBar.width / 2 && dragX <= sliderBar.x + sliderBar.width / 2) {
                    gameObject.x = dragX;
                    const value = this.updateSliderValue(slider, sliderBar);
                    toChange(value);
                }
            }
        });
    }

    createButton(x: number, y: number, key: string, callback: () => void) {
        const button = this.add.image(x, y, key).setInteractive();
    
        button.on('pointerover', () => {
          button.setTint(0x909090);
        });
    
        button.on('pointerout', () => {
          button.clearTint();
        });
    
        button.on('pointerdown', () => {
          button.setTint(0xff4444);
          callback();
        });
    
        button.on('pointerup', () => {
          button.clearTint();
        });
    
        return button;
    }
    
    

    private updateSliderValue(slider: Phaser.GameObjects.Sprite, sliderBar: Phaser.GameObjects.Sprite): number {
        const sliderPosition = slider.x - (sliderBar.x - sliderBar.width / 2);
        const value = (sliderPosition / sliderBar.width) * 100;
        return value;
    }

    update(): void {
        // Mettre à jour les éléments si nécessaire
    }

    
    increaseSound() {
    console.log('increaseSound button clicked');
    // increase sound by 5
    }
        
    decreaseSound() {
    console.log('decreaseSound button clicked');
    //decrease soune by 5
    }

    mute() {
    console.log('mute button clicked');

    }
    return() {
        console.log('mute button clicked');
        this.scene.start('MainMenu');
        }
}