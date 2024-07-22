
import Phaser from 'phaser';


export default class MainMenu extends Phaser.Scene {

    constructor() {
        super('MainMenu');
    }

      create() {
        this.add.image(635, 400, 'backGround');
        
            // Créer les boutons
            const playButton = this.createButton(625, 400, 'play', () => this.startGame());
            const settingsButton = this.createButton(625, 450, 'setting', () => this.openSettings());
            const exitButton = this.createButton(625, 500, 'exit', () => this.exitGame());
            //this.add.rectangle(600, 300, 30, 200, 0xff4444);
    
    
              
          }
    
           createButton(x: number, y: number, key: string, callback: () => void) {
              const button = this.add.image(x, y, key).setInteractive();
          
              button.setTint(0xff0000);
          
              button.on('pointerout', () => {
                button.setTint(0xff0000);
              });
          
              button.on('pointerdown', () => {
                button.setTint(0x660000);
                callback();
              });
          
              button.on('pointerup', () => {
                button.setTint(0xff0000);
              });
          
              return button;
            }
        
          startGame() {
            console.log('Play button clicked');
            this.scene.start('Pregame');
          }
        
          openSettings() {
            console.log('Settings button clicked');
            this.scene.start('Setting');
          }
        
          exitGame() {
            console.log('Exit button clicked');
            this.scene.start('LoadingScreen');
            //fermer tous ???
          }
    

}