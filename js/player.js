"use strict";
const Player = function()
{
    let score = 0;
    let moves = 0;
    let maxHP = 5;
    let currentHP = 5;
    let rank = "Beginner";
    let location = null;

    const inventory = [];

    return {
        // setters
        setScore(num = 0) { score += num; },
        setMoves(num = 0) { moves += num; },
        setCurrentHP(num = 0) { currentHP += num; },
        setMaxHP(num = maxHP) { maxHP += num; },
        setRank(newRank = rank) { rank = newRank; },
        setLocation(place = location) { location = place; },
        // getters
        getScore() { return score; },
        getMoves() { return moves; },
        getCurrentHP() { return currentHP; },
        getMaxHP() { return maxHP; },
        getRank() { return rank; },
        getLocation() { return location; },
        getInventory() { return inventory; },
        // utility
        addToInventory(item) { inventory.push(item); }
    }
}
