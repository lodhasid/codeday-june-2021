var config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scale: {
        mode: Phaser.Scale.FILL,
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
    this.load.image("background", "background.png")
    this.load.image("spaceman", "spaceman.png")
    this.load.image("asteroid", "asteroid.png")
    window.cursors = this.input.keyboard.createCursorKeys();
}

function create() {
    this.add.image(1920 / 2, 1080 / 2, "background") //load background centered
    player = this.physics.add.sprite(1800, 1080 / 2, "spaceman") //load astronot 
}

function update() {
    if (window.cursors.left.isDown) {
        player.setVelocityX(-150)
    } else if (window.cursors.right.isDown) {
        player.setVelocityX(150)
    }
    if (window.cursors.up.isDown) {
        player.setVelocityY(-150)
    } else if (window.cursors.down.isDown) {
        player.setVelocityY(150)
    }
