import { PlayerEntity } from '../entities/playerEntity';
import { Potion } from './potion'

export class PotionPouch
{
    private player: PlayerEntity;
    private potion: Potion;
    private amount: number;
    private maxAmount: number;

    constructor(player: PlayerEntity)
    {
        this.player = player;
        this.potion = new Potion(player);
        this.maxAmount = 4;
        this.amount = this.maxAmount;
    }

    public usePotion()
    {
        if(this.amount > 0)
        {
            this.amount --;
            this.potion.heal();
        }
    }

    public gainPotion()
    {
        if(this.amount < this.maxAmount)
            this.amount ++;
    }

    public getAmount(): number
    {
        return this.amount;
    }

    public getMaxAmount(): number
    {
        return this.maxAmount;
    }
}