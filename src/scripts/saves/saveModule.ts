import EquipSlot from "../inventory/equipSlot";
import InventoryItem from "../inventory/inventoryItem";
import APIManager from "../managers/APIManager";
import MainScene from "../scenes/mainScene";

export default class SaveModule {
  public static getJson(scene: MainScene): any {
    const player = scene.playerTest;
    player.attributeAllocation.cancelSelection();

    const json = {
      saveSlot: scene.saveSlot,
      playerName: scene.playerName,
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
        { slot: "helmet", itemId: player.inventory.getPlayerEquipment().getHelmet()?.code },
        { slot: "armor", itemId: player.inventory.getPlayerEquipment().getArmor()?.code },
        { slot: "amulet", itemId: player.inventory.getPlayerEquipment().getAmulet()?.code },
        { slot: "mainhand", itemId: player.inventory.getPlayerEquipment().getMainhand()?.code },
        { slot: "offhand", itemId: player.inventory.getPlayerEquipment().getOffhand()?.code },
        { slot: "ring1", itemId: player.inventory.getPlayerEquipment().getRing1()?.code },
        { slot: "ring2", itemId: player.inventory.getPlayerEquipment().getRing2()?.code },
        { slot: "belt", itemId: player.inventory.getPlayerEquipment().getBelt()?.code },
        { slot: "gloves", itemId: player.inventory.getPlayerEquipment().getGloves()?.code },
        { slot: "boots", itemId: player.inventory.getPlayerEquipment().getBoots()?.code },
      ],
    };

    // Get player inventory items into JSON
    for (const itemInfo of player.inventory.getItemStorage().getItemsInfo()) {
      json.playerInventoryItems.push({
        code: itemInfo[0].getItem().code,
        x: itemInfo[1].x,
        y: itemInfo[1].y,
      });
    }

    return json;
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
    console.log("JSON:", json.playerInventoryItems);
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
    this.equipItem(scene, this.getJsonEquippedItem("helmet", equippedJson), equipment.getHelmetSlot());
    this.equipItem(scene, this.getJsonEquippedItem("armor", equippedJson), equipment.getArmorSlot());
    this.equipItem(scene, this.getJsonEquippedItem("amulet", equippedJson), equipment.getAmuletSlot());
    this.equipItem(scene, this.getJsonEquippedItem("mainhand", equippedJson), equipment.getMainhandSlot());
    this.equipItem(scene, this.getJsonEquippedItem("offhand", equippedJson), equipment.getOffhandSlot());
    this.equipItem(scene, this.getJsonEquippedItem("ring1", equippedJson), equipment.getRing1Slot());
    this.equipItem(scene, this.getJsonEquippedItem("ring2", equippedJson), equipment.getRing2Slot());
    this.equipItem(scene, this.getJsonEquippedItem("belt", equippedJson), equipment.getBeltSlot());
    this.equipItem(scene, this.getJsonEquippedItem("gloves", equippedJson), equipment.getGlovesSlot());
    this.equipItem(scene, this.getJsonEquippedItem("boots", equippedJson), equipment.getBootsSlot());
    player.attributeConversion();
  }

  private static getJsonEquippedItem(slotType: string, json: Array<any>): any {
    return json.find(s => s.slot === slotType);
  }

  private static equipItem(scene: MainScene, slotItem: any, equipSlot: EquipSlot): void {
    console.log(slotItem);
    if (!slotItem || slotItem.itemId === 0)
      return;

    const item = APIManager.getNewItemByCode(scene, slotItem.itemId);
    if (item) {
      const inventoryItem = new InventoryItem(scene, item);
      const unequipped = equipSlot.equipItem(inventoryItem);

      if (inventoryItem === unequipped)
        item.destroy();
    }
    else
      console.error("SaveModule::equipItem - Inventory item not found in APIManager.");
  }
}
