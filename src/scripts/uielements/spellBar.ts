import SpellSlot from './spellSlot'
import SpellBook from '../spells/spellBook'
import Spell from '../spells/spell';

export default class SpellBar
{
    private spellSlots: SpellSlot[];
    private spellBar: Phaser.GameObjects.Sprite;
    private scene: Phaser.Scene;
    private spellBook: SpellBook;
    private spellSelectionMenu: Phaser.GameObjects.Group;

    constructor(scene: Phaser.Scene, x: number, y: number)
    {
        this.scene = scene;
        this.spellSlots = [];

        this.spellSelectionMenu = scene.add.group();

        this.spellBar = scene.add.sprite(x, y, 'spellBar');
        this.spellBar.setScale(0.75);
        this.spellBar.setDepth(this.spellBar.depth - 1);

        this.spellSlots.push(new SpellSlot(scene, x, y));
        this.spellSlots[0].setPosition(x - 3 - 2*this.spellSlots[0].displayWidth, y - this.spellSlots[0].displayHeight/2);
        scene.add.text(this.spellSlots[0].x - this.spellSlots[0].displayWidth/2.5, this.spellSlots[0].y + this.spellSlots[0].displayHeight/10, '1');

        this.spellSlots.push(new SpellSlot(scene, x, y));
        this.spellSlots[1].setPosition(x - 2 - this.spellSlots[0].displayWidth, y - this.spellSlots[0].displayHeight/2);
        scene.add.text(this.spellSlots[1].x - this.spellSlots[1].displayWidth/2.5, this.spellSlots[1].y + this.spellSlots[1].displayHeight/10, '2');

        this.spellSlots.push(new SpellSlot(scene, x, y));
        this.spellSlots[2].setPosition(x - 1, y - this.spellSlots[0].displayHeight/2);
        scene.add.text(this.spellSlots[2].x - this.spellSlots[2].displayWidth/2.5, this.spellSlots[2].y + this.spellSlots[2].displayHeight/10, '3');

        this.spellSlots.push(new SpellSlot(scene, x, y));
        this.spellSlots[3].setPosition(x - 5 - 4*this.spellSlots[0].displayWidth, y + this.spellSlots[0].displayHeight/2);
        scene.add.text(this.spellSlots[3].x - this.spellSlots[3].displayWidth/2.5, this.spellSlots[3].y + this.spellSlots[3].displayHeight/10, 'Q');

        this.spellSlots.push(new SpellSlot(scene, x, y));
        this.spellSlots[4].setPosition(x - 4 - 3*this.spellSlots[0].displayWidth, y + this.spellSlots[0].displayHeight/2);
        scene.add.text(this.spellSlots[4].x - this.spellSlots[4].displayWidth/2.5, this.spellSlots[4].y + this.spellSlots[4].displayHeight/10, 'W');

        this.spellSlots.push(new SpellSlot(scene, x, y));
        this.spellSlots[5].setPosition(x - 3 - 2*this.spellSlots[0].displayWidth, y + this.spellSlots[0].displayHeight/2);
        scene.add.text(this.spellSlots[5].x - this.spellSlots[5].displayWidth/2.5, this.spellSlots[5].y + this.spellSlots[5].displayHeight/10, 'E');

        this.spellSlots.push(new SpellSlot(scene, x, y));
        this.spellSlots[6].setPosition(x - 2 - this.spellSlots[0].displayWidth, y + this.spellSlots[0].displayHeight/2);
        scene.add.text(this.spellSlots[6].x - this.spellSlots[6].displayWidth/2.5, this.spellSlots[6].y + this.spellSlots[6].displayHeight/10, 'R');

        this.spellSlots.push(new SpellSlot(scene, x, y));
        this.spellSlots[7].setPosition(x - 1, y + this.spellSlots[0].displayHeight/2);
        scene.add.text(this.spellSlots[7].x - this.spellSlots[7].displayWidth/2.5, this.spellSlots[7].y + this.spellSlots[7].displayHeight/10, 'T');

        for(let i = 0; i <= 7; i++)
        this.spellSlots[i].on('pointerdown', (pointer, localX, localY, event) => {
            event.stopPropagation();
            this.openSpellSelection(i);
        });

        this.scene.input.on('pointerdown', this.onScenePointerDown, this);
    }

    public openSpellSelection(index: number): void
    {
        this.spellSelectionMenu.clear(true, true);

        const slotX = this.spellSlots[index].x;
        const slotY = this.spellSlots[index].y;
        let counterX = 0;
        let counterY = 0;

        for (const spell of this.spellBook.getAllSpells())
        {
            const icon = this.scene.add.sprite(slotX - this.spellSlots[index].displayWidth + counterX * this.spellSlots[index].displayWidth, slotY - this.spellSlots[index].displayHeight - counterY * this.spellSlots[index].displayHeight , spell.spellIcon);
            this.spellSelectionMenu.add(icon);

            icon.setScale(this.spellSlots[index].displayWidth/icon.displayWidth, this.spellSlots[index].displayHeight/icon.displayHeight);

            icon.setInteractive();
            icon.on('pointerdown', (pointer, localX, localY, event) => {
                event.stopPropagation();
                this.addSpell(index, spell);
            });

            counterX ++;

            if(counterX == 3)
            {
                counterY ++;
                counterX = 0;
            }
        }
    }

    private onScenePointerDown(pointer: Phaser.Input.Pointer) 
    {
        if (!this.isPointerOverSpellSlot(pointer)) 
        {
            this.spellSelectionMenu.clear(true, true);
        }
    }

    private isPointerOverSpellSlot(pointer: Phaser.Input.Pointer): boolean {
        for (const spellSlot of this.spellSlots) 
        {
            if (spellSlot.getBounds().contains(pointer.x, pointer.y)) 
            {
                return true;
            }
        }
        return false;
    }

    public addSpell(slot: number, spell: Spell): void
    {
        if(slot < 0 || slot > 7)
            return;

        this.spellSlots[slot].addSpell(spell);
        spell.spellOwner.equipSpell(slot, spell);
    }

    public removeSpell(slot: number): void
    {
        if(slot < 0 || slot > 7)
            return;

        this.spellSlots[slot].removeSpell();
    }

    public setSpellBook(book: SpellBook): void
    {
        this.spellBook = book;
    }

    public updateSlots(): void
    {
        this.spellSlots.forEach(slot => slot.updateCooldown());
    }

}