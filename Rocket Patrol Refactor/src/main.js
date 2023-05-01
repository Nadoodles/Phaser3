/*
Jose Nadales
Rocket Patrol: Wacky Submission 
This project took me approximately 15 hours 

1) Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (15)
2) Implement a new timing/scoring mechanism that adds time to the clock for successful hits (15)
   - What I did in this situation, was add a clock that would come in the field ocassionally. If the player hits the clock, then they can add more time
3) Display the time remaining (in seconds) on the screen (10)
4) Create a new title screen (e.g., new artwork, typography, layout) (10)
5) Allow the player to control the Rocket after it's fired (5)
6) Allow players to control spaceship speed (10) ? I'll be happy with 10, but I understand if its 5, just created my own mod to make it easier for people
*/

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
  }

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT, keyA, keyD, keyO, keyP;

let game = new Phaser.Game(config);

//Set UI sizes
let borderUISize = game.config.height/15;
let borderPadding = borderUISize / 3; 




