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
    this.height += dialogueOption.height == 0 ? dialogueOption.BASE_OPTION_HEIGHT : dialogueOption.height;
    this.scene.add.existing(dialogueOption);
    (this.scene as MainScene).uiCamera.ignore(dialogueOption);
    if (!this.graphics.visible) {
      dialogueOption.setVisible(false);
    }
  }

  public removeDialogueOption(dialogueOption: DialogueOption): void {
    const index = this.dialogueOptions.indexOf(dialogueOption);
    if (index > -1) {
      this.dialogueOptions.splice(index, 1);
      if (dialogueOption.height != 0) {
        this.height -= dialogueOption.height == 0 ? dialogueOption.BASE_OPTION_HEIGHT : dialogueOption.height;
      }
    }
    dialogueOption.destroy();
  }

  public update(time: number, deltaTime: number): void {
    this.updatePosition();
    this.graphics.clear();
    this.graphics.fillStyle(this.DIALOGUE_OUTLINE_COLOR, 0.5);
    this.graphics.fillRect(this.positionX, this.positionY, this._width, this._height);
    this.graphics.lineStyle(2, this.DIALOGUE_OUTLINE_COLOR, 1);
    this.graphics.strokeRect(this.positionX - 2, this.positionY - 2, this._width + 4, this._height + 4);
    // for (const dialogueOption of this.dialogueOptions) {
    //   dialogueOption.update(time, deltaTime);
    // }
  }

  public updatePosition(positionX?: number, positionY?: number): void {
    this.parentEntity!.positionX += 0.1;
    this.parentEntity!.positionY += 0.1;
    if (this.parentEntity && !positionX && !positionY) {
      const refOptHeight = this.dialogueOptions.length > 0 ? this.dialogueOptions[0].height : 0;
      this.positionX = ((this.parentEntity.positionX * 0.5) - this._width * 0.25);
      this.positionY = (((this.parentEntity.positionY * 0.5) - this._height * 0.5) - this.parentEntity.truncatedSpriteHeight * 0.5);// - ((this.dialogueOptions.length - 1) * refOptHeight);
      this.graphics.setPosition(this.positionX, this.positionY);
      for (let i = 0; i < this.dialogueOptions.length; i++) {
        // console.log(this.dialogueOptions[i].x, this.dialogueOptions[i].y);
        this.dialogueOptions[i].setX(this.parentEntity.positionX);
        this.dialogueOptions[i].setY(((this.parentEntity.positionY) - (this._height - (this.dialogueOptions[i].height / 2) - (i * this._height / this.dialogueOptions.length)) - this.parentEntity.truncatedSpriteHeight));// + (i * this.dialogueOptions[i].height));
        // this.dialogueOptions[i].setY(((this.parentEntity.positionY) - (this._height * (0.5 * (i)) - this.parentEntity.truncatedSpriteHeight));// + (i * this.dialogueOptions[i].height));
        // this.dialogueOptions[i].setX(this.positionX + this._width / 2);
        // this.dialogueOptions[i].setY(this.positionY + this._height / 2 + (i * this.dialogueOptions[i].height));
        // console.log("Fuck this shit ", this.positionX, this.positionY);
        // console.log("Fuck this shi2 ", this.dialogueOptions[i].x, this.dialogueOptions[i].y);
        // const offsetY = i * (this.dialogueOptions[i].height || this.dialogueOptions[i].BASE_OPTION_HEIGHT);
        // this.dialogueOptions[i].updatePosition(this.positionX, this.positionY + offsetY);
        // this.dialogueOptions[i].updatePosition(ref.x - ref.width / 2, ref.y - ref.height / 2);
      }
      // for (let i = 0; i < this.dialogueOptions.length; i++) {
      //   // this.dialogueOptions[i].updatePosition(this.positionX / 2, (this.positionY / this.dialogueOptions[i].originY));// + (i * this.dialogueOptions[i].height == 0 ? this.dialogueOptions[i].BASE_OPTION_HEIGHT : this.dialogueOptions[i].height));
      //   this.dialogueOptions[i].updatePosition(this.positionX, (this.positionY) + (i * this.dialogueOptions[i].height == 0 ? this.dialogueOptions[i].BASE_OPTION_HEIGHT : this.dialogueOptions[i].height));
      //   // console.log("posY: ", this.positionY, "dialogueOpt.y: ", this.dialogueOptions[i].y, "dialogueOpt.height: ", this.dialogueOptions[i].height);

      // }
    } else {
      if (positionX) {
        this.positionX = positionX;
        this.graphics.setX(positionX);
        for (let i = 0; i < this.dialogueOptions.length; i++) {
          // this.dialogueOptions[i].updatePosition(positionX, this.dialogueOptions[i].y + (i * this.dialogueOptions[i].height));
        }
        // for (const dialogueOption of this.dialogueOptions) {
        //   dialogueOption.updatePosition(positionX, positionY);
        // }
      }
      if (positionY) {
        this.positionY = positionY;
        this.graphics.setY(positionY);
        for (let i = 0; i < this.dialogueOptions.length; i++) {
          // this.dialogueOptions[i].updatePosition(positionX, positionY + (i * this.dialogueOptions[i].height));
        }
        // for (const dialogueOption of this.dialogueOptions) {
        //   dialogueOption.updatePosition(positionX, positionY);
        // }
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