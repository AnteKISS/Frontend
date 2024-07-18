import { PlayerEntity } from "../../entities/playerEntity";
import Spell from "../spell";
import ProjectileOnCast from "../onCastEffects/projectileOnCast";
import SpeedBuffOnCast from "../onCastEffects/speedBuffOnCast";
import { CastType } from "../../enums/castTypes";
import DamageOnHit from "../onHitEffects.ts/damageOnHit";


export default class FireBolt extends Spell
{
    constructor(spellOwner: PlayerEntity)
    {
        super(4, 500, 20, 0, CastType.SkillShot, 'Fire Bolt', 'fireboltIcon', spellOwner)
        {
            new ProjectileOnCast(this, 480, 1, 128, 128, 'firebolt');
            new SpeedBuffOnCast(this, 200, 1);
            new DamageOnHit(this, 40);
        }
    }
}