import 'phaser'

export default class TextInput extends Phaser.GameObjects.Text {
  static readonly TEXT_TYPE = /^[a-zA-Z0-9 ]$/;
  static readonly NUMBER_TYPE = /^[0-9-]$/;

  focused: boolean;
  onSubmit: Function;
  label: string;
  inputText: string;
  inputFilter: RegExp;
  maxLength: number;
  minValue: number;
  maxValue: number;

  constructor(scene: Phaser.Scene, x: number, y: number, label: string, style: Phaser.Types.GameObjects.Text.TextStyle) {
    super(scene, x, y, '', style);
    this.scene.add.existing(this);
    this.label = label;
    this.inputText = '';
    this.focused = false;
    this.inputFilter = TextInput.TEXT_TYPE;
    this.maxLength = Infinity;

    this.scene.input.keyboard.on('keydown', (event: KeyboardEvent) => this.handleInput(event));

    this.updateInputText("");
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

  public updateInputText(text: string) {
    this.inputText = text;
    this.setText(this.label + this.inputText);
  }

  public getNumValue() : number {
    return Number(this.inputText);
  }

  public isInputValid() {
    // Must not be empty
    if (this.inputText.length === 0)
      return false;

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

    this.setText(this.label + this.inputText);
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

      // Is valid number
      if (isNaN(NUM_VALUE) && textValue != '-') // Accept '-' to accept starting to type negative number
        return;

      // Set within value range
      if (NUM_VALUE < this.minValue)
        textValue = this.minValue.toString();
      else if (NUM_VALUE > this.maxValue)
        textValue = this.maxValue.toString();
    }

    // Set final input text value
    this.inputText = textValue;
  }
}
