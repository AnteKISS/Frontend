import { IFightable } from "../../entities/IFightable";
import { ActiveEntity } from "../../entities/activeEntity";
import { BaseEntity } from "../../entities/baseEntity";
import { ActiveEntityEvents } from "../../events/activeEntityEvents";
import { GeneralEventManager } from "../../managers/eventManager";
import Spell from "../spell"

export default class DamageOnHit implements IOnHitEffect {
    spell: Spell;
    damageType: DamageType;
    baseDamage: number;
    scaling: number;
    scalingStat;

    constructor(spell: Spell, baseDamage: number) {
        this.spell = spell;
        this.baseDamage = baseDamage;
        spell.addOnHitEffect(this);
    }

    public onHit(hitEntity: BaseEntity): void {
        const totalDamage = this.baseDamage + this.spell.spellOwner.totalModifierStats.baseMagicalDamage;

        const entity = hitEntity as unknown as IFightable;
        entity.damage(totalDamage, this.spell.spellOwner);
        const hitEvent = new ActiveEntityEvents.ReceivedDamageEvent(this.spell.spellOwner, hitEntity as ActiveEntity);
        GeneralEventManager.getInstance().notifyObservers(hitEvent);
    }

    public onMaxRange(position: any, castDirection: any, movementDirection: any): void {

    }
}
