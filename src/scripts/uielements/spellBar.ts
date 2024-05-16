import SpellSlot from './spellSlot'
import Spell from '../objects/spell'

export default class SpellBar
{
    private spellSlots: SpellSlot[];
    private spellBar: Phaser.GameObjects.Sprite;

    constructor(scene: Phaser.Scene, x: number, y: number)
    {
        this.spellSlots = [];

        this.spellBar = scene.add.sprite(x, y, 'spellBar');
        this.spellBar.setScale(0.75);
        this.spellBar.setDepth(this.spellBar.depth - 1);

        this.spellSlots.push(new SpellSlot(scene, x, y));
        this.spellSlots[0].setPosition(x - 3 - 2*this.spellSlots[0].displayWidth, y - this.spellSlots[0].displayHeight/2);

        this.spellSlots.push(new SpellSlot(scene, x, y));
        this.spellSlots[1].setPosition(x - 2 - this.spellSlots[0].displayWidth, y - this.spellSlots[0].displayHeight/2);

        this.spellSlots.push(new SpellSlot(scene, x, y));
        this.spellSlots[2].setPosition(x - 1, y - this.spellSlots[0].displayHeight/2);

        this.spellSlots.push(new SpellSlot(scene, x, y));
        this.spellSlots[3].setPosition(x - 5 - 4*this.spellSlots[0].displayWidth, y + this.spellSlots[0].displayHeight/2);

        this.spellSlots.push(new SpellSlot(scene, x, y));
        this.spellSlots[4].setPosition(x - 4 - 3*this.spellSlots[0].displayWidth, y + this.spellSlots[0].displayHeight/2);

        this.spellSlots.push(new SpellSlot(scene, x, y));
        this.spellSlots[5].setPosition(x - 3 - 2*this.spellSlots[0].displayWidth, y + this.spellSlots[0].displayHeight/2);

        this.spellSlots.push(new SpellSlot(scene, x, y));
        this.spellSlots[6].setPosition(x - 2 - this.spellSlots[0].displayWidth, y + this.spellSlots[0].displayHeight/2);

        this.spellSlots.push(new SpellSlot(scene, x, y));
        this.spellSlots[7].setPosition(x - 1, y + this.spellSlots[0].displayHeight/2);
    }

    public addSpell(slot: number, sprite: string): void
    {
        if(slot < 0 || slot > 7)
            return;

        this.spellSlots[slot].addSpell(sprite);
    }

    public removeSpell(slot: number): void
    {
        if(slot < 0 || slot > 7)
            return;

        this.spellSlots[slot].removeSpell();
    }

}