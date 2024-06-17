import EquipSlot from './equipSlot'
import { ItemType } from './itemType'

export default class PlayerEquipment extends Phaser.GameObjects.Container {
  private equipSlots: EquipSlot[];

  constructor(scene: Phaser.Scene) {
    super(scene, 0, 360);

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

    this.add([...this.equipSlots]);
    scene.add.existing(this);
  }

  getEquipSlots(): EquipSlot[] {
    return this.equipSlots;
  }
}
