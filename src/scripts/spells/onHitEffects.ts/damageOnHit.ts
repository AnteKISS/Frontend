import Spell from "../spell"

class DamageOnHit implements IOnHitEffect
{
    spell: Spell;
    damageType = DamageType;
    baseDamage: number;
    scaling: number;
    scalingStat;

    constructor(spell: Spell)
    {
        this.spell = spell;
        spell.addOnHitEffect(this);
    }

    //public onHit(hitEntity: entity, castDirection, movementDirection): void
    //{
    //    const totalDamage = (this.baseDamage + (this.scaling * this.spell.spellOwner.getStat(scalingStat))) * this.spell.spellOwner.damageTypeBonus(this.damageType);
    //    hitEntity.takeDamage(this.damageType, totalDamage);
    //}

    public onMaxRange(position: any, castDirection: any, movementDirection: any): void {
        
    }
}