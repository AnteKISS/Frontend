export namespace UiEvents {
  export class ButtonClickEvent {
    public button: Phaser.GameObjects.GameObject;

    constructor(button: Phaser.GameObjects.GameObject) {
      this.button = button;
    }
  }
}