import TitleScene from './titleScene.js';
import EndScene from './EndScene.js';
import VictoryScene from './VictoryScene.js';

var bg_color; 
var bg; 
var clouds1;
let titleScene = new TitleScene; 
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
    scene:[titleScene, endScene, victoryScene]
    };

var game = new Phaser.Game(config);

function preload ()
{   
    this.load.image('bgColor', './assets/Title/bg_c.png');
    this.load.image('CCbg','./assets/Title/bg.png');
    this.load.spritesheet('clouds', './assets/Sprites/clouds100x100.png', {frameWidth: 100}, {frameHeight: 100});
}

function create ()
{
    //bg colour and graphic
    bg_color = this.add.sprite(0, 0, 'bgColor');
    bg = this.add.sprite(0, 230, 'CCbg');

    // cloud animation     
    clouds1 = this.physics.add.group({key: 'clouds',
    repeat: 4, 
    setXY: {x: 10, y:70, stepX: 300, stepY: 0}
    });

    this.anims.create({
      key: 'move',
      repeat: -1,
      frameRate: 1,
      frames: this.anims.generateFrameNumbers('clouds', {start: 1, end: 3})
    });

    clouds1.children.iterate(clouds1 => {
      clouds1.play('move')
    })

    bg.setOrigin(0, 0);
    bg_color.setOrigin(0,0);
    bg.width = this.gamewidth /2;
    
    bg.height = this.gameheight /2;

    //titleScene.preload(this);
    // titleScene.create(this);
    // victoryScene.create(this);
    // endScene.create(this);

    
    // game.scene.add("titleScene");
    // game.scene.start("titleScene");
}


