import EquipSlot from "../inventory/equipSlot";
import InventoryItem from "../inventory/inventoryItem";
import APIManager from "../managers/APIManager";
import MainScene from "../scenes/mainScene";

export default class SaveModule {
  public static getJson(scene: MainScene): string {
    const player = scene.playerTest;
    player.attributeAllocation.cancelSelection();

    const json = {
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
      playerEquippedItems: {
        helmet: player.inventory.getPlayerEquipment().getHelmet()?.code,
        armor: player.inventory.getPlayerEquipment().getArmor()?.code,
        amulet: player.inventory.getPlayerEquipment().getAmulet()?.code,
        mainhand: player.inventory.getPlayerEquipment().getMainhand()?.code,
        offhand: player.inventory.getPlayerEquipment().getOffhand()?.code,
        ring1: player.inventory.getPlayerEquipment().getRing1()?.code,
        ring2: player.inventory.getPlayerEquipment().getRing2()?.code,
        belt: player.inventory.getPlayerEquipment().getBelt()?.code,
        gloves: player.inventory.getPlayerEquipment().getGloves()?.code,
        boots: player.inventory.getPlayerEquipment().getBoots()?.code,
      },
    };

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
      const item = APIManager.getNewItem(scene, inventoryItemJson.code);
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
    this.equipItem(scene, equippedJson.helmet, equipment.getHelmetSlot());
    this.equipItem(scene, equippedJson.armor, equipment.getArmorSlot());
    this.equipItem(scene, equippedJson.amulet, equipment.getAmuletSlot());
    this.equipItem(scene, equippedJson.mainhand, equipment.getMainhandSlot());
    this.equipItem(scene, equippedJson.offhand, equipment.getOffhandSlot());
    this.equipItem(scene, equippedJson.ring1, equipment.getRing1Slot());
    this.equipItem(scene, equippedJson.ring2, equipment.getRing2Slot());
    this.equipItem(scene, equippedJson.belt, equipment.getBeltSlot());
    this.equipItem(scene, equippedJson.gloves, equipment.getGlovesSlot());
    this.equipItem(scene, equippedJson.boots, equipment.getBootsSlot());
  }

  private static equipItem(scene: MainScene, itemCode: number, equipSlot: EquipSlot): void {
    if (itemCode === undefined)
      return;

    const item = APIManager.getNewItem(scene, itemCode);
    if (item) {
      const inventoryItem = new InventoryItem(scene, item);
      equipSlot.equipItem(inventoryItem);
    }
    else
      console.error("SaveModule::equipItem - Inventory item not found in APIManager.");
  }
}
