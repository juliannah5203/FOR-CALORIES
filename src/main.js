// Group Name: Seg Fault
// Group Member: Julianne He, Lexin Xiong, Qiuting Zhao
// Game Title: For Calories!
// Date Completed: 07/06/2021
// Points Breakdown:
//    Use multiple Scene classes (defined by your game's style): 5pts
//    Properly transition between Scenes and allow the player to restart w/out having to reload the page: 5pts
//    Communicate how to play w/ clear instructions: 5pts
//    Have some form of player input/control appropriate to your game design: 5pts
//    Include an animated character(s) that use a texture atlas: 5pts
//    Simulate scrolling with a tileSprite or equivalent means: 5pts
//    Implement proper collision detection (via Arcade Physics or use your own): 10pts
//    Have looping background music: 5pts
//    Use sound effects for key mechanics, UI, and/or significant events appropriate to your game design: 5pts
//    Use randomness to generate challenge, e.g. terrain, pickups, etc.: 5pts (Random the object that falling down)
//    Include some metric of accomplishment that a player can improve over time, e.g., score: 5pts
//    Be theoretically endless: 5pts
//    Be playable for at least 15 seconds for a new player of low to moderate skill: 5pts
// Creative Tile:
//    Technically: Items that fall from the top are random; 
//                music can stop when the game ends; 
//                players can press R to restart whenever he/she wants.
//                We learn how to random the texture of sprite.
//    Visual: I think we had a great visual style, it uses music and picture which were all made by ourselves.
//            And the music and art we use fit our theme.
//            We try to make something different, endless eater! It's no longer a runner game, the goal changes to catching all the objects.
let config = {
    type: Phaser.AUTO,
    width: 525,
    height: 700,
    physics: {  // learn from Nathan's example
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);
let centerX = game.config.width / 2;
let centerY = game.config.height / 2;
//let highScore;
//let newHigh = false;
let keyLEFT, keyRIGHT, keyR;