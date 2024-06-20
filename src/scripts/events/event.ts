// type SignalHandlers = (...args: any[]) => void;
export type SignalHandler = {
  callback: (...args: any[]) => void;
  parameters: any[];
}

// export class Signal {
//   private handlers: SignalHandlers[] = [];

//   public addHandler(handler: SignalHandlers): void {
//     this.handlers.push(handler);
//   }

//   public removeHandler(handler: SignalHandlers): void {
//     this.handlers = this.handlers.filter(h => h !== handler);
//   }

//   public raise(...args: any[]): void {
//     this.handlers.slice(0).forEach(handler => handler(...args));
//   }
// }
export class Signal {
  private handlers: SignalHandler[] = [];

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