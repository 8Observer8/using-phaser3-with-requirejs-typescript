import * as Phaser from "Phaser";

export default class MainScene extends Phaser.Scene
{
    private _sprite: Phaser.GameObjects.Sprite;

    public constructor()
    {
        super({ key: "MainScene" });
    }

    protected preload(): void
    {
        this.load.image("logo", "./images/logo-download.png");
    }

    protected create(): void
    {
        this._sprite = this.add.sprite(128, 128, "logo");
    }

    public update(): void
    {
        this._sprite.angle += 1;
    }
}
