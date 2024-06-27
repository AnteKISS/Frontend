

export class Skill
{
    public name: String
    public parent: Skill | null;
    public requiredPoints: number;
    public allocatedPoint: number;

    constructor(name: String, requiredPoints: number, parent: Skill)
    {
        this.name = name;
        this.requiredPoints = requiredPoints;
        this.allocatedPoint = 0;
        this.parent = parent;
    }
}