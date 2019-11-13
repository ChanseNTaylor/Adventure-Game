"use strict";
class Room
{
    constructor(properties)
    {
        this.west = null;
        this.east = null;
        this.south = null;
        this.north = null;
        this.items = properties["items"] || [];
        this.visited = properties["visited"] || false;
        this.characters = properties["characters"] || [];
        this.name = properties["name"] || "The Bad Room";
        this.description = properties["description"] || "You probably shouldn't be here...";
    }

    setVisitedToTrue()
    {
        this.visited = true;
    }

    setNorth(room)
    {
        this.north = room;
    }

    setSouth(room)
    {
        this.south = room;
    }

    getRoomName()
    {
        return this.name;
    }
}
