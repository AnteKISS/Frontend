import EquipSlot from './equipSlot'
import InventoryItem from './inventoryItem';
import Item from './item';
import { ItemType } from './itemType'

export default class PlayerEquipment extends Phaser.GameObjects.Container {
  public helmet: EquipSlot;
  public armor: EquipSlot;
  public amulet: EquipSlot;
  public mainhand: EquipSlot;
  public offhand: EquipSlot;
  public ring1: EquipSlot;
  public ring2: EquipSlot;
  public belt: EquipSlot;
  public gloves: EquipSlot;
  public boots: EquipSlot;

  public equipSlots: EquipSlot[];

  constructor(scene: Phaser.Scene) {
    super(scene, 0, 360);

    this.helmet = new EquipSlot(scene, ItemType.HELMET, 0, -270, 'helmet_slot', '2x2_slot');
    this.armor = new EquipSlot(scene, ItemType.ARMOR, 0, -125, 'armor_slot', '2x3_slot');
    this.amulet = new EquipSlot(scene, ItemType.AMULET, 100, -175, 'amulet_slot', '1x1_slot');
    this.mainhand = new EquipSlot(scene, ItemType.WEAPON, -200, -150, 'mainhand_slot', '2x4_slot');
    this.offhand = new EquipSlot(scene, ItemType.WEAPON, 200, -150, 'offhand_slot', '2x4_slot');
    this.ring1 = new EquipSlot(scene, ItemType.RING, -100, -5, 'ring_slot', '1x1_slot');
    this.ring2 = new EquipSlot(scene, ItemType.RING, 100, -5, 'ring_slot', '1x1_slot');
    this.belt = new EquipSlot(scene, ItemType.BELT, 0, -5, 'belt_slot', '2x1_slot');
    this.gloves = new EquipSlot(scene, ItemType.GLOVES, -200, 20, 'gloves_slot', '2x2_slot');
    this.boots = new EquipSlot(scene, ItemType.BOOTS, 200, 20, 'boots_slot', '2x2_slot');

    this.equipSlots = [this.helmet, this.armor, this.amulet, this.mainhand, this.offhand, this.ring1, this.ring2, this.belt, this.gloves, this.boots];

    this.add([...this.equipSlots]);
    this.scene.input.on('pointermove', (pointer: Phaser.Input.Pointer) => this.updateEquipSlotItems(pointer));
    scene.add.existing(this);
  }

  public updateEquipSlotItems(pointer: Phaser.Input.Pointer) {
    this.equipSlots.forEach((equipSlot: EquipSlot) => equipSlot.getInventoryItem()?.update(pointer));
  }

  public getEquipSlotUnderMouse(pointer: Phaser.Input.Pointer): EquipSlot | null {
    for (const SLOT of this.equipSlots)
      if (Phaser.Geom.Rectangle.Contains(SLOT.getBounds(), pointer.x, pointer.y))
        return SLOT;
    return null;
  }

  public getEquippedWeapon(): InventoryItem | null {
    for (const SLOT of this.equipSlots) {
      if (SLOT.itemType === ItemType.WEAPON) {
        return SLOT.getInventoryItem();
      }
    }
    return null;
  }

  public getEquippedItems(): Item[] {
    const equippedItems = new Array<Item>();
    for (const equipSlot of this.equipSlots) {
      const inventoryItem = equipSlot.getInventoryItem();
      if (inventoryItem)
        equippedItems.push(inventoryItem.getItem());
    }
    return equippedItems;
  }

  public getHelmet(): Item | undefined {
    return this.helmet.getInventoryItem()?.getItem();
  }

  public getHelmetSlot(): EquipSlot {
    return this.helmet;
  }

  public getArmor(): Item | undefined {
    return this.armor.getInventoryItem()?.getItem();
  }

  public getArmorSlot(): EquipSlot {
    return this.armor;
  }

  public getAmulet(): Item | undefined {
    return this.amulet.getInventoryItem()?.getItem();
  }

  public getAmuletSlot(): EquipSlot {
    return this.amulet;
  }

  public getMainhand(): Item | undefined {
    return this.mainhand.getInventoryItem()?.getItem();
  }

  public getMainhandSlot(): EquipSlot {
    return this.mainhand;
  }

  public getOffhand(): Item | undefined {
    return this.offhand.getInventoryItem()?.getItem();
  }

  public getOffhandSlot(): EquipSlot {
    return this.offhand;
  }

  public getRing1(): Item | undefined {
    return this.ring1.getInventoryItem()?.getItem();
  }

  public getRing1Slot(): EquipSlot {
    return this.ring1;
  }

  public getRing2(): Item | undefined {
    return this.ring2.getInventoryItem()?.getItem();
  }

  public getRing2Slot(): EquipSlot {
    return this.ring2;
  }

  public getBelt(): Item | undefined {
    return this.belt.getInventoryItem()?.getItem();
  }

  public getBeltSlot(): EquipSlot {
    return this.belt;
  }

  public getGloves(): Item | undefined {
    return this.gloves.getInventoryItem()?.getItem();
  }

  public getGlovesSlot(): EquipSlot {
    return this.gloves;
  }

  public getBoots(): Item | undefined {
    return this.boots.getInventoryItem()?.getItem();
  }

  public getBootsSlot(): EquipSlot {
    return this.boots;
  }
}
