import Phaser from 'phaser';
//import { readFile } from 'fs/promises';
import { join } from 'path';



export default class Pregame extends Phaser.Scene {

    TintColorClicked: number = 0x660000;
    TintColorUnclicked: number = 0xff0000;
    muteClicked: boolean = false;
    volume: number = 50;
    tempVolume;number = 0;

    constructor() {
        super('Pregame');
    }

    create() {
    this.add.image(600, 400, 'backGround');
    
    // Créer les boutons
    const soundupButton = this.createButtonPlayer(500, 350, 'female', () => this.FemaleNewGame());
    const sounddownButton = this.createButtonPlayer(700, 350, 'male', () => this.MaleNewGame());
    /*const Save1Button = this.createButton(60,60 , 'Save1', () => this.Save1());
    const Save2Button = this.createButton(60,60 , 'Save2', () => this.Save2());
    const Save3Button = this.createButton(60,60 , 'Save3', () => this.Save3());
    const Save4Button = this.createButton(60,60 , 'Save4', () => this.Save4());*/
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

   
        
    FemaleNewGame() {
    console.log('FemaleNewGame button clicked');
    // start new game with female player
    }
        
    MaleNewGame() {
    console.log('MaleNewGame button clicked');
    this.scene.start('MainScene');
    // start new game with male player
    }

    mute() {
    console.log('mute button clicked');

    }
    return() {
        console.log('return button clicked');
        this.scene.start('MainMenu');
        }

    Save1() {
        console.log('Save1 button clicked');
    }
        
    Save2() {
        console.log('Save2 button clicked');
        //this.scene.start('MainMenu');
        }
    Save3() {
        console.log('Save3 button clicked');
        //this.scene.start('MainMenu');
        }
    Save4() {
        console.log('Save4 button clicked');
        //this.scene.start('MainMenu');
        }
        
    /*async readJSONFile(filePath: string): Promise<any> {
    try {
        const data = await readFile('assets/gui/mainMenu/test.json', 'utf-8');
        return JSON.parse(data);
        } 
    catch (error) {
        console.error('Error reading the JSON file:', error);
        throw error;
        }

    }*/
    
}