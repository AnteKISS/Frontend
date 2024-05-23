import { PlayerEntity } from "../../entities/playerEntity";
import Spell from "../spell";
import ProjectileOnCast from "../onCastEffects/projectileOnCast"
import { CastType } from "../../enums/castTypes"


export default class FireBolt extends Spell
{
    constructor(spellOwner: PlayerEntity)
    {
        super(4, 500, 0, CastType.SkillShot, 'Fire Bolt', '', spellOwner)
        {
            new ProjectileOnCast(this, 480, 200, 200, 'firebolt');
        }
    }
}