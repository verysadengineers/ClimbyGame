export function createRope(game) {
    let group = game.matter.world.nextGroup(true)

    // creates a new segment
    var newSegment = (x, y) => {
        return game.matter.add
        .image(x, y, 'tile')
        .setScale(0.15, 0.2)
        .setBody(
            { type: 'rectangle' },
            { collisionFilter: { group: group }, chamfer: 5, density: 0.005, frictionAir: 0.05 }
        )
    }
  
    let segmentPosition = []
    let BRIDGE_LENGTH = 35
  
    // calculate the positions of segments
    for (let i = 0; i < BRIDGE_LENGTH; i++) segmentPosition.push({ x: 150 + i * 50, y: 250 })
  
    // make all the wood planks
    let ropeSegment = segmentPosition.map(pos => newSegment(pos.x, pos.y))
  
    // attaching each segment to the next one
    for (let i = 0; i < ropeSegment.length - 1; i++) {
        game.matter.add.constraint(ropeSegment[i], ropeSegment[i + 1], 1, 1, {
            pointA: { x: 2, y: 0 },
            pointB: { x: -2, y: 0 }
        })
    }

    return ropeSegment;
}