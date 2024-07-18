
import Phaser from 'phaser';


export default class Setting extends Phaser.Scene {

    TintColorClicked: number = 0x660000;
    TintColorUnclicked: number = 0xff0000;
    muteClicked: boolean = false;
    volume: number = 50;
    tempVolume;number = 0;

    constructor() {
        super('Setting');
    }

    create() {
        this.add.image(635, 360, 'backGround');
    
    // Créer les boutons
    const soundupButton = this.createButton(500, 400, 'plus', () => this.increaseSound());
    const sounddownButton = this.createButton(600, 400, 'moins', () => this.decreaseSound());
    const muteButton = this.createButtonMute(700, 400, 'mute', () => this.mute());
    const returnButton = this.createButton(60,60 , 'return', () => this.return());
    //bouton retour
    }
    
    createButton(x: number, y: number, key: string, callback: () => void) {
        const button = this.add.image(x, y, key).setInteractive();
    
        button.setTint(this.TintColorUnclicked);
    
        button.on('pointerout', () => {
        button.setTint(this.TintColorUnclicked);
        });
    
        button.on('pointerdown', () => {
        button.setTint(this.TintColorClicked);
        callback();
        });
    
        button.on('pointerup', () => {
        button.setTint(this.TintColorUnclicked);
        });
    
        return button;
    }

    createButtonMute(x: number, y: number, key: string, callback: () => void) {
        const button = this.add.image(x, y, key).setInteractive();
    
        
        if(!this.muteClicked){
            button.setTint(this.TintColorUnclicked);

            button.on('pointerdown', () => {
            button.setTint(this.TintColorClicked);
            callback();
            });
        
            button.on('pointerup', () => {
            this.muteClicked = true;
            button.setTint(this.TintColorUnclicked);
            });
        }
        else if(this.muteClicked){
            button.setTint(this.TintColorClicked);
    
            button.on('pointerdown', () => {
            button.setTint(this.TintColorUnclicked);
            callback();
            });
        
            button.on('pointerup', () => {
            this.muteClicked = false;
            button.setTint(this.TintColorClicked);
            });
        
        }
    
        return button;
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