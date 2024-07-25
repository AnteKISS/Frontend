import { IFightable } from "../../entities/IFightable";
import { ActiveEntity } from "../../entities/activeEntity";
import { BaseEntity } from "../../entities/baseEntity";
import { ActiveEntityEvents } from "../../events/activeEntityEvents";
import { GeneralEventManager } from "../../managers/eventManager";
import Spell from "../spell"

export default class SlowOnHit implements IOnHitEffect {
    spell: Spell;
    slowAmount: number;
    duration: number;
    

    constructor(spell: Spell, slowAmount: number, duration: number) {
        this.spell = spell;
        this.slowAmount = slowAmount;
        this.duration = duration;
        spell.addOnHitEffect(this);
    }

    public onHit(hitEntity: BaseEntity): void {
        const entity = hitEntity as ActiveEntity
        entity.totalModifierStats.movementSpeed -= this.slowAmount;

        this.spell.spellOwner.scene.time.delayedCall(this.duration * 1000, () => {
            entity.totalModifierStats.movementSpeed += this.slowAmount;
        }, [], this);
    }

    public onMaxRange(position: any, castDirection: any, movementDirection: any): void {

    }
}