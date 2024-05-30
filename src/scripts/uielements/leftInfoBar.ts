export default class LeftInfoBar extends Phaser.GameObjects.Container
{
    private leftInfoBar: Phaser.GameObjects.Sprite;

    constructor(scene: Phaser.Scene, x: number, y: number)
    {
        super(scene);
        this.leftInfoBar = scene.add.sprite(x, y, 'leftInfoBar');
        this.leftInfoBar.setScale(0.75);
    }
}