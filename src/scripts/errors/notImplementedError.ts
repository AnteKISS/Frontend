export default class NotImplementedError extends Error {
  constructor(message?: string) {
    super(message || "Method not implemented.");
    this.name = "NotImplementedError";
  }
}