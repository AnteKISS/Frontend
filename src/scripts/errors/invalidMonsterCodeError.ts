export default class InvalidMonsterCodeError extends Error {
  constructor(message?: string) {
    super(message || "Monster code is invalid.");
    this.name = "InvalidMonsterCodeError";
  }
}