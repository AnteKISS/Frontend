export default class Item extends Phaser.GameObjects.Rectangle {
  name: string;
  inventoryWidth: number;
  inventoryHeight: number;

  constructor(scene: Phaser.Scene, name: string, width: number, height: number) {
    super(scene, 0, 0, 0, 0, 0xFF0000);
    this.name = name;
    this.inventoryWidth = width;
    this.inventoryHeight = height;
    scene.add.existing(this);
  }
}
