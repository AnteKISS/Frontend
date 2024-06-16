import Act from './act'
import Area from './area'

export default class Campaign {
  public name: string;
  public acts: Array<Act>;
  public actIndex: number;

  public constructor(name: string) {
    this.name = name;
    this.acts = new Array<Act>;
    this.acts.push(new Act("Act I"));
    this.actIndex = 0;
  }

  public currentAct(): Act {
    return this.acts[this.actIndex];
  }

  public currentArea(): Area {
    return this.acts[this.actIndex].currentArea();
  }

  public addAct(act: Act): void {
    this.acts.push(act);
    this.actIndex = this.acts.length - 1;
  }

  public deleteCurrentAct(): void {
    this.acts.splice(this.actIndex, 1);

    if (this.acts.length === 0)
      this.addAct(new Act("New Act"));

    if (this.actIndex >= this.acts.length)
      this.actIndex = this.acts.length - 1;
  }

  public nextAct(): void {
    this.actIndex = (this.actIndex + 1) % this.acts.length;
  }

  public previousAct(): void {
    this.actIndex--;
    if (this.actIndex < 0) this.actIndex += this.acts.length;
  }
}
