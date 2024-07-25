import { PlayerEntity } from "../../entities/playerEntity";
import Spell from "../spell";
import GroundCircleOnCast from "../onCastEffects/groundCircleOnCast"
import { CastType } from "../../enums/castTypes"
import DamageOnHit from "../onHitEffects.ts/damageOnHit";
import SlowOnHit from "../onHitEffects.ts/slowOnHit";


export default class FrostStomp extends Spell
{
    constructor(spellOwner: PlayerEntity)
    {
        super(30, 0, 50, 0, CastType.SelfCast, 'Frost Stomp', 'frostStomp', spellOwner)
        {
            new GroundCircleOnCast(this, 200, 2, 'blueQuake');
            new DamageOnHit(this, 20);
            new SlowOnHit(this, 75, 2);
        }
    }
}