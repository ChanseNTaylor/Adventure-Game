"use strict";
class Room
{
    constructor(properties)
    {
        this._up = null;
        this._down = null;
        this._west = null;
        this._east = null;
        this._south = null;
        this._north = null;
        this._items = properties["items"] || [];
        this._visited = properties["visited"] || false;
        this._characters = properties["characters"] || [];
        this._name = properties["name"] || "The Bad Room";
        this._description = properties["description"] || "You probably shouldn't be here...";
    }

    getItemNames() { return this._items.map(item => item.name.toLowerCase()); };

    addItem(item) { this._items.push(item); };
    removeItemAt(index) { this._items.splice(index, 1); };

    set up(room) { this._up = room; };
    set down(room) { this._down = room; };
    set east(room) { this._east = room; };
    set west(room) { this._west = room; };
    set north(room) { this._north = room; };
    set south(room) { this._south = room; };
    set visited(bool) { this._visited = bool; };
    set description(description) { this._description = description; };

    get up() { return this._up; };
    get down() { return this._down; };
    get name() { return this._name; };
    get west() { return this._west; };
    get east() { return this._east; };
    get items() { return this._items};
    get north() { return this._north; };
    get south() { return this._south; };
    get visited() { return this._visited; };
    get description()
    {
        if(this._items)
        {
            let itemStr = "";

            for(let aa = 0; aa < this._items.length; ++aa)
            {
                itemStr += `${this._items[aa].initialDescription}\n`;
            }

            return `${this._description}\n
            ${itemStr}`;
        }

        return this._description;
    };
}
