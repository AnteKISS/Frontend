import MainScene from "../scenes/mainScene";

export default class SaveModule {
  public static getJson(scene: MainScene): string {
    const player = scene.playerTest;
    player.attributeAllocation.cancelSelection();

    const json = {
      playerX: player.positionX,
      playerY: player.positionY,
      playerAllocatedPoints: {
        strenght: player.attributeAllocation.strength,
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
}
