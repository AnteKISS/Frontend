import Quest from "../quest/quest";
import { Dialogue } from "./dialogue";

export abstract class DialogueOption extends Phaser.GameObjects.Text {
  public scene: Phaser.Scene;
  public parent: Dialogue;
  // public debugGraphics: Phaser.GameObjects.Graphics;
  // public width: number;
  // public height: number;
  // public textStyles: Phaser.Types.GameObjects.Text.TextStyle;

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

    // this.debugGraphics = this.scene.add.graphics();
    // this.debugGraphics.lineStyle(2, 0xff0000); // Red color
    // this.debugGraphics.strokeRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
  }

  // public updatePosition(positionX?: number, positionY?: number): void {
  //   this.x = positionX ? positionX : this.x;
  //   this.y = positionY ? positionY : this.y;
  // }
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