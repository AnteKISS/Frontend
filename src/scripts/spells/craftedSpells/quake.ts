import { PlayerEntity } from "../../entities/playerEntity";
import Spell from "../spell";
import CircleOnCast from "../onCastEffects/circleOnCast"
import { CastType } from "../../enums/castTypes"


export default class Quake extends Spell
{
    constructor(spellOwner: PlayerEntity)
    {
        super(3, 300, 10, CastType.GroundTarget, 'Quake', 'quakeIcon', spellOwner)
        {
            new CircleOnCast(this, 75, 2, 'greyQuake');
        }
    }
}