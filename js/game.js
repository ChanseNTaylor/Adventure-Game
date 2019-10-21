"use strict";
const Game = (function()
{
    let time = "6:00AM";

    const ui = new UI();
    const player = new Player();

    ui.setTime(time);
    ui.setScore(player.getScore());
    ui.setMoves(player.getMoves());
    ui.setLocation(player.getLocation());
})();
