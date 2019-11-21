"use strict";
class Player extends Character
{
    constructor(properties)
    {
        super(properties);

        this._score = 0;
        this._moves = 0;
        this._rank = "Beginner";
    }

    incrementMoves() { this._moves++; };
    incrementScore(num) { return this._score += num; };

    set rank(newRank) { this._rank = newRank };

    get rank() { return this._rank; };
    get score() { return this._score; };
    get moves() { return this._moves; };
}
