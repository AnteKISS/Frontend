import IObserver from "../observer/observer";

export default class EventManager {
  private static observers: IObserver[] = [];

  public static addObserver(observer: IObserver): void {
    this.observers.push(observer);
  }

  public static removeObserver(observer: IObserver): void {
    const index = this.observers.indexOf(observer);
    if (index == -1) {
      return;
    }
    this.observers.splice(index, 1);
  }

  public static notifyObservers(event: any): void {
    this.observers.forEach(observer => {
      observer.onNotify(event);
    });
  }
}