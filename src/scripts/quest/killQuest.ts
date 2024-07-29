import { MonsterEntity } from "../entities/monsterEntity";
import { EntityManager } from "../managers/entityManager";
import { GeneralEventManager } from "../managers/eventManager";
import { QuestManager } from "../managers/questManager";
import { KillQuestObserver } from "../observer/killQuestObserver";
import Quest from "./quest";

export class KillQuest extends Quest {
    private amountKilled: number;
    private amountToKill: number;
    private monsterId: string;

    constructor(amountToKill: number, monsterId: string, expReward: number) {
        super();
        this.amountToKill = amountToKill;
        this.monsterId = monsterId;
        this.expReward = expReward;
        this.amountKilled = 0;
        this.isFinished = false;
        this.isStarted = false;
        this.observer = new KillQuestObserver(this);
    }

    public activateQuest(): void {
        GeneralEventManager.getInstance().addObserver(this.observer);
        QuestManager.getInstance.addQuest(this);
        this.isStarted = true;
        this.isFinished = false;
    }

    public resetQuest(): void {
        this.amountKilled = 0;
        this.isFinished = false;
        this.isStarted = true;
    }

    public checkQuestCompletionStatus(): void {
        if(this.amountKilled >= this.amountToKill) {
            this.isFinished = true;
            EntityManager.instance.getPlayers()[0].exp.addExp(this.expReward);
            GeneralEventManager.getInstance().removeObserver(this.observer);
            QuestManager.getInstance.removeQuest(this);
            this.isStarted = false;
        }
    }

    public verifyMonsterId(entity: MonsterEntity) {
        if(entity.code == this.monsterId) {
            this.amountKilled ++;
            this.checkQuestCompletionStatus();
        }
    }

    public getAmountKilled(): number {
        return this.amountKilled;
    }

    public getAmountToKill(): number {
        return this.amountToKill;
    }   

    public getMonsterId(): string {
        return this.monsterId;
    }
}