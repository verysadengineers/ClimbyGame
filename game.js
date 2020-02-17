import * as Player from '/player.js'
import * as Map from '/map.js'
import * as Rope from '/rope.js'

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 1800,
    backgroundColor: '#000000',
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
var player_one_collide = false;
var player_two_collide = false;
//var mainCamera;

var rope;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.spritesheet('blue', 'assets/Blue.png', { frameWidth: 33, frameHeight: 48 });
    this.load.spritesheet('red', 'assets/Red.png', { frameWidth: 33, frameHeight: 48 });
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    this.load.image('sky', 'assets/sky.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('wall', 'assets/wall.png')
    this.load.image('path', 'assets/path.png')
    this.load.image('tile', 'assets/tile.png')
    //this.load.image('bomb', 'assets/bomb.png');
}

function create ()
{
    //mainCamera = this.cameras.main;
    this.add.image(400, 300, 'sky');


    let playerMap = Map.generateMap(this, 0);
    rope = Rope.createRope(this);

    player_one = Player.createPlayerOne(this);
    player_two = Player.createPlayerTwo(this);

    this.physics.add.collider(player_one, playerMap, null, function () {
        player_one_collide = true;

    });
    this.physics.add.collider(player_two, playerMap, null, function () {
        player_two_collide = true;
    });
    
    Player.initAnimations(this);

    player_one_controller = Player.initPlayerOneController(this);
    player_two_controller = Player.initPlayerTwoController(this);


}

function update()
{
    //mainCamera.scrollY -= 0.5;
    Player.handlePlayerMovement(player_one_controller, player_two_controller, player_one, player_two);
    if (player_one_collide == true && Player.isRopeMax()) {
        player_two.setVelocity(0);
        player_one_collide = false;
    }
    if (player_two_collide == true && Player.isRopeMax()) {
        player_one.setVelocity(0);
        player_two_collide = false;
    }

    // attaching the first segment to the left side
    this.matter.add.worldConstraint(rope[0], 2, 0.9, {
        pointA: { x: player_two.x, y: player_two.y},
    });
      
    // attaching the last segment to the right side
    this.matter.add.worldConstraint(rope[rope.length - 1], 2, 0.9, {
        pointA: { x: player_one.x, y: player_one.y },
    });
}
