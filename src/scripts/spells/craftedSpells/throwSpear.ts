import { PlayerEntity } from "../../entities/playerEntity";
import Spell from "../spell";
import GroundCircleOnCast from "../onCastEffects/groundCircleOnCast"
import { CastType } from "../../enums/castTypes"
import DamageOnHit from "../onHitEffects.ts/damageOnHit";
import ProjectileOnCast from "../onCastEffects/projectileOnCast";
import SpeedBuffOnCast from "../onCastEffects/speedBuffOnCast";
import { ActiveEntity } from "../../entities/activeEntity";


export default class ThrowSpear extends Spell
{
  constructor(spellOwner: ActiveEntity)
  {
    super(4, 500, 0, 0, CastType.SkillShot, 'Throw Spear', '', spellOwner)
    {
      new ProjectileOnCast(this, 200, 1, 128, 128, 'throwSpear');
      new SpeedBuffOnCast(this, 150, 1);
      new DamageOnHit(this, 0);
    }
  }
}