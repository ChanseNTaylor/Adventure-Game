"use strict";
const Game =
{
    GAME_TITLE: "This Game Has No Title Yet",
    GAME_SUBTITLE: "I'll come up with something good later.",

    ui: new UI(),
    map: new Map(),
    player: new Player(),

    init()
    {
        this.ui.setTime(this.map.getTime());
        this.ui.setScore(this.player.getScore());
        this.ui.setMoves(this.player.getMoves());
        this.ui.setLocation(this.player.getLocation());

        this.ui.addTitleText(this.GAME_TITLE);
        this.ui.addSubtitleText(this.GAME_SUBTITLE);
    }
};

Game.init();
