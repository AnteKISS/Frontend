import Quest from "../quest/quest";
import { Dialogue } from "./dialogue";
import { EntityManager } from "../managers/entityManager";
import CampaignManager from "../managers/campaignmanager";
import TileModule from "../tiles/tilemodule";
import { MathModule } from "../utilities/mathModule";
import path from "path";
import { animationConfigKeys } from "../configs/animationConfig";
import { MonsterEntity } from "../entities/monsterEntity";

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
      if (!this.quest) {
        return;
      }
      if (this.quest.isStarted) {
        this.quest.resetQuest();
      } else if (this.quest.isFinished) {
        this.quest.activateQuest();
        this.quest.resetQuest();
      } else {
        this.quest.activateQuest();
      }
    });
  }
}

export class SpawnMonsterDialogueOption extends DialogueOption {
  public monsterCode?: string;

  private isMonsterCodeSpecified: boolean;

  constructor(scene, dialog: Dialogue, isMonsterPack?: boolean, monsterCode?: string) {
    super(scene, dialog);
    if (monsterCode) {
      this.monsterCode = monsterCode;
      this.isMonsterCodeSpecified = true;
    } else {
      this.isMonsterCodeSpecified = false;
    }
    this.on('pointerdown', (pointer, localX, localY, event) => {
      // const possibleMethods = ['spawnMonsters', 'spawnMonterPack'];
      // const randomIndex = Math.floor((Math.random() * possibleMethods.length) + 1);
      // this[possibleMethods[randomIndex]]();
      if (isMonsterPack) {
        this.spawnMonterPack();
      } else {
        this.spawnMonsters();
      }
    });
  }

  private spawnMonsters(): void {
    for (let i = 0; i < (Math.random() * 15) + 1; i++) {
      let entity: MonsterEntity;
      if (!this.isMonsterCodeSpecified) {
        entity = EntityManager.instance.createMonster(CampaignManager.getInstance().getScene(), this.getRandomMonsterCode());
      } else {
        entity = EntityManager.instance.createMonster(CampaignManager.getInstance().getScene(), this.monsterCode!);
      }
      const xTileOffset = MathModule.getRandomInt(-3, 3 + 1);
      const yTileOffset = MathModule.getRandomInt(-3, 3 + 1);
      const pos = TileModule.getUnitPosFromTilePos(0 + xTileOffset, 0 + yTileOffset);

      entity.positionX = pos.x;
      entity.positionY = pos.y;
      entity.area = CampaignManager.getInstance().getCampaign().currentArea();
    }
  }

  private spawnMonterPack(): void {
    let monsterCode: string;
    if (this.isMonsterCodeSpecified) {
      monsterCode = this.monsterCode!;
    } else {
      monsterCode = this.getRandomMonsterCode();
    }

    let entities: MonsterEntity[] = 
      EntityManager.instance.createMonsterWithMinions(CampaignManager.getInstance().getScene(), monsterCode);
    for (let entity of entities) {
      if (entity.monsterPack.isLeader(entity)) {
        continue;
      }
      const xTileOffset = MathModule.getRandomInt(-3, 3 + 1);
      const yTileOffset = MathModule.getRandomInt(-3, 3 + 1);
      const pos = TileModule.getUnitPosFromTilePos(0 + xTileOffset, 0 + yTileOffset);
      entity.positionX = pos.x;
      entity.positionY = pos.y;
      entity.area = CampaignManager.getInstance().getCampaign().currentArea();
    }
  }

  private getRandomMonsterCode(): string {
    const keys = Object.keys(animationConfigKeys).filter(key => !key.includes('player') && !key.includes('trader'));
    const randomIndex = Math.floor(Math.random() * keys.length);
    const monsterCode = keys[randomIndex].substring(0, keys[randomIndex].lastIndexOf('_'));
    return monsterCode;
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