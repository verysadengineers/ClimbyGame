import TitleScene from './titleScene.js';
import GameScene from './game.js';
import EndScene from './EndScene.js';
import VictoryScene from './VictoryScene.js';

var game_physics = {
    physics: {
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
    },        
};

let titleScene = new TitleScene(); 
let gameScene = new GameScene(game_physics);
let endScene = new EndScene();
let victoryScene = new VictoryScene(); 

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 1800,
    backgroundColor: '#000000',
    physics: {
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
    },    
    scene:[titleScene, gameScene, endScene, victoryScene]
};
   // scene:[titleScene, gameScene, endScene, victoryScene]


var game = new Phaser.Game(config);