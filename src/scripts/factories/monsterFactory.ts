import InvalidMonsterCodeError from '../errors/invalidMonsterCodeError';
import NotImplementedError from '../errors/notImplementedError';

export class MonsterFactory {
  static createMonster(monsterCode: string, scene: Phaser.Scene) {
    switch (monsterCode) {
      case 'monster_goblin_adult_1':
        throw new NotImplementedError();
      default:
        throw new InvalidMonsterCodeError();
    }
  }
}