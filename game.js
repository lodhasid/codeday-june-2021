var config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scale: {
        mode: Phaser.Scale.FILL,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config);
var cursor = this.input.keyboard.createCursorKeys();

function preload() {
    //no images yet. need to get actual imgs
    this.load.image("background", "background.png")
    this.load.image("spaceman", "spaceman.png")
    this.load.image("asteroid", "asteroid.png")
}

function create() {
    this.add.image(1920 / 2, 1080 / 2, "background") //load background centered
}

function update() {

}
