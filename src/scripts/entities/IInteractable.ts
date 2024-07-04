interface IInteractable {
  interact(): void;
  isInteractable(): boolean;
  toggleHighlight(highlight: boolean): void;
  getInteractText(): string;
  setInteractText(text: string): void;
  getInteractRange(): number;
  setInteractRange(range: number): void;
  getInteractSound(): string;
  setInteractSound(sound: string): void;
}