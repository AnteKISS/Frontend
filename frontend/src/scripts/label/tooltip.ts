import Label from './label'

export default class Tooltip {
  private static label: Label;
  private static requesters: Set<Phaser.GameObjects.GameObject>; // GameObjects that want tooltip shown

  private constructor() { }

  public static init(scene: Phaser.Scene) {
    Tooltip.label = new Label(scene, "Default Tooltip Text");
    Tooltip.requesters = new Set<Phaser.GameObjects.GameObject>();
    scene.cameras.main.ignore(this.label);
  }

  public static updateVisible() {
    Tooltip.label.setVisible(Tooltip.requesters.size > 0);
  }

  public static updatePosition(pointer: Phaser.Input.Pointer) {
    Tooltip.label.setPosition(pointer.x, pointer.y);
  }

  public static updateText(text: string) {
    Tooltip.label.updateText(text);
  }

  public static requestTooltip(object: Phaser.GameObjects.GameObject) {
    Tooltip.requesters.add(object);
  }

  public static cancelTooltip(object: Phaser.GameObjects.GameObject) {
    Tooltip.requesters.delete(object);
  }
}
