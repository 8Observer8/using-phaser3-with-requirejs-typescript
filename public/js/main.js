define(["require", "exports", "Phaser", "./MyGame", "./MainScene"], function (require, exports, Phaser, MyGame_1, MainScene_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function main() {
        console.log("Phaser Version: " + Phaser.VERSION);
        var config = {
            title: "Using Phaser 3 with TypeScript, RequireJS library and AMD module system",
            width: 256, height: 256,
            type: Phaser.AUTO,
            scene: [MainScene_1.default]
        };
        var myGame = new MyGame_1.default(config);
    }
    // Run debug build (AMD module system, RequireJS)
    main();
});
// Run release build (bundle.min.js, Browserify, UglifyJS)
// window.onload = () => main();
//# sourceMappingURL=main.js.map