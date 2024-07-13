import Spawner from "../tiles/spawner";
import TextInput from "./textInput";

export default class ConfigureSpawnerForm extends Phaser.GameObjects.Container {
  private spawner: Spawner;

  private title: Phaser.GameObjects.Text;
  private nextInputText: Phaser.GameObjects.Text;
  private cancelText: Phaser.GameObjects.Text;
  private confirmText: Phaser.GameObjects.Text;
  private background: Phaser.GameObjects.Rectangle;

  private monsterCodeInput: TextInput;
  private spawnAmountInput: TextInput;
  private rangeInput: TextInput;

  private focused: boolean;
  private textInputIndex: number;
  private onFinished: Function;

  public constructor(scene: Phaser.Scene, onFinished: Function) {
    super(scene, 0, 0);

    this.title = scene.add.text(450, 150, "Configure Spawner", { color: '#000000', fontSize: '40px' });
    this.nextInputText = scene.add.text(400, 525, "Next Text Field (Tab)", { color: '#000000', fontSize: '24px' });
    this.cancelText = scene.add.text(720, 560, "Cancel (Esc)", { color: '#000000', fontSize: '24px' });
    this.confirmText = scene.add.text(400, 560, "Confirm (Enter)", { color: '#000000', fontSize: '24px' });
    this.background = scene.add.rectangle(640, 360, 600, 500, 0xAAAAAA);

    this.monsterCodeInput = new TextInput(scene, 385, 225, 500, "Monster Code : ", { color: '#000000', fontSize: '24px' });
    this.monsterCodeInput.setMaxLength(25);

    this.spawnAmountInput = new TextInput(scene, 385, 325, 500, "Spawn Amount : ", { color: '#000000', fontSize: '24px' });
    this.spawnAmountInput.setInputFilter(TextInput.NUMBER_TYPE);
    this.spawnAmountInput.setValueRange(1, 100);
    this.spawnAmountInput.updateInputText("5");

    this.rangeInput = new TextInput(scene, 385, 425, 500, "Range : ", { color: '#000000', fontSize: '24px' });
    this.rangeInput.setInputFilter(TextInput.NUMBER_TYPE);
    this.rangeInput.setValueRange(1, 100);
    this.rangeInput.updateInputText("5");

    this.focused = false;
    this.textInputIndex = 0;
    this.onFinished = onFinished;

    this.add([this.background, this.title, this.nextInputText, this.cancelText, this.confirmText, this.monsterCodeInput, this.spawnAmountInput, this.rangeInput]);
    this.scene.add.existing(this);

    if (scene && scene.input && scene.input.keyboard)
      scene.input.keyboard.on('keydown', (event: KeyboardEvent) => this.handleKeyDown(event));

    this.updateTextInputs();
  }

  public show(spawner: Spawner) {
    this.spawner = spawner;
    this.textInputIndex = 0;
    this.monsterCodeInput.updateInputText(this.spawner.monsterCode);
    this.spawnAmountInput.updateInputText(this.spawner.spawnAmount.toString());
    this.rangeInput.updateInputText(this.spawner.range.toString());
    this.updateTextInputs();

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

    else if (event.key === 'Escape') {
      // Quit without saving transition
      this.onFinished();
    }

    else if (event.key === 'Enter') {
      // Quit and create transition if valid inputs
      if (this.monsterCodeInput.isInputValid() && this.spawnAmountInput.isInputValid() && this.rangeInput.isInputValid()) {
        this.spawner.monsterCode = this.monsterCodeInput.inputText;
        this.spawner.spawnAmount = this.spawnAmountInput.getNumValue();
        this.spawner.range = this.rangeInput.getNumValue();
        this.onFinished();
      }
    }

    this.updateTextInputs();
  }

  private updateTextInputs() {
    if (this.textInputIndex === 0) {
      this.monsterCodeInput.setFocus(true);
      this.spawnAmountInput.setFocus(false);
      this.rangeInput.setFocus(false);
    }
    else if (this.textInputIndex === 1) {
      this.monsterCodeInput.setFocus(false);
      this.spawnAmountInput.setFocus(true);
      this.rangeInput.setFocus(false);
    }
    else if (this.textInputIndex === 2) {
      this.monsterCodeInput.setFocus(false);
      this.spawnAmountInput.setFocus(false);
      this.rangeInput.setFocus(true);
    }
  }
}
