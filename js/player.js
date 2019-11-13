"use strict";
const Player = function()
{
    let score = 0;
    let moves = 0;
    let maxHP = 5;
    let currentHP = 5;
    let rank = "Beginner";
    let location = Room.InnBedroom;

    const inventory = [];

    return {
        incrementScore(num) { score += num; },
        incrementMoves(num = 1) { moves += num; },
        // setters
        setCurrentHP(num = 0) { currentHP += num; },
        setMaxHP(num = maxHP) { maxHP += num; },
        setRank(newRank = rank) { rank = newRank; },
        setLocation(place) { location = place; },
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
