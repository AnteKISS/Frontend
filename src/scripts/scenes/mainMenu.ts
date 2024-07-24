
import Phaser from 'phaser';


export default class MainMenu extends Phaser.Scene {
  
  private WP : Phaser.GameObjects.Image;

    constructor() {
        super('MainMenu');
    }

      create() {
        const { width, height } = this.scale;
        this.WP = this.add.image(width/2, height/2.5, 'backGround');
        this.WP.setScale(1.7); 
            
        // Créer les boutons
        const playButton = this.createButton(width/2, 400, 'play', () => this.startGame());
        const settingsButton = this.createButton(width/2, 470, 'settings', () => this.openSettings());
        const exitButton = this.createButton(width/2, 540, 'exit', () => this.exitGame());
            
            
    
    
              
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