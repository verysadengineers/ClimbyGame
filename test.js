//config.js 
import TitleScene from './titleScene.js';
// import EndScene from './EndScene.js';

let titleScene = new TitleScene; 
// let endScene = new EndScene;

var config = {
    type: Phaser.AUTO,
    width: 900,
    height: 600, 
    //include all states
    scene: [titleScene],
};

// Creates game object 
var game = new Phaser.Game(config);
game.scene.add("titleScene");
game.scene.start("titleScene");

