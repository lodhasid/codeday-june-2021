var config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config);

function preload() {
    //no images yet. need to get actual imgs
    this.load.image("background", "backgroundfinal.JFIF")
    this.load.image("spaceman", "spacemanright.png")
    this.load.image("asteroid1", "//asteroids/Stones_15.png")
    this.load.image("asteroid2", "//asteroids/Stones2Filled_02.png")
    this.load.image("asteroid3", "//asteroids/Stones2Filled_17.png")
    window.cursors = this.input.keyboard.createCursorKeys();
}

function create() {
    this.add.image(1920 / 2, 1080 / 2, "background") //load background centered
    player = this.physics.add.sprite(1800, 1080 / 2, "spaceman") //load astronot
    player.setScale(0.3)
    asteroids = this.physics.add.staticGroup()
    //    asteroids.create(x, y, 'asteroid1')
    //    asteroids.create(x, y, 'asteroid2')
    //    asteroids.create(x, y, 'asteroid3')
    //    asteroids.create(x, y, 'asteroid2')
    //    asteroids.create(x, y, 'asteroid3')
}

function update() {
    if (window.cursors.left.isDown) {
        player.setVelocityX(-150)
    } else if (window.cursors.right.isDown) {
        player.setVelocityX(150)
    } else {
        if (player.body.velocity.x > 0) {
            player.setVelocityX(player.body.velocity.x - 3)
        }
        if (player.body.velocity.x < 0) {
            player.setVelocityX(player.body.velocity.x + 3)
        }

    }
    if (window.cursors.up.isDown) {
        player.setVelocityY(-150)
    } else if (window.cursors.down.isDown) {
        player.setVelocityY(150)
    } else {
        if (player.body.velocity.y > 0) {
            player.setVelocityY(player.body.velocity.y - 3)
        }
        if (player.body.velocity.y < 0) {
            player.setVelocityY(player.body.velocity.y + 3)
        }
    }
}
