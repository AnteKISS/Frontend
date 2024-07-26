import IObserver from "../observer/observer";

export default abstract class Quest {
  protected observer: IObserver;
  protected expReward: number;
  protected itemReward: string;

  constructor() { }

  public abstract checkQuestCompletionStatus(): void;
}