import Quest from "../quest/quest";
import { Dialogue } from "./dialogue";

export class DialogueOption extends Phaser.GameObjects.Text {
  public scene: Phaser.Scene;
  public parent: Dialogue;
  public width: number;
  public height: number;
  // public textStyles: Phaser.Types.GameObjects.Text.TextStyle;

  constructor(scene: Phaser.Scene, dialog: Dialogue) {
    super(scene, 0, 0, '', {
        color: '#ffffff',
        align: 'center',
        fontSize: '16px'
    });
    this.scene = scene;
    this.parent = dialog;
    this.width = this.parent.width;
    this.height = this.parent.height;
  }

  public updatePosition(positionX?: number, positionY?: number): void {

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