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
<<<<<<< HEAD
    this.load.image("background", "background.png");
    this.load.image("spaceman", "spaceman.png");
    this.load.image("asteroid1", "//asteroids/Stones_15.png");
    this.load.image("asteroid2", "//asteroids/Stones2Filled_02.png");
    this.load.image("asteroid3", "//asteroids/Stones2Filled_17.png");
=======
    this.load.image("background", "backgroundfinal.JFIF")
    this.load.image("spaceman", "spacemanright.png")
    this.load.image("asteroid1", "//asteroids/Stones_15.png")
    this.load.image("asteroid2", "//asteroids/Stones2Filled_02.png")
    this.load.image("asteroid3", "//asteroids/Stones2Filled_17.png")
>>>>>>> 2bd34924aeaf1ba05eaf59ca7732ca9699ab9a23
    window.cursors = this.input.keyboard.createCursorKeys();
}

function create() {
<<<<<<< HEAD
    this.add.image(1920 / 2, 1080 / 2, "background"); //load background centered
    player = this.physics.add.sprite(1800, 1080 / 2, "spaceman"); //load astronot
    asteroids = this.physics.add.staticGroup();
    var xpos = [];
    var ypos = [];
    for (i=0; i<5; i++) {
      var done = false;
      x = Math.floor(Math.random() * 951) + 65;
      y = Math.floor(Math.random * 1791) + 65;
      while (done == false) {
        xpos.forEach((item, i) => {
          if (item-70>x>item+70) {
            if (ypos[i]-70>y>ypos[i]+70) {
              x = Math.floor(Math.random() * 951) + 65;
              y = Math.floor(Math.random * 1791) + 65;

            } else {
              done = true;
            }
          } else {
            done = true;
          }
        }
      );
    }

      xpos.push(x);
      ypos.push(y);
    }
    asteroids.create(xpos[0], ypos[0], 'asteroid1');
    asteroids.create(xpos[1], ypos[1], 'asteroid2');
    asteroids.create(xpos[2], ypos[2], 'asteroid3');
    asteroids.create(xpos[3], ypos[3], 'asteroid2');
    asteroids.create(xpos[4], ypos[4], 'asteroid3');
=======
    this.add.image(1920 / 2, 1080 / 2, "background") //load background centered
>>>>>>> 2bd34924aeaf1ba05eaf59ca7732ca9699ab9a23
    player = this.physics.add.sprite(1800, 1080 / 2, "spaceman") //load astronot
    player.setScale(0.3)
    player.setCollideWorldBounds(true);
    this.anims.create({
        key: 'left',
    })
    asteroids = this.physics.add.staticGroup()
    //    asteroids.create(x, y, 'asteroid1')
    //    asteroids.create(x, y, 'asteroid2')
    //    asteroids.create(x, y, 'asteroid3')
    //    asteroids.create(x, y, 'asteroid2')
    //    asteroids.create(x, y, 'asteroid3')
}

function update() {
    if (window.cursors.left.isDown) {
        player.setVelocityX(-150);
    } else if (window.cursors.right.isDown) {
        player.setVelocityX(150);
    } else {
        if (player.body.velocity.x > 0) {
            player.setVelocityX(player.body.velocity.x - 3);
        }
        if (player.body.velocity.x < 0) {
            player.setVelocityX(player.body.velocity.x + 3);
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
