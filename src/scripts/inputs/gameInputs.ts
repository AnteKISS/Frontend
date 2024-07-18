export class GameInput {

  constructor(scene: Phaser.Scene) {
    this.showGroundItemsKey = scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  public showGroundItemsKey: Phaser.Input.Keyboard.Key;
}
