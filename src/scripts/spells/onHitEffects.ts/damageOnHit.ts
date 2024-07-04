import { IFightable } from "../../entities/IFightable";
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
        console.log('HIT');
        //const totalDamage = (this.baseDamage + (this.scaling * this.spell.spellOwner.)) * this.spell.spellOwner.damageTypeBonus(this.damageType);
        //hitEntity.takeDamage(this.damageType, totalDamage);
        const entity = hitEntity as unknown as IFightable;
        entity.damage(50);
    }

    public onMaxRange(position: any, castDirection: any, movementDirection: any): void {
        
    }
}