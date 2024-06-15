import Item from './item'
import EquipSlot from './equipSlot'
import Grid from './grid'
import InventoryConfig from './inventoryConfig'
import { ItemType } from './itemType'

export default class Inventory extends Phaser.GameObjects.Container {
  public occupied: boolean[][];
  public gridWidth: number;
  public gridHeight: number;
  private indexFound = -1;

  private background: Phaser.GameObjects.Sprite;
  private grid: Grid;

  private equipSlots: EquipSlot[];
  private infoItems: [Item, number, number][] = []; // [item,posx,posy]

  constructor(scene: Phaser.Scene, gridWidth: number, gridHeight: number) {
    super(scene, 640, 360);

    this.gridWidth = gridWidth;
    this.gridHeight = gridHeight;
    this.grid = new Grid(scene, -250, 100, InventoryConfig.INVENTORY_GRID_WIDTH, InventoryConfig.INVENTORY_GRID_HEIGHT, InventoryConfig.CELL_SIZE);
    this.occupied = Array.from({ length: gridHeight }, () => Array(gridWidth).fill(false)); // true = occupe

    this.background = new Phaser.GameObjects.Sprite(scene, 0, 0, 'black_rock_background');

    this.equipSlots = [
      new EquipSlot(scene, ItemType.HELMET, 0, -270, 'helmet_slot', '2x2_slot'),
      new EquipSlot(scene, ItemType.ARMOR, 0, -125, 'armor_slot', '2x3_slot'),
      new EquipSlot(scene, ItemType.AMULET, 100, -175, 'amulet_slot', '1x1_slot'),
      new EquipSlot(scene, ItemType.WEAPON, -200, -150, 'mainhand_slot', '2x4_slot'),
      new EquipSlot(scene, ItemType.WEAPON, 200, -150, 'offhand_slot', '2x4_slot'),
      new EquipSlot(scene, ItemType.RING, -100, -5, 'ring_slot', '1x1_slot'),
      new EquipSlot(scene, ItemType.RING, 100, -5, 'ring_slot', '1x1_slot'),
      new EquipSlot(scene, ItemType.BELT, 0, -5, 'belt_slot', '2x1_slot'),
      new EquipSlot(scene, ItemType.GLOVES, -200, 20, 'gloves_slot', '2x2_slot'),
      new EquipSlot(scene, ItemType.BOOTS, 200, 20, 'boots_slot', '2x2_slot')
    ];

    this.add([this.background, this.grid, ...this.equipSlots]);
    this.scene.add.existing(this);
  }

  public getGrid(): Grid {
    return this.grid;
  }

  public isSpaceAvailable(item: Item, startX: number, startY: number): boolean {
    // verif si il y a assez d espace
    console.log(startY, item.inventoryHeight, this.gridHeight);
    if (startX + item.inventoryWidth > this.gridWidth || startY + item.inventoryHeight > this.gridHeight) {
      return false;
    }
    // verif de dispo
    for (let y = startY; y < startY + item.inventoryHeight; y++)
      for (let x = startX; x < startX + item.inventoryWidth; x++)
        if (this.occupied[y][x])
          return false;

    return true;
  }

  autoLoot(item: Item): void {
    for (let x = 0; x < item.inventoryWidth; x++) {
      for (let y = 0; y < item.inventoryHeight; y++) {
        if (this.addItem(item, x, y)) {
          return;
        }
      }
    }
  }

  addItem(item: Item, startX: number, startY: number): boolean {
    //verif si la place est libre
    if (!this.isSpaceAvailable(item, startX, startY))
      return false;

    //occupe la place
    for (let y = 0; y < item.inventoryHeight; y++)
      for (let x = 0; x < item.inventoryWidth; x++)
        this.occupied[startY + y][startX + x] = true;

    this.infoItems.push([item, startX, startY]);
    this.add(item);
    return true;
  }

  removeItem(item: Item, selectedX: number, selectedY: number): boolean {
    //libere la place
    for (let y = 0; y < item.inventoryHeight; y++)
      for (let x = 0; x < item.inventoryWidth; x++)
        this.occupied[selectedY + y][selectedX + x] = false;
    console.log(selectedX, selectedY, "occupied after remove:", this.occupied);

    // eneleve l item du tableau
    this.indexFound = this.infoItems.findIndex((itemInfo) => item === itemInfo[0]);

    this.infoItems.splice(this.indexFound, 1);
    return true;
  }

  getItemsInfo(): [Item, number, number][] {
    return this.infoItems;
  }

  getEquipSlots(): EquipSlot[] {
    return this.equipSlots;
  }
}
