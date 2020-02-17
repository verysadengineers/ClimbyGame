var is_rope_max = false;
export function isRopeMax() {
    return is_rope_max;
}

export function createPlayerOne(game)
{
    let player_one = game.physics.add.sprite(500, 550, 'red');

    return player_one;
}

export function createPlayerTwo(game)
{
    let player_two = game.physics.add.sprite(255, 550, 'blue');

    return player_two;
}

export function initAnimations(game)
{
    game.anims.create({
        key: 'blueMove',
        frames: game.anims.generateFrameNumbers('blue', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    game.anims.create({
        key: 'blueStill',
        frames: [ { key: 'blue', frame: 1 } ],
        frameRate: 20
    });

    game.anims.create({
        key: 'redMove',
        frames: game.anims.generateFrameNumbers('red', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    game.anims.create({
        key: 'redStill',
        frames: [ { key: 'red', frame: 1 } ],
        frameRate: 20
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

//TODO: set max speed
export function handlePlayerMovement(player_one_controller, player_two_controller, player_one, player_two)
{
    const rope_length = 150000;
    const player_velocity = 160;

    // Calculate whether the rope is at max length
    var player_distance = (player_two.y - player_one.y)*(player_two.y - player_one.y) +
        (player_two.x - player_one.x)*(player_two.x - player_one.x);
    is_rope_max = ((player_distance + (player_velocity/60 * player_velocity/60)) > rope_length);

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
        player_one.anims.play('redMove', true);

    }
    else if (player_one_controller.down.isDown)
    {
        velocity_y_one += player_velocity;
        if (is_rope_max && (player_two.y < player_one.y))
        {
            velocity_y_two += player_velocity;
            velocity_x_two += (player_one.x - player_two.x);
        }
        player_one.anims.play('redMove', true);
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

        player_one.anims.play('redMove', true);
    }
    else if (player_one_controller.right.isDown)
    {
        velocity_x_one += player_velocity;
        if (is_rope_max && (player_two.x < player_one.x))
        {
            velocity_x_two += player_velocity;
            velocity_y_two += (player_one.y - player_two.y);
        }

        player_one.anims.play('redMove', true);
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
        player_two.anims.play('blueMove', true);
    }
    else if (player_two_controller.down.isDown)
    {
        velocity_y_two += player_velocity;

        if (is_rope_max && (player_two.y > player_one.y))
        {
            velocity_y_one += player_velocity;
            velocity_x_one += (player_two.x - player_one.x);
        }
        player_two.anims.play('blueMove', true);
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

        player_two.anims.play('blueMove', true);
    }
    else if (player_two_controller.right.isDown)
    {
        velocity_x_two += player_velocity;
        if (is_rope_max && (player_two.x > player_one.x))
        {
            velocity_x_one += player_velocity;
            velocity_y_one += (player_two.y - player_one.y);
        }

        player_two.anims.play('blueMove', true);
    }

    if (velocity_x_one > player_velocity) {
        velocity_x_one = player_velocity
    }
    if (velocity_y_one > player_velocity) {
        velocity_y_one = player_velocity
    }
    if (velocity_x_two > player_velocity) {
        velocity_x_two = player_velocity
    }
    if (velocity_y_two > player_velocity) {
        velocity_y_two = player_velocity
    }

    var new_x_one = player_one.x + velocity_x_one/60;
    var new_y_one = player_one.y + velocity_y_one/60;
    var new_x_two = player_two.x + velocity_x_two/60;
    var new_y_two = player_two.y + velocity_y_two/60 ;

    var new_player_distance = (new_y_two - new_y_one)*(new_y_two - new_y_one) +
        (new_x_two - new_x_one)*(new_x_two - new_x_one);
    is_rope_max = ((new_player_distance) >= rope_length);

    if (velocity_x_one == 0 && velocity_y_one == 0) {
        player_one.anims.play("redStill", true);
    }
    if (velocity_x_two == 0 && velocity_y_two == 0) {
        player_two.anims.play("blueStill", true);
    }


    player_one.setVelocityX(velocity_x_one);
    player_one.setVelocityY(velocity_y_one);
    player_two.setVelocityX(velocity_x_two);
    player_two.setVelocityY(velocity_y_two);
}
