import { ItemType } from "../inventory/itemType";
import axios from "axios";
import Item from "../inventory/item";
import ActiveEntityModifierStats from "../entities/activeEntityModifierStats";
import StatModule from "../entities/statModule";

class ItemInfo {
  name: string;
  type: ItemType;
  width: number;
  height: number;
  inventorySprite: string;
  entitySprite: string;
  modifierStats: ActiveEntityModifierStats;
}

export default class APIManager {
  private static itemInfos: Map<string, ItemInfo>; // item name -> info

  public static getNewItem(scene: Phaser.Scene, name: string): Item | undefined {
    const info = this.itemInfos.get(name);
    if (!info) return undefined;
    return new Item(scene, info.name, info.type, info.width, info.height, info.inventorySprite, info.entitySprite, info.modifierStats);
  }

  public static async loadItems(): Promise<void> {
    console.log("Starting to load items from 'localhost:8082/Item/GetAll'...");

    this.itemInfos = new Map<string, ItemInfo>;
    const response = await axios.get("http://localhost:8082/Item/GetAll");
    const items = response.data;

    for (const json of items) {
      const [width, height] = this.itemSizeFromCode(json.itemSizeCode);
      const [inventorySprite, entitySprite] = this.itemSpriteFromName(json.itemName);
      const info = new ItemInfo;
      info.name = json.itemName;
      info.type = this.itemTypeFromCode(json.itemSlotCode);
      info.width = width;
      info.height = height;
      info.inventorySprite = inventorySprite;
      info.entitySprite = entitySprite;

      info.modifierStats = new ActiveEntityModifierStats();
      StatModule.resetModifierStats(info.modifierStats);
      for (const modifier of json.itemBaseStats)
        this.itemModifierStatFromCodeValue(info.modifierStats, modifier.statCode, modifier.statValue);
      for (const modifier of json.itemModifiers) {
        console.log(modifier);
        this.itemModifierStatFromCodeValue(info.modifierStats, modifier.itemModifierCode, modifier.modifierValue);
      }

      this.itemInfos.set(info.name, info);
    }

    console.log("Item load finished:", this.itemInfos);
  }

  private static itemTypeFromCode(code: string): ItemType {
    switch (code) {
      case "FING": return ItemType.RING;
      case "NECK": return ItemType.AMULET;
      case "CHES": return ItemType.ARMOR;
      case "HAND": return ItemType.GLOVES;
      case "FEET": return ItemType.BOOTS;
      case "MHAN": return ItemType.WEAPON;
      case "OHAN": return ItemType.WEAPON;
      case "WAIS": return ItemType.BELT;
      case "HEAD": return ItemType.HELMET;
    }
    throw new Error("Item type does not exist: " + code);
  }

  private static itemSizeFromCode(code: string): [number, number] {
    switch (code) {
      case "XSML": return [1, 1];
      case "VSML": return [1, 2];
      case "HSML": return [2, 1];
      case "SMED": return [2, 2];
      case "VMED": return [1, 3];
      case "SLAR": return [2, 3];
      case "VLAR": return [1, 4];
      case "XLAR": return [2, 4];
    }
    return [0, 0];
  }

  private static itemSpriteFromName(name: string): [string, string] {
    switch (name) {
      case "Bone Sword": return ["bone_sword_inv", "dropped_sword"];
      case "Golden Kopis": return ["golden_kopis_inv", "dropped_sword"];
      case "Lethal Dagger": return ["stone_dagger_inv", "dropped_sword"];
      case "Dagger": return ["stone_dagger_inv", "dropped_sword"];

      case "Talisman of Baphomet": return ["baphomets_talisman_inv", "dropped_amulet"];
      case "Temple Amulet": return ["temple_amulet_inv", "dropped_amulet"];

      case "Bronze Ring": return ["bronze_ring_inv", "dropped_ring"];
      case "Silver Ring": return ["silver_ring_inv", "dropped_ring"];
      case "Gold Ring": return ["gold_ring_inv", "dropped_ring"];

      case "Leather Armor": return ["leather_armor_inv", "dropped_armor"];
      case "Chainmail Armor": return ["chainmail_armor_inv", "dropped_armor"];

      case "Leather Belt": return ["leather_belt_inv", "dropped_belt"];
      case "Chainmail Belt": return ["chainmail_belt_inv", "dropped_belt"];

      case "Leather Boots": return ["leather_boots_inv", "dropped_boots"];
      case "Chainmail Boots": return ["chainmail_boots_inv", "dropped_boots"];

      case "Leather Gloves": return ["leather_gloves_inv", "dropped_gloves"];
      case "Chainmail Gloves": return ["chainmail_gloves_inv", "dropped_gloves"];

      case "Leather Hood": return ["leather_hood_inv", "dropped_hood"];
      case "Chainmail Hood": return ["chainmail_hood_inv", "dropped_hood"];
      case "Knight Helmet": return ["knight_helmet_inv", "dropped_helmet"];

      case "Wooden Shield": return ["wooden_shield_inv", "dropped_shield"];

      // case "Long Bow": return ["", ""];
    }
    return ["", ""];
  }

  private static itemModifierStatFromCodeValue(stats: ActiveEntityModifierStats, stat: string, value: number): void {
    switch (stat) {
      case "ATK_SPEED_MOD": stats.attackSpeed += value; break;
      case "DAMAGE": stats.basePhysicalDamage += value; break;
      case "INC_DAMAGE": stats.basePhysicalDamage += value; break;
      case "DEFENSE": stats.defense += value; break;
      case "MOV_SPEED_MOD": stats.movementSpeed += value; break;
    }
  }

  public static async loadMonsters(): Promise<void> {
    console.log("Starting to load items from 'localhost:8082/Monster/GetAll'...");

    // this.itemInfos = new Map<string, ItemInfo>;
    const response = await axios.get("http://localhost:8082/Monster/GetAll");
    const monsters = response.data;

    // for (const json of items) {
    //   const [width, height] = this.itemSizeFromCode(json.itemSizeCode);
    //   const [inventorySprite, entitySprite] = this.itemSpriteFromName(json.itemName);
    //   const info = new ItemInfo;
    //   info.name = json.itemName;
    //   info.type = this.itemTypeFromCode(json.itemSlotCode);
    //   info.width = width;
    //   info.height = height;
    //   info.inventorySprite = inventorySprite;
    //   info.entitySprite = entitySprite;

    //   info.modifierStats = new ActiveEntityModifierStats();
    //   StatModule.resetModifierStats(info.modifierStats);
    //   for (const modifier of json.itemBaseStats)
    //     this.itemModifierStatFromCodeValue(info.modifierStats, modifier.statCode, modifier.statValue);
    //   for (const modifier of json.itemModifiers) {
    //     console.log(modifier);
    //     this.itemModifierStatFromCodeValue(info.modifierStats, modifier.itemModifierCode, modifier.modifierValue);
    //   }

    //   this.itemInfos.set(info.name, info);
    // }

    // console.log("Item load finished:", this.itemInfos);
  }
}
