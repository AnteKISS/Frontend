import Phaser from 'phaser';

export default class LoadingScreen extends Phaser.Scene {

    private WP : Phaser.GameObjects.Image;
    private rat : Phaser.GameObjects.Image;

    constructor() {
        super('LoadingScreen');
    }

    create() {

        const { width, height } = this.scale;
        this.WP = this.add.image(width/2, height/2.5, 'backGround');
        this.WP.setScale(1.7);

        const returnButton = this.createButton(60,60 , 'return', () => this.return());
        const graphics = this.add.graphics();
        
        graphics.fillStyle(0x000000, 0.5); 
        graphics.fillRect(0, 0, width, height);
        this.rat = this.add.image(width-40, height -40, 'game-logo');
        this.rat.setScale(0.15); 

        const text = this.add.text(width / 2, height - 30, 'loading...', {
            font: '40px Arial',
            color: '#000000'
          });
          text.setOrigin(0.5, 0.5); 
    
    }
    createButton(x: number, y: number, key: string, callback: () => void) {
        const button = this.add.image(x, y, key).setInteractive();
    
        button.setTint(0xffffff);
    
        button.on('pointerout', () => {
        button.setTint(0xffffff);
        });
    
        button.on('pointerdown', () => {
        button.setTint(0x303030);
        callback();
        });
    
        button.on('pointerup', () => {
        button.setTint(0xffffff);
        });
    
        return button;
    }
    return() {
        console.log('mute button clicked');
        this.scene.start('MainMenu');
        }
    update() {
        this.rat.rotation += 0.1;
      }
}