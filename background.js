export function preload(game) {
    game.load.image('bgColor', './assets/Title/bg_c.png');
    game.load.image('CCbg','./assets/Title/bg.png');
    game.load.spritesheet('clouds', './assets/Sprites/clouds100x100.png', {frameWidth: 100}, {frameHeight: 100});
}

export function create(game) {

    //bg colour and graphic
    let bg_color = game.add.sprite(0, 0, 'bgColor');
    let bg = game.add.sprite(game.gamewidth, 270, 'CCbg');


    // cloud animation     
    let clouds = game.physics.add.group({
        key: 'clouds',
        repeat: 4, 
        setXY: {x: 10, y:80, stepX: 300, stepY: 0}
    });

    game.anims.create({
      key: 'move',
      repeat: -1,
      frameRate: 1,
      frames: game.anims.generateFrameNumbers('clouds', {start: 1, end: 3})
    });

    clouds.children.iterate(clouds => {
      clouds.play('move')
    })

    bg.setOrigin(0, 0);
    bg_color.setOrigin(0,0);
    
}