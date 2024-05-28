import 'phaser'
import Act from './act'
import Area from './area'

export default class Campaign {
  name: string;
  acts: Array<Act>;
  actIndex: number;

  constructor(name: string) {
    this.name = name;
    this.acts = new Array<Act>;
    this.acts.push(new Act("Act I"));
    this.actIndex = 0;
  }

  public addAct(act: Act) {
    this.acts.push(act);
    this.actIndex = this.acts.length - 1;
  }

  public currentAct(): Act {
    return this.acts[this.actIndex];
  }

  public currentArea(): Area {
    return this.acts[this.actIndex].currentArea();
  }
}
