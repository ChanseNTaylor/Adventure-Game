"use strict";
class Player
{
    constructor()
    {
        this._score = 0;
        this._moves = 0;
        this._maxHP = 5;
        this._currentHP = 5;
        this._inventory = [];
        this._location = null;
        this._rank = "Beginner";
    }

    incrementScore(num) { return score += num; };
    incrementMoves(num = 1) { return this._moves += num; };

    addToInventory(item) { this._inventory.push(item); }

    set maxHP(num) { this._maxHP = num; };
    set rank(newRank) { this._rank = newRank };
    set currentHP(num) { this._currentHP = num; };
    set location(newLocation) { this._location = newLocation; }

    get rank() { return this._rank; };
    get score() { return this._score; };
    get moves() { return this._moves; };
    get maxHP() { return this._maxHP; };
    get location() { return this._location; };
    get inventory() { return this._inventory; };
    get currentHP() { return this._currentHP; };
}
