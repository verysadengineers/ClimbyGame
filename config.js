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
    width: 900,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene:[titleScene, gameScene, endScene, victoryScene]
    };

var game = new Phaser.Game(config);