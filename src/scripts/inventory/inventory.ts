import Item from './item'
import EquipSlot from './equipSlot'
import { ItemType } from './itemType'
import InventoryConfig from "./inventoryConfig";

export default class Inventory extends Phaser.GameObjects.Container {
  public occupied: boolean[][];
  public gridWidth: number;
  public gridHeight: number;
  private indexFound = -1;

  private helmet: EquipSlot;
  private armor: EquipSlot;
  private amulet: EquipSlot;
  private weapon1: EquipSlot;
  private weapon2: EquipSlot;
  private ring1: EquipSlot;
  private ring2: EquipSlot;
  private belt: EquipSlot;
  private gloves: EquipSlot;
  private boots: EquipSlot;

  private equipSlots: EquipSlot[];
  private infoItems: [Item, number, number][] = []; // [item,posx,posy]

  constructor(scene: Phaser.Scene, gridWidth: number, gridHeight: number) {
    super(scene, 640, 360);

    this.gridWidth = gridWidth;
    this.gridHeight = gridHeight;
    this.occupied = Array.from({ length: gridHeight }, () => Array(gridWidth).fill(false)); // true = occupe

    this.helmet = new EquipSlot(scene, ItemType.HELMET, 0, -268, 'helmet_slot', '3x3_slot');
    this.armor = new EquipSlot(scene, ItemType.ARMOR, 0, -133, 'armor_slot', '3x4_slot');
    this.amulet = new EquipSlot(scene, ItemType.AMULET, 75, -181, 'amulet_slot', '1x1_slot');
    this.weapon1 = new EquipSlot(scene, ItemType.WEAPON, -150, -150, 'mainhand_slot', '3x5_slot');
    this.weapon2 = new EquipSlot(scene, ItemType.WEAPON, 150, -150, 'offhand_slot', '3x5_slot');
    this.ring1 = new EquipSlot(scene, ItemType.RING, -75, -32, 'ring_slot', '1x1_slot');
    this.ring2 = new EquipSlot(scene, ItemType.RING, 75, -32, 'ring_slot', '1x1_slot');
    this.belt = new EquipSlot(scene, ItemType.BELT, 0, -32, 'belt_slot', '3x1_slot');
    this.gloves = new EquipSlot(scene, ItemType.GLOVES, -150, 0, 'gloves_slot', '3x3_slot');
    this.boots = new EquipSlot(scene, ItemType.BOOTS, 150, 0, 'boots_slot', '3x3_slot');

    this.equipSlots = [this.helmet, this.armor, this.amulet, this.weapon1, this.weapon2, this.ring1, this.ring2, this.belt, this.gloves, this.boots];

    this.add([this.helmet, this.armor, this.amulet, this.weapon1, this.weapon2, this.ring1, this.ring2, this.belt, this.gloves, this.boots]);
    this.scene.add.existing(this);
  }

  public isSpaceAvailable(item: Item, startX: number, startY: number): boolean {
    // verif si il y a assez d espace
    if (startX + item.inventoryWidth > this.gridWidth || startY + item.inventoryHeight > this.gridHeight)
      return false;

    // verif de dispo
    for (let y = startY; y < startY + item.inventoryHeight; y++)
      for (let x = startX; x < startX + item.inventoryWidth; x++)
        if (this.occupied[y][x])
          return false;

    return true;
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
