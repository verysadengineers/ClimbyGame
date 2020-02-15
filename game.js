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

var cursors;
var wasd;
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

    var particles = this.add.particles('bomb');

    var emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    var star = this.physics.add.image(400, 100, 'star');

    star.setVelocity(100, 200);
    star.setBounce(1, 1);
    star.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();
    wasd = this.input.keyboard.addKeys(
        {up:Phaser.Input.Keyboard.KeyCodes.W,
        down:Phaser.Input.Keyboard.KeyCodes.S,
        left:Phaser.Input.Keyboard.KeyCodes.A,
        right:Phaser.Input.Keyboard.KeyCodes.D});

    player_one = Player.createPlayerOne(this);
    player_two = Player.createPlayerTwo(this.physics);
    console.log("1: (" + player_one.x + "," + player_one.y + ") 2: (" + player_two.x + "," + player_two.y + ")");

    emitter.startFollow(star);
}

function update()
{
    //mainCamera += 0.5;
    if (player_one != null) {
        Player.handlePlayerMovement(cursors, wasd, player_one, player_two);
    }
}