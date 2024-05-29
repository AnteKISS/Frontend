import Spell from "../spells/spell";

export default class SpellSlot extends Phaser.GameObjects.Sprite
{
    private spellSprite: Phaser.GameObjects.Sprite;
    private spell: Spell | null;
    private cdMask: Phaser.GameObjects.Graphics;

    constructor(scene: Phaser.Scene, x: number, y: number)
    {
        super(scene, x, y, 'spellSlot');
       
        this.setScale(0.8);
        scene.add.existing(this);
        this.setInteractive();
        this.cdMask = scene.add.graphics();
        this.cdMask.setDepth(-0.5);
        scene.add.existing(this.cdMask);
    }

    addSpell(spell: Spell): void
    {
        this.removeSpell();
        this.spell = spell;
        this.spellSprite = this.scene.add.sprite(this.x, this.y, spell.spellIcon);
        this.spellSprite.setScale(this.displayWidth/this.spellSprite.displayWidth);
        this.spellSprite.setDepth(-1);
    }

    removeSpell(): void
    {
        if(this.spell && this.spellSprite)
            this.spellSprite.destroy();
            this.spell = null;
    }

    updateCooldown(): void
    {
        if(this.spell)
        {
            this.cdMask.clear();

            this.cdMask.fillStyle(0x000000, 0.9);
            const percentage = this.spell.updateRemainingCooldown()/(this.spell.cooldown * 1000);
            const maskHeight = this.displayHeight * percentage; 

            this.cdMask.fillRect(this.x - this.displayWidth / 2, this.y - this.displayHeight / 2 + (this.displayHeight - maskHeight), this.displayWidth, maskHeight);
        } 
        else
        {
            this.cdMask.clear();
        }
    }
}