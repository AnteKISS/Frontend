import { MonsterEntity } from "../entities/monsterEntity";
import { ActiveEntityEvents } from "../events/activeEntityEvents";
import { KillQuest } from "../quest/killQuest";
import IObserver from "./observer";


export class KillQuestObserver implements IObserver
{
    private quest: KillQuest;
    
    constructor(quest: KillQuest)
    {
        this.quest = quest;
    }

    onNotify(event: any): void 
    {
        if(event instanceof ActiveEntityEvents.KilledEvent && event.target instanceof MonsterEntity)
        {
            this.quest.verifyMonsterId(event.target);
        }
    }
}