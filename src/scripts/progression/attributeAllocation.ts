import { PlayerEntity } from "../entities/playerEntity";


export class AttributeAllocation
{
    private player: PlayerEntity;
    private totalAttributePoint: number;
    private availableAttributePoint: number;
    private allocatedAttributePoint: number;
    public strength: number = 0;
    public dexterity: number = 0;
    public vitality: number = 0;
    public intelligence: number = 0;

    public allocateStrenghtPoint()
    {
        if(this.availableAttributePoint > 0)
        {
            this.strength ++
            this.allocatedAttributePoint ++;
            this.updateAvailableAttributePoint();
        }
    }

    public allocateDexterityPoint()
    {
        if(this.availableAttributePoint > 0)
        {
            this.dexterity ++
            this.allocatedAttributePoint ++;
            this.updateAvailableAttributePoint();
        }
    }

    public allocateVitalityPoint()
    {
        if(this.availableAttributePoint > 0)
        {
            this.vitality ++
            this.allocatedAttributePoint ++;
            this.updateAvailableAttributePoint();
        }
    }

    public allocateIntelligencePoint()
    {
        if(this.availableAttributePoint > 0)
        {
            this.intelligence ++
            this.allocatedAttributePoint ++;
            this.updateAvailableAttributePoint();
        }
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