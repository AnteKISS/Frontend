import GameLogo from '../objects/gameLogo'
import FpsText from '../objects/fpsText'
import InventoryManager from '../inventory/inventoryManager'
import Inventaire from '../inventory/inventory'
import Item from '../inventory/item'
import { ItemType } from '../inventory/itemType'
import InventoryConfig from '../inventory/inventoryConfig'

export default class MainScene extends Phaser.Scene {
  fpsText: FpsText;
  inventoryManager: InventoryManager;
  inventory: Inventaire;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    this.inventory = new Inventaire(this, InventoryConfig.INVENTORY_GRID_WIDTH, InventoryConfig.INVENTORY_GRID_HEIGHT);
    this.inventoryManager = new InventoryManager(this, this.inventory);

    const stoneSword = new Item(this, "Stone Sword", ItemType.WEAPON, 1, 2, "stone_sword_inventory");
    console.log("Is space available:", this.inventory.isSpaceAvailable(stoneSword, 0, 0));

    const ITEM_ADDED = this.inventory.addItem(stoneSword, 0, 0);
    console.log("Has item been added:", ITEM_ADDED);

    const woodenShield = new Item(this, "Wooden Shield", ItemType.WEAPON, 2, 2, "wooden_shield_inventory");
    this.inventory.autoLoot(woodenShield);

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
