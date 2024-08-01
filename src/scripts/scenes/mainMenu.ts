
import Phaser from 'phaser';


export default class MainMenu extends Phaser.Scene {

  private play: Phaser.GameObjects.Container;
  private settings: Phaser.GameObjects.Container;
  private mapEditor: Phaser.GameObjects.Container;
  private exit: Phaser.GameObjects.Container;
  
  private WP : Phaser.GameObjects.Image;
  private title : Phaser.GameObjects.Image;


    constructor() {
        super('MainMenu');
    }

      create() {
        const { width, height } = this.scale;
        this.WP = this.add.image(width/2, height/2.5, 'backGround');
        this.WP.setScale(1.7); 

        this.title = this.add.image(width/2, 130, 'DIEBLOU');
        this.title.setScale(0.7); 
        
        this.play = this.createButton(width/2, 300, 'button', 'playtxt', () => this.startGame())
        this.settings = this.createButton(width/2, 400, 'button', 'settingstxt', () => this.openSettings())
        this.mapEditor = this.createButton(width/2, 500, 'button', 'mapEditortxt', () => this.saveGame())
        this.exit = this.createButton(width/2, 600, 'button', 'exittxt', () => this.exitGame())
            
    
    
              
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
    
            
          startGame() {
            this.scene.start('Pregame');
          }
        
          openSettings() {
           // this.scene.start('Setting');
          }
        
          exitGame() {
            console.log('Exit button clicked');
            this.scene.start('LoadingScreen');
            //fermer tous ???
          }
          saveGame(){
            console.log('map editor button clicked');
            this.scene.start('MapEditor');

          }

    

}