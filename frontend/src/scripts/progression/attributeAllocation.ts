import { PlayerEntity } from "../entities/playerEntity";


export class AttributeAllocation
{
    private player: PlayerEntity;
    private totalAttributePoint: number = 0;
    private availableAttributePoint: number = 0;
    private allocatedAttributePoint: number = 0;
    public strength: number = 0;
    public dexterity: number = 0;
    public vitality: number = 0;
    public intelligence: number = 0;
    public tempStrength: number = 0;
    public tempDexterity: number = 0;
    public tempVitality: number = 0;
    public tempIntelligence: number = 0;


    constructor(player: PlayerEntity)
    {
        this.player = player;
    }

    public allocateStrenghtPoint()
    {
        if(this.availableAttributePoint > 0)
        {
            this.tempStrength ++;
            this.allocatedAttributePoint ++;
            this.updateAvailableAttributePoint();
        }
    }

    public allocateDexterityPoint()
    {
        if(this.availableAttributePoint > 0)
        {
            this.tempDexterity ++;
            this.allocatedAttributePoint ++;
            this.updateAvailableAttributePoint();
        }
    }

    public allocateVitalityPoint()
    {
        if(this.availableAttributePoint > 0)
        {
            this.tempVitality ++;
            this.allocatedAttributePoint ++;
            this.updateAvailableAttributePoint();
        }
    }

    public allocateIntelligencePoint()
    {
        if(this.availableAttributePoint > 0)
        {
            this.tempIntelligence ++;
            this.allocatedAttributePoint ++;
            this.updateAvailableAttributePoint();
        }
    }

    public unallocateStrenghtPoint()
    {
        if(this.allocatedAttributePoint > this.vitality + this.strength + this.dexterity + this.intelligence && this.tempStrength > 0)
        {
            this.tempStrength --;
            this.allocatedAttributePoint --;
            this.updateAvailableAttributePoint();
        }
    }

    public unallocateDexterityPoint()
    {
        if(this.allocatedAttributePoint > this.vitality + this.strength + this.dexterity + this.intelligence && this.tempDexterity > 0)
        {
            this.tempDexterity --;
            this.allocatedAttributePoint --;
            this.updateAvailableAttributePoint();
        }
    }

    public unallocateVitalityPoint()
    {
        if(this.allocatedAttributePoint > this.vitality + this.strength + this.dexterity + this.intelligence && this.tempVitality > 0)
        {
            this.tempVitality --;
            this.allocatedAttributePoint --;
            this.updateAvailableAttributePoint();
        }
    }

    public unallocateIntelligencePoint()
    {
        if(this.allocatedAttributePoint > this.vitality + this.strength + this.dexterity + this.intelligence && this.tempIntelligence > 0)
        {
            this.tempIntelligence --;
            this.allocatedAttributePoint --;
            this.updateAvailableAttributePoint();
        }
    }

    public confirmSelection()
    {
        this.vitality += this.tempVitality;
        this.strength += this.tempStrength;
        this.dexterity += this.tempDexterity;
        this.intelligence += this.tempIntelligence;
        this.tempVitality = 0;
        this.tempStrength = 0;
        this.tempDexterity = 0;
        this.tempIntelligence = 0;
    }

    public cancelSelection()
    {
        this.allocatedAttributePoint = this.allocatedAttributePoint - this.tempVitality - this.tempStrength - this.tempDexterity - this.tempIntelligence;
        this.updateAvailableAttributePoint();
        this.tempVitality = 0;
        this.tempStrength = 0;
        this.tempDexterity = 0;
        this.tempIntelligence = 0;
    }

    public levelUp(): void 
    {
        this.totalAttributePoint += 5;
        this.updateAvailableAttributePoint();
    }

    public updateAvailableAttributePoint(): void
    {
        this.availableAttributePoint = this.totalAttributePoint - this.allocatedAttributePoint;
    }

    public getTotalAttributePoint(): number
    {
        return this.totalAttributePoint;
    }

    public getTotalAvailablePoint(): number
    {
        return this.availableAttributePoint;
    }

    public getTotalAllocatedPoint(): number
    {
        return this.allocatedAttributePoint;
    }

    public setTotalAttributePoint(quantity: number): void
    {
        this.totalAttributePoint = quantity;
        this.updateAvailableAttributePoint;
    }

    public setTotalAvailablePoint(quantity: number): void
    {
        this.availableAttributePoint = quantity;
        this.updateAvailableAttributePoint;
    }

    public setTotalAllocatedPoint(quantity: number): void
    {
        this.allocatedAttributePoint = quantity;
        this.updateAvailableAttributePoint;
    }
}