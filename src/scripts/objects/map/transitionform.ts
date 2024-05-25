import 'phaser'
import TextInput from '../textInput'
import Transition from './transition'
import GameMap from './gamemap'
import Area from './area'

export default class TransitionForm extends Phaser.GameObjects.Container {
  gameMap: GameMap;
  selectedAreaIndex: number;

  title: Phaser.GameObjects.Text;
  nameInput: TextInput;
  xInput: TextInput;
  yInput: TextInput;
  areaSelect: Phaser.GameObjects.Text;
  nextInputText: Phaser.GameObjects.Text;
  cancelText: Phaser.GameObjects.Text;
  confirmText: Phaser.GameObjects.Text;

  background: Phaser.GameObjects.Rectangle;

  focused: boolean;
  textInputIndex: number;
  onFinished: Function;

  constructor(scene: Phaser.Scene, gameMap: GameMap, onFinished: Function) {
    super(scene, 0, 0);

    this.gameMap = gameMap;
    this.selectedAreaIndex = 0;

    this.title = scene.add.text(450, 150, "Create Transition", { color: '#000000', fontSize: '40px' });
    this.nameInput = new TextInput(scene, 378, 250, 523, "Name : ", { color: '#000000', fontSize: '24px' });
    this.nameInput.setMaxLength(25);
    this.xInput = new TextInput(scene, 378, 325, 240, "To X : ", { color: '#000000', fontSize: '24px' });
    this.yInput = new TextInput(scene, 660, 325, 240, "To Y : ", { color: '#000000', fontSize: '24px' });
    this.xInput.setInputFilter(TextInput.NUMBER_TYPE);
    this.yInput.setInputFilter(TextInput.NUMBER_TYPE);
    this.xInput.setValueRange(-999999, 999999);
    this.yInput.setValueRange(-999999, 999999);
    this.xInput.updateInputText('0');
    this.yInput.updateInputText('0');

    this.areaSelect = scene.add.text(400, 425, "", { color: '#000000', fontSize: '24px' });
    this.areaSelect.setLineSpacing(10);

    this.nextInputText = scene.add.text(400, 525, "Next Text Field (Tab)", { color: '#000000', fontSize: '24px' });
    this.cancelText = scene.add.text(720, 560, "Cancel (Esc)", { color: '#000000', fontSize: '24px' });
    this.confirmText = scene.add.text(400, 560, "Confirm (Enter)", { color: '#000000', fontSize: '24px' });

    this.background = scene.add.rectangle(640, 360, 600, 500, 0xAAAAAA);

    this.add([this.background, this.title, this.nameInput, this.xInput, this.yInput, this.areaSelect, this.nextInputText, this.cancelText, this.confirmText]);
    this.scene.add.existing(this);

    scene.input.keyboard.on('keydown', (event: KeyboardEvent) => this.handleKeyDown(event));
    this.focused = false;
    this.textInputIndex = 0;
    this.onFinished = onFinished;
    this.updateTextInputs();
  }

  public show() {
    this.selectedAreaIndex = 0;
    this.nameInput.updateInputText('');
    this.xInput.updateInputText('0');
    this.yInput.updateInputText('0');
    this.updateAreaSelectText();

    this.setVisible(true);
    this.focused = true;
  }

  public hide() {
    this.setVisible(false);
    this.focused = false;
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (this.focused === false)
      return;

    if (event.key === 'Tab') {
      // Change text input focus
      this.textInputIndex = (this.textInputIndex + 1) % 3;
    }

    else if (event.key === 'ArrowLeft') {
      // Next area
      this.selectedAreaIndex = (this.selectedAreaIndex + 1) % this.gameMap.areas.length;
      this.updateAreaSelectText();
    }

    else if (event.key === 'ArrowRight') {
      // Previous area
      this.selectedAreaIndex--;
      if (this.selectedAreaIndex < 0) this.selectedAreaIndex = this.gameMap.areas.length - 1;
      this.updateAreaSelectText();
    }

    else if (event.key === 'Escape') {
      // Quit without saving transition
      this.onFinished();
    }

    else if (event.key === 'Enter') {
      // Quit and create transition if valid inputs
      if (this.nameInput.isInputValid() && this.xInput.isInputValid() && this.yInput.isInputValid()) {
        this.gameMap.transitions.push(new Transition(this.nameInput.inputText, this.getSelectedArea(), this.xInput.getNumValue(), this.yInput.getNumValue()));
        this.onFinished();
      }
    }

    this.updateTextInputs();
  }

  private updateTextInputs() {
    if (this.textInputIndex === 0) {
      this.nameInput.setFocus(true);
      this.xInput.setFocus(false);
      this.yInput.setFocus(false);
    }
    else if (this.textInputIndex === 1) {
      this.nameInput.setFocus(false);
      this.xInput.setFocus(true);
      this.yInput.setFocus(false);
    }
    else if (this.textInputIndex === 2) {
      this.nameInput.setFocus(false);
      this.xInput.setFocus(false);
      this.yInput.setFocus(true);
    }
  }

  private updateAreaSelectText() {
    this.areaSelect.setText("Target Area (<-/->):\n" + this.getSelectedArea().name);
  }

  private getSelectedArea(): Area {
    return this.gameMap.areas[this.selectedAreaIndex];
  }
}
