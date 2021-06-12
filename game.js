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
<<<<<<< HEAD
    this.load.image("spaceman", "spacemanright.png")
<<<<<<< HEAD
    this.load.image("asteroid1", "/asteroids/Stones_15.png")
    this.load.image("asteroid2", "/asteroids/Stones2Filled_02.png")
    this.load.image("asteroid3", "/asteroids/Stones2Filled_17.png")
=======
    this.load.image("asteroid1", "//asteroids/Stones_15.png")
    this.load.image("asteroid2", "//asteroids/Stones2Filled_02.png")
    this.load.image("asteroid3", "//asteroids/Stones2Filled_17.png")
=======
    this.load.spritesheet("spaceman", "spritesheet.png", {
        frameWidth: 512,
        frameHeight: 512
    })
    this.load.image("asteroid1", "/asteroids/Stones_15.png")
    this.load.image("asteroid2", "/asteroids/Stones2Filled_02.png")
    this.load.image("asteroid3", "/asteroids/Stones2Filled_17.png")
>>>>>>> e7375ccdf3bff54a18aa50eebfa1ce2603191a73
>>>>>>> 5f0a50807cdffa6c142e98aa0803501d8cebd335
    window.cursors = this.input.keyboard.createCursorKeys();
}

function create() {
    this.add.image(1920 / 2, 1080 / 2, "background"); //load background centered
<<<<<<< HEAD
    asteroids = this.physics.add.staticGroup();
    var xpos = [];
    var ypos = [];
    var i;
    var x;
    var y;
    // for (z = 0; z < 5; z++) {
    //   window.done = false;
    //   x = Math.floor(Math.random() * 1818) + 52;
    //   y = Math.floor(Math.random() * 978) + 52;
    //   if (x > 1868) {
    //     x -= 1;
    //   }
    //   if (y > 1028) {
    //     y -= 1;
    //   }
    //   while (window.done == false) {
    //     xpos.forEach(function(item, i)  {
    //       if (item - 105 < x < item + 105) {
    //         if (ypos[ind] - 105 < y < ypos[ind] + 105) {
    //           x = Math.floor(Math.random() * 1818) + 52;
    //           y = Math.floor(Math.random() * 978) + 52;
    //         } else {
    //           window.done = true;
    //         }
    //       } else {
    //         window.done = true;
    //       }
    //     });
    //   }
    // }
    asteroids.create(Math.floor(Math.random() * 1818) + 52, Math.floor(Math.random() * 978) + 52, 'asteroid1');
    asteroids.create(Math.floor(Math.random() * 1818) + 52, Math.floor(Math.random() * 978) + 52, 'asteroid2');
    asteroids.create(Math.floor(Math.random() * 1818) + 52, Math.floor(Math.random() * 978) + 52, 'asteroid3');
    asteroids.create(Math.floor(Math.random() * 1818) + 52, Math.floor(Math.random() * 978) + 52, 'asteroid2');
    asteroids.create(Math.floor(Math.random() * 1818) + 52, Math.floor(Math.random() * 978) + 52, 'asteroid3');
    player = this.physics.add.sprite(1800, 1080 / 2, "spaceman"); //load astronot
    this.physics.add.collider(player, asteroids);
    player.setScale(0.3);
=======
<<<<<<< HEAD
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
    //    player = this.physics.add.sprite(1800, 1080 / 2, "spaceman"); //load astronot
    asteroids = this.physics.add.staticGroup();
    //    var xpos = [];
    //    var ypos = [];
    //    for (i = 0; i < 5; i++) {
    //        var done = false;
    //        x = Math.floor(Math.random() * 951) + 65;
    //        y = Math.floor(Math.random * 1791) + 65;
    //        while (done == false) {
    //            xpos.forEach((item, i) => {
    //                if (item - 70 > x > item + 70) {
    //                    if (ypos[i] - 70 > y > ypos[i] + 70) {
    //                        x = Math.floor(Math.random() * 951) + 65;
    //                        y = Math.floor(Math.random * 1791) + 65;
    //
    //                    } else {
    //                        done = true;
    //                    }
    //                } else {
    //                    done = true;
    //                }
    //            });
    //        }
    //
    //        xpos.push(x);
    //        ypos.push(y);
    //    }
    //    asteroids.create(xpos[0], ypos[0], 'asteroid1');
    //    asteroids.create(xpos[1], ypos[1], 'asteroid2');
    //    asteroids.create(xpos[2], ypos[2], 'asteroid3');
    //    asteroids.create(xpos[3], ypos[3], 'asteroid2');
    //    asteroids.create(xpos[4], ypos[4], 'asteroid3');
>>>>>>> e7375ccdf3bff54a18aa50eebfa1ce2603191a73
    player = this.physics.add.sprite(1800, 1080 / 2, "spaceman") //load astronot
    player.setScale(0.3)
>>>>>>> 5f0a50807cdffa6c142e98aa0803501d8cebd335
    player.setCollideWorldBounds(true);
    this.anims.create({
        key: 'left',
<<<<<<< HEAD
    })
=======
        frames: this.anims.generateFrameNumbers('spaceman', {
            start: 0,
            end: 0
        })
    })
    this.anims.create({
        key: 'leftmoving',
        frames: this.anims.generateFrameNumbers('spaceman', {
            start: 1,
            end: 1
        })
    })
<<<<<<< HEAD
  }

=======
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('spaceman', {
            start: 2,
            end: 2
        })
    })
    this.anims.create({
        key: 'rightmoving',
        frames: this.anims.generateFrameNumbers('spaceman', {
            start: 3,
            end: 3
        })
    })


>>>>>>> e7375ccdf3bff54a18aa50eebfa1ce2603191a73
    asteroids = this.physics.add.staticGroup()
    //    asteroids.create(x, y, 'asteroid1')
    //    asteroids.create(x, y, 'asteroid2')
    //    asteroids.create(x, y, 'asteroid3')
    //    asteroids.create(x, y, 'asteroid2')
    //    asteroids.create(x, y, 'asteroid3')
}
>>>>>>> 5f0a50807cdffa6c142e98aa0803501d8cebd335

function update() {
    if (window.cursors.left.isDown) {
        player.setVelocityX(-150);
<<<<<<< HEAD
    } else if (window.cursors.right.isDown) {
        player.setVelocityX(150);
    } else {
        if (player.body.velocity.x > 0) {
            player.setVelocityX(player.body.velocity.x - 3);
        }
        if (player.body.velocity.x < 0) {
            player.setVelocityX(player.body.velocity.x + 3);
=======
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
>>>>>>> e7375ccdf3bff54a18aa50eebfa1ce2603191a73
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
