import { PlayerEntity } from "../entities/playerEntity";
import { Skill } from "./skill"


export class SkillTree
{
    private player: PlayerEntity;
    private totalSkillPoint: number;
    private availahbleSkillPoint: number;
    private allocatedSkillPoint: number;
    private nodes: Skill[];

    constructor(player: PlayerEntity)
    {
        this.player = player;
        this.nodes = [];
    }

    public allocatePoint(skillName: string)
    {
        this.nodes.forEach((node) => {
            const parent = node.parent;
            if(parent)
            {
                if(node.name == skillName && parent.allocatedPoint >= parent.requiredPoints && this.availahbleSkillPoint > 0)
                {
                    node.allocatedPoint ++;
                    this.allocatedSkillPoint ++;
                    this.updateAvailableSkillPoint;
                }
            }
            else if(node.name == skillName && this.availahbleSkillPoint > 0)
            {
                node.allocatedPoint ++;
                this.allocatedSkillPoint ++;
                this.updateAvailableSkillPoint;
            }
        });
    }

    public addNode(node: Skill)
    {
        this.nodes.push(node);
    }

    public levelUp(): void
    {
        this.totalSkillPoint += 1;
        this.updateAvailableSkillPoint();
    }

    public getTotalSkillPoint(): number
    {
        return this.totalSkillPoint;
    }

    public updateAvailableSkillPoint(): void
    {
        this.availahbleSkillPoint = this.totalSkillPoint - this.allocatedSkillPoint;
    }

    public getTotalAvailablePoint(): number
    {
        return this.availahbleSkillPoint;
    }

    public getTotalAllocatedPoint(): number
    {
        return this.allocatedSkillPoint;
    }

    public setTotalSkillPoint(quantity: number): void
    {
        this.totalSkillPoint = quantity;
        this.updateAvailableSkillPoint;
    }

    public setTotalAvailablePoint(quantity: number): void
    {
        this.availahbleSkillPoint = quantity;
        this.updateAvailableSkillPoint;
    }

    public setTotalAllocatedPoint(quantity: number): void
    {
        this.allocatedSkillPoint = quantity;
        this.updateAvailableSkillPoint;
    }
}