import { MonsterEntity } from "../entities/monsterEntity";
import Point from "../types/point";
import { MathModule } from "../utilities/mathModule";

export class MonsterPack {
  
  private _minions: MonsterEntity[];
  private _leader: MonsterEntity | null;
  private _minionCountTarget: number;
  private _delayBetweenReorganize: number;

  private readonly MINION_MAX_DISTANCE_FROM_LEADER = 200;
  private readonly REORGANIZE_BASE_DELAY = 0;
  
  public constructor(minionCountTarget?: number) {
    this._minions = [];
    this._leader = null;
    this._minionCountTarget = minionCountTarget || 5;
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

  public isInPack(entity: MonsterEntity): boolean {
    return this._minions.includes(entity) || this._leader === entity;
  }

  public isLeaderAlive(): boolean {
    return this._leader !== null && !this._leader.isDead();
  }

  public isLeader(entity: MonsterEntity): boolean {
    return this._leader === entity;
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
      if (minion.isAttacking()) {
        continue;
      }
      if (this._leader.target !== null && this._leader.target !== undefined && !(this._leader.target as MonsterEntity).isDead()) {
        const distanceToLeader = MathModule.scaledDistanceBetweenEntities(minion, this._leader);
        const distanceToLeaderTarget = MathModule.scaledDistanceBetweenEntities(minion, this._leader.target as MonsterEntity);
        if (distanceToLeader > distanceToLeaderTarget) {
          minion.destinationX = this._leader.target.positionX;
          minion.destinationY = this._leader.target.positionY;
        } else {
          const regroupPosition: Point = MathModule.getClosestPointOnCircle(minion, this._leader, this.MINION_MAX_DISTANCE_FROM_LEADER);
          minion.destinationX = regroupPosition.x;
          minion.destinationY = regroupPosition.y;
        }
      } else {
        const distanceToLeader = MathModule.scaledDistanceBetweenEntities(minion, this._leader);
        if (distanceToLeader > this.MINION_MAX_DISTANCE_FROM_LEADER) {
          const regroupPosition: Point = MathModule.getClosestPointOnCircle(minion, this._leader, this.MINION_MAX_DISTANCE_FROM_LEADER);
          minion.destinationX = regroupPosition.x;
          minion.destinationY = regroupPosition.y;
        }
      }
    }
  }
}