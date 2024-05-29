export default class SpellSlot extends Phaser.GameObjects.Sprite
{
    private spellSprite: Phaser.GameObjects.Sprite;

    constructor(scene: Phaser.Scene, x: number, y: number)
    {
        super(scene, x, y, 'spellSlot');
       
        this.setScale(0.8);
        scene.add.existing(this);
        this.setInteractive();
    }

    addSpell(sprite: string): void
    {
        this.removeSpell();
        this.spellSprite = this.scene.add.sprite(this.x, this.y, sprite);
        this.spellSprite.setScale(this.displayWidth/this.spellSprite.displayWidth);
        this.spellSprite.setDepth(-1);
    }

    removeSpell(): void
    {
        if(this.spellSprite)
            this.spellSprite.destroy();
    }
}