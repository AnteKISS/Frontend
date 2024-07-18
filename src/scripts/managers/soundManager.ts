import { ActiveEntity } from "../entities/activeEntity";
import { BaseEntity } from "../entities/baseEntity";
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

  public update(time: number, deltaTime: number): void {
    if (!this.scene || !this.player) {
      return;
    }
    // this.effectsSoundManager.setListenerPosition(this.player.positionX, this.player.positionY);
    // this.scene.sound.setListenerPosition(this.player.positionX, this.player.positionY);
    // this.backgroundSoundManager.setListenerPosition(this.player.positionX, this.player.positionY);
    // this.uiSoundManager.setListenerPosition(this.player.positionX, this.player.positionY);
    // this.playingFootstepsSoundList.forEach(sound => {
    //   ((sound as EntitySound).x as unknown as AudioParam).value = (sound as EntitySound).entity.positionX;
    //   ((sound as EntitySound).y as unknown as AudioParam).value = (sound as EntitySound).entity.positionY;
    // });
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

    } else if (event instanceof ActiveEntityEvents.EarthSpellCastEvent) {
      this.effectsSoundManager.play('explosion_1', {
        volume: 1,
        
      });
    } else if (event instanceof ActiveEntityEvents.FireSpellCastEvent) {
      this.effectsSoundManager.play('fire_spell_launch_1');
    } else if (event instanceof ActiveEntityEvents.IceSpellCastEvent) {
      this.effectsSoundManager.play('ice_spell_1');
    } else if (event instanceof ActiveEntityEvents.ReceivedDamageEvent) {
      this.effectsSoundManager.play('hit_flesh_1');
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
      volume: 0.1
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
    // Theres a bug with the SetListenerPosition and I am not able to change the listener position (player) for the sound
    if (entity.uuid != "It just doesnt work") {
      return;
    }
    if (!this.scene || !this.player) {
      return;
    }
    if (Settings.instance.soundSettings.soundEffectsMuted) {
      return;
    }
    if (this.playingFootstepsSoundList.filter((sound) => (sound as EntitySound).entity.uuid == entity.uuid && (sound as EntitySound).soundType == SoundType.FOOTSTEPS && sound.isPlaying).length > 0) {
      return;
    }
    const random = Math.floor(Math.random() * 8) + 1;
    // const soundSetting = {
    //   rate: entity.stats.movementSpeed / 150,
    //   volume: 0.5,
    //   source: {
    //     x: entity.positionX,
    //     y: entity.positionY,
    //     z: 0,
    //     panningModel: 'equalpower',
    //     distanceModel: 'inverse',
    //     orientationX: 0,
    //     orientationY: 0,
    //     orientationZ: -1,
    //     refDistance: 1,
    //     maxDistance: 500,
    //     rolloffFactor: 0.25,
    //     coneInnerAngle: 360,
    //     coneOuterAngle: 0,
    //     coneOuterGain: 0,
    //     follow: entity
    //   }
    // };
    const sound = this.effectsSoundManager.add('step_dirt_' + random, {
      rate: entity.stats.movementSpeed / 150,
      volume: 0.25,
      source: {
        x: entity.positionX,
        y: entity.positionY,
        z: 0,
        panningModel: 'equalpower',
        distanceModel: 'inverse',
        orientationX: 0,
        orientationY: 0,
        orientationZ: -1,
        refDistance: 1,
        maxDistance: 500,
        rolloffFactor: 1,
        coneInnerAngle: 360,
        coneOuterAngle: 0,
        coneOuterGain: 0,
        follow: undefined
      }
    }) as EntitySound;
    // const sound = this.effectsSoundManager.add('step_dirt_' + random, soundSetting) as EntitySound;
    sound.entity = entity;
    sound.soundType = SoundType.FOOTSTEPS;
    this.playingFootstepsSoundList.push(sound);
    sound.on('update', () => {
      console.log('update sound');
      // (sound.x as unknown as AudioParam).value = entity.positionX;
      // (sound.y as unknown as AudioParam).value = entity.positionY;
      // this.effectsSoundManager.setListenerPosition(this.player.positionX, this.player.positionY);
    });
    sound.on('complete', () => {
      console.log('complete sound b4: ', this.playingFootstepsSoundList);
      const index = this.playingFootstepsSoundList.indexOf(sound);
      if (index !== -1) {
        this.playingFootstepsSoundList.splice(index, 1);
      }
      // this.playingFootstepsSoundList.slice(this.playingFootstepsSoundList.indexOf(sound), 1);
      console.log('complete sound after: ', this.playingFootstepsSoundList);
      // sound.destroy();
    });
    sound.play();
  }
  // this.music = this.sound.add('spinning_rat_power', {
  //   mute: false,
  //   volume: 0.9,
  //   rate: 1,
  //   detune: 0,
  //   seek: 0,
  //   loop: true,
  //   delay: 0,
  //   // source of the spatial sound
  //   source: {
  //       x: this.monsterTest2.positionX,// - this.cameras.main.width / 2,
  //       y: this.monsterTest2.positionY,// - this.cameras.main.height / 2,
  //       z: 0,
  //       panningModel: 'equalpower',
  //       distanceModel: 'inverse',
  //       orientationX: 0,
  //       orientationY: 0,
  //       orientationZ: -1,
  //       refDistance: 1,
  //       maxDistance: 1000,
  //       rolloffFactor: 0.25,
  //       coneInnerAngle: 360,
  //       coneOuterAngle: 0,
  //       coneOuterGain: 0,
  //       follow: undefined
  //   }
  // }) as Phaser.Sound.WebAudioSound;
}