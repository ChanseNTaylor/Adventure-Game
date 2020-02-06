"use strict";
class Player extends Character
{
    constructor(properties)
    {
        super(properties);

        this._score = 0;
        this._moves = 0;
        this._rank = "Beginner";
        this._previousMoves = [];
    }

    incrementMoves() { this._moves++; };
    incrementScore(num) { return this._score += num; };
    addToPreviousMoves(str) { this._previousMoves.unshift(str); };

    set rank(newRank) { this._rank = newRank };

    get rank() { return this._rank; };
    get score() { return this._score; };
    get moves() { return this._moves; };
    get previousMoves() { return this._previousMoves; };
}
