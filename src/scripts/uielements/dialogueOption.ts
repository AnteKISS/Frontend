import Quest from "../quest/quest";
import { Dialogue } from "./dialogue";
import { EntityManager } from "../managers/entityManager";
import CampaignManager from "../managers/campaignmanager";
import TileModule from "../tiles/tilemodule";
import { MathModule } from "../utilities/mathModule";

export abstract class DialogueOption extends Phaser.GameObjects.Text {
  public scene: Phaser.Scene;
  public parent: Dialogue;

  public readonly BASE_OPTION_HEIGHT: number = 20;

  constructor(scene: Phaser.Scene, dialog: Dialogue) {
    super(scene, 0, 0, '', {
        color: '#ffffff',
        align: 'center',
        fontSize: '16px'
    });
    this.scene = scene;
    this.parent = dialog;
    this.width = this.parent.width;
    this.height = this.BASE_OPTION_HEIGHT;
    this.setOrigin(0.5, 0.5);
    this.depth = 9999;

    this.setInteractive();
    this.on('pointerover', () => {
      this.setBackgroundColor('#888888');
    });
    this.on('pointerout', () => {
      this.setBackgroundColor('');
    });
    this.on('pointerdown', (pointer, localX, localY, event) => {
      event.stopPropagation();
    });
  }
}

export class QuestDialogueOption extends DialogueOption {
  public quest: Quest;

  constructor(scene, dialog: Dialogue, quest?: Quest) {
    super(scene, dialog);
    if (quest) {
      this.quest = quest;
    }
    this.on('pointerdown', (pointer, localX, localY, event) => {
      if (this.quest) {
        this.quest.activateQuest();
      }
    });
  }
}

export class SpawnMonsterDialogueOption extends DialogueOption {
  public monsterCode: string;

  constructor(scene, dialog: Dialogue, monsterCode: string) {
    super(scene, dialog);
    this.monsterCode = monsterCode;

    this.on('pointerdown', (pointer, localX, localY, event) => {
      this.spawnMonsters();
    });
  }

  private spawnMonsters(): void {
    for (let i = 0; i < (Math.random() * 15) + 1; i++) {
      const entity = EntityManager.instance.createMonster(CampaignManager.getInstance().getScene(), this.monsterCode);
      const xTileOffset = MathModule.getRandomInt(-1, 1 + 1);
      const yTileOffset = MathModule.getRandomInt(-1, 1 + 1);
      const pos = TileModule.getUnitPosFromTilePos(0 + xTileOffset, 0 + yTileOffset);

      entity.positionX = pos.x;
      entity.positionY = pos.y;
      entity.area = CampaignManager.getInstance().getCampaign().currentArea();
    }
  }
}

export class ExitMenuDialogueOption extends DialogueOption {
  constructor(scene, dialog: Dialogue) {
    super(scene, dialog);

    this.on('pointerdown', (pointer, localX, localY, event) => {
      this.parent.hideDialogue();
      if (this.parent.parent) {
        this.parent.parent.showDialogue();
      }
    });
  }
}