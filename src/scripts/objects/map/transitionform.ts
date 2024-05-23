import 'phaser'
import TextInput from '../textInput'
import Transition from './transition'
import GameMap from './gamemap'
import Area from './area'

export default class TransitionForm {
  gameMap: GameMap;
  selectedAreaIndex: number;

  title: Phaser.GameObjects.Text;
  xInput: TextInput;
  yInput: TextInput;
  areaSelect: Phaser.GameObjects.Text;
  nextInputText: Phaser.GameObjects.Text;
  cancelText: Phaser.GameObjects.Text;
  confirmText: Phaser.GameObjects.Text;

  background: Phaser.GameObjects.Rectangle;
  xInputBackground: Phaser.GameObjects.Rectangle;
  yInputBackground: Phaser.GameObjects.Rectangle;

  focused: boolean;
  textInputIndex: number;
  onFinished: Function;

  constructor(scene: Phaser.Scene, gameMap: GameMap, onFinished: Function) {
    this.gameMap = gameMap;
    this.selectedAreaIndex = 0;

    this.title = scene.add.text(450, 200, "Create Transition", {color: '#000000', fontSize: '40px'});
    this.xInput = new TextInput(scene, 400, 300, "To X : ", {color: '#000000', fontSize: '24px'});
    this.yInput = new TextInput(scene, 680, 300, "To Y : ", {color: '#000000', fontSize: '24px'});
    this.xInput.setInputFilter(TextInput.NUMBER_TYPE);
    this.yInput.setInputFilter(TextInput.NUMBER_TYPE);
    this.xInput.setValueRange(-999999, 999999);
    this.yInput.setValueRange(-999999, 999999);
    this.xInput.updateInputText('0');
    this.yInput.updateInputText('0');

    this.areaSelect = scene.add.text(400, 375, "", {color: '#000000', fontSize: '24px'});
    this.areaSelect.setLineSpacing(10);

    this.nextInputText = scene.add.text(400, 475, "Next Text Field (Shift)", {color: '#000000', fontSize: '24px'});
    this.cancelText = scene.add.text(720, 510, "Cancel (Esc)", {color: '#000000', fontSize: '24px'});
    this.confirmText = scene.add.text(400, 510, "Confirm (Enter)", {color: '#000000', fontSize: '24px'});

    this.background = scene.add.rectangle(640, 360, 600, 400, 0xAAAAAA);
    this.xInputBackground = scene.add.rectangle( 500, this.xInput.y + this.xInput.height / 2, 242, this.xInput.height + 40, 0xFFFFFF);
    this.yInputBackground = scene.add.rectangle( 780, this.yInput.y + this.yInput.height / 2, 242, this.yInput.height + 40, 0xFFFFFF);

    this.title.setDepth(100);
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
    this.xInput.updateInputText('0');
    this.yInput.updateInputText('0');
    this.updateAreaSelectText();

    this.title.setVisible(true);
    this.xInput.setVisible(true);
    this.yInput.setVisible(true);
    this.areaSelect.setVisible(true);
    this.nextInputText.setVisible(true);
    this.cancelText.setVisible(true);
    this.confirmText.setVisible(true);
    this.background.setVisible(true);
    this.xInputBackground.setVisible(true);
    this.yInputBackground.setVisible(true);
    this.focused = true;
  }

  public hide() {
    this.background.setVisible(false);
    this.title.setVisible(false);
    this.xInput.setVisible(false);
    this.yInput.setVisible(false);
    this.areaSelect.setVisible(false);
    this.nextInputText.setVisible(false);
    this.cancelText.setVisible(false);
    this.confirmText.setVisible(false);
    this.xInputBackground.setVisible(false);
    this.yInputBackground.setVisible(false);
    this.focused = false;
  }

  public getGameObjects() : Phaser.GameObjects.GameObject[] {
    return [
      this.title,
      this.xInput,
      this.yInput,
      this.areaSelect,
      this.nextInputText,
      this.cancelText,
      this.confirmText,
      this.background,
      this.xInputBackground,
      this.yInputBackground,
    ];
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (this.focused === false)
      return;

    if (event.key === 'Shift') {
      // Change text input focus
      this.textInputIndex = (this.textInputIndex + 1) % 2;
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
      if (this.xInput.isInputValid() && this.yInput.isInputValid()) {
        this.gameMap.transitions.push(new Transition(this.getSelectedArea(), this.xInput.getNumValue(), this.yInput.getNumValue()));
        this.onFinished();
      }
    }

    this.updateTextInputs();
  }

  private updateTextInputs() {
    if (this.textInputIndex === 0) {
      this.xInputBackground.setFillStyle(0xDDDDDD);
      this.yInputBackground.setFillStyle(0xFFFFFF);
      this.xInput.focused = true;
      this.yInput.focused = false;
    }
    else if (this.textInputIndex === 1) {
      this.xInputBackground.setFillStyle(0xFFFFFF);
      this.yInputBackground.setFillStyle(0xDDDDDD);
      this.xInput.focused = false;
      this.yInput.focused = true;
    }
  }

  private updateAreaSelectText() {
    this.areaSelect.setText("Target Area (<-/->):\n" + this.getSelectedArea().name);
  }

  private getSelectedArea() : Area {
    return this.gameMap.areas[this.selectedAreaIndex];
  }
}