import TitleScene from './titleScene.js';
import GameScene from './game.js';
import EndScene from './EndScene.js';
import VictoryScene from './VictoryScene.js';

var game_physics = {
    default: 'arcade',
    arcade: {
        gravity: { y: 0 }
    },
    matter: {       
        gravity: {
            y: 0.1
        },
        enableSleep: true,
        debug: false,
    },
};

var title_physics = {
    default: 'arcade',
    arcade: {
        gravity: { y: 0 }
    }, 
};

let titleScene = new TitleScene(title_physics); 
let gameScene = new GameScene(game_physics);
let endScene = new EndScene(title_physics);
let victoryScene = new VictoryScene(title_physics); 

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 1800,
    backgroundColor: '#000000',    
    scene: [titleScene, gameScene, endScene, victoryScene]
};

var game = new Phaser.Game(config);
