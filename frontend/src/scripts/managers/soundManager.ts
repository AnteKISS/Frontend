import { ActiveEntity } from "../entities/activeEntity";
import { EntitySound, SoundType } from "../entities/entitySound";
import { MonsterEntity } from "../entities/monsterEntity";
import { PlayerEntity } from "../entities/playerEntity";
import { ActiveEntityEvents } from "../events/activeEntityEvents";
import { UiEvents } from "../events/uiEvents";
import IObserver from "../observer/observer";
import { Settings } from "../settings/settings";

export default class SoundManager implements IObserver {
  public uiSoundManager: Phaser.Sound.WebAudioSoundManager;
  public backgroundSoundManager: Phaser.Sound.WebAudioSoundManager;
  public effectsSoundManager: Phaser.Sound.WebAudioSoundManager;

  private _scene: Phaser.Scene;
  private player: PlayerEntity;

  // private footstepsSoundEntityMap: Map<ActiveEntity, Phaser.Sound.BaseSound> = new Map();
  private playingFootstepsSoundList: Phaser.Sound.BaseSound[] = [];

  private readonly BUTTON_CLICK_1_SOUND_KEY = 'buttonClick_1';
  private readonly BUTTON_CLICK_2_SOUND_KEY = 'buttonClick_2';

  private static instance: SoundManager | null = null;

  private constructor() {

  }

  public static getInstance(): SoundManager {
    if (!SoundManager.instance) {
      SoundManager.instance = new SoundManager();
    }
    return SoundManager.instance;
  }

  public set scene(scene: Phaser.Scene) {
    this._scene = scene;
    this.uiSoundManager = new Phaser.Sound.WebAudioSoundManager(this.scene.game);
    this.backgroundSoundManager = new Phaser.Sound.WebAudioSoundManager(this.scene.game);
    this.effectsSoundManager = new Phaser.Sound.WebAudioSoundManager(this.scene.game);
  }

  public get scene(): Phaser.Scene {
    return this._scene;
  }

  public set playerEntity(player: PlayerEntity) {
    this.player = player;
  }

  public get playerEntity(): PlayerEntity {
    return this.player;
  }

  public onNotify(event: any): void {
    if (!this.scene || !this.player) {
      return;
    }
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

    } else if (event instanceof ActiveEntityEvents.MovingFinishedEvent) {

    }
  }

  public playOutsideBackgroundAmbience(): void {
    if (!this.scene || !this.player) {
      return;
    }
    if (Settings.instance.soundSettings.backgroundMusicMuted) {
      if (this.backgroundSoundManager.getAllPlaying().length > 0) {
        this.backgroundSoundManager.stopAll();
      }
      return;
    }
    this.backgroundSoundManager.play('outside_ambience_1', {
      loop: true,
      volume: 0.5
    });
  }

  public playMeleeSwingHitSound(targetHasArmor: boolean): void {
    if (!this.scene || !this.player) {
      return;
    }
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

  public playFootstepsSound(entity: ActiveEntity): void {
    if (!this.scene || !this.player) {
      return;
    }
    if (Settings.instance.soundSettings.soundEffectsMuted) {
      return;
    }
    if (this.playingFootstepsSoundList.filter((sound) => (sound as EntitySound).entityUUID == entity.uuid && (sound as EntitySound).soundType == SoundType.FOOTSTEPS && sound.isPlaying).length > 0) {
      return;
    }
    const random = Math.floor(Math.random() * 8) + 1;
    const soundSetting = {
      rate: entity.stats.movementSpeed / 150,
      volume: 0.1
    };
    const sound = this.effectsSoundManager.add('step_dirt_' + random, soundSetting) as EntitySound;
    sound.entityUUID = entity.uuid;
    sound.soundType = SoundType.FOOTSTEPS;
    this.playingFootstepsSoundList.push(sound);
    sound.on('complete', () => {
      this.playingFootstepsSoundList.slice(this.playingFootstepsSoundList.indexOf(sound), 1);
      sound.destroy();
    });
    sound.play();
  }
}