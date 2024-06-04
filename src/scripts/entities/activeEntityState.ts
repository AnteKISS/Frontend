export enum ActiveEntityState {

  IDLE = 'IDLE',
  RUN = 'RUN',
  MELEEATTACK = 'MELEEATTACK',
  MELEEATTACK_2 = 'MELEEATTACK_2',
  RANGEDATTACK = 'RANGEDATTACK',
  RANGEDATTACK_2 = 'RANGEDATTACK_2',
  CASTSPELL = 'CASTSPELL',
  BLOCK = 'BLOCK',
  CHEER = 'CHEER',
  HIT = 'HIT',
  DEATH = 'DEATH',
  CRITICALDEATH = 'CRITICAL_DEATH'
}

// export class ActiveEntityState {

//   private states: Map<string, string>;

//   constructor() {
//     this.states = new Map<string, string>();
//   }

//   public addState(key: string, value: string): void {
//     this.states.set(key, value);
//   }

//   public removeState(key: string): void {
//     this.states.delete(key);
//   }

//   public getState(key: string): string | undefined {
//     return this.states.get(key);
//   }

//   public clearStates(): void {
//     this.states.clear();
//   }

//   public hasState(key: string): boolean {
//     return this.states.has(key);
//   }
// }