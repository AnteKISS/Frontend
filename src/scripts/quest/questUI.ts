import { forEach } from "mathjs";
import { QuestManager } from "../managers/questManager";


export class QuestUI extends Phaser.GameObjects.Container
{
    constructor(scene: Phaser.Scene)
    {
        super(scene);
        this.drawUI(scene);
        scene.add.existing(this);
    }

    public drawUI(scene): void
    {
        this.removeAll(true);
        QuestManager.getInstance.getQuests().forEach((quest, index) => {
            const background = new Phaser.GameObjects.Graphics(scene);
            background.fillStyle(0x000000, 0.5);
            
            const text = new Phaser.GameObjects.Text(scene, 10, 107 + (30 * index), 'Kill ' + quest.getMonsterId() + ': ' + quest.getAmountKilled() + '/' + quest.getAmountToKill(), { fontSize: '14px', color: '#ffffff'});
            background.fillRect(0, 100 + (30 * index), text.displayWidth + 20, 30);
            
            this.add([background, text]);
        });
    }
}