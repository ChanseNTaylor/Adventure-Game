"use strict";
class Room
{
    constructor(properties)
    {
        this.west = null;
        this.east = null;
        this.south = null;
        this.north = null;
        this.visited = false;

        this.items = properties["items"] || [];
        this.characters = properties["characters"] || [];
        this.name = properties["name"] || "Bad Room";
        this.description = properties["description"] || "Bad place.";
    }

    getRoomName()
    {
        return this.name;
    }
}
