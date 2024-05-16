export default class LeftInfoBar
{
    private leftInfoBar: Phaser.GameObjects.Sprite;

    constructor(scene: Phaser.Scene, x: number, y: number)
    {
        this.leftInfoBar = scene.add.sprite(x, y, 'leftInfoBar');
        this.leftInfoBar.setScale(0.75);
    }
}