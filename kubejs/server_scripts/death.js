PlayerEvents.tick(event => {
    const player = event.player
    if (player.mainHandItem.id === 'kubejs:molten_iron' || player.offHandItem.id === 'kubejs:molten_iron') {
        player.setSecondsOnFire(3)
    }
})
PlayerEvents.tick(event => {
    const player = event.player
    if (player.mainHandItem.id === 'kubejs:molten_plastic_pellets' || player.offHandItem.id === 'kubejs:molten_plastic_pellets') {
        player.setSecondsOnFire(4)
        }
})