import GameLogo from '../objects/gameLogo'
import FpsText from '../objects/fpsText'
import InventoryManager from '../inventory/inventoryManager'
import Inventaire from '../inventory/inventory'
import Item from '../inventory/item'

export default class MainScene extends Phaser.Scene {
  fpsText: FpsText;
  inventoryManager: InventoryManager;
  inventory: Inventaire;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    this.inventory = new Inventaire(10, 10);
    this.inventoryManager = new InventoryManager(this, this.inventory);

    const stoneSword = new Item(this, "Stone Sword", 2, 4, "stone_sword_inventory");
    console.log("Is space available:", this.inventory.isSpaceAvailable(stoneSword, 0, 0));

    const ITEM_ADDED = this.inventory.addItem(stoneSword, 0, 0);
    console.log("Has item been added:", ITEM_ADDED);

    const woodenShield = new Item(this, "Wooden Shield", 3, 3, "wooden_shield_inventory");
    this.inventory.addItem(woodenShield, 5, 5);

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
    this.inventoryManager.updateItems();
  }
}
