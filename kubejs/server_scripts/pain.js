// A Devil's cry, or its quake!
// to do: to do is now in todo.txt in kubejs folder
// shaped recipes
ServerEvents.recipes(event => {
    event.shaped('kubejs:iron_sword_template', [
        '  P',
        'PP ',
        'IP '
    ], {
        P: '#forge:plates/iron',
        I: 'minecraft:iron_ingot'
})
    event.shaped('kubejs:iron_pickaxe_template', [
        'PPP',
        'PIP',
        ' I '
    ], {
        P: '#forge:plates/iron',
        I: 'minecraft:iron_ingot'
})
    event.shaped('kubejs:iron_axe_template', [
        'PP ',
        'PI ',
        ' I '
    ], {
        P: '#forge:plates/iron',
        I: 'minecraft:iron_ingot'
})
    event.shaped('kubejs:iron_shovel_template', [
        ' PP',
        '  P',
        '   '
    ], {
        P: '#forge:plates/iron'
})
    event.shaped('kubejs:iron_hoe_template', [
        ' PP',
        '   ',
        '   '
    ], {
        P: '#forge:plates/iron'
})
    event.shaped('kubejs:diamond_sword_template', [
        '  P',
        'PP ',
        'IP '
    ], {
        P: 'kubejs:diamond_hardened_iron_sheet',
        I: 'kubejs:diamond_hardened_iron_ingot'
})
    event.shaped('kubejs:diamond_pickaxe_template', [
        'PPP',
        'PIP',
        ' I '
    ], {
        P: 'kubejs:diamond_hardened_iron_sheet',
        I: 'kubejs:diamond_hardened_iron_ingot'
})
    event.shaped('kubejs:diamond_axe_template', [
        'PP ',
        'PI ',
        ' I '
    ], {
        P: 'kubejs:diamond_hardened_iron_sheet',
        I: 'kubejs:diamond_hardened_iron_ingot'
})
    event.shaped('kubejs:diamond_shovel_template', [
        ' PP',
        '  P',
        '   '
    ], {
        P: 'kubejs:diamond_hardened_iron_sheet'
})
    event.shaped('kubejs:diamond_hoe_template', [
        ' PP',
        '   ',
        '   '
    ], {
        P: 'kubejs:diamond_hardened_iron_sheet'
})
    event.shaped('kubejs:golden_sword_template', [
        '  P',
        'PP ',
        'IP '
    ], {
        P: '#forge:plates/gold',
        I: 'minecraft:gold_ingot'
})
    event.shaped('kubejs:golden_pickaxe_template', [
        'PPP',
        'PIP',
        ' I '
    ], {
        P: '#forge:plates/gold',
        I: 'minecraft:gold_ingot'

})
    event.shaped('kubejs:golden_axe_template', [
        'PP ',
        'PI ',
        ' I '
    ], {
        P: '#forge:plates/gold',
        I: 'minecraft:gold_ingot'
})
    event.shaped('kubejs:golden_shovel_template', [
        ' PP',
        '  P',
        '   '
    ], {
        P: '#forge:plates/gold'
})
    event.shaped('kubejs:golden_hoe_template', [
        ' PP',
        '   ',
        '   '
    ], {
        P: '#forge:plates/gold'
})
    event.remove({output: 'minecraft:diamond_boots'})
    event.shaped('minecraft:diamond_boots', [
        '   ',
        'P P',
        'P P'
    ], {
        P: 'kubejs:diamond_hardened_iron_sheet'
})
    event.remove({output: 'minecraft:diamond_leggings'})
    event.shaped('minecraft:diamond_leggings', [
        'PPP',
        'P P',
        'P P'
    ], {
        P: 'kubejs:diamond_hardened_iron_sheet'
})
    event.remove({output: 'minecraft:diamond_chestplate'})
    event.shaped('minecraft:diamond_chestplate', [
        'P P',
        'PPP',
        'PPP'
    ], {
        P: 'kubejs:diamond_hardened_iron_sheet'
})
    event.remove({output: 'minecraft:diamond_helmet'})
    event.shaped('minecraft:diamond_helmet', [
        'PPP',
        'P P',
        '   '
    ], {
        P: 'kubejs:diamond_hardened_iron_sheet'
})
    event.remove({output: 'minecraft:iron_boots'})
    event.shaped('minecraft:iron_boots', [
        '   ',
        'P P',
        'P P'
    ], {
        P: '#forge:plates/iron'
})
    event.remove({output: 'minecraft:iron_chestplate'})
    event.shaped('minecraft:iron_chestplate', [
        'P P',
        'PPP',
        'PPP'
    ], {
        P: '#forge:plates/iron'
})
    event.remove({output: 'minecraft:iron_helmet'})
    event.shaped('minecraft:iron_helmet', [
        'PPP',
        'P P',
        '   '
    ], {
        P: '#forge:plates/iron'
})
    event.remove({output: 'minecraft:iron_leggings'})
    event.shaped('minecraft:iron_leggings', [
        'PPP',
        'P P',
        'P P'
    ], {
        P: '#forge:plates/iron'
})
    event.remove({output: 'minecraft:golden_boots'})
    event.shaped('minecraft:golden_boots', [
        '   ',
        'P P',
        'P P'
    ], {
        P: '#forge:plates/gold'
})
    event.remove({output: 'minecraft:golden_leggings'})
    event.shaped('minecraft:golden_leggings', [
        'PPP',
        'P P',
        'P P'
    ], {
        P: '#forge:plates/gold'
})
    event.remove({output: 'minecraft:golden_chestplate'})
    event.shaped('minecraft:golden_chestplate', [
        'P P',
        'PPP',
        'PPP'
    ], {
        P: '#forge:plates/gold'
})
    event.remove({output: 'minecraft:golden_helmet'})
    event.shaped('minecraft:golden_helmet', [
        'PPP',
        'P P',
        '   '
    ], {
        P: '#forge:plates/gold'
})
    event.remove({output: 'minecraft:iron_hoe'})
    event.shaped('minecraft:iron_hoe', [
        '  P',
        'LS ',
        'SBV'
    ], {
        P: 'kubejs:iron_hoe_template',
        S: 'minecraft:stick',
        L: 'minecraft:leather',
        B: 'minecraft:string',
        V: Item.of('kubejs:sewing_needle').ignoreNBT()
    }).damageIngredient(8, 2).keepIngredient('kubejs:sewing_needle')
    event.shaped('minecraft:iron_hoe', [
        '  P',
        'BS ',
        'SLV'
    ], {
        P: 'kubejs:iron_hoe_template',
        S: 'minecraft:stick',
        L: 'minecraft:leather',
        B: 'minecraft:string',
        V: Item.of('kubejs:sewing_needle').ignoreNBT()
    }).damageIngredient(8, 2).keepIngredient('kubejs:sewing_needle')
    event.remove({output: 'minecraft:diamond_hoe'})
    event.shaped('minecraft:diamond_hoe', [
        '  P',
        'LS ',
        'SBV'
    ], {
        P: 'kubejs:diamond_hoe_template',
        S: 'minecraft:stick',
        L: 'kubejs:hardened_leather',
        B: 'kubejs:reinforced_string',
        V: Item.of('kubejs:sewing_needle').ignoreNBT()
    }).damageIngredient(8, 2).keepIngredient('kubejs:sewing_needle')
    event.shaped('minecraft:diamond_hoe', [
        '  P',
        'BS ',
        'SLV'
    ], {
        P: 'kubejs:diamond_hoe_template',
        S: 'minecraft:stick',
        L: 'kubejs:hardened_leather',
        B: 'kubejs:reinforced_string',
        V: Item.of('kubejs:sewing_needle').ignoreNBT()
    }).damageIngredient(8, 2).keepIngredient('kubejs:sewing_needle')
    event.remove({output: 'minecraft:golden_hoe'})
    event.shaped('minecraft:golden_hoe', [
        '  P',
        'BS ',
        'SLV'
    ], {
        P: 'kubejs:golden_hoe_template',
        S: 'minecraft:stick',
        L: 'minecraft:leather',
        B: 'minecraft:string',
        V: Item.of('kubejs:sewing_needle').ignoreNBT()
    }).damageIngredient(8, 2).keepIngredient('kubejs:sewing_needle')
    event.remove({output: 'minecraft:iron_shovel'})
    event.shaped('minecraft:iron_shovel', [
        '  P',
        'BS ',
        'SLV'
    ], {
        P: 'kubejs:iron_shovel_template',
        S: 'minecraft:stick',
        L: 'minecraft:leather',
        B: 'minecraft:string',
        V: Item.of('kubejs:sewing_needle').ignoreNBT()
    }).damageIngredient(8, 2).keepIngredient('kubejs:sewing_needle')
    event.remove({output: 'minecraft:golden_shovel'})
    event.shaped('minecraft:golden_shovel', [
        '  P',
        'BS ',
        'SLV'
    ], {
        P: 'kubejs:golden_shovel_template',
        S: 'minecraft:stick',
        L: 'minecraft:leather',
        B: 'minecraft:string',
        V: Item.of('kubejs:sewing_needle').ignoreNBT()
    }).damageIngredient(8, 2).keepIngredient('kubejs:sewing_needle')
    event.remove({output: 'minecraft:diamond_shovel'})
    event.shaped('minecraft:diamond_shovel', [
        '  P',
        'BS ',
        'SLV'
    ], {
        P: 'kubejs:diamond_shovel_template',
        S: 'minecraft:stick',
        L: 'minecraft:leather',
        B: 'minecraft:string',
        V: Item.of('kubejs:sewing_needle').ignoreNBT()
    }).damageIngredient(8, 2).keepIngredient('kubejs:sewing_needle')
    event.shaped('kubejs:golden_mattock_template', [
        'PPP',
        ' IP',
        ' I '
    ], {
        P: '#forge:plates/gold',
        I: 'minecraft:gold_ingot'
})
    event.shaped('kubejs:iron_mattock_template', [
        'PPP',
        ' PP',
        ' P '
    ], {
        P: '#forge:plates/iron'
})
    event.shaped('kubejs:sewing_needle', [
        '  P',
        ' P ',
        'P  '
    ], {
        P: 'minecraft:iron_ingot'
})
    event.shaped('kubejs:diamond_mattock_template', [
        'PPP',
        ' IP',
        ' I '
    ], {
        P: 'kubejs:diamond_hardened_iron_sheet',
        I: 'kubejs:diamond_hardened_iron_ingot'
})
    event.shaped('kubejs:diamond_hardened_iron_ingot', [
        'PPP',
        'PPP',
        'PPP'
    ], {
        P: 'kubejs:diamond_hardened_iron_nugget'
})
    event.shaped('kubejs:iron_hammer', [
        'PPP',
        'PPP',
        'HSR'
    ], {
        P: 'minecraft:iron_ingot',
        H: 'kubejs:hardened_leather',
        S: 'minecraft:stick',
        R: 'kubejs:reinforced_string'
})
    event.remove({output: 'minecraft:iron_block'})
    event.shaped('minecraft:iron_block', [
        'HPH',
        'PPP',
        'HPH'
    ], {
        P: 'minecraft:iron_ingot',
        H: '#forge:plates/iron'
})
    event.remove({output: 'minecraft:gold_block'})
    event.shaped('minecraft:gold_block', [
        'HPH',
        'PPP',
        'HPH'
    ], {
        P: 'minecraft:gold_ingot',
        H: '#forge:plates/gold'
})
    event.remove({output: 'minecraft:diamond_block'})
    event.shaped('minecraft:diamond_block', [
        'HPH',
        'PPP',
        'HPH'
    ], {
        P: 'kubejs:diamond_hardened_iron_ingot',
        H: 'kubejs:diamond_hardened_iron_sheet'
})
// shapeless and create stuff
event.shapeless('kubejs:reinforced_string', ['minecraft:string', 'minecraft:string', 'minecraft:leather', Item.of('kubejs:sewing_needle').ignoreNBT()]).damageIngredient('kubejs:sewing_needle', 2)
event.shapeless('kubejs:hardened_leather', ['minecraft:leather', 'minecraft:leather', 'minecraft:leather', Item.of('kubejs:sewing_needle').ignoreNBT()]).damageIngredient('kubejs:sewing_needle', 2)
event.remove({output: 'minecraft:iron_sword'})
event.shapeless('minecraft:iron_sword', ['minecraft:string', 'minecraft:leather', 'kubejs:iron_sword_template', Item.of('kubejs:sewing_needle').ignoreNBT()]).damageIngredient('kubejs:sewing_needle', 2)
event.remove({output: 'minecraft:iron_pickaxe'})
event.shapeless('minecraft:iron_pickaxe', ['minecraft:string', 'minecraft:leather', 'kubejs:iron_pickaxe_template', Item.of('kubejs:sewing_needle').ignoreNBT()]).damageIngredient('kubejs:sewing_needle', 2)
event.remove({output: 'minecraft:iron_axe'})
event.shapeless('minecraft:iron_axe', ['minecraft:string', 'minecraft:leather', 'kubejs:iron_axe_template', Item.of('kubejs:sewing_needle').ignoreNBT()]).damageIngredient('kubejs:sewing_needle', 2)
event.remove({output: 'minecraft:diamond_sword'})
event.shapeless('minecraft:diamond_sword', ['kubejs:reinforced_string', 'kubejs:hardened_leather', 'kubejs:diamond_sword_template', Item.of('kubejs:sewing_needle').ignoreNBT()]).damageIngredient('kubejs:sewing_needle', 2)
event.remove({output: 'minecraft:diamond_pickaxe'})
event.shapeless('minecraft:diamond_pickaxe', ['kubejs:hardened_leather', 'kubejs:reinforced_string', 'kubejs:diamond_pickaxe_template', Item.of('kubejs:sewing_needle').ignoreNBT()]).damageIngredient('kubejs:sewing_needle', 2)
event.remove({output: 'minecraft:diamond_axe'})
event.shapeless('minecraft:diamond_axe', ['kubejs:hardened_leather', 'kubejs:reinforced_string', 'kubejs:diamond_axe_template', Item.of('kubejs:sewing_needle').ignoreNBT()]).damageIngredient('kubejs:sewing_needle', 2)
event.remove({output: 'minecraft:golden_sword'})
event.shapeless('minecraft:golden_sword', ['minecraft:string', 'minecraft:leather', 'kubejs:golden_sword_template', Item.of('kubejs:sewing_needle').ignoreNBT()]).damageIngredient('kubejs:sewing_needle', 2)
event.remove({output: 'minecraft:golden_pickaxe'})
event.shapeless('minecraft:golden_pickaxe', ['minecraft:string', 'minecraft:leather', 'kubejs:golden_pickaxe_template', Item.of('kubejs:sewing_needle').ignoreNBT()]).damageIngredient('kubejs:sewing_needle', 2)
event.remove({output: 'minecraft:golden_axe'})
event.shapeless('minecraft:golden_axe', ['minecraft:string', 'minecraft:leather', 'kubejs:golden_axe_template', Item.of('kubejs:sewing_needle').ignoreNBT()]).damageIngredient('kubejs:sewing_needle', 2)
event.remove({output: 'notreepunching:gold_mattock'})
event.shapeless('notreepunching:gold_mattock', ['kubejs:reinforced_string', 'kubejs:reinforced_string', 'kubejs:hardened_leather', 'kubejs:golden_mattock_template', Item.of('kubejs:sewing_needle').ignoreNBT()]).damageIngredient('kubejs:sewing_needle', 2)
event.remove({output: 'notreepunching:iron_mattock'})
event.shapeless('notreepunching:iron_mattock', ['kubejs:reinforced_string', 'kubejs:reinforced_string', 'kubejs:hardened_leather', 'kubejs:iron_mattock_template', Item.of('kubejs:sewing_needle').ignoreNBT()]).damageIngredient('kubejs:sewing_needle', 2)
event.remove({output: 'notreepunching:diamond_mattock'})
event.shapeless('notreepunching:diamond_mattock', ['kubejs:reinforced_string', 'kubejs:reinforced_string', 'kubejs:hardened_leather', 'kubejs:hardened_leather', 'kubejs:diamond_mattock_template', Item.of('kubejs:sewing_needle').ignoreNBT()]).damageIngredient('kubejs:sewing_needle', 2)
event.shapeless('create:iron_sheet', ['minecraft:iron_ingot', 'kubejs:iron_hammer']).damageIngredient('kubejs:iron_hammer', 2)
event.blasting('kubejs:molten_iron', 'minecraft:iron_ingot', 0.4, 20010)
event.smelting('kubejs:molten_plastic_pellets', 'kubejs:plastic_pellets', 0.4, 20400)
event.recipes.create.milling('kubejs:diamond_dust', 'minecraft:diamond')
event.recipes.create.pressing('kubejs:diamond_hardened_iron_sheet', 'kubejs:diamond_hardened_iron_ingot').heated()
event.recipes.create.haunting('minecraft:iron_ingot', 'kubejs:molten_iron') //its having the CHILLS! badumtss
event.recipes.create.mixing('kubejs:diamond_hardened_iron_ingot', ['kubejs:molten_iron', 'kubejs:diamond_dust']).superheated()
event.recipes.create.compacting(Fluid.of('kubejs:liquid_naphtha', 1000), [Fluid.of('createdieselgenerators:crude_oil', 1000)]).superheated()
event.recipes.create.compacting(Fluid.of('kubejs:liquid_ethylene', 1000), [Fluid.of('kubejs:liquid_naphtha', 1000)]).superheated()
event.recipes.create.compacting('kubejs:plastic_pellets', [Fluid.of('kubejs:liquid_ethylene', 1000)]).superheated()
event.recipes.create.compacting('kubejs:molten_plastic_pellets', ['kubejs:plastic_pellets']).heated()
event.recipes.create.haunting('kubejs:plastic_pellets', 'kubejs:molten_plastic_pellets') //line 416 pun
})