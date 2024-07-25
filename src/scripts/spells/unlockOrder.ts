import { PlayerEntity } from "../entities/playerEntity";
import FireBolt from "./craftedSpells/firebolt";
import FrostStomp from "./craftedSpells/frostStomp";
import IceShard from "./craftedSpells/iceShard";
import Quake from "./craftedSpells/quake";
import Rage from "./craftedSpells/rage";

export class UnlockOrder
{
    private player: PlayerEntity;

    constructor(player: PlayerEntity)
    {
        this.player = player;
    }

    public checkLevel(): void
    {
        switch(this.player.dynamicStats.level)
        {
        case 2:
            this.player.mySpellBook.addSpell(new IceShard(this.player));
        break;
        case 4:
            this.player.mySpellBook.addSpell(new FireBolt(this.player));
        break;
        case 6:
            this.player.mySpellBook.addSpell(new FrostStomp(this.player));
        break;
        case 9:
            this.player.mySpellBook.addSpell(new Rage(this.player));
        break;
        case 12:
            this.player.mySpellBook.addSpell(new Quake(this.player));
        break;
        default:
        break;    
        }
    }
}