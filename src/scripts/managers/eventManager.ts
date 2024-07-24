import IObserver from "../observer/observer";

export abstract class EventManager {
  private observers: IObserver[] = [];

  public addObserver(observer: IObserver): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: IObserver): void {
    const index = this.observers.indexOf(observer);
    if (index == -1) {
      return;
    }
    this.observers.splice(index, 1);
  }

  public notifyObservers(event: any): void {
    this.observers.forEach(observer => {
      observer.onNotify(event);
    });
  }
}

export class GeneralEventManager extends EventManager {
  private static instance: GeneralEventManager | null = null;

  private constructor() {
    super();
  }

  public static getInstance(): GeneralEventManager {
    if (!GeneralEventManager.instance) {
      GeneralEventManager.instance = new GeneralEventManager();
    }
    return GeneralEventManager.instance;
  }
}

export class PlayerEquipmentEventManager extends EventManager {
  private static instance: PlayerEquipmentEventManager | null = null;

  private constructor() {
    super();
  }

  public static getInstance(): PlayerEquipmentEventManager {
    if (!PlayerEquipmentEventManager.instance) {
      PlayerEquipmentEventManager.instance = new PlayerEquipmentEventManager();
    }
    return PlayerEquipmentEventManager.instance;
  }
}