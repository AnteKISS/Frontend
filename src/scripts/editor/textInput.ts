import 'phaser'

export default class TextInput extends Phaser.GameObjects.Container {
  static readonly TEXT_TYPE = /^[a-zA-Z0-9 ]$/;
  static readonly NUMBER_TYPE = /^[0-9-]$/;

  // Phaser objects
  text: Phaser.GameObjects.Text;
  background: Phaser.GameObjects.Rectangle;

  // Text input properties
  focused: boolean;
  minValue: number;
  maxValue: number;
  maxLength: number;
  inputFilter: RegExp;

  // Style properties
  padding: number;
  width: number;

  // Text input data
  label: string;
  inputText: string;

  // Event handling
  onSubmit: Function;

  constructor(scene: Phaser.Scene, x: number, y: number, width: number, label: string, style: Phaser.Types.GameObjects.Text.TextStyle) {
    super(scene, x, y);

    this.padding = 20;
    this.width = width;
    this.text = scene.add.text(this.padding, this.padding, label, style);
    this.background = scene.add.rectangle(0, 0, width, this.text.height + this.padding * 2, 0xFFFFFF);
    this.background.setOrigin(0, 0);
    this.add([this.background, this.text]);

    this.focused = false;
    this.minValue = -Infinity;
    this.maxValue = Infinity;
    this.maxLength = Infinity;
    this.inputFilter = TextInput.TEXT_TYPE;

    this.label = label;
    this.inputText = '';

    if (this.scene.input.keyboard)
      this.scene.input.keyboard.on('keydown', (event: KeyboardEvent) => this.handleInput(event));

    this.updateInputText("");
    this.scene.add.existing(this);
  }

  public setInputFilter(filter: RegExp) {
    this.inputFilter = filter;
  }

  public setMaxLength(length: number) {
    this.maxLength = length;
  }

  public setValueRange(min: number, max: number) {
    this.minValue = min;
    this.maxValue = max;
  }

  public setOrigin(x: number, y: number) {
    this.text.setOrigin(x, y);
    this.background.setOrigin(x, y);
  }

  public updateInputText(text: string) {
    this.inputText = text;
    this.text.setText(this.label + this.inputText);
  }

  public setBackgroundVisibility(visible: boolean) {
    this.background.setVisible(visible);
  }

  public setPadding(padding: number) {
    this.padding = padding;
    this.text.setPosition(this.padding, this.padding);
    this.background.setSize(this.width, this.text.height + this.padding * 2);
  }

  public setFocus(focus: boolean) {
    this.focused = focus;
    if (this.focused)
      this.background.setFillStyle(0xDDDDDD);
    else
      this.background.setFillStyle(0xFFFFFF);
  }

  public getNumValue(): number {
    return Number(this.inputText);
  }

  public isInputValid() {
    // Must not be empty
    if (this.inputText.length === 0)
      return false;

    if (this.inputFilter === TextInput.TEXT_TYPE) {
      // Isn't empty
      if (this.inputText.length === 0)
        return false;
    }
    if (this.inputFilter === TextInput.NUMBER_TYPE) {
      const NUM_VALUE = Number(this.inputText);

      // Is number
      if (isNaN(NUM_VALUE))
        return false;
    }

    return true;
  }

  private handleInput(event: KeyboardEvent) {
    if (this.focused !== true) return;

    if (event.key === 'Backspace')
      // Erase character
      this.inputText = this.inputText.slice(0, -1);
    else if (event.key === 'Enter') {
      // Submit input
      if (this.onSubmit !== undefined)
        this.onSubmit();
    }
    else
      this.addCharToInput(event.key);

    this.text.setText(this.label + this.inputText);
  }

  private addCharToInput(key: string) {
    // Is valid character
    if (!this.inputFilter.test(key))
      return;

    // Doesn't exceed max char limit
    if (this.inputText.length >= this.maxLength)
      return;

    let textValue = this.inputText + key;

    // Number type checks
    if (this.inputFilter === TextInput.NUMBER_TYPE) {
      const NUM_VALUE = Number(textValue);

      // Handle typing '-'
      if (textValue === '-' || textValue === '0-') {
        this.inputText = '-';
        return;
      }

      // Is valid number
      if (isNaN(NUM_VALUE))
        return;

      // Set within value range
      if (NUM_VALUE < this.minValue)
        textValue = this.minValue.toString();
      else if (NUM_VALUE > this.maxValue)
        textValue = this.maxValue.toString();
      else
        textValue = String(NUM_VALUE); // Remove leading zeros
    }

    // Set final input text value
    this.inputText = textValue;
  }
}
