import Spell from "../spell"

export default class SpeedBuffOnCast implements IOnCastEffect
{
    spell: Spell;
    buffAmount: number;
    duration: number;

    constructor(spell: Spell, buffAmount: number, duration: number)
    {
        this.spell = spell;
        this.buffAmount = buffAmount;
        this.duration = duration;
        spell.addOnCastEffect(this);
    }

    onCast()
    {
        this.spell.spellOwner.stats.movementSpeed += this.buffAmount;
        
        this.spell.spellOwner.scene.time.delayedCall(this.duration*1000, () => {
            this.spell.spellOwner.stats.movementSpeed -= this.buffAmount;
        }, [], this);
    }
}