import { PlayerEntity } from "../entities/playerEntity";
import { EntityManager } from "../managers/entityManager";

export default class LeftInfoBar extends Phaser.GameObjects.Container
{
    private leftInfoBar: Phaser.GameObjects.Sprite;
    private potionPouch: Phaser.GameObjects.Sprite;
    private potionAmount: Phaser.GameObjects.Text;

    constructor(scene: Phaser.Scene, x: number, y: number)
    {
        super(scene);
        this.leftInfoBar = scene.add.sprite(x, y, 'leftInfoBar');
        this.leftInfoBar.setScale(0.75);

        this.potionPouch = scene.add.sprite(x + 172, y + 22, 'potionIcon');
        this.potionPouch.setScale(0.1);
        this.potionAmount = scene.add.text(x + 90, y + 15, '', {
            fontSize: '18px',
            color: '#ffffff'
        });

        this.add([this.leftInfoBar, this.potionPouch, this.potionAmount]);
    }

    public updateText(player: PlayerEntity): void 
    {
        this.potionAmount.setText(player.potionPouch.getAmount() + ' / ' + player.potionPouch.getMaxAmount());
    }
}
