export default class Item extends Phaser.GameObjects.Sprite {
  name: string;
  inventoryWidth: number;
  inventoryHeight: number;

  constructor(scene: Phaser.Scene, name: string, width: number, height: number, img: string) {
    super(scene, 0, 0, img);
    this.name = name;
    this.inventoryWidth = width;
    this.inventoryHeight = height;

    this.setOrigin(0, 0);
    this.setScale(width * 32 / this.width);

    scene.add.existing(this);
  }
}
