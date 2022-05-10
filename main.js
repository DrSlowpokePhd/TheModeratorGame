/**
 * @class       : main
 * @author      : Jamie Doherty
 * @created     : Thursday Apr 28, 2022 13:54:01 PDT
 * @description : main
 */

let config = {
    width: 960,
    height: 720,
    type: Phaser.CANVAS,
    scene: [Menu, GameIntro, Game, Endings]
};

let game = new Phaser.Game(config);
let keyLeft, keyRight, escKey;
let debugMode = true;
let tally;

