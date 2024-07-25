import { IFightable } from "../entities/IFightable";
import { ActiveEntityAnimationState } from "../entities/entityState";
import { MonsterEntity } from "../entities/monsterEntity";
import { PlayerEntity } from "../entities/playerEntity";
import { EntityManager } from "../managers/entityManager";
import { MathModule } from "../utilities/mathModule";
import MainScene from "../scenes/mainScene";
import Point from "../types/point";
import ItemEntity from "../entities/itemEntity";
import { re } from "mathjs";
import { ActiveEntityEvents } from "../events/activeEntityEvents";
import InventoryItem from "../inventory/inventoryItem";
import { GeneralEventManager } from "../managers/eventManager";
import Item from "../inventory/item";
import { ItemType } from "../inventory/itemType";

export default class PlayerController {
  public pointerDown: boolean = false;

  private player: PlayerEntity;
  private destination: Point;
  private mainScene: MainScene;
  private pointerOnInventory: boolean; // TODO: Should only need to call mainScene's "isPointerOnInventory". This is necessary for "update" function
  private selectedItem: ItemEntity | null = null;

  constructor(scene: MainScene, player: PlayerEntity) {
    this.player = player;
    this.destination = new Point(this.player.positionX, this.player.positionY);
    this.mainScene = scene;
    this.pointerOnInventory = false;

    scene.input.on('pointerup', () => this.onPointerUp());
    scene.input.keyboard!.on('keydown-ESC', () => this.player.isDead() ? this.respawnPlayer() : null);

    this.initAllSpellBarInput();
  }

  public update(time: number, deltaTime: number): void {
    if (this.player.isDead() || this.pointerOnInventory)
      return;

    this.updateDestination(this.player.scene.input.mousePointer);
    this.updateDestinationBasedOnTarget();
  }

  private initAllSpellBarInput(): void {
    const scene = this.player.scene;

    if (scene && scene.input && scene.input.keyboard) {
      this.initSpellBarInput(Phaser.Input.Keyboard.KeyCodes.ONE, '1');
      this.initSpellBarInput(Phaser.Input.Keyboard.KeyCodes.TWO, '2');
      this.initSpellBarInput(Phaser.Input.Keyboard.KeyCodes.THREE, '3');
      this.initSpellBarInput(Phaser.Input.Keyboard.KeyCodes.Q, 'Q');
      this.initSpellBarInput(Phaser.Input.Keyboard.KeyCodes.W, 'W');
      this.initSpellBarInput(Phaser.Input.Keyboard.KeyCodes.E, 'E');
      this.initSpellBarInput(Phaser.Input.Keyboard.KeyCodes.R, 'R');
      this.initSpellBarInput(Phaser.Input.Keyboard.KeyCodes.T, 'T');
    } else {
      console.error("Player or scene not initialized");
    }
  }

  private initSpellBarInput(keycode: number, char: string) {
    const key = this.mainScene.input.keyboard!.addKey(keycode);
    key.on('down', () => this.player.onSpellKeyDown(char), this.player);
  }

  public onPointerDown(pointer: Phaser.Input.Pointer): void {
    this.pointerDown = true;
    this.pointerOnInventory = this.mainScene.isPointerOnInventory(pointer);

    if (this.player.isDead() || this.pointerOnInventory)
      return;

    this.updateDestination(pointer);
    this.updateTarget();
  }

  public onPointerMove(pointer: Phaser.Input.Pointer): void {
    this.pointerOnInventory = this.mainScene.isPointerOnInventory(pointer);

    if (this.player.isDead() || this.pointerOnInventory)
      return;

    this.updateDestination(pointer);
  }

  private onPointerUp(): void {
    this.pointerDown = false;
  }

  private attackTarget(target: PlayerEntity | MonsterEntity): void {
    this.player.attack(target);
  }

  private updateDestination(pointer: Phaser.Input.Pointer) {
    this.destination.x = pointer.x + this.player.positionX - this.player.scene.cameras.main.width / 2;
    this.destination.y = pointer.y + this.player.positionY - this.player.scene.cameras.main.height / 2;

    if (this.pointerDown && !this.player.isAttacking() && !this.player.isCasting()) {
      this.player.setDestination(this.destination.x, this.destination.y);
      this.player.setOrientationRad(Phaser.Math.Angle.Between(this.player.x, this.player.y, this.destination.x, this.destination.y));
    }
  }

  private updateDestinationBasedOnTarget() {
    if (
      !this.player.target
      || (this.player.target as unknown as IFightable).isDead()
      || MathModule.scaledDistanceBetween(this.player.positionX, this.player.positionY, this.player.target.positionX, this.player.target.positionY) > 100
      || !(this.player.target instanceof MonsterEntity || this.player.target instanceof PlayerEntity && !this.player.isAttacking())
    )
      return;

    this.player.setOrientationRad(Phaser.Math.Angle.Between(this.player.x, this.player.y, this.player.target.positionX, this.player.target.positionY));
    if (this.player.target.isTargetable && !this.player.isCasting()) {
      this.player.currentAnimationState.state = ActiveEntityAnimationState.State.MELEEATTACK;
      this.player.setDestination(this.player.positionX, this.player.positionY);
    }
  }

  private updateTarget() {
    const entity = EntityManager.instance.getAreaEntityAtPosition(this.destination.x, this.destination.y);

    if (entity?.type === "MonsterEntity")
      this.player.target = entity;
    else
      this.player.target = null;
  }

  private updateDestinationFromSelectedItem() {
    if (!this.selectedItem) {
      return;
    }
    if (MathModule.scaledDistanceBetween(this.player.positionX, this.player.positionY, this.selectedItem.positionX, this.selectedItem.positionY) > 100) {
      this.destination.x = this.selectedItem.positionX;
      this.destination.y = this.selectedItem.positionY;
      return;
    }
  }

  private updateSelectedItem() {
    this.selectedItem = EntityManager.instance.getItemAtPosition(this.destination.x, this.destination.y);
  }

  private respawnPlayer() {
    this.player.positionX = 0;
    this.player.positionY = 0;
    this.player.dynamicStats.health = this.player.totalModifierStats.maxHealth;
    this.player.dynamicStats.mana = this.player.totalModifierStats.maxMana;
    this.player.target = null;
    this.player.currentAnimationState.state = ActiveEntityAnimationState.State.IDLE;
    this.player.setOrientationRad(3 * Math.PI / 4);
    (this.player.scene as MainScene).hideDeathScreen();
  }
}
