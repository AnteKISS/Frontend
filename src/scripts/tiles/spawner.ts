import { MonsterEntity } from '../entities/monsterEntity';
import CampaignManager from '../managers/campaignmanager';
import { EntityManager } from '../managers/entityManager';
import { MathModule } from '../utilities/mathModule';
import GameObject from './gameobject';
import TileModule from './tilemodule';

export default class Spawner extends GameObject {
  public monsterCode: string;
  public spawnAmount: number;
  public range: number; // in tiles
  public entities: Set<MonsterEntity>;

  public constructor(tileX: number, tileY: number, source: string, monsterCode: string, spawnAmount: number, range: number) {
    super(tileX, tileY, source);
    this.monsterCode = monsterCode
    this.spawnAmount = spawnAmount;
    this.range = range;
    this.entities = new Set();
  }

  public spawn(): void {
    const spawnedEntitiesAmount = this.entities.size;

    for (let i = 0; i < this.spawnAmount - spawnedEntitiesAmount; i++) {
      const entity = EntityManager.instance.createMonster(CampaignManager.getInstance().getScene(), this.monsterCode);
      const xTileOffset = MathModule.getRandomInt(-this.range, this.range + 1);
      const yTileOffset = MathModule.getRandomInt(-this.range, this.range + 1);

      // If trying to spawn on invalid tile, cancel spawn
      const tile = CampaignManager.getInstance().getTile(this.tileX + xTileOffset, this.tileY + yTileOffset);
      if (!tile) {
        console.error(`Spawner::spawn - Tried to spawn monster code ${this.monsterCode} out of bounds!`);
        continue;
      }

      const pos = TileModule.getUnitPosFromTilePos(this.tileX + xTileOffset, this.tileY + yTileOffset);

      entity.positionX = pos.x;
      entity.positionY = pos.y;
      entity.area = CampaignManager.getInstance().getCampaign().currentArea();
      this.entities.add(entity);
    }
  }

  public getArgs(): any[] {
    return ["Spawner", this.tileX, this.tileY, this.source, this.monsterCode, this.spawnAmount, this.range];
  }

  public getCollectionId(): string {
    return "Spawner";
  }

  public getCollectionDepth(): number {
    return 0;
  }
}
