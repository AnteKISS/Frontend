import 'phaser'
import MainScene from './scenes/mainScene'
import PreloadScene from './scenes/preloadScene'
import MapEditor from './scenes/mapEditor'
import MainMenu from './scenes/mainMenu';
import Setting from './scenes/setting';
import Pregame from './scenes/pregame';
import GlowFilterPipelinePlugin from 'phaser3-rex-plugins/plugins/glowfilterpipeline-plugin.js';
import HorrifiPipelinePlugin from 'phaser3-rex-plugins/plugins/horrifipipeline-plugin.js';
import OutlinePipelinePlugin from 'phaser3-rex-plugins/plugins/outlinepipeline-plugin.js';
import { keycloak, initKeycloak } from './keycloak';

const DEFAULT_WIDTH = 1280;
const DEFAULT_HEIGHT = 720;

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#000000',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  scene: [PreloadScene, MainMenu, MainScene, Setting, Pregame , MapEditor],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: {x: 0, y: 0 }
    }
  },
  plugins: {
    global: [
      {
        key: 'rexGlowFilterPipeline',
        plugin: GlowFilterPipelinePlugin,
        start: true
      },
      {
        key: 'rexOutlinePipeline',
        plugin: OutlinePipelinePlugin,
        start: true
      },
      {
        key: 'rexHorrifiPipeline',
        plugin: HorrifiPipelinePlugin,
        start: true
      }    
    ]
  }
}

//async function startApp(): Promise<void> {
//  try {
//    await initKeycloak();
//
//    if (keycloak.authenticated) {
//      // Proceed with application initialization
//    } else {
//      // Redirect to Keycloak login page if not authenticated
//      keycloak.login();
//    }
//  } catch (error) {
//    console.error('Failed to initialize Keycloak', error);
//    throw error;
//  }
//}

//startApp().catch((error) => {
//  console.error('Error starting the application:', error);
//});

window.addEventListener('load', () => {
  const game = new Phaser.Game(config);
});
