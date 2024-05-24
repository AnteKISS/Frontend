import 'phaser'
import TextInput from '../textInput'
import Transition from './transition'
import GameMap from './gamemap'
import Area from './area'

export default class TransitionForm {
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
  nameInputBackground: Phaser.GameObjects.Rectangle;
  xInputBackground: Phaser.GameObjects.Rectangle;
  yInputBackground: Phaser.GameObjects.Rectangle;

  focused: boolean;
  textInputIndex: number;
  onFinished: Function;

  constructor(scene: Phaser.Scene, gameMap: GameMap, onFinished: Function) {
    this.gameMap = gameMap;
    this.selectedAreaIndex = 0;

    this.title = scene.add.text(450, 150, "Create Transition", { color: '#000000', fontSize: '40px' });
    this.nameInput = new TextInput(scene, 400, 250, "Name : ", { color: '#000000', fontSize: '24px' });
    this.xInput = new TextInput(scene, 400, 325, "To X : ", { color: '#000000', fontSize: '24px' });
    this.yInput = new TextInput(scene, 680, 325, "To Y : ", { color: '#000000', fontSize: '24px' });
    this.xInput.setInputFilter(TextInput.NUMBER_TYPE);
    this.yInput.setInputFilter(TextInput.NUMBER_TYPE);
    this.xInput.setValueRange(-999999, 999999);
    this.yInput.setValueRange(-999999, 999999);
    this.xInput.updateInputText('0');
    this.yInput.updateInputText('0');

    this.areaSelect = scene.add.text(400, 425, "", { color: '#000000', fontSize: '24px' });
    this.areaSelect.setLineSpacing(10);

    this.nextInputText = scene.add.text(400, 525, "Next Text Field (Shift)", { color: '#000000', fontSize: '24px' });
    this.cancelText = scene.add.text(720, 560, "Cancel (Esc)", { color: '#000000', fontSize: '24px' });
    this.confirmText = scene.add.text(400, 560, "Confirm (Enter)", { color: '#000000', fontSize: '24px' });

    this.background = scene.add.rectangle(640, 360, 600, 500, 0xAAAAAA);
    this.nameInputBackground = scene.add.rectangle(640, this.nameInput.y + this.nameInput.height / 2, 523, this.nameInput.height + 40, 0xFFFFFF);
    this.xInputBackground = scene.add.rectangle(500, this.xInput.y + this.xInput.height / 2, 242, this.xInput.height + 40, 0xFFFFFF);
    this.yInputBackground = scene.add.rectangle(780, this.yInput.y + this.yInput.height / 2, 242, this.yInput.height + 40, 0xFFFFFF);

    this.title.setDepth(100);
    this.nameInput.setDepth(101);
    this.xInput.setDepth(101);
    this.yInput.setDepth(102);
    this.areaSelect.setDepth(103);
    this.nextInputText.setDepth(105);
    this.cancelText.setDepth(106);
    this.confirmText.setDepth(107);

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

    this.title.setVisible(true);
    this.nameInput.setVisible(true);
    this.xInput.setVisible(true);
    this.yInput.setVisible(true);
    this.areaSelect.setVisible(true);
    this.nextInputText.setVisible(true);
    this.cancelText.setVisible(true);
    this.confirmText.setVisible(true);
    this.background.setVisible(true);
    this.nameInputBackground.setVisible(true);
    this.xInputBackground.setVisible(true);
    this.yInputBackground.setVisible(true);
    this.focused = true;
  }

  public hide() {
    this.background.setVisible(false);
    this.title.setVisible(false);
    this.nameInput.setVisible(false);
    this.xInput.setVisible(false);
    this.yInput.setVisible(false);
    this.areaSelect.setVisible(false);
    this.nextInputText.setVisible(false);
    this.cancelText.setVisible(false);
    this.confirmText.setVisible(false);
    this.nameInputBackground.setVisible(false);
    this.xInputBackground.setVisible(false);
    this.yInputBackground.setVisible(false);
    this.focused = false;
  }

  public getGameObjects(): Phaser.GameObjects.GameObject[] {
    return [
      this.title,
      this.nameInput,
      this.xInput,
      this.yInput,
      this.areaSelect,
      this.nextInputText,
      this.cancelText,
      this.confirmText,
      this.background,
      this.nameInputBackground,
      this.xInputBackground,
      this.yInputBackground,
    ];
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (this.focused === false)
      return;

    if (event.key === 'Shift') {
      // Change text input focus
      this.textInputIndex = (this.textInputIndex + 1) % 3;
    }

    else if (event.key === 'ArrowLeft') {
      // Next transition
      this.selectedAreaIndex = (this.selectedAreaIndex + 1) % this.gameMap.areas.length;
      this.updateAreaSelectText();
    }

    else if (event.key === 'ArrowRight') {
      // Previous transition
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
      this.nameInputBackground.setFillStyle(0xDDDDDD);
      this.xInputBackground.setFillStyle(0xFFFFFF);
      this.yInputBackground.setFillStyle(0xFFFFFF);
      this.nameInput.focused = true;
      this.xInput.focused = false;
      this.yInput.focused = false;
    }
    else if (this.textInputIndex === 1) {
      this.nameInputBackground.setFillStyle(0xFFFFFF);
      this.xInputBackground.setFillStyle(0xDDDDDD);
      this.yInputBackground.setFillStyle(0xFFFFFF);
      this.nameInput.focused = false;
      this.xInput.focused = true;
      this.yInput.focused = false;
    }
    else if (this.textInputIndex === 2) {
      this.nameInputBackground.setFillStyle(0xFFFFFF);
      this.xInputBackground.setFillStyle(0xFFFFFF);
      this.yInputBackground.setFillStyle(0xDDDDDD);
      this.nameInput.focused = false;
      this.xInput.focused = false;
      this.yInput.focused = true;
    }
  }

  private updateAreaSelectText() {
    this.areaSelect.setText("Target Area (<-/->):\n" + this.getSelectedArea().name);
  }

  private getSelectedArea(): Area {
    return this.gameMap.areas[this.selectedAreaIndex];
  }
}
