export default class SoundManager {


  private scene: Phaser.Scene;
  private backgroundMusic: Phaser.Sound.BaseSound;
  private backgroundMusicVolume: number = 0.5;
  private soundEffectsVolume: number = 0.5;
  private uiSoundEffectsVolume: number = 0.5;
  private backgroundMusicMuted: boolean = false;
  private soundEffectsMuted: boolean = false;
  private uiSoundEffectsMuted: boolean = false;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.backgroundMusic = scene.sound.add('backgroundMusic', { loop: true, volume: this.backgroundMusicVolume });
    this.backgroundMusic.play();

    // Create sound managers
    const uiSoundManager = new Phaser.Sound.WebAudioSoundManager(scene.game);
    const backgroundSoundManager = new Phaser.Sound.WebAudioSoundManager(scene.game);
    const effectsSoundManager = new Phaser.Sound.WebAudioSoundManager(scene.game);

    // Load sounds
    uiSoundManager.add('buttonClick', { volume: 0.5, loop: false });
    backgroundSoundManager.add('backgroundMusic', { volume: 0.8, loop: true });
    effectsSoundManager.add('explosion', { volume: 1.0, loop: false });

    // Play sounds
    uiSoundManager.play('buttonClick');
    backgroundSoundManager.play('backgroundMusic');
    effectsSoundManager.play('explosion');

    // scene.sound.setListenerPosition(x, y);

    // var mySound = scene.sound.add("soundKey");
    // scene.tweens.add({ targets: mySound, volume: 0, duration: 500 });

    // Manipulate sound properties
    // For example, adjust volume based on distance
    // const distanceFromPlayer = calculateDistance(player, soundSource);
    // const volume = calculateVolume(distanceFromPlayer);
    effectsSoundManager.get('explosion').play({ volume: 50,  });

    // let uiSound = scene.sound.add('uiSound', { volume: this.uiSoundEffectsVolume, soundManager: scene.sound.uiSoundSoundManager });
    // this.uiSounds.push(uiSound);
    // scene.game.config.preBoot.
    // this.scene.game.uiSound = this.backgroundMusic;
  }
}