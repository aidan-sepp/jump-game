input.onButtonPressed(Button.A, function () {
    sprite.move(-1)
    if (sprite.isTouching(ground) && sprite.get(LedSpriteProperty.Y) == 3) {
        sprite.set(LedSpriteProperty.Y, 2)
    } else if (sprite.isTouching(ground) && sprite.get(LedSpriteProperty.Y) == 4) {
        sprite.set(LedSpriteProperty.Y, 3)
    } else if (sprite.isTouching(ground2) && sprite.get(LedSpriteProperty.Y) == 4) {
        sprite.set(LedSpriteProperty.Y, 3)
    } else if (sprite.isTouching(ground2) && sprite.get(LedSpriteProperty.Y) == 3) {
        sprite.set(LedSpriteProperty.Y, 2)
    } else if (sprite.isTouching(ground3) && sprite.get(LedSpriteProperty.Y) == 4) {
        sprite.set(LedSpriteProperty.Y, 3)
    } else if (sprite.isTouching(ground3) && sprite.get(LedSpriteProperty.Y) == 3) {
        sprite.set(LedSpriteProperty.Y, 2)
    } else if (sprite.isTouching(ground4) && sprite.get(LedSpriteProperty.Y) == 4) {
        sprite.set(LedSpriteProperty.Y, 3)
    } else if (sprite.isTouching(ground4) && sprite.get(LedSpriteProperty.Y) == 3) {
        sprite.set(LedSpriteProperty.Y, 2)
    } else {
        sprite.change(LedSpriteProperty.Y, 1)
        if (sprite.isTouching(ground) && sprite.get(LedSpriteProperty.Y) == 3) {
            sprite.set(LedSpriteProperty.Y, 2)
        } else if (sprite.isTouching(ground) && sprite.get(LedSpriteProperty.Y) == 4) {
            sprite.set(LedSpriteProperty.Y, 3)
        } else if (sprite.isTouching(ground2) && sprite.get(LedSpriteProperty.Y) == 4) {
            sprite.set(LedSpriteProperty.Y, 3)
        } else if (sprite.isTouching(ground2) && sprite.get(LedSpriteProperty.Y) == 3) {
            sprite.set(LedSpriteProperty.Y, 2)
        } else if (sprite.isTouching(ground3) && sprite.get(LedSpriteProperty.Y) == 4) {
            sprite.set(LedSpriteProperty.Y, 3)
        } else if (sprite.isTouching(ground3) && sprite.get(LedSpriteProperty.Y) == 3) {
            sprite.set(LedSpriteProperty.Y, 2)
        } else if (sprite.isTouching(ground4) && sprite.get(LedSpriteProperty.Y) == 4) {
            sprite.set(LedSpriteProperty.Y, 3)
        } else if (sprite.isTouching(ground4) && sprite.get(LedSpriteProperty.Y) == 3) {
            sprite.set(LedSpriteProperty.Y, 2)
        } else {
        	
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    sprite.set(LedSpriteProperty.Y, jump - 1)
    basic.pause(500)
    sprite.set(LedSpriteProperty.Y, jump + 1)
    if (sprite.isTouching(ground) && sprite.get(LedSpriteProperty.Y) == 3) {
        sprite.set(LedSpriteProperty.Y, 2)
    } else if (sprite.isTouching(ground) && sprite.get(LedSpriteProperty.Y) == 4) {
        sprite.set(LedSpriteProperty.Y, 3)
    } else if (sprite.isTouching(ground2) && sprite.get(LedSpriteProperty.Y) == 4) {
        sprite.set(LedSpriteProperty.Y, 3)
    } else if (sprite.isTouching(ground2) && sprite.get(LedSpriteProperty.Y) == 3) {
        sprite.set(LedSpriteProperty.Y, 2)
    } else if (sprite.isTouching(ground3) && sprite.get(LedSpriteProperty.Y) == 4) {
        sprite.set(LedSpriteProperty.Y, 3)
    } else if (sprite.isTouching(ground3) && sprite.get(LedSpriteProperty.Y) == 3) {
        sprite.set(LedSpriteProperty.Y, 2)
    } else if (sprite.isTouching(ground4) && sprite.get(LedSpriteProperty.Y) == 4) {
        sprite.set(LedSpriteProperty.Y, 3)
    } else if (sprite.isTouching(ground4) && sprite.get(LedSpriteProperty.Y) == 3) {
        sprite.set(LedSpriteProperty.Y, 2)
    } else {
        sprite.change(LedSpriteProperty.Y, 1)
        if (sprite.isTouching(ground) && sprite.get(LedSpriteProperty.Y) == 3) {
            sprite.set(LedSpriteProperty.Y, 2)
        } else if (sprite.isTouching(ground) && sprite.get(LedSpriteProperty.Y) == 4) {
            sprite.set(LedSpriteProperty.Y, 3)
        } else if (sprite.isTouching(ground2) && sprite.get(LedSpriteProperty.Y) == 4) {
            sprite.set(LedSpriteProperty.Y, 3)
        } else if (sprite.isTouching(ground2) && sprite.get(LedSpriteProperty.Y) == 3) {
            sprite.set(LedSpriteProperty.Y, 2)
        } else if (sprite.isTouching(ground3) && sprite.get(LedSpriteProperty.Y) == 4) {
            sprite.set(LedSpriteProperty.Y, 3)
        } else if (sprite.isTouching(ground3) && sprite.get(LedSpriteProperty.Y) == 3) {
            sprite.set(LedSpriteProperty.Y, 2)
        } else if (sprite.isTouching(ground4) && sprite.get(LedSpriteProperty.Y) == 4) {
            sprite.set(LedSpriteProperty.Y, 3)
        } else if (sprite.isTouching(ground4) && sprite.get(LedSpriteProperty.Y) == 3) {
            sprite.set(LedSpriteProperty.Y, 2)
        } else {
        	
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (sprite.get(LedSpriteProperty.X) == 4) {
        sprite.delete()
        sprite = game.createSprite(0, 4)
        ground.set(LedSpriteProperty.Y, randint(4, 3))
        ground2.set(LedSpriteProperty.Y, randint(4, 3))
        ground3.set(LedSpriteProperty.Y, 4)
        ground4.set(LedSpriteProperty.Y, randint(4, 3))
        coin.delete()
        coin = game.createSprite(randint(4, 4), randint(1, 2))
        coin.set(LedSpriteProperty.X, randint(4, 4))
    }
    sprite.move(1)
    if (sprite.isTouching(ground) && sprite.get(LedSpriteProperty.Y) == 3) {
        sprite.set(LedSpriteProperty.Y, 2)
    } else if (sprite.isTouching(ground) && sprite.get(LedSpriteProperty.Y) == 4) {
        sprite.set(LedSpriteProperty.Y, 3)
    } else if (sprite.isTouching(ground2) && sprite.get(LedSpriteProperty.Y) == 4) {
        sprite.set(LedSpriteProperty.Y, 3)
    } else if (sprite.isTouching(ground2) && sprite.get(LedSpriteProperty.Y) == 3) {
        sprite.set(LedSpriteProperty.Y, 2)
    } else if (sprite.isTouching(ground3) && sprite.get(LedSpriteProperty.Y) == 4) {
        sprite.set(LedSpriteProperty.Y, 3)
    } else if (sprite.isTouching(ground3) && sprite.get(LedSpriteProperty.Y) == 3) {
        sprite.set(LedSpriteProperty.Y, 2)
    } else if (sprite.isTouching(ground4) && sprite.get(LedSpriteProperty.Y) == 4) {
        sprite.set(LedSpriteProperty.Y, 3)
    } else if (sprite.isTouching(ground4) && sprite.get(LedSpriteProperty.Y) == 3) {
        sprite.set(LedSpriteProperty.Y, 2)
    } else {
        sprite.change(LedSpriteProperty.Y, 1)
        if (sprite.isTouching(ground) && sprite.get(LedSpriteProperty.Y) == 3) {
            sprite.set(LedSpriteProperty.Y, 2)
        } else if (sprite.isTouching(ground) && sprite.get(LedSpriteProperty.Y) == 4) {
            sprite.set(LedSpriteProperty.Y, 3)
        } else if (sprite.isTouching(ground2) && sprite.get(LedSpriteProperty.Y) == 4) {
            sprite.set(LedSpriteProperty.Y, 3)
        } else if (sprite.isTouching(ground2) && sprite.get(LedSpriteProperty.Y) == 3) {
            sprite.set(LedSpriteProperty.Y, 2)
        } else if (sprite.isTouching(ground3) && sprite.get(LedSpriteProperty.Y) == 4) {
            sprite.set(LedSpriteProperty.Y, 3)
        } else if (sprite.isTouching(ground3) && sprite.get(LedSpriteProperty.Y) == 3) {
            sprite.set(LedSpriteProperty.Y, 2)
        } else if (sprite.isTouching(ground4) && sprite.get(LedSpriteProperty.Y) == 4) {
            sprite.set(LedSpriteProperty.Y, 3)
        } else if (sprite.isTouching(ground4) && sprite.get(LedSpriteProperty.Y) == 3) {
            sprite.set(LedSpriteProperty.Y, 2)
        } else {
        	
        }
    }
})
let jump = 0
let coin: game.LedSprite = null
let ground4: game.LedSprite = null
let ground3: game.LedSprite = null
let ground2: game.LedSprite = null
let ground: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(0, 4)
ground = game.createSprite(2, randint(4, 3))
ground2 = game.createSprite(4, randint(4, 3))
ground3 = game.createSprite(1, 4)
ground4 = game.createSprite(3, randint(4, 3))
coin = game.createSprite(2, 1)
basic.forever(function () {
    if (sprite.get(LedSpriteProperty.X) == jump + 2) {
        sprite.set(LedSpriteProperty.Y, 2)
    }
})
basic.forever(function () {
    jump = sprite.get(LedSpriteProperty.Y)
})
basic.forever(function () {
    if (sprite.isTouching(coin)) {
        game.addScore(1)
        coin.delete()
    }
})
basic.forever(function () {
    sprite.change(LedSpriteProperty.Blink, 1)
    basic.pause(100)
})
