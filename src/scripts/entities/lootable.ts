import LootTable from "./lootTable";

export interface ILootable {
  lootTable: LootTable;
  generateLoot(): void;
}
