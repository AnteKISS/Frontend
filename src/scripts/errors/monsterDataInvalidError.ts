export default class MonsterDataInvalidError extends Error {
  constructor(message?: string) {
    super(message || "Monster data is either empty or invalid.");
    this.name = "MonsterDataInvalidError";
  }
}