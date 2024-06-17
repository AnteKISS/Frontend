import GameLogo from '../objects/gameLogo'
import FpsText from '../objects/fpsText'
import Inventory from '../inventory/inventory'
import Item from '../inventory/item'
import { ItemType } from '../inventory/itemType'

export default class MainScene extends Phaser.Scene {
  fpsText: FpsText;
  inventory: Inventory;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    this.inventory = new Inventory(this);

    this.input.keyboard.on('keydown-I', () => this.inventory.show());
    this.input.keyboard.on('keydown-ESC', () => this.inventory.hide());

    const stoneSword = new Item(this, "Stone Sword", ItemType.WEAPON, 1, 2, "stone_sword_inventory");
    this.inventory.getItemStorage().addItem(stoneSword, 0, 0);

    const woodenShield = new Item(this, "Wooden Shield", ItemType.WEAPON, 2, 2, "wooden_shield_inventory");
    this.inventory.getItemStorage().autoLoot(woodenShield);

    /////////////////////////////////////////////////////////////////////////////

    this.fpsText = new FpsText(this);
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px'
      })
      .setOrigin(1, 0);
  }

  update() {
    this.fpsText.update();
  }
}
