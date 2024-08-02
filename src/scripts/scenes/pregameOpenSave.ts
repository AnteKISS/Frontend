import axios from 'axios';
import { KeyObject } from 'crypto';
import Phaser from 'phaser';
import KeycloakManager from '../keycloak';
import { error } from 'console';
import { EntityManager } from '../managers/entityManager';
import { BaseEntity } from '../entities/baseEntity';


export default class PregameOpenSave extends Phaser.Scene {

  TintColorClicked: number = 0x660000;
  TintColorUnclicked: number = 0xff0000;
  muteClicked: boolean = false;
  volume: number = 50;
  tempVolume: number = 0;
  private backgroundImage: Phaser.GameObjects.Image;

  loadAmt : number = 0;

  constructor() {
    super('PregameOpenSave');
  }

  create() {

    const { width, height } = this.scale;
    this.backgroundImage = this.add.image(width / 2, height / 2.5, 'backGround');
    this.backgroundImage.setScale(1.7);

    this.getSaves()
      .then(saveAmt => this.createSaveButton(saveAmt))
      .catch(error => {
        console.error("Error loading save amt : ", error);
      });

    this.createButton(150, height - 50, 'button', 'back', () => this.return())
  }

  createButton(x: number, y: number, frameKey: string, textKey: string, callback: () => void) {
    const buttonContainer = this.add.container(x, y);

    const frame = this.add.sprite(0, 0, frameKey).setInteractive();
    const text = this.add.sprite(0, 0, textKey);

    buttonContainer.add([frame, text]);

    frame.on('pointerover', () => {
      frame.setTint(0x909090);
      text.setTint(0x909090);
    });

    frame.on('pointerout', () => {
      frame.clearTint();
      text.clearTint();
    });

    frame.on('pointerdown', () => {
      frame.setTint(0xff4444);
      text.setTint(0xff4444);
      callback();
    });

    frame.on('pointerup', () => {
      frame.clearTint();
      text.clearTint();
    });

    text.on('pointerover', () => {
      frame.setTint(0x909090);
      text.setTint(0x909090);
    });

    text.on('pointerout', () => {
      frame.clearTint();
      text.clearTint();
    });

    text.on('pointerdown', () => {
      frame.setTint(0xff4444);
      text.setTint(0xff4444);
      callback();
    });

    text.on('pointerup', () => {
      frame.clearTint();
      text.clearTint();
    });

    return buttonContainer;
  }


  return() {
    console.log('return button clicked');
    this.scene.start('Pregame');
  }

  createSaveButton(buttonAmt : number) {
    for (let i : number = 1; i < buttonAmt; i++)
    {
      this.createButton(this.scale.width / 2, 50 + (i * 100), 'button', 'save' + i, () => this.loadSave(i));
    }
  }

  loadSave(slotNumber : number) {
    this.getSave(slotNumber)
      .then(save => this.startGame(slotNumber, save))
      .catch(error => {
        console.error("ERRERUR AXIOS:", error);
      });
  }

  Save1() {
    console.log('Save1 button clicked');
    // this.scene.start('MainScene', { saveSlot: 1, save: '{"playerX":-289.8033437619209,"playerY":-431.31437688232006,"playerAllocatedPoints":{"strength":0,"dexterity":2,"vitality":0,"intelligence":0},"playerUnallocatedPoints":3,"playerXp":582,"playerInventoryItems":[{"code":15,"x":2,"y":0}],"playerEquippedItems":[{"slot":"helmet"},{"slot":"armor"},{"slot":"amulet"},{"slot":"mainhand"},{"slot":"offhand"},{"slot":"ring1"},{"slot":"ring2","code":6},{"slot":"belt"},{"slot":"gloves"},{"slot":"boots"}]}' });
    this.getSave(1)
      .then(save => this.startGame(1, save))
      .catch(error => {
        console.error("ERRERUR AXIOS:", error);
      });
  }

  Save2() {
    console.log('Save2 button clicked');
    this.scene.start('MainScene', { saveSlot: 2 });
  }

  Save3() {
    console.log('Save3 button clicked');
    this.scene.start('MainScene', { saveSlot: 3 });
  }

  Save4() {
    console.log('Save4 button clicked');
    this.scene.start('MainScene', { saveSlot: 4 });
  }

  private async getSave(saveSlotNum: number): Promise<string> {
    const response = await axios.get("http://localhost:8082/Save/" + KeycloakManager.getUsername());
    const data: Array<any> = response.data;

    const saveData = data.find((save: any) => save.saveSlot === saveSlotNum);

    if (!saveData) {
      return "";
    }

    return JSON.stringify(saveData);
  }

  private async getSaves(): Promise<number> {
    const response = await axios.get("http://localhost:8082/Save/" + KeycloakManager.getUsername());
    const data: Array<any> = response.data;

    return data.length;
  }

  private startGame(saveSlot: number, save: string): void {
    this.scene.start("MainScene", { playerName: KeycloakManager.getUsername(), saveSlot: saveSlot, save: save });
  }

  readSave() {
    //reada json file
  }

  openFromJson() {
    // open a scene from the json file  
  }


}
