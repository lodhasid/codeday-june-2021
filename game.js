var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
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
    this.load.image("astroid", "astroid.png")
}

function create() {}

function update() {}
