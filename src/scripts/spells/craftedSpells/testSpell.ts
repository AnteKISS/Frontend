import { PlayerEntity } from "../../entities/playerEntity";
import Spell from "../spell";
import ProjectileOnCast from "../onCastEffects/projectileOnCast"
import { CastType } from "../../enums/castTypes"


export default class TestSpell extends Spell
{
    constructor(spellOwner: PlayerEntity)
    {
        super(0.5, 300, 0, CastType.SkillShot, 'TheRat', '', spellOwner)
        {
            new ProjectileOnCast(this, 240, 50, 50);
        }
    }
}