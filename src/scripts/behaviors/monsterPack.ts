import { MonsterEntity } from "../entities/monsterEntity";
import Point from "../types/point";
import { MathModule } from "../utilities/mathModule";

export class MonsterPack {
  
  private _minions: MonsterEntity[];
  private _leader: MonsterEntity | null;
  private _minionCountTarget: number;
  private _delayBetweenReorganize: number;

  private readonly MINION_MAX_DISTANCE_FROM_LEADER = 150;
  private readonly REORGANIZE_BASE_DELAY = 2500;
  
  public constructor(minionCountTarget: number) {
    this._minions = [];
    this._leader = null;
    this._minionCountTarget = minionCountTarget;
    this._delayBetweenReorganize = this.REORGANIZE_BASE_DELAY;
  }

  public update(time: number, deltaTime: number): void {
    this._delayBetweenReorganize -= deltaTime;
    if (this._delayBetweenReorganize <= 0) {
      this.reorganizePack();
      this._delayBetweenReorganize = this.REORGANIZE_BASE_DELAY;
    }
  }

  public addMinion(minion: MonsterEntity): void {
    this._minions.push(minion);
  }

  public removeMinion(minion: MonsterEntity): void {
    this._minions = this._minions.filter((m) => m !== minion);
  }

  public getMinions(): MonsterEntity[] {
    return this._minions;
  }

  public setLeader(leader: MonsterEntity): void {
    this._leader = leader;
  }

  public getLeader(): MonsterEntity | null {
    return this._leader;
  }

  public isLeaderAlive(): boolean {
    return this._leader !== null && !this._leader.isDead();
  }

  public hasLeaderValidTarget(): boolean {
    return this._leader !== null && this._leader.target !== null && !(this._leader.target as MonsterEntity).isDead();
  }

  public reorganizePack(): void {
    if (this._leader === null) {
      return;
    }
    if (this._leader.isDead()) {
      this._leader = null;
      return;
    }
    for (const minion of this._minions) {
      if (minion.isDead()) {
        continue;
      }
      const distanceToLeader = MathModule.scaledDistanceBetweenEntities(minion, this._leader);
      if (distanceToLeader > this.MINION_MAX_DISTANCE_FROM_LEADER) {
        const regroupPosition: Point = MathModule.getClosestPointOnCircle(minion, this._leader, this.MINION_MAX_DISTANCE_FROM_LEADER);
        minion.destinationX = regroupPosition.x;
        minion.destinationY = regroupPosition.y;
      }
    }
  }
}