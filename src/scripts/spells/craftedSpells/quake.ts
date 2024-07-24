import { PlayerEntity } from "../../entities/playerEntity";
import Spell from "../spell";
import GroundCircleOnCast from "../onCastEffects/groundCircleOnCast"
import { CastType } from "../../enums/castTypes"
import DamageOnHit from "../onHitEffects.ts/damageOnHit";


export default class Quake extends Spell
{
    constructor(spellOwner: PlayerEntity)
    {
        super(45, 300, 50, 0, CastType.GroundTarget, 'Quake', 'quakeIcon', spellOwner)
        {
            new GroundCircleOnCast(this, 500, 10, 'greyQuake');
            new DamageOnHit(this, 100);
        }
    }
}