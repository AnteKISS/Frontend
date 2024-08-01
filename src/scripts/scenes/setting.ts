
import Phaser from 'phaser';
import SoundManager from '../managers/soundManager';


export default class Setting extends Phaser.Scene {

    private WP : Phaser.GameObjects.Image;
    public backgroundSound: number;
    public effectSound: number ;
    public menuSound: number ;

    public backgroundSoundInitial: number// = SoundManager.getInstance().backgroundSoundManager.volume *100;
    public effectSoundInitial: number// = SoundManager.getInstance().effectsSoundManager.volume *100;
    public menuSoundInitial: number// = SoundManager.getInstance().uiSoundManager.volume *100;

    
    muteClicked: boolean = false;
    volume: number = 50;
    tempVolume;number = 0;

    private slider!: Phaser.GameObjects.Sprite;
    private sliderBar!: Phaser.GameObjects.Sprite;
    exit: Phaser.GameObjects.Container;

    constructor() {
        super('Setting');
    }

    create() {
        
    const { width, height } = this.scale;
    this.WP = this.add.image(width/2, height/2.5, 'backGround');
    this.WP.setScale(1.7); 

    this.backgroundSoundInitial = SoundManager.getInstance().backgroundSoundManager.volume *100;
    this.effectSoundInitial= SoundManager.getInstance().effectsSoundManager.volume *100;
    this.menuSoundInitial= SoundManager.getInstance().uiSoundManager.volume *100;


    this.createSlider('backgroundSound',700, 200, this.backgroundSoundInitial, (value: number) => {
        this.backgroundSound = value;
        console.log(`background Sound : ${this.backgroundSound}`);
    });
    this.createSlider('effectSound',700, 300, this.effectSoundInitial , (value: number) => {
        this.effectSound = value;
        console.log(`Effect Sound: ${this.effectSound}`);
    });
    this.createSlider('menuSound',700, 400, this.menuSoundInitial , (value: number) => {
        this.menuSound = value;
        console.log(`Music Sound: ${this.menuSound}`);
    });

    this.exit = this.createButton(width/2, 600, 'button', 'back', () => this.return())

    
    }
    


    /*createSlider(textKey: string ,x: number, y: number, toChange: (value: number) => void): void {
        
        const imagetxt = this.add.sprite(x-200, y, textKey) ;
        
        const sliderBar = this.add.sprite(x+100, y, 'sliderBar');
        sliderBar.setInteractive();

        const slider = this.add.sprite(x+100, y, 'slider');
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
    }*/

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
    
    

    /*private updateSliderValue(slider: Phaser.GameObjects.Sprite, sliderBar: Phaser.GameObjects.Sprite): number {
        const sliderPosition = slider.x - (sliderBar.x - sliderBar.width / 2);
        const value = (sliderPosition / sliderBar.width) * 100;
        return value;
    }

    update(): void {
        SoundManager.getInstance().backgroundSoundManager.volume *= (this.backgroundSound/100) ;
        SoundManager.getInstance().uiSoundManager.volume *= (this.menuSound/100);
        SoundManager.getInstance().effectsSoundManager.volume *= (this.effectSound/100);
    }*/
        private createSlider(textKey: string ,x: number, y: number, initialValue: number, onChange: (value: number) => void): void {
            const imagetxt = this.add.sprite(x-200, y, textKey) ;
            
            const sliderBar = this.add.sprite(x+100, y, 'sliderBar');
            sliderBar.setInteractive();
    
            const slider = this.add.sprite(x, y, 'slider');
            slider.setInteractive();
            this.input.setDraggable(slider);
    
            // Positionner le slider en fonction de la valeur initiale
            const initialPosition = sliderBar.x - sliderBar.width / 2 + (initialValue / 100) * sliderBar.width;
            slider.x = initialPosition;
    
            this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
                if (gameObject === slider) {
                    if (dragX >= sliderBar.x - sliderBar.width / 2 && dragX <= sliderBar.x + sliderBar.width / 2) {
                        gameObject.x = dragX;
                        const value = this.updateSliderValue(slider, sliderBar);
                        onChange(value);
                    }
                }
            });
        }
    
        private updateSliderValue(slider: Phaser.GameObjects.Sprite, sliderBar: Phaser.GameObjects.Sprite): number {
            const sliderPosition = slider.x - (sliderBar.x - sliderBar.width / 2);
            const value = (sliderPosition / sliderBar.width) * 100;
            return value;
        }
    
        /*update(): void {
            SoundManager.getInstance().backgroundSoundManager.volume *= (this.backgroundSound/100) ;
            SoundManager.getInstance().uiSoundManager.volume *= (this.menuSound/100);
            SoundManager.getInstance().effectsSoundManager.volume *= (this.effectSound/100);
        } */


    
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