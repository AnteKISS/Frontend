import Spell from "../spell";
import { CastType } from "../../enums/castTypes";
import { ActiveEntity } from "../../entities/activeEntity";
import HealthRegenBuffOnCast from "../onCastEffects/healthRegenBuffOnCast";


export default class Rage extends Spell
{
    constructor(spellOwner: ActiveEntity)
    {
        super(30, 0, 50, 0, CastType.SelfBuff, 'Rage', 'rage', spellOwner)
        {
           new HealthRegenBuffOnCast(this, 15, 5);
        }
    }
}