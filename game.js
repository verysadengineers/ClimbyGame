import * as Player from '/Player.js'
import * as Rope from '/rope.js'

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: {
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
        preload: preload,
        create: create,
        update: update
    }
};

var player_one_controller;
var player_two_controller;
var player_one;
var player_two;
//var mainCamera;

var rope;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    this.load.image('sky', 'assets/sky.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.image('tile', 'assets/tile.png');
    this.load.image('circle', 'assets/circle.png');
}

function create ()
{
    //mainCamera = this.cameras.main;
    this.add.image(400, 300, 'sky');

    rope = Rope.createRope(this);

    player_one = Player.createPlayerOne(this);
    player_two = Player.createPlayerTwo(this);

    Player.initAnimations(this);

    player_one_controller = Player.initPlayerOneController(this);
    player_two_controller = Player.initPlayerTwoController(this);
}

function update()
{
    //mainCamera.scrollY -= 0.5;
    Player.handlePlayerMovement(player_one_controller, player_two_controller, player_one, player_two);

    // attaching the first segment to the left side
    this.matter.add.worldConstraint(rope[0], 2, 0.9, {
        pointA: { x: player_two.x, y: player_two.y},
    });
      
    // attaching the last segment to the right side
    this.matter.add.worldConstraint(rope[rope.length - 1], 2, 0.9, {
        pointA: { x: player_one.x, y: player_one.y },
    });
}