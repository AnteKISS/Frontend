type Constructor<T = {}> = new (...args: any[]) => T;

function ActiveEntityMixin<TBase extends Constructor<Phaser.Physics.Arcade.Sprite>>(Base: TBase) {
    return class extends Base {
        isActive: boolean = true;

        activate() {
            this.isActive = true;
            console.log("Entity activated");
        }

        deactivate() {
            this.isActive = false;
            console.log("Entity deactivated");
        }
    };
}


export default class ActiveSpellSprite extends ActiveEntityMixin(Phaser.Physics.Arcade.Sprite) {
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        scene.physics.add.existing(this);
    }
}