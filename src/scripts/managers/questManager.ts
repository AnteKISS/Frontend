import { KillQuest } from "../quest/killQuest";

export class QuestManager
{
    private static instance: QuestManager;
    private quests: KillQuest[];

    private constructor() 
    {
        this.quests = [];
    }

    public static get getInstance(): QuestManager
    {
        if (!QuestManager.instance) 
        {
            QuestManager.instance = new QuestManager();
        }
        return QuestManager.instance;
    }

    public addQuest(quest: KillQuest): void 
    {
        this.quests.push(quest);
    }

    public removeQuest(quest: KillQuest): void 
    {
        const index = this.quests.indexOf(quest);
        if (index == -1) 
        {
            return;
        }
        this.quests.splice(index, 1);
    }

    public getQuests(): KillQuest[]
    {
        return this.quests;
    }
}