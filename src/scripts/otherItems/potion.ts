import { PlayerEntity } from "../entities/playerEntity";


export class Potion
{
    private player: PlayerEntity;

    constructor(player: PlayerEntity)
    {
        this.player = player;
    }

    public heal()
    {
        this.player.dynamicStats.health += this.player.baseModifierStats.maxHealth * 0.3;
        if(this.player.dynamicStats.health > this.player.baseModifierStats.maxHealth)
        {
            this.player.dynamicStats.health = this.player.baseModifierStats.maxHealth; 
        }
    }
}