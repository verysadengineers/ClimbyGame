//config.js 
import TitleScene from './titleScene.js';
import EndScene from './EndScene.js';
import VictoryScene from './VictoryScene.js';


let titleScene = new TitleScene; 
let endScene = new EndScene;
let victoryScene = new VictoryScene; 

var config = {
    type: Phaser.AUTO,
    width: 900,
    height: 600, 
    backgroundColor: 0xFFFFFF,
    scene: [titleScene, endScene, victoryScene],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    }
};

function preload(){
    this.load.image('bgColor', './assets/Title/bg_c.png');
    this.load.image('CCbg','./assets/Title/bg.png');
    this.load.image('logo', './assets/Title/logo_o.png');
}

function create(){
    var bg_color = this.add.sprite(0, 0, 'bgColor');
    var bg = this.add.sprite(0, 230, 'CCbg');
    var logo = this.add.sprite(width/6, 140, 'logo');

    logo.setOrigin(0,0);
    bg.setOrigin(0, 0);
    bg_color.setOrigin(0,0);
    bg.width = width/2; 
    bg.height = height/2;
}

// Creates game object 
var game = new Phaser.Game(config);
game.scene.add("titleScene");
game.scene.start("titleScene");

//Gradient bg
// var myBitmap = game.add.bitmapData(100, 100);
// myBitmap.beginLinearGradientFill(["#000", "#FFF"], [0, 1], 0, 20, 0, 120);
// myBitmap.rect(20, 20, 120, 120);
// myBitmap.fill();game.add.sprite(50, 50, myBitmap);

