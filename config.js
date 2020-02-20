import TitleScene from './titleScene.js';
import GameScene from './game.js';
import EndScene from './endScene.js';
import VictoryScene from './victoryScene.js';

let titleScene = new TitleScene(); 
let gameScene = new GameScene();
let endScene = new EndScene();
let victoryScene = new VictoryScene(); 

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 1800,
    backgroundColor: '#000000',    
    scene: {
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
        }
    }
};

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

var game = new Phaser.Game(config);
game.scene.add("titleScene", titleScene);
game.scene.add("gameScene", gameScene, false, game_physics);
game.scene.add("victoryScene", victoryScene);
game.scene.add("endScene", endScene);