"use strict";
const Player = function()
{
    let score = 0;
    let moves = 0;
    let maxHP = 5;
    let currentHP = 5;
    let inventory = [];
    let rank = "Beginner";
    let location = "Bad Place";

    return {
        setScore(num = 0) { score += num },
        setMoves(num = 0) { moves += num },
        setCurrentHP(num = 0) { currentHP += num },
        setMaxHP(num = maxHP) { maxHP += num },
        setRank(newRank = rank) { rank = newRank },
        setLocation(place = location) { location = place },
        getScore() { return score },
        getMoves() { return moves },
        getCurrentHP() { return currentHP },
        getMaxHP() { return maxHP },
        getRank() { return rank },
        getLocation() { return location },
        getInventory() { return inventory }
    }
}
