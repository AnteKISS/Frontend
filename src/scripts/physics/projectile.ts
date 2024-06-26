export class Projectile extends Phaser.Physics.Arcade.Sprite
{
  public piercingCount: number;
  constructor(scene: Phaser.Scene, x: number, y: number, sprite: string)
   {
       super(scene, x, y, sprite);
       this.piercingCount = 0;
       scene.add.existing(this);
       scene.physics.add.existing(this);
   }
}


