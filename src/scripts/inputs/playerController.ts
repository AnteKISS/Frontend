import { IFightable } from "../entities/IFightable";
import { ActiveEntityAnimationState } from "../entities/entityState";
import { MonsterEntity } from "../entities/monsterEntity";
import { PlayerEntity } from "../entities/playerEntity";
import { EntityManager } from "../managers/entityManager";
import { MathModule } from "../utilities/mathModule";

export default class PlayerController {
  public pointerDown: boolean = false;
  
  private player: PlayerEntity;

  constructor(scene: Phaser.Scene, player: PlayerEntity) {
    this.player = player;
    this.initSpellBarInput();
    this.initPlayerMovementInput();
  }

  public update(time: number, deltaTime: number): void {
    if (this.pointerDown && !this.player.isAttacking()) {
      const destinationX: number = this.player.scene.input.mousePointer.x + this.player.positionX - this.player.scene.cameras.main.width / 2;
      const destinationY: number = this.player.scene.input.mousePointer.y + this.player.positionY - this.player.scene.cameras.main.height / 2;
      this.player.setDestination(destinationX, destinationY);
    }
    let destinationX: number = this.player.destinationX;
    let destinationY: number = this.player.destinationY;
    if (this.player.target !== null && this.player.target !== undefined) {
      if (!(this.player.target as unknown as IFightable).isDead()) {
        if (MathModule.scaledDistanceBetween(this.player.positionX, this.player.positionY, this.player.target.positionX, this.player.target.positionY) > 100) {
          destinationX = this.player.target.positionX;
          destinationY = this.player.target.positionY;
        } else {
          if (this.player.target instanceof MonsterEntity || this.player.target instanceof PlayerEntity && !this.player.isAttacking()) {
            this.player.setOrientationRad(Phaser.Math.Angle.Between(this.player.x, this.player.y, this.player.target.positionX, this.player.target.positionY));
            if (this.player.target.isTargetable) {
              this.player.currentAnimationState.state = ActiveEntityAnimationState.State.MELEEATTACK;
              this.player.setDestination(this.player.positionX, this.player.positionY);
            }
          }
        }
      }
    }
    if (!this.player.isAttacking()) {
      this.player.setOrientationRad(Phaser.Math.Angle.Between(this.player.x, this.player.y, destinationX, destinationY));
    }
  }

  private initSpellBarInput(): void {
    const scene = this.player.scene;

    if (scene && scene.input && scene.input.keyboard) {
      const key1 = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
      key1.on('down', () => this.player.onSpellKeyDown('1'), this.player);

      const key2 = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
      key2.on('down', () => this.player.onSpellKeyDown('2'), this.player);

      const key3 = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);
      key3.on('down', () => this.player.onSpellKeyDown('3'), this.player);

      const keyQ = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
      keyQ.on('down', () => this.player.onSpellKeyDown('Q'), this.player);

      const keyW = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      keyW.on('down', () => this.player.onSpellKeyDown('W'), this.player);

      const keyE = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
      keyE.on('down', () => this.player.onSpellKeyDown('E'), this.player);

      const keyR = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
      keyR.on('down', () => this.player.onSpellKeyDown('R'), this.player);

      const keyT = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
      keyT.on('down', () => this.player.onSpellKeyDown('T'), this.player);
    } else {
      console.error("Player or scene not initialized");
    }
  }

  private initPlayerMovementInput(): void {
    const scene = this.player.scene;

    scene.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => this.onPointerDown(pointer));
    scene.input.on('pointerup', (pointer: Phaser.Input.Pointer) => this.onPointerUp(pointer));
    scene.input.on('pointermove', (pointer: Phaser.Input.Pointer) => this.onPointerMove(pointer));
  }

  public onPointerDown(pointer: Phaser.Input.Pointer): void {
    this.pointerDown = true;
    let destinationX = pointer.x + this.player.positionX - this.player.scene.cameras.main.width / 2;
    let destinationY = pointer.y + this.player.positionY - this.player.scene.cameras.main.height / 2;

    const entity = EntityManager.instance.getEntityAtPosition(destinationX, destinationY);
    if ((entity !== undefined && entity !== null) && entity !== this.player) {
      if (!(entity as unknown as IFightable).isDead()) {
        this.player.target = entity;
      }
    } else {
      this.player.target = null;
    }

    if (!this.player.isAttacking()) {
      this.player.setDestination(destinationX, destinationY);
      this.player.setOrientationRad(Phaser.Math.Angle.Between(this.player.x, this.player.y, destinationX, destinationY));
    }
  }

  public onPointerUp(pointer: Phaser.Input.Pointer): void {
    this.pointerDown = false;
  }

  public onPointerMove(pointer: Phaser.Input.Pointer): void {
    const destinationX: number = pointer.x + this.player.positionX - this.player.scene.cameras.main.width / 2;
    const destinationY: number = pointer.y + this.player.positionY - this.player.scene.cameras.main.height / 2;

    if (this.pointerDown && !this.player.isAttacking()) {
        this.player.setDestination(destinationX, destinationY);
        this.player.setOrientationRad(Phaser.Math.Angle.Between(this.player.x, this.player.y, destinationX, destinationY));
    }
  }

  public attackTarget(target: PlayerEntity | MonsterEntity): void {
    this.player.attack(target);
  }
}   
