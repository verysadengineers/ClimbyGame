import * as Player from '/player.js'

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        physics: {
            arcade: {
                gravity: { y: 0 }
            },
            matter: {
                gravity: {
                    y: 0.1
                }
            }
        },        
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
    this.matter.world.setBounds();

    var sides = 6;
    var size = 14;
    var distance = size * 4;
    var stiffness = 0.1;
    var lastPosition = new Phaser.Math.Vector2();
    var options = { friction: 0.005, frictionAir: 0, restitution: 1 };
    var pinOptions = { friction: 0, frictionAir: 0, restitution: 0, ignoreGravity: true, inertia: Infinity, isStatic: true };

    var current = null;
    var previous = null;

    this.input.on('pointerdown', function (pointer) {

        lastPosition.x = pointer.x;
        lastPosition.y = pointer.y;

        previous = this.matter.add.polygon(pointer.x, pointer.y, sides, size, pinOptions);

    }, this);

    this.input.on('pointermove', function (pointer) {

        if (pointer.isDown)
        {
            var x = pointer.x;
            var y = pointer.y;

            if (Phaser.Math.Distance.Between(x, y, lastPosition.x, lastPosition.y) > distance)
            {
                lastPosition.x = x;
                lastPosition.y = y;

                current = this.matter.add.polygon(pointer.x, pointer.y, sides, size, options);

                this.matter.add.constraint(previous, current, distance, stiffness);

                previous = current;
            }
        }

    }, this);

    this.input.on('pointerup', function (pointer) {

        previous.isStatic = true;
        previous.ignoreGravity = true;

    }, this);
    //mainCamera = this.cameras.main;
    /*this.add.image(400, 300, 'sky');

    player_one = Player.createPlayerOne(this);
    player_two = Player.createPlayerTwo(this);

    Player.initAnimations(this);

    player_one_controller = Player.initPlayerOneController(this);
    player_two_controller = Player.initPlayerTwoController(this);*/
}

function update()
{
    //mainCamera += 0.5;
    //Player.handlePlayerMovement(player_one_controller, player_two_controller, player_one, player_two);
}