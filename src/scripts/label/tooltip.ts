import Label from './label'

export default class Tooltip {
  private static label: Label;
  private static object: Phaser.GameObjects.GameObject | null; // GameObject that shows the tooltip
  private static keepAlive: boolean; // Only keep showing tooltip if this is true

  private constructor() { }

  public static init(scene: Phaser.Scene) {
    Tooltip.label = new Label(scene, "Default Tooltip Text").setVisible(false);
    Tooltip.object = null;
    Tooltip.keepAlive = false;
    scene.cameras.main.ignore(this.label);
  }

  public static update(pointer: Phaser.Input.Pointer) {
    if (!Tooltip.keepAlive) Tooltip.object = null
    else Tooltip.keepAlive = false;
    Tooltip.label.setVisible(!!Tooltip.object);
    Tooltip.label.setPosition(pointer.x, pointer.y);
  }

  public static updateText(text: string) {
    Tooltip.label.updateText(text);
  }

  public static requestTooltip(object: Phaser.GameObjects.GameObject) {
    Tooltip.object = object;
    Tooltip.keepAlive = true;
  }
}
