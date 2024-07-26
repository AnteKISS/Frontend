import Quest from "../quest/quest";
import { Dialogue } from "./dialogue";

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
  }
}

// export class SubDialogueMenuDialogueOption extends DialogueOption {
//   public subDialogue: Dialogue;

//   constructor(scene, dialog: Dialogue, subDialogue: Dialogue) {
//     super(scene, dialog);
//       this.subDialogue = subDialogue;
//   }
// }