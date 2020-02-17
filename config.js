import TitleScene from './titleScene.js';
import gameScene from './game.js';
import EndScene from './EndScene.js';
import VictoryScene from './VictoryScene.js';

let titleScene = new TitleScene; 
let gameScene = new gameScene;
let endScene = new EndScene;
let victoryScene = new VictoryScene; 

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 1800,
    backgroundColor: '#000000',
    physics: {
        default: 'matter',
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
    scene:[titleScene, gameScene, endScene, victoryScene],
};

var game = new Phaser.Game(config);