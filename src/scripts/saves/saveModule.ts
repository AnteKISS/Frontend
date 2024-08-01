import EquipSlot from "../inventory/equipSlot";
import InventoryItem from "../inventory/inventoryItem";
import APIManager from "../managers/APIManager";
import MainScene from "../scenes/mainScene";

export default class SaveModule {
  public static getJson(scene: MainScene): string {
    const player = scene.playerTest;
    player.attributeAllocation.cancelSelection();

    const json = {
      playerName: scene.playerName,
      saveSlot: scene.saveSlot,
      playerX: player.positionX,
      playerY: player.positionY,
      playerAllocatedPoints: {
        strength: player.attributeAllocation.strength,
        dexterity: player.attributeAllocation.dexterity,
        vitality: player.attributeAllocation.vitality,
        intelligence: player.attributeAllocation.intelligence,
      },
      playerUnallocatedPoints: player.attributeAllocation.getTotalAvailablePoint(),
      playerXp: player.exp.getTotalExp(),
      playerInventoryItems: new Array<any>(),
      playerEquippedItems: [
        { slot: "helmet", code: player.inventory.getPlayerEquipment().getHelmet()?.code },
        { slot: "armor", code: player.inventory.getPlayerEquipment().getArmor()?.code },
        { slot: "amulet", code: player.inventory.getPlayerEquipment().getAmulet()?.code },
        { slot: "mainhand", code: player.inventory.getPlayerEquipment().getMainhand()?.code },
        { slot: "offhand", code: player.inventory.getPlayerEquipment().getOffhand()?.code },
        { slot: "ring1", code: player.inventory.getPlayerEquipment().getRing1()?.code },
        { slot: "ring2", code: player.inventory.getPlayerEquipment().getRing2()?.code },
        { slot: "belt", code: player.inventory.getPlayerEquipment().getBelt()?.code },
        { slot: "gloves", code: player.inventory.getPlayerEquipment().getGloves()?.code },
        { slot: "boots", code: player.inventory.getPlayerEquipment().getBoots()?.code },
      ],
    };

    console.log("SAVE SLOT", json.saveSlot);

    // Get player inventory items into JSON
    for (const itemInfo of player.inventory.getItemStorage().getItemsInfo()) {
      json.playerInventoryItems.push({
        code: itemInfo[0].getItem().code,
        x: itemInfo[1].x,
        y: itemInfo[1].y,
      });
    }

    return JSON.stringify(json);
  }

  public static loadJSON(scene: MainScene, jsonStr: string) {
    const json = JSON.parse(jsonStr);
    const player = scene.playerTest;

    scene.playerName = json.playerName;
    scene.saveSlot = json.saveSlot;

    player.positionX = json.playerX;
    player.x = json.playerX;
    player.positionY = json.playerY;
    player.y = json.playerY;

    player.attributeAllocation.strength = json.playerAllocatedPoints.strength;
    player.attributeAllocation.dexterity = json.playerAllocatedPoints.dexterity;
    player.attributeAllocation.vitality = json.playerAllocatedPoints.vitality;
    player.attributeAllocation.intelligence = json.playerAllocatedPoints.intelligence;
    player.attributeAllocation.setTotalAllocatedPoint(json.playerAllocatedPoints.strength + json.playerAllocatedPoints.dexterity + json.playerAllocatedPoints.vitality + json.playerAllocatedPoints.intelligence);
    player.attributeAllocation.setTotalAvailablePoint(json.playerUnallocatedPoints);

    player.exp.addExp(json.playerXp);
    player.exp.update();

    // Add items in player inventory
    for (const inventoryItemJson of json.playerInventoryItems) {
      const item = APIManager.getNewItemByCode(scene, inventoryItemJson.code);
      if (item) {
        const inventoryItem = new InventoryItem(scene, item);
        player.inventory.getItemStorage().addItem(inventoryItem, inventoryItemJson.x, inventoryItemJson.y);
      }
      else
        console.error("SaveModule::loadJSON - Inventory item not found in APIManager.");
    }

    // Add items in player equipment slots
    const equippedJson = json.playerEquippedItems;
    const equipment = player.inventory.getPlayerEquipment();
    this.equipItem(scene, equippedJson[0], equipment.getHelmetSlot());
    this.equipItem(scene, equippedJson[1], equipment.getArmorSlot());
    this.equipItem(scene, equippedJson[2], equipment.getAmuletSlot());
    this.equipItem(scene, equippedJson[3], equipment.getMainhandSlot());
    this.equipItem(scene, equippedJson[4], equipment.getOffhandSlot());
    this.equipItem(scene, equippedJson[5], equipment.getRing1Slot());
    this.equipItem(scene, equippedJson[6], equipment.getRing2Slot());
    this.equipItem(scene, equippedJson[7], equipment.getBeltSlot());
    this.equipItem(scene, equippedJson[8], equipment.getGlovesSlot());
    this.equipItem(scene, equippedJson[9], equipment.getBootsSlot());
  }

  private static equipItem(scene: MainScene, slotData: any, equipSlot: EquipSlot): void {
    if (slotData.code === undefined)
      return;

    const item = APIManager.getNewItemByCode(scene, slotData.code);
    if (item) {
      const inventoryItem = new InventoryItem(scene, item);
      equipSlot.equipItem(inventoryItem);
    }
    else
      console.error("SaveModule::equipItem - Inventory item not found in APIManager.");
  }
}
