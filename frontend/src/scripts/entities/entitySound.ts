export enum SoundType {
  FOOTSTEPS,
  GROWL
}

export class EntitySound extends Phaser.Sound.WebAudioSound {
  public entityUUID: string;
  public soundType: SoundType;

  constructor(manager: Phaser.Sound.WebAudioSoundManager, key: string, config?: Phaser.Types.Sound.SoundConfig) {
    super(manager, key, config);
  }
}