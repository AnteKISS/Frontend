export default class LootTable {
  private table: Array<string>; // item names

  public constructor(itemNames: Array<string>) {
    this.table = itemNames;
  }

  public getTable(): Array<string> {
    return this.table;
  }

  public setTable(itemNames: Array<string>) {
    this.table = itemNames;
  }
}
