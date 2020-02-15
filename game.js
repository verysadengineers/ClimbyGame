import * as Player from '/player.js'

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var player_one_controller;
var player_two_controller;
var player_one;
var player_two;
//var mainCamera;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    this.load.image('sky', 'assets/sky.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
}

function create ()
{
    //mainCamera = this.cameras.main;
    this.add.image(400, 300, 'sky');

    player_one = Player.createPlayerOne(this);
    player_two = Player.createPlayerTwo(this);

    Player.initAnimations(this);

    player_one_controller = Player.initPlayerOneController(this);
    player_two_controller = Player.initPlayerTwoController(this);
}

function update()
{
    //mainCamera += 0.5;
    Player.handlePlayerMovement(player_one_controller, player_two_controller, player_one, player_two);
}