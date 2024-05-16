export default class Spell
{
    private sprite: string;

    constructor()
    {
        this.sprite = 'attack';
    }

    getSprite(): string
    {
        return this.sprite;
    }
}