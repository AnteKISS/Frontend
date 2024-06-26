import { PlayerEntity } from "../entities/playerEntity";


export class Exp
{
    private player: PlayerEntity;
    private totalExp: number;
    private currentExpToMax: number;
    private levelExpToMax: number;
    
    constructor(player: PlayerEntity)
    {
        this.player = player;
        this.totalExp = 0;
        this.currentExpToMax = 0;
        this.levelExpToMax = 0;
        this.updateLevelExpToMax();
    }

    public addExp(exp: number): void
    {
        this.totalExp += exp;
        this.currentExpToMax += exp;
    }

    public updateLevelExpToMax(): void
    {
        const playerLevel = this.player.stats.level;
        const currentLevelMaxExp = 5 * playerLevel ** 4 + 5 * playerLevel ** 3 + 200 * playerLevel ** 2 + 290 * playerLevel;
        const previousLevelMaxExp = 5 * (playerLevel - 1) ** 4 + 5 * (playerLevel - 1) ** 3 + 200 * (playerLevel - 1) ** 2 + 290 * (playerLevel - 1);
        this.levelExpToMax = currentLevelMaxExp - previousLevelMaxExp;
    }

    public update(): void
    {
        if(this.currentExpToMax >= this.levelExpToMax)
        {
            this.player.levelUp();
            this.currentExpToMax = this.currentExpToMax - this.levelExpToMax;
            this.updateLevelExpToMax();
        }
    }

    public getLevelExpToMax(): number
    {
        return this.levelExpToMax;
    }

    public getcurrentExpToMax(): number
    {
        return this.currentExpToMax;
    }



}