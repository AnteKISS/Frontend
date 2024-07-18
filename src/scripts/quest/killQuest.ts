import { MonsterEntity } from "../entities/monsterEntity";
import { EntityManager } from "../managers/entityManager";
import EventManager from "../managers/eventManager";
import { QuestManager } from "../managers/questManager";
import { KillQuestObserver } from "../observer/killQuestObserver";


export class KillQuest
{
    private amountKilled: number;
    private amountToKill: number;
    private monsterId: string;
    private expReward: number;
    private succeeded: boolean;
    private observer: KillQuestObserver;

    constructor(amountToKill: number, monsterId: string, expReward: number)
    {
        this.amountToKill = amountToKill;
        this.monsterId = monsterId;
        this.expReward = expReward;
        this.amountKilled = 0;
        this.succeeded = false;
        this.observer = new KillQuestObserver(this);
        EventManager.addObserver(this.observer);
        QuestManager.getInstance.addQuest(this);
    }

    private checkSuccess(): void
    {
        if(this.amountKilled >= this.amountToKill)
        {
            this.succeeded = true;
            EntityManager.instance.getPlayers()[0].exp.addExp(this.expReward)
            QuestManager.getInstance.removeQuest(this);
        }
    }

    public verifyMonsterId(entity: MonsterEntity)
    {
        if(entity.code == this.monsterId)
        {
            this.amountKilled ++;
            this.checkSuccess();
        }
    }

    public getAmountKilled(): number
    {
        return this.amountKilled;
    }

    public getAmountToKill(): number
    {
        return this.amountToKill;
    }   

    public getMonsterId(): string
    {
        return this.monsterId;
    }
}