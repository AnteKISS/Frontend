import 'phaser'
import Tile from '../tiles/tile'
import Campaign from '../tiles/campaign'

export default class ConfigureTileForm extends Phaser.GameObjects.Container {
  tile: Tile;
  campaign: Campaign;
  transitionNames: string[];
  onFinished: Function;

  selectedTransitionIndex: number;

  title: Phaser.GameObjects.Text;
  background: Phaser.GameObjects.Rectangle;
  transitionSelect: Phaser.GameObjects.Text;
  nextTransitionText: Phaser.GameObjects.Text;
  cancelText: Phaser.GameObjects.Text;
  confirmText: Phaser.GameObjects.Text;

  focused: boolean;

  constructor(scene: Phaser.Scene, campaign: Campaign, onFinished: Function) {
    super(scene, 0, 0);

    this.campaign = campaign;
    this.transitionNames = new Array<string>;
    this.onFinished = onFinished;

    this.selectedTransitionIndex = 0;

    this.title = scene.add.text(480, 250, "Configure Tile", { color: '#000000', fontSize: '40px' });
    this.background = scene.add.rectangle(640, 360, 600, 300, 0xAAAAAA);
    this.transitionSelect = scene.add.text(400, 325, "Selected Transition : \n", { color: '#000000', fontSize: '24px' });
    this.nextTransitionText = scene.add.text(400, 425, "Change Transition (<-/->)", { color: '#000000', fontSize: '24px' });
    this.cancelText = scene.add.text(700, 465, "Cancel (Esc)", { color: '#000000', fontSize: '24px' });
    this.confirmText = scene.add.text(400, 465, "Confirm (Enter)", { color: '#000000', fontSize: '24px' });

    this.add([this.background, this.title, this.transitionSelect, this.nextTransitionText, this.cancelText, this.confirmText]);
    this.scene.add.existing(this);

    if (scene.input.keyboard)
      scene.input.keyboard.on('keydown', (event: KeyboardEvent) => this.handleKeyDown(event));

    this.focused = false;

    this.updateTransitionText();
  }

  public show(tile: Tile) {
    this.transitionNames = Array.from(this.campaign.currentAct().getTransitionNames());
    this.setVisible(true);
    this.focused = true;
    this.tile = tile;

    if (this.selectedTransitionIndex >= this.campaign.currentAct().getTransitionAmount())
      this.selectedTransitionIndex = Math.max(0, this.campaign.currentAct().getTransitionAmount() - 1);

    this.updateTransitionText();
  }

  public hide() {
    this.setVisible(false);
    this.focused = false;
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (this.focused === false)
      return;

    if (event.key === 'ArrowLeft') {
      // Next transition
      if (this.campaign.currentAct().getTransitionAmount() > 0) {
        this.selectedTransitionIndex--;
        if (this.selectedTransitionIndex < 0) this.selectedTransitionIndex = this.campaign.currentAct().getTransitionAmount() - 1;
      }
    }

    else if (event.key === 'ArrowRight') {
      // Previous transition
      if (this.campaign.currentAct().getTransitionAmount() > 0) {
        this.selectedTransitionIndex = (this.selectedTransitionIndex + 1) % this.campaign.currentAct().getTransitionAmount();
      }
    }

    else if (event.key === 'Escape') {
      // Quit without saving transition
      this.onFinished();
    }

    else if (event.key === 'Enter') {
      // Quit and create transition if valid inputs
      if (this.tile && this.transitionNames.length > 0) {
        const TRANSITION_NAME = this.transitionNames[this.selectedTransitionIndex];
        this.tile.transition = this.campaign.currentAct().getTransition(TRANSITION_NAME);
        this.onFinished();
      }
    }

    this.updateTransitionText();
  }

  private updateTransitionText() {
    const TRANSITION_NAME = (this.transitionNames.length === 0)
      ? "None"
      : this.transitionNames[this.selectedTransitionIndex];
    this.transitionSelect.setText("Selected Transition : \n" + TRANSITION_NAME);
  }
}
