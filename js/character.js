"use strict";
class Character
{
    constructor(properties = {})
    {
        this._maxHP = properties["maxHP"] || 5;
        this._currentHP = properties["currentHP"] || 5;
        this._inventory = properties["inventory"] || [];
        this._location = properties["location"] || null;
    }

    addToInventory(item) { this._inventory.push(item); };

    getInventoryItemNames()
    {
        return this._inventory.map(item => item.name.toLowerCase());
    }

    set maxHP(num) { this._maxHP = num; };
    set currentHP(num) { this._currentHP = num; };
    set location(newLocation) { this._location = newLocation; };

    get maxHP() { return this._maxHP; };
    get location() { return this._location; };
    get inventory() { return this._inventory; };
    get currentHP() { return this._currentHP; };
}
