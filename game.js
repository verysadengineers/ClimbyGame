class game extend Phaser.scene{

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', 'assets/sky.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
}

function create ()
{
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

    emitter.startFollow(star);
}
}