import { PlayerEntity } from "../entities/playerEntity";
import PlayerController from "../inputs/playerController";
import { EntityManager } from "../managers/entityManager";

export class CharacterStatsUI extends Phaser.GameObjects.Container
{
    private background: Phaser.GameObjects.Sprite;
    private closeButton: Phaser.GameObjects.Sprite;
    private level: Phaser.GameObjects.Text;
    private maxHealth: Phaser.GameObjects.Text;
    private maxMana: Phaser.GameObjects.Text;
    private healthRegen: Phaser.GameObjects.Text;
    private manaRegen: Phaser.GameObjects.Text;
    private phys: Phaser.GameObjects.Text;
    private mag: Phaser.GameObjects.Text;
    private ms: Phaser.GameObjects.Text;
    private def: Phaser.GameObjects.Text;
    private str: Phaser.GameObjects.Text;
    private dex: Phaser.GameObjects.Text;
    private vit: Phaser.GameObjects.Text;
    private int: Phaser.GameObjects.Text;

    private player: PlayerEntity;

    private isOpen: Boolean;

    constructor(scene: Phaser.Scene, player: PlayerEntity)
    {
        super(scene);
        this.player = player;
        this.setDepth(10);

        this.background = new Phaser.GameObjects.Sprite(scene, 1112, 350, 'black_rock_background').setInteractive();
        this.background.setScale(0.5);

        this.closeButton = new Phaser.GameObjects.Sprite(scene, 1232, 188, 'close_button').setInteractive();
        this.closeButton.on('pointerdown', (pointer, localX, localY, event) => {
            event.stopPropagation();
            this.hide();
        });
        this.closeButton.setScale(0.5);

        this.background.on('pointerdown', (pointer, localX, localY, event) => {
            event.stopPropagation();
        });

        this.level = new Phaser.GameObjects.Text(scene, 0, 0, "Character Level: " + this.player.dynamicStats.level, {
            fontSize: '14px',
            color: '#ffffff'
        });
        this.level.setPosition(this.background.x - this.background.displayWidth/2 + 20, this.background.y - this.background.displayHeight/18 * 8);

        this.maxHealth = new Phaser.GameObjects.Text(scene, 0, 0, "Max Health: " + this.player.totalModifierStats.maxHealth, {
            fontSize: '14px',
            color: '#ffffff'
        });
        this.maxHealth.setPosition(this.background.x - this.background.displayWidth/2 + 20, this.background.y - this.background.displayHeight/18 * 7);

        this.maxMana = new Phaser.GameObjects.Text(scene, 0, 0, "Max Mana: " + this.player.totalModifierStats.maxMana, {
            fontSize: '14px',
            color: '#ffffff'
        });
        this.maxMana.setPosition(this.background.x - this.background.displayWidth/2 + 20, this.background.y - this.background.displayHeight/18 * 6);

        this.healthRegen = new Phaser.GameObjects.Text(scene, 0, 0, "Health Regeneration: " + this.player.totalModifierStats.healthRegeneration, {
            fontSize: '14px',
            color: '#ffffff'
        });
        this.healthRegen.setPosition(this.background.x - this.background.displayWidth/2 + 20, this.background.y - this.background.displayHeight/18 * 5);

        this.manaRegen = new Phaser.GameObjects.Text(scene, 0, 0, "Mana Regeneration: " + this.player.totalModifierStats.manaRegeneration, {
            fontSize: '14px',
            color: '#ffffff'
        });
        this.manaRegen.setPosition(this.background.x - this.background.displayWidth/2 + 20, this.background.y - this.background.displayHeight/18 * 4);

        this.phys = new Phaser.GameObjects.Text(scene, 0, 0, "Base Physical Damage: " + this.player.totalModifierStats.basePhysicalDamage, {
            fontSize: '14px',
            color: '#ffffff'
        });
        this.phys.setPosition(this.background.x - this.background.displayWidth/2 + 20, this.background.y - this.background.displayHeight/18 * 3);

        this.mag = new Phaser.GameObjects.Text(scene, 0, 0, "Base Magical Damage: " + this.player.totalModifierStats.baseMagicalDamage, {
            fontSize: '14px',
            color: '#ffffff'
        });
        this.mag.setPosition(this.background.x - this.background.displayWidth/2 + 20, this.background.y - this.background.displayHeight/18 * 2);

        this.ms = new Phaser.GameObjects.Text(scene, 0, 0, "Movement Speed: " + this.player.totalModifierStats.movementSpeed, {
            fontSize: '14px',
            color: '#ffffff'
        });
        this.ms.setPosition(this.background.x - this.background.displayWidth/2 + 20, this.background.y - this.background.displayHeight/18 * 1);

        this.def = new Phaser.GameObjects.Text(scene, 0, 0, "Defense: " + this.player.totalModifierStats.defense, {
            fontSize: '14px',
            color: '#ffffff'
        });
        this.def.setPosition(this.background.x - this.background.displayWidth/2 + 20, this.background.y + this.background.displayHeight/18 * 0);

        this.vit = new Phaser.GameObjects.Text(scene, 0, 0, "Vitality: " + this.player.realVitality, {
            fontSize: '14px',
            color: '#ffffff'
        });
        this.vit.setPosition(this.background.x - this.background.displayWidth/2 + 20, this.background.y + this.background.displayHeight/18 * 2);

        this.str = new Phaser.GameObjects.Text(scene, 0, 0, "Strenght: " + this.player.realStrenght, {
            fontSize: '14px',
            color: '#ffffff'
        });
        this.str.setPosition(this.background.x - this.background.displayWidth/2 + 20, this.background.y + this.background.displayHeight/18 * 3);

        this.dex = new Phaser.GameObjects.Text(scene, 0, 0, "Dexterity: " + this.player.realDexterity, {
            fontSize: '14px',
            color: '#ffffff'
        });
        this.dex.setPosition(this.background.x - this.background.displayWidth/2 + 20, this.background.y + this.background.displayHeight/18 * 4);

        this.int = new Phaser.GameObjects.Text(scene, 0, 0, "Intelligence: " + this.player.realIntelligence, {
            fontSize: '14px',
            color: '#ffffff'
        });
        this.int.setPosition(this.background.x - this.background.displayWidth/2 + 20, this.background.y + this.background.displayHeight/18 * 5);

        this.isOpen = false;

        this.add([
            this.background,
            this.closeButton,
            this.level,
            this.maxHealth,
            this.maxMana,
            this.healthRegen,
            this.manaRegen,
            this.phys,
            this.mag,
            this.ms,
            this.def,
            this.str,
            this.dex,
            this.vit,
            this.int
        ]);

        scene.add.existing(this);
        
        this.setVisible(false);
    }

    public isPointerOn(pointer: Phaser.Input.Pointer): boolean {
        const bounds = this.getBounds();
        return Phaser.Geom.Rectangle.Contains(bounds, pointer.x, pointer.y);
      }

    public cKeyPressed()
    {
        if(this.isOpen)
        {
            this.hide();
            this.isOpen = false;
        }
        else
        {
            this.show();
            this.isOpen = true;
        }
    }

    public show()
    {
        this.setVisible(true);
    }

    public hide()
    {
        this.setVisible(false);
    }

    public update()
    {
        this.level.setText( "Character Level: " + this.player.dynamicStats.level);
        this.maxHealth.setText("Max Health: " + this.player.totalModifierStats.maxHealth);
        this.maxMana.setText("Max Mana: " + this.player.totalModifierStats.maxMana);
        this.healthRegen.setText("Health Regeneration: " + this.player.totalModifierStats.healthRegeneration);
        this.manaRegen.setText("Mana Regeneration: " + this.player.totalModifierStats.manaRegeneration);
        this.phys.setText("Base Physical Damage: " + this.player.totalModifierStats.basePhysicalDamage);
        this.mag.setText("Base Magical Damage: " + this.player.totalModifierStats.baseMagicalDamage);
        this.ms.setText("Movement Speed: " + this.player.totalModifierStats.movementSpeed);
        this.def.setText("Defense: " + this.player.totalModifierStats.defense);
        this.str.setText("Vitality: " + this.player.realStrenght);
        this.dex.setText("Strenght: " + this.player.realDexterity);
        this.vit.setText("Dexterity: " + this.player.realVitality);
        this.int.setText("Intelligence: " + this.player.realIntelligence);
    }
}