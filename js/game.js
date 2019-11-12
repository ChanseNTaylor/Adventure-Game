"use strict";
const Game = (function ()
{
    const GAME_TITLE = "This Game Has No Title Yet";
    const GAME_SUBTITLE = "I'll come up with something good later.";

    const ui = new UI();
    const map = new Map();
    const player = new Player();

    ui.setTime(map.getTime());
    ui.setScore(player.getScore());
    ui.setMoves(player.getMoves());
    ui.setLocation(player.getLocation().name);

    ui.addTitleText(GAME_TITLE);
    ui.addSubtitleText(GAME_SUBTITLE);

    return {
        UI: ui,
        Map: map,
        Player: player
    }
})();
