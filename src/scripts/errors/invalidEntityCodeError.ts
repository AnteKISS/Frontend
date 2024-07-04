export default class InvalidEntityCodeError extends Error {
  constructor(message?: string) {
    super(message || "Entity code is invalid.");
    this.name = "InvalidEntityCodeError";
  }
}