import * as Phaser from "Phaser";
import MyGame from "./MyGame";
import MainScene from "./MainScene";

function main()
{
    console.log(`Phaser Version: ${Phaser.VERSION}`);

    const config: Phaser.Types.Core.GameConfig = {
        title: "Using Phaser 3 with TypeScript, RequireJS library and AMD module system",
        width: 256, height: 256,
        type: Phaser.AUTO,
        scene: [ MainScene ]
    }
    
    const myGame = new MyGame(config);
}

// Run debug build (AMD module system, RequireJS)
main();

// Run release build (bundle.min.js, Browserify, UglifyJS)
// window.onload = () => main();
