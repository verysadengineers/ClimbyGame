// NOT USED
export function createPlayerOne(game)
{    
    let player_one = game.physics.add.sprite(500, 450, 'dude');

    return player_one;
}

export function createPlayerTwo(game)
{
    let player_two = game.physics.add.sprite(250, 450, 'dude');

    player_two.tint = Math.random() * 0xffffff;
    return player_two;
}

export function initAnimations(game) 
{
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
}

export function initPlayerOneController(game) 
{
    return game.input.keyboard.createCursorKeys();
}

export function initPlayerTwoController(game) 
{
    return game.input.keyboard.addKeys(
        {up:Phaser.Input.Keyboard.KeyCodes.W,
        down:Phaser.Input.Keyboard.KeyCodes.S,
        left:Phaser.Input.Keyboard.KeyCodes.A,
        right:Phaser.Input.Keyboard.KeyCodes.D});
}

export function handlePlayerMovement(player_one_controller, player_two_controller, player_one, player_two) 
{
    const rope_length = 50000;
    const player_velocity = 160;

    // Calculate whether the rope is at max length
    var player_distance = (player_two.y - player_one.y)*(player_two.y - player_one.y) +
        (player_two.x - player_one.x)*(player_two.x - player_one.x);
    var is_rope_max = ((player_distance + (player_velocity * player_velocity)) > rope_length);

    var velocity_x_one = 0;
    var velocity_y_one = 0;
    var velocity_x_two = 0;
    var velocity_y_two = 0;

    // Player 1 vertical movement
    if (player_one_controller.up.isDown)
    {
        velocity_y_one += -player_velocity;
        if (is_rope_max && (player_two.y > player_one.y)) 
        {
            velocity_y_two += -player_velocity;
            velocity_x_two += (player_one.x - player_two.x);
        }
    }
    else if (player_one_controller.down.isDown)
    {
        velocity_y_one += player_velocity;
        if (is_rope_max && (player_two.y < player_one.y)) 
        {
            velocity_y_two += player_velocity;
            velocity_x_two += (player_one.x - player_two.x);
        }
    }
    else
    {
        //reset sprite
    }

    // Player 1 horizontal movement
    if (player_one_controller.left.isDown)
    {
        velocity_x_one += -player_velocity;
        if (is_rope_max && (player_two.x > player_one.x)) 
        {
            velocity_x_two += -player_velocity;
            velocity_y_two += (player_one.y - player_two.y);
        }

        player_one.anims.play('left', true);
    }
    else if (player_one_controller.right.isDown)
    {
        velocity_x_one += player_velocity;
        if (is_rope_max && (player_two.x < player_one.x)) 
        {
            velocity_x_two += player_velocity;
            velocity_y_two += (player_one.y - player_two.y);
        }

        player_one.anims.play('right', true);
    }
    else
    {
        player_one.anims.play('turn');
    }

    // Player 2 vertical movement
    if (player_two_controller.up.isDown)
    {
        velocity_y_two += -player_velocity;

        if (is_rope_max && (player_two.y < player_one.y)) 
        {
            velocity_y_one += -player_velocity;
            velocity_x_one += (player_two.x - player_one.x);
        }
    }
    else if (player_two_controller.down.isDown)
    {
        velocity_y_two += player_velocity;

        if (is_rope_max && (player_two.y > player_one.y)) 
        {
            velocity_y_one += player_velocity;
            velocity_x_one += (player_two.x - player_one.x);
        }
    }
    else
    {
        //reset sprite
    }

    // Player 2 horizontal movement
    if (player_two_controller.left.isDown)
    {
        velocity_x_two += -player_velocity;
        if (is_rope_max && (player_two.x < player_one.x)) 
        {
            velocity_x_one += -player_velocity;
            velocity_y_one += (player_two.y - player_one.y);
        }

        player_two.anims.play('left', true);
    }
    else if (player_two_controller.right.isDown)
    {
        velocity_x_two += player_velocity;
        if (is_rope_max && (player_two.x > player_one.x)) 
        {
            velocity_x_one += player_velocity;
            velocity_y_one += (player_two.y - player_one.y);
        }

        player_two.anims.play('right', true);
    }
    else
    {
        player_two.anims.play('turn');
    }

    player_one.setVelocityX(velocity_x_one);
    player_one.setVelocityY(velocity_y_one);
    player_two.setVelocityX(velocity_x_two);
    player_two.setVelocityY(velocity_y_two);
}
