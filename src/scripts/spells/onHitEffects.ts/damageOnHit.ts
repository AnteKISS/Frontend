import { ActiveEntity } from "../../entities/activeEntity";
import { BaseEntity } from "../../entities/baseEntity";
import Spell from "../spell"

export default class DamageOnHit implements IOnHitEffect
{
    spell: Spell;
    damageType: DamageType;
    baseDamage: number;
    scaling: number;
    scalingStat;

    constructor(spell: Spell)
    {
        this.spell = spell;
        spell.addOnHitEffect(this);
    }

    public onHit(hitEntity: BaseEntity): void
    {
        console.log('OMG A LOT OF FIRE DAMAGE');
        //const totalDamage = (this.baseDamage + (this.scaling * this.spell.spellOwner.)) * this.spell.spellOwner.damageTypeBonus(this.damageType);
        //hitEntity.takeDamage(this.damageType, totalDamage);
    }

    public onMaxRange(position: any, castDirection: any, movementDirection: any): void {
        
    }
}