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
    this.load.spritesheet("spaceman", "spritesheet.png", {
        frameWidth: 512,
        frameHeight: 512
    })
    this.load.image("asteroid1", "/asteroids/Stones_15.png")
    this.load.image("asteroid2", "/asteroids/Stones2Filled_02.png")
    this.load.image("asteroid3", "/asteroids/Stones2Filled_17.png")
    this.load.image("batteries", "battery.png")
    window.cursors = this.input.keyboard.createCursorKeys();
}

function create() {
    this.add.image(1920 / 2, 1080 / 2, "background"); //load background centered
<<<<<<< HEAD

=======
    asteroids = this.physics.add.staticGroup();
    batteries = this.physics.add.staticGroup();
>>>>>>> ddebd4339f3ddf1821caaa6d5d78db5e25f129e5
    var xpos = [];
    var ypos = [];
    var i;
    var x;
    var y;
<<<<<<< HEAD
    asteroids = this.physics.add.staticGroup();
    this.physics.add.collider(asteroids, asteroids);
    asteroids.create(Math.floor(Math.random() * 1664) + 52, Math.floor(Math.random() * 978) + 52, 'asteroid1').setScale(1.5 + Math.random());
    asteroids.create(Math.floor(Math.random() * 1664) + 52, Math.floor(Math.random() * 978) + 52, 'asteroid2').setScale(1.5 + Math.random());
    asteroids.create(Math.floor(Math.random() * 1664) + 52, Math.floor(Math.random() * 978) + 52, 'asteroid3').setScale(1.5 + Math.random());
    asteroids.create(Math.floor(Math.random() * 1664) + 52, Math.floor(Math.random() * 978) + 52, 'asteroid2').setScale(1.5 + Math.random());
    asteroids.create(Math.floor(Math.random() * 1664) + 52, Math.floor(Math.random() * 978) + 52, 'asteroid3').setScale(1.5 + Math.random());
=======
    asteroids.create(Math.floor(Math.random() * 1818) + 52, Math.floor(Math.random() * 978) + 52, 'asteroid1');
    asteroids.create(Math.floor(Math.random() * 1818) + 52, Math.floor(Math.random() * 978) + 52, 'asteroid2');
    asteroids.create(Math.floor(Math.random() * 1818) + 52, Math.floor(Math.random() * 978) + 52, 'asteroid3');
    asteroids.create(Math.floor(Math.random() * 1818) + 52, Math.floor(Math.random() * 978) + 52, 'asteroid2');
    asteroids.create(Math.floor(Math.random() * 1818) + 52, Math.floor(Math.random() * 978) + 52, 'asteroid3');
    for (i = 0; i < 8; i++){
      batteries.create(Math.floor(Math.random() * 1818) + 52, Math.floor(Math.random() * 978) + 52, 'batteries');
    }

>>>>>>> ddebd4339f3ddf1821caaa6d5d78db5e25f129e5
    player = this.physics.add.sprite(1800, 1080 / 2, "spaceman"); //load astronot
    this.physics.add.collider(player, asteroids);
    player.setScale(0.3);
    player.setCollideWorldBounds(true);
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('spaceman', {
            start: 0,
            end: 0
        }),

    })
    this.anims.create({
        key: 'leftmoving',
        frames: this.anims.generateFrameNumbers('spaceman', {
            start: 1,
            end: 1
        }),
    })
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('spaceman', {
            start: 2,
            end: 2
        }),

    })
    this.anims.create({
        key: 'rightmoving',
        frames: this.anims.generateFrameNumbers('spaceman', {
            start: 3,
            end: 3
        }),

    })
}


function update() {
    if (window.cursors.left.isDown) {
        player.setVelocityX(-150);
        player.anims.play('leftmoving', true)
    } else if (window.cursors.right.isDown) {
        player.setVelocityX(150);
        player.anims.play('rightmoving', true)
    } else {
        if (player.body.velocity.x > 0) {
            player.setVelocityX(player.body.velocity.x - 3);
            player.anims.play('right', true)
        }
        if (player.body.velocity.x < 0) {
            player.setVelocityX(player.body.velocity.x + 3);
            player.anims.play('left', true)
        }

    }
    if (window.cursors.up.isDown) {
        player.setVelocityY(-150);
    } else if (window.cursors.down.isDown) {
        player.setVelocityY(150);
    } else {
        if (player.body.velocity.y > 0) {
            player.setVelocityY(player.body.velocity.y - 3);
        }
        if (player.body.velocity.y < 0) {
            player.setVelocityY(player.body.velocity.y + 3);
        }
    }
}
