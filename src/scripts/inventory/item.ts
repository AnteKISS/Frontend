export default class Item extends Phaser.GameObjects.Rectangle {
  name: string;
  width: number;
  height: number;

  constructor(scene: Phaser.Scene, name: string, width: number, height: number) {
    super(scene, 0, 0, 0, 0, 0xFF0000);
    this.name = name;
    this.width = width;
    this.height = height;
    scene.add.existing(this);
  }
}
