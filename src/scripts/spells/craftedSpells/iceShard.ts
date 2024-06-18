import { PlayerEntity } from "../../entities/playerEntity";
import Spell from "../spell";
import ProjectileOnCast from "../onCastEffects/projectileOnCast"
import { CastType } from "../../enums/castTypes"


export default class IceShard extends Spell
{
    constructor(spellOwner: PlayerEntity)
    {
        super(0.5, 300, 2, 0, CastType.SkillShot, 'Ice Shard', 'iceShardIcon', spellOwner)
        {
            new ProjectileOnCast(this, 240, 50, 50, 'icicle');
        }
    }
}