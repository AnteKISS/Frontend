export default class InvalidMonsterCodeError extends Error {
  constructor(message?: string) {
    super(message || "Entity code is invalid.");
    this.name = "InvalidMonsterCodeError";
  }
}