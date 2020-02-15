export function createPlayerOne(game)
{    
    let player_one = game.physics.add.sprite(100, 450, 'dude');

    game.anims.create({
        key: 'left',
        frames: game.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    game.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    game.anims.create({
        key: 'right',
        frames: game.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    return player_one;
}

export function createPlayerTwo(physics)
{
    let player_two = physics.add.sprite(500, 450, 'dude');

    player_two.tint = Math.random() * 0xffffff;
    return player_two;
}

export function handlePlayerMovement(cursors, wasd, player_one, player_two) {
    var rope_length = 50000;

    var diff = (player_two.y - player_one.y)*(player_two.y - player_one.y) + (player_two.x - player_one.x)*(player_two.x - player_one.x)
    var is_rope_max = ((diff + (160*160)) > rope_length);

    var velocity_x_one = 0;
    var velocity_y_one = 0;
    var velocity_x_two = 0;
    var velocity_y_two = 0;

    if (cursors.up.isDown)
    {
        velocity_y_one += -160;
        if (is_rope_max && (player_two.y > player_one.y)) {
            velocity_y_two += -160;
            velocity_x_two += (player_one.x - player_two.x)/4;
        }
    }
    else if (cursors.down.isDown)
    {
        velocity_y_one += 160;
        if (is_rope_max && (player_two.y < player_one.y)) {
            velocity_y_two += 160;
            velocity_x_two += (player_one.x - player_two.x)/4;
        }
    }
    else
    {
        //reset sprite
    }

    console.log(is_rope_max);
    
    if (cursors.left.isDown)
    {
        velocity_x_one += -160;
        if (is_rope_max && (player_two.x > player_one.x)) {
            velocity_x_two += -160;
            velocity_y_two += (player_one.y - player_two.y)/4;
        }

        player_one.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        velocity_x_one += 160;
        if (is_rope_max && (player_two.x < player_one.x)) {
            velocity_x_two += 160;
            velocity_y_two += (player_one.y - player_two.y);
        }

        player_one.anims.play('right', true);
    }
    else
    {
        player_one.anims.play('turn');
    }

    if (wasd.left.isDown)
    {
        velocity_x_two += -160;
        if (is_rope_max && (player_two.x < player_one.x)) {
            velocity_x_one += -160;
            velocity_y_one += (player_two.y - player_one.y);
        }

        player_two.anims.play('left', true);
    }
    else if (wasd.right.isDown)
    {
        velocity_x_two += 160;
        if (is_rope_max && (player_two.x > player_one.x)) {
            velocity_x_one += 160;
            velocity_y_one += (player_two.y - player_one.y);
        }

        player_two.anims.play('right', true);
    }
    else
    {
        player_two.anims.play('turn');
    }

    if (wasd.up.isDown)
    {
        velocity_y_two += -160;

        if (is_rope_max && (player_two.y < player_one.y)) {
            velocity_y_one += -160;
            velocity_x_one += (player_two.x - player_one.x);
        }
    }
    else if (wasd.down.isDown)
    {
        velocity_y_two += 160;

        if (is_rope_max && (player_two.y > player_one.y)) {
            velocity_y_one += 160;
            velocity_x_one += (player_two.x - player_one.x);
        }
    }
    else
    {
        //reset sprite
    }
    player_one.setVelocityX(velocity_x_one);
    player_one.setVelocityY(velocity_y_one);
    player_two.setVelocityX(velocity_x_two);
    player_two.setVelocityY(velocity_y_two);
}
