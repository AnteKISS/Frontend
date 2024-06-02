import { PlayerEntity } from "../entities/playerEntity";
import { EntityManager } from "../managers/entityManager";

export default class PlayerController {
  private player: PlayerEntity;

  constructor(scene: Phaser.Scene, player: PlayerEntity) {
    this.player = player;
    this.initSpellBarInput();
    this.initPlayerMovementInput();
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
    this.player.setPointerDown(true);
    let destinationX = pointer.x + this.player.positionX - this.player.scene.cameras.main.width / 2;
    let destinationY = pointer.y + this.player.positionY - this.player.scene.cameras.main.height / 2;

    const entity = EntityManager.instance.getEntityAtPosition(destinationX, destinationY);
    if (entity !== undefined && entity !== null) {
      destinationX = entity.positionX;
      destinationY = entity.positionY;
    }

    this.player.setDestination(destinationX, destinationY);
    this.player.setOrientationRad(Phaser.Math.Angle.Between(this.player.x, this.player.y, destinationX, destinationY));
  }

  public onPointerUp(pointer: Phaser.Input.Pointer): void {
    this.player.setPointerDown(false);
  }

  public onPointerMove(pointer: Phaser.Input.Pointer): void {
    const DEST_X = pointer.x + this.player.positionX - this.player.scene.cameras.main.width / 2;
    const DEST_Y = pointer.y + this.player.positionY - this.player.scene.cameras.main.height / 2;

    if (this.player.getPointerDown()) {
        this.player.setDestination(DEST_X, DEST_Y);
        this.player.setOrientationRad(Phaser.Math.Angle.Between(this.player.x, this.player.y, DEST_X, DEST_Y));
    }
  }
}   
