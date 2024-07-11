import CampaignManager from '../managers/campaignmanager';
import { EntityManager } from '../managers/entityManager';
import { MathModule } from '../utilities/mathModule';
import GameObject from './gameobject';
import TileModule from './tilemodule';

export default class Spawner extends GameObject {
  private monsterCode: string;
  private spawnAmount: number;
  private range: number; // in tiles

  public constructor(tileX: number, tileY: number) {
    super(tileX, tileY, "basic_spawner");
    this.monsterCode = "zombie_0";
    this.spawnAmount = 5;
    this.range = 5;
  }

  public spawn(): void {
    for (let i = 0; i < this.spawnAmount; i++) {
      const entity = EntityManager.instance.createMonster(CampaignManager.getInstance().getScene(), this.monsterCode);
      const xTileOffset = MathModule.getRandomInt(-this.range, this.range);
      const yTileOffset = MathModule.getRandomInt(-this.range, this.range);
      const pos = TileModule.getUnitPosFromTilePos(this.tileX + xTileOffset, this.tileY + yTileOffset);

      console.log(entity);
      entity.positionX = pos.x;
      entity.positionY = pos.y;
      entity.area = CampaignManager.getInstance().getCampaign().currentArea();
    }
  }

  public getArgs(): any[] {
    return ["Spawner", this.tileX, this.tileY, this.source];
  }

  public getCollectionId(): string {
    return "Spawner";
  }

  public getCollectionDepth(): number {
    return 0;
  }
}
