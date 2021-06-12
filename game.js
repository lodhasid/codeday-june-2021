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
    },
    parent: "flashlightHolder"
}

var energy_remaining = 11; // + 5 * energy_remaining
var captured_objective = false
var death = false;
setInterval(sleep, 1000);
//energy_remaining won't be hardset and will change
//define variable for "flashlightPower" or whatever
var game = new Phaser.Game(config);

function preload() {
    //no images yet. need to get actual imgs
    this.load.image("background", "backgroundfinal.JFIF")
    this.load.image("deathscreen", "deathscreen.png")
    this.load.image("winscreen", "winscreen.png")
    this.load.spritesheet("spaceman", "spritesheet.png", {
        frameWidth: 512,
        frameHeight: 512
    })
    this.load.image("objective", "objective.png")
    this.load.image("asteroid1", "/asteroids/Stones_15.png")
    this.load.image("asteroid2", "/asteroids/Stones2Filled_02.png")
    this.load.image("asteroid3", "/asteroids/Stones2Filled_17.png")
    this.load.image("batteries", "battery.png")
    window.cursors = this.input.keyboard.createCursorKeys();
}

function create() {
    this.add.image(1920 / 2, 1080 / 2, "background"); //load background centered
    asteroids = this.physics.add.staticGroup();
    batteries = this.physics.add.staticGroup();
    var xpos = [];
    var ypos = [];
    var i;
    for (i = 0; i < 8; i++) {
        batteries.create(Math.floor(Math.random() * 1818) + 52, Math.floor(Math.random() * 978) + 52, 'batteries');
    }
    objective = this.physics.add.sprite(Math.random() * 500, Math.random() * 1080, 'objective');
    objective.setCollideWorldBounds(true);
    objective.setBounce(1)
    objective.setVelocityX(-60)
    objective.setVelocityY(-60)
    player = this.physics.add.sprite(1800, 1080 / 2, "spaceman"); //load astronot
    player.setScale(0.3);
    player.setCollideWorldBounds(true);
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('spaceman', {
            start: 0,
            end: 0
        }),

    });
    this.anims.create({
        key: 'leftmoving',
        frames: this.anims.generateFrameNumbers('spaceman', {
            start: 1,
            end: 1
        }),
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('spaceman', {
            start: 2,
            end: 2
        }),
      });
      this.anims.create({
          key: 'rightmoving',
          frames: this.anims.generateFrameNumbers('spaceman', {
              start: 3,
              end: 3
          }),
      });
    var notdone;
    for (i = 0; i < 10; i++) {
      rock = asteroids.create(Math.floor(Math.random() * 1818) + 52, Math.floor(Math.random() * 800) + 52, 'asteroid1').setScale(1.5 + Math.random()/2).refreshBody();
      while (rock.body.onOverlap) {
          rock.body.destroy()
          rock = asteroids.create(Math.floor(Math.random() * 1818) + 52, Math.floor(Math.random() * 800) + 52, 'asteroid1').setScale(1.5 + Math.random()/2).refreshBody();
      }
    }
    this.physics.add.overlap(player, asteroids, touching_rocks, null, this);
    this.physics.add.collider(asteroids, batteries)
    player.setScale(0.3);
    this.physics.add.overlap(player, batteries, energy, null, this);
    player.setCollideWorldBounds(true);
    this.physics.add.collider(asteroids, objective)
    player.setScale(0.3);
    this.physics.add.overlap(player, objective, objective_dude, null, this);
    player.setCollideWorldBounds(true);
  }

function sleep() {
    if (energy_remaining > 0) energy_remaining -= 1
}

function energy(player, battery) {
    energy_remaining+=3
    battery.disableBody(true, true)
}

function objective_dude(player, objective) {
    captured_objective = true
    objective.disableBody(true, true)
}

function touching_rocks(player, asteroids) {
  death = true;
  this.add.image(1920 / 2, 1080 / 2, "deathscreen");

}
function flashlight_update(e) {
    if (energy_remaining == 0){
      document.documentElement.style.setProperty('--cursorX', 9999 + 'px')
      document.documentElement.style.setProperty('--cursorY', 9999 + 'px')
      return
    }
    var x = e.clientX
    var y = e.clientY

    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove', flashlight_update)
document.addEventListener('touchmove', flashlight_update)


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
    document.getElementById("energy").innerHTML = "You have " + energy_remaining + " seconds of energy remaining";

    //Change flashlight value using window.<varname> = whatever, by whatever amount works.
    //If flalight value <= 0 then remove flashlight (once i actually ake the flash.ight.)
}
