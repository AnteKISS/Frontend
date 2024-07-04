export default class NoSpriteFoundError extends Error {
  constructor(message?: string) {
    super(message || "No sprites were found.");
    this.name = "NoSpriteFoundError";
  }
}