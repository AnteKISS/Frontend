

export default class PauseMenu extends Phaser.GameObjects.Container {
  private closeButton: Phaser.GameObjects.Sprite;
  private background: Phaser.GameObjects.Sprite;



  constructor(scene: Phaser.Scene) {
    super(scene, 640, 0);
    
    this.background = new Phaser.GameObjects.Sprite(scene, 0, 360, 'black_rock_background');

    this.closeButton = new Phaser.GameObjects.Sprite(scene, 243, 37, 'close_button').setInteractive();
    this.closeButton.on('pointerdown', (event: { stopPropagation: () => void; }) => {this.hide(); event.stopPropagation();});


    scene.input.on('pointermove', this.onPointerMove, this);

    this.add([this.background, this.closeButton]);
    scene.add.existing(this);
    //this.hide();
  }

  private onPointerMove(pointer: Phaser.Input.Pointer): void {
    
  }

  public onPointerDown(pointer: Phaser.Input.Pointer): void {
    
  }
  public show(): void {
    this.setVisible(true);
    console.log("showing pause menu");
  }

  public hide(): void {
    this.setVisible(false);
    console.log("hiding pause menu");
  }

  

}

