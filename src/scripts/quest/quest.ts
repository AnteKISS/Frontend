import IObserver from "../observer/observer";

export default abstract class Quest {
  public uuid: string;
  public isStarted: boolean;
  public isFinished: boolean;

  protected observer: IObserver;
  protected expReward: number;
  protected itemReward: string;

  constructor() {
    this.uuid = Phaser.Math.RND.uuid();
  }

  public abstract activateQuest(): void;
  public abstract resetQuest(): void;
  public abstract checkQuestCompletionStatus(): void;
}