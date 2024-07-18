import { PlayerEntity } from "../../entities/playerEntity";
import Spell from "../spell";
import GroundCircleOnCast from "../onCastEffects/groundCircleOnCast"
import { CastType } from "../../enums/castTypes"
import DamageOnHit from "../onHitEffects.ts/damageOnHit";


export default class Quake extends Spell
{
    constructor(spellOwner: PlayerEntity)
    {
        super(3, 300, 10, 0, CastType.GroundTarget, 'Quake', 'quakeIcon', spellOwner)
        {
            new GroundCircleOnCast(this, 75, 2, 'greyQuake');
            new DamageOnHit(this);
        }
    }
}