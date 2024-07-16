import { ActiveEntity } from "../entities/activeEntity";
import { MonsterEntity } from "../entities/monsterEntity";
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

  private footstepsSoundEntityMap: Map<ActiveEntity, Phaser.Sound.BaseSound> = new Map();

  private readonly BUTTON_CLICK_1_SOUND_KEY = 'buttonClick_1';
  private readonly BUTTON_CLICK_2_SOUND_KEY = 'buttonClick_2';

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
      this.uiSoundManager.play(this.BUTTON_CLICK_2_SOUND_KEY);
    } else if (event instanceof ActiveEntityEvents.MeleeWeaponAttackEvent) {
      if (event.isMiddleOfAttack) {
        this.playMeleeSwingHitSound(event.entity.target instanceof PlayerEntity);
      }
    } else if (event instanceof ActiveEntityEvents.KilledEvent) {
      if (event.target instanceof PlayerEntity) {
        const random = Math.floor(Math.random() * 3) + 1;
        this.effectsSoundManager.play('human_male_death_' + random);
      }
    } else if (event instanceof ActiveEntityEvents.MovingStartedEvent) {
      // if (event.entity instanceof MonsterEntity && event.entity.name === 'Menotaur') {
        const random = Math.floor(Math.random() * 8) + 1;
        if (this.footstepsSoundEntityMap.has(event.entity)) {
          if (this.footstepsSoundEntityMap.get(event.entity)!.isPlaying) {
            return;
          }
          this.footstepsSoundEntityMap.get(event.entity)!.play();
          return;
        }
        let sound = new Phaser.Sound.WebAudioSound(this.effectsSoundManager, 'step_dirt_' + random, { rate: event.entity.stats.movementSpeed / 150, loop: true,  });
        this.footstepsSoundEntityMap.set(event.entity, sound);
        sound.play();
      // }
    } else if (event instanceof ActiveEntityEvents.MovingFinishedEvent) {
      // if (event.entity instanceof MonsterEntity && event.entity.name === 'Menotaur') {
        if (!this.footstepsSoundEntityMap.has(event.entity)) {
          return;
        }
        if (this.footstepsSoundEntityMap.get(event.entity)!.isPlaying) {
          this.footstepsSoundEntityMap.get(event.entity)!.stop();
        }
      // }
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