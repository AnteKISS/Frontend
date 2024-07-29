import Item from "../inventory/item";
import { ItemType } from "../inventory/itemType";
import StatModule from "../entities/statModule";

export class InactiveEntityFactory {
  public static createRandomItem(scene: Phaser.Scene): Item {
    const itemCreationFunctions = [
      InactiveEntityFactory.createStoneDagger,
      InactiveEntityFactory.createWoodenShield,
      InactiveEntityFactory.createChainmailHood,
      InactiveEntityFactory.createChainmailGloves,
      InactiveEntityFactory.createLeatherBoots,
      InactiveEntityFactory.createChainmailBelt,
      InactiveEntityFactory.createChainmailArmor,
      InactiveEntityFactory.createLeatherBelt,
      InactiveEntityFactory.createKnightHelmet,
      InactiveEntityFactory.createLeatherGloves,
      InactiveEntityFactory.createLeatherArmor,
      InactiveEntityFactory.createChainmailBoots,
      InactiveEntityFactory.createBoneSword,
      InactiveEntityFactory.createGoldenKopis,
      InactiveEntityFactory.createBronzeRing,
      InactiveEntityFactory.createSilverRing,
      InactiveEntityFactory.createGoldRing,
      InactiveEntityFactory.createBaphometsTalisman,
      InactiveEntityFactory.createTempleAmulet,
      InactiveEntityFactory.createLeatherHood
    ];

    const randomIndex = Math.floor(Math.random() * itemCreationFunctions.length);
    return itemCreationFunctions[randomIndex](scene);
  }

  public static createStoneDagger(scene: Phaser.Scene): Item {
    return new Item(scene, 0, "Stone Dagger", ItemType.WEAPON, 1, 2, "stone_dagger_inv", "dropped_sword", StatModule.getNullModifierStats());
  }

  public static createWoodenShield(scene: Phaser.Scene): Item {
    return new Item(scene, 0, "Wooden Shield", ItemType.WEAPON, 2, 2, "wooden_shield_inv", "dropped_shield", StatModule.getNullModifierStats());
  }

  public static createChainmailHood(scene: Phaser.Scene): Item {
    return new Item(scene, 0, "Chainmail Hood", ItemType.HELMET, 2, 2, "chainmail_hood_inv", "dropped_hood", StatModule.getNullModifierStats());
  }

  public static createChainmailGloves(scene: Phaser.Scene): Item {
    return new Item(scene, 0, "Chainmail Gloves", ItemType.GLOVES, 2, 2, "chainmail_gloves_inv", "dropped_gloves", StatModule.getNullModifierStats());
  }

  public static createLeatherBoots(scene: Phaser.Scene): Item {
    return new Item(scene, 0, "Leather Boots", ItemType.BOOTS, 2, 2, "leather_boots_inv", "dropped_boots", StatModule.getNullModifierStats());
  }

  public static createChainmailBelt(scene: Phaser.Scene): Item {
    return new Item(scene, 0, "Chainmail Belt", ItemType.BELT, 2, 1, "chainmail_belt_inv", "dropped_belt", StatModule.getNullModifierStats());
  }

  public static createChainmailArmor(scene: Phaser.Scene): Item {
    return new Item(scene, 0, "Chainmail Armor", ItemType.ARMOR, 2, 3, "chainmail_armor_inv", "dropped_armor", StatModule.getNullModifierStats());
  }

  public static createLeatherBelt(scene: Phaser.Scene): Item {
    return new Item(scene, 0, "Leather Belt", ItemType.BELT, 2, 1, "leather_belt_inv", "dropped_belt", StatModule.getNullModifierStats());
  }

  public static createKnightHelmet(scene: Phaser.Scene): Item {
    return new Item(scene, 0, "Knight Helmet", ItemType.HELMET, 2, 2, "knight_helmet_inv", "dropped_helmet", StatModule.getNullModifierStats());
  }

  public static createLeatherGloves(scene: Phaser.Scene): Item {
    return new Item(scene, 0, "Leather Gloves", ItemType.GLOVES, 2, 2, "leather_gloves_inv", "dropped_gloves", StatModule.getNullModifierStats());
  }

  public static createLeatherArmor(scene: Phaser.Scene): Item {
    return new Item(scene, 0, "Leather Armor", ItemType.ARMOR, 2, 3, "leather_armor_inv", "dropped_armor", StatModule.getNullModifierStats());
  }

  public static createChainmailBoots(scene: Phaser.Scene): Item {
    return new Item(scene, 0, "Chainmail Boots", ItemType.BOOTS, 2, 2, "chainmail_boots_inv", "dropped_boots", StatModule.getNullModifierStats());
  }

  public static createBoneSword(scene: Phaser.Scene): Item {
    return new Item(scene, 0, "Bone Sword", ItemType.WEAPON, 1, 3, "bone_sword_inv", "dropped_sword", StatModule.getNullModifierStats());
  }

  public static createGoldenKopis(scene: Phaser.Scene): Item {
    return new Item(scene, 0, "Golden Kopis", ItemType.WEAPON, 1, 3, "golden_kopis_inv", "dropped_sword", StatModule.getNullModifierStats());
  }

  public static createBronzeRing(scene: Phaser.Scene): Item {
    return new Item(scene, 0, "Bronze Ring", ItemType.RING, 1, 1, "bronze_ring_inv", "dropped_ring", StatModule.getNullModifierStats());
  }

  public static createSilverRing(scene: Phaser.Scene): Item {
    return new Item(scene, 0, "Silver Ring", ItemType.RING, 1, 1, "silver_ring_inv", "dropped_ring", StatModule.getNullModifierStats());
  }

  public static createGoldRing(scene: Phaser.Scene): Item {
    return new Item(scene, 0, "Gold Ring", ItemType.RING, 1, 1, "gold_ring_inv", "dropped_ring", StatModule.getNullModifierStats());
  }

  public static createBaphometsTalisman(scene: Phaser.Scene): Item {
    return new Item(scene, 0, "Baphomet's Talisman", ItemType.AMULET, 1, 1, "baphomets_talisman_inv", "dropped_amulet", StatModule.getNullModifierStats());
  }

  public static createTempleAmulet(scene: Phaser.Scene): Item {
    return new Item(scene, 0, "Temple Amulet", ItemType.AMULET, 1, 1, "temple_amulet_inv", "dropped_amulet", StatModule.getNullModifierStats());
  }

  public static createLeatherHood(scene: Phaser.Scene): Item {
    return new Item(scene, 0, "Leather Hood", ItemType.HELMET, 2, 2, "leather_hood_inv", "dropped_hood", StatModule.getNullModifierStats());
  }
}
