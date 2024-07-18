export type SignalHandler = {
  callback: (...args: any[]) => void;
  parameters: any[];
}

export class Signal {
  public handlers: SignalHandler[] = [];

  public addHandler(handler: SignalHandler): void {
    this.handlers.push(handler);
  }

  public removeHandler(handler: SignalHandler): void {
    this.handlers = this.handlers.filter(h => h !== handler);
  }

  public raise(...args: any[]): void {
    this.handlers.forEach(handler => handler.callback(...handler.parameters, ...args));
  }
}