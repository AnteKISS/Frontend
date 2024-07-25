import Phaser from 'phaser';
import { join } from 'path';
//import { readFile } from 'fs/promises';



export default class PregameNewGame extends Phaser.Scene {

    TintColorClicked: number = 0x660000;
    TintColorUnclicked: number = 0xff0000;
    muteClicked: boolean = false;
    volume: number = 50;
    tempVolume:number = 0;
    private WP : Phaser.GameObjects.Image;
    private exit: Phaser.GameObjects.Container;
    private qst : Phaser.GameObjects.Image;
    private maletxt : Phaser.GameObjects.Image;
    private femaletxt : Phaser.GameObjects.Image;

    constructor() {
        super('PregameNewGame');
    }

    create() {
        const { width, height } = this.scale;
        this.WP = this.add.image(width/2, height/2.5, 'backGround');
        this.WP.setScale(1.7); 
    
      //add the text pics
      this.qst = this.add.image((width/2), 170, 'qst');
      this.maletxt = this.add.image((width/2)+100, 520, 'Maletxt');
      this.femaletxt = this.add.image((width/2)-100, 520, 'Femaletxt');
      this.qst.setScale(0.4); 

    // Créer les boutons
    const femaleButton = this.createButtonPlayer((width/2)-100, 350, 'female', () => this.MaleNewGame());
    const maleButton  = this.createButtonPlayer((width/2)+100, 350, 'male', () => this.MaleNewGame());
    
    //bouton retour
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

        button.on('pointerover', () => {
          button.setTint(0x909090);
        });
    
        return button;
    }

   
        
    FemaleNewGame() {
    console.log('FemaleNewGame button clicked');
    // start new game with female player
    }
        
    MaleNewGame() {
    console.log('MaleNewGame button clicked');
    this.scene.start('MainScene');
    // start new game with male player
    }

    return() {
      console.log('return button clicked');
      this.scene.start('Pregame');
      }

   
    
        
    
    
}