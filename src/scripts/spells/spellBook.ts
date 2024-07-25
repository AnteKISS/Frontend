import { ActiveEntity } from "../entities/activeEntity";
import { PlayerEntity } from "../entities/playerEntity";
import Spell from "./spell";


export default class SpellBook
{
    private spellBookOwner: ActiveEntity
    private spells: Spell[] = [];

    constructor(owner: ActiveEntity)
    {
        this.spellBookOwner = owner;
    }

    public addSpell(spell: Spell): void
    {
        this.spells.push(spell);
    }

    public getSpellByName(spellName: string): Spell | null 
    {
        for (const spell of this.spells)
        {
            if (spell.spellName = spellName)
            {
                return spell;
            }
        }
        return null;  
    }

    public getAllSpells(): Spell[]
    {
        return this.spells;
    }
}