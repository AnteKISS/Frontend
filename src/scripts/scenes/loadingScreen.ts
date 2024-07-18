import Phaser from 'phaser';

export default class LoadingScreen extends Phaser.Scene {

    private rat : Phaser.GameObjects.Image;

    constructor() {
        super('LoadingScreen');
    }

    create() {
        const { width, height } = this.scale;
        this.rat = this.add.image(width / 2, height / 2, 'game-logo');
    
    }
    update() {
        this.rat.rotation += 0.02;
      }
}