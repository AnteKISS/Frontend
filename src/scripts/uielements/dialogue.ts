import { BaseEntity } from "../entities/baseEntity";
import MainScene from "../scenes/mainScene";
import { DialogueOption } from "./dialogueOption";

export class Dialogue {
  public scene: Phaser.Scene;
  public parent: Dialogue | null = null;
  public parentEntity: BaseEntity | null = null;
  public positionX: number = 0;
  public positionY: number = 0;
  public dialogueOptions: DialogueOption[] = [];
  public background: Phaser.GameObjects.Sprite;
  public graphics: Phaser.GameObjects.Graphics;

  private _width: number = 0;
  private _height: number = 0;

  private readonly DIALOGUE_OUTLINE_COLOR: number = 0x000000;

  public constructor(scene: Phaser.Scene, positionX: number, positionY: number, parentEntity?: BaseEntity, parent?: Dialogue | null) {
    this.scene = scene;
    // this.graphics = new Phaser.GameObjects.Graphics(scene);
    this.graphics = scene.add.graphics();
    this.graphics.depth = 1000;
    // this.background = scene.add.sprite(positionX, positionY, 'dialogueBackground');
    // this.background.scaleX = 0;
    // this.background.scaleY = 0;
    // this.background.depth = 1000;
    (this.scene as MainScene).uiCamera.ignore(this.graphics);
    if (parentEntity) {
      this.parentEntity = parentEntity;
    }
    if (parent) {
      this.parent = parent;
    }
    this.hideDialogue();
  }

  public get width(): number {
    return this._width;
  }

  public get height(): number {
    return this._height;
  }

  public set width(value: number) {
    this._width = value;
  }

  public set height(value: number) {
    this._height = value;
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

  public update(time: number, deltaTime: number): void {
    this.updatePosition();
    this.graphics.clear();
    this.graphics.fillStyle(this.DIALOGUE_OUTLINE_COLOR, 0.5);
    this.graphics.fillRect(this.positionX, this.positionY, this._width, this._height);
    this.graphics.lineStyle(2, this.DIALOGUE_OUTLINE_COLOR, 1);
    this.graphics.strokeRect(this.positionX, this.positionY, this._width, this._height);
    for (const dialogueOption of this.dialogueOptions) {
      dialogueOption.update(time, deltaTime);
    }
  }

  public updatePosition(positionX?: number, positionY?: number): void {
    if (this.parentEntity && !positionX && !positionY) {
      this.positionX = ((this.parentEntity.positionX * 0.5) - this._width * 0.25);
      this.positionY = ((this.parentEntity.positionY * 0.5) - this._height * 0.5) - this.parentEntity.truncatedSpriteHeight * 0.5;
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
    // this.background.setVisible(true);
    for (const dialogueOption of this.dialogueOptions) {
      dialogueOption.setVisible(true);
    }
  }

  public hideDialogue(): void {
    this.graphics.setVisible(false);
    // this.background.setVisible(false);
    for (const dialogueOption of this.dialogueOptions) {
      dialogueOption.setVisible(false);
    }
  }
}