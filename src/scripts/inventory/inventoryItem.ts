import Item from './item'
import Tooltip from '../label/tooltip'
import MainScene from '../scenes/mainScene'
import StatModule from '../entities/statModule';

export default class InventoryItem extends Phaser.GameObjects.Container {
  private mainScene: MainScene;
  private item: Item;

  public constructor(mainScene: MainScene, item: Item) {
    super(mainScene, 0, 0);
    this.mainScene = mainScene;
    this.item = item;
    this.add(this.item);
    this.scene.add.existing(this);
    this.scene.cameras.main.ignore(this);
    this.scene.cameras.getCamera("minimapCamera")!.ignore(this);
  }

  public getItem(): Item {
    return this.item;
  }

  public update(pointer: Phaser.Input.Pointer): void {
    const CURSOR_ON_ITEM = Phaser.Geom.Rectangle.Contains(this.item.getBounds(), pointer.x, pointer.y);
    if (this.mainScene.isInventoryOpen() && !this.mainScene.isItemPickedUp() && CURSOR_ON_ITEM) {
      const tooltipText = StatModule.generateMultiLineText(this.item.stats);
      tooltipText.unshift([this.item.name, "#FFFFFF"]);
      Tooltip.updateMultiLineText(tooltipText);
      Tooltip.requestTooltip(this);
    }
  }
}
