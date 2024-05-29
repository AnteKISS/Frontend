import { PlayerEntity } from "../entities/playerEntity";

export default class PlayerController
{
    private player: PlayerEntity;

    constructor(scene: Phaser.Scene, player: PlayerEntity)
    {
        this.player = player;
        this.initSpellBarInput();
        this.initPlayerMovementInput();
    }

    private initSpellBarInput(): void
    {
        const scene = this.player.scene;

        if (scene && scene.input && scene.input.keyboard)
        {
            const key1 = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
            key1.on('down', () => this.player.onSpellKeyDown('1'), this.player);
    
            const key2 = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
            key2.on('down', () => this.player.onSpellKeyDown('2'), this.player);
    
            const key3 = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);
            key3.on('down', () => this.player.onSpellKeyDown('3'), this.player);

            const keyQ = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
            keyQ.on('down', () => this.player.onSpellKeyDown('Q'), this.player);

            const keyW = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
            keyW.on('down', () => this.player.onSpellKeyDown('W'), this.player);

            const keyE = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
            keyE.on('down', () => this.player.onSpellKeyDown('E'), this.player);

            const keyR = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
            keyR.on('down', () => this.player.onSpellKeyDown('R'), this.player);

            const keyT = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
            keyT.on('down', () => this.player.onSpellKeyDown('T'), this.player);
        } 
        else 
        {
            console.error("Player or scene not initialized");
        }
    }

    private initPlayerMovementInput(): void
    {
        const scene = this.player.scene;

        scene.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => this.player.onPointerDown(pointer));
        scene.input.on('pointerup', (pointer: Phaser.Input.Pointer) => this.player.onPointerUp(pointer));
        scene.input.on('pointermove', (pointer: Phaser.Input.Pointer) => this.player.onPointerMove(pointer));
    }
}   
