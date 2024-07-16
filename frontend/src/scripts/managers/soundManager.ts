import { PlayerEntity } from "../entities/playerEntity";
import { ActiveEntityEvents } from "../events/activeEntityEvents";
import { UiEvents } from "../events/uiEvents";
import IObserver from "../observer/observer";
import { Settings } from "../settings/settings";

export default class SoundManager implements IObserver {

  private scene: Phaser.Scene;
  private player: PlayerEntity;
  private uiSoundManager: Phaser.Sound.WebAudioSoundManager;
  private backgroundSoundManager: Phaser.Sound.WebAudioSoundManager;
  private effectsSoundManager: Phaser.Sound.WebAudioSoundManager;

  private readonly BUTTON_CLICK_SOUND_KEY = 'buttonClick';

  constructor(scene: Phaser.Scene, player: PlayerEntity) {
    this.scene = scene;
    this.player = player;
    this.uiSoundManager = new Phaser.Sound.WebAudioSoundManager(scene.game);
    this.backgroundSoundManager = new Phaser.Sound.WebAudioSoundManager(scene.game);
    this.effectsSoundManager = new Phaser.Sound.WebAudioSoundManager(scene.game);

    // scene.sound.setListenerPosition(x, y);
    // scene.tweens.add({ targets: mySound, volume: 0, duration: 500 });
  }
  public onNotify(event: any): void {
    if (event instanceof UiEvents.ButtonClickEvent) {
      this.uiSoundManager.play(this.BUTTON_CLICK_SOUND_KEY);
    } else if (event instanceof ActiveEntityEvents.MeleeWeaponAttackEvent) {
      if (event.isMiddleOfAttack) {
        this.playMeleeSwingHitSound(event.entity.target instanceof PlayerEntity);
      }
    }
  }

  public playBackgroundMusic(): void {
    if (Settings.instance.soundSettings.backgroundMusicMuted) {
      if (this.backgroundSoundManager.getAllPlaying().length > 0) {
        this.backgroundSoundManager.stopAll();
      }
      return;
    }
    this.backgroundSoundManager.play('backgroundMusic');
  }

  public playMeleeSwingHitSound(targetHasArmor: boolean): void {
    if (Settings.instance.soundSettings.soundEffectsMuted) {
      return;
    }
    const random = Math.floor(Math.random() * 4) + 1;
    const pitchVariation = Math.random() * 0.2 + 0.9;
    const soundSetting = {
      rate: pitchVariation
    };
    if (targetHasArmor) {
      this.effectsSoundManager.play('melee_swing_and_hit_armor_' + random, soundSetting);
    } else {
      this.effectsSoundManager.play('melee_swing_and_hit_flesh_' + random, soundSetting);
    }
  }
}