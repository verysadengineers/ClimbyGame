export function createPlayerOne(physics) {
    console.log("created");
    
    return physics.add.sprite(100, 450, 'dude');
}

export function createPlayerTwo(physics) {
    let player_two = physics.add.sprite(500, 450, 'dude');

    player_two.tint = Math.random() * 0xffffff;
    return player_two
}