import { BaseEntity } from "../entities/baseEntity";
import { DialogueOption } from "./dialogueOption";

export class Dialogue {
  public scene: Phaser.Scene;
  public parent: Dialogue | null = null;
  public parentEntity: BaseEntity | null = null;
  public positionX: number = 0;
  public positionY: number = 0;
  public dialogueOptions: DialogueOption[] = [];
  public graphics: Phaser.GameObjects.Graphics;

  public constructor(scene: Phaser.Scene, positionX: number, positionY: number, parentEntity?: BaseEntity, parent?: Dialogue | null) {
    this.scene = scene;
    // this.graphics = new Phaser.GameObjects.Graphics(scene);
    this.graphics = scene.add.graphics();
    if (parentEntity) {
      this.parentEntity = parentEntity;
    }
    if (parent) {
      this.parent = parent;
    }
    this.hideDialogue();
  }

  public addDialogueOption(dialogueOption: DialogueOption): void {
    this.dialogueOptions.push(dialogueOption);
    this.scene.add.existing(dialogueOption);
  }

  public removeDialogueOption(dialogueOption: DialogueOption): void {
    const index = this.dialogueOptions.indexOf(dialogueOption);
    if (index > -1) {
      this.dialogueOptions.splice(index, 1);
    }
    dialogueOption.destroy();
  }

  public updatePosition(positionX?: number, positionY?: number): void {
    if (this.parentEntity && !positionX && !positionY) {
      this.positionX = this.parentEntity.positionX;
      this.positionY = this.parentEntity.positionY;
      this.graphics.setPosition(this.positionX, this.positionY);
    } else {
      if (positionX) {
        this.positionX = positionX;
        this.graphics.setX(positionX);
        for (const dialogueOption of this.dialogueOptions) {
          dialogueOption.updatePosition(positionX, positionY);
        }
      }
      if (positionY) {
        this.positionY = positionY;
        this.graphics.setY(positionY);
        for (const dialogueOption of this.dialogueOptions) {
          dialogueOption.updatePosition(positionX, positionY);
        }
      }
      // this.graphics.setPosition(positionX, positionY);
      // for (const dialogueOption of this.dialogueOptions) {
      //   dialogueOption.updatePosition(positionX, positionY);
      // }
    }
  }

  public showDialogue(): void {
    this.graphics.setVisible(true);
    for (const dialogueOption of this.dialogueOptions) {
      dialogueOption.setVisible(true);
    }
  }

  public hideDialogue(): void {
    this.graphics.setVisible(false);
    for (const dialogueOption of this.dialogueOptions) {
      dialogueOption.setVisible(false);
    }
  }
}