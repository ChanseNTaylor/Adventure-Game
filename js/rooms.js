"use strict";
Room.InnBedroom = new Room(
{
    visited: true,
    name: "Inn Bedroom",
    description: "You are in a small bedroom with only a bed and a small nightstand. It feels a bit cramped when you aren't in its shoddy bed."
});

Room.InnHallway = new Room(
{
    visited: false,
    name: "Inn Hallway",
    description: "You are in a hallway just outside of the bedroom that you rented for last night. There are other doors in the hallway, but they're probably locked or occupied."
});

Room.InnBedroom.setNorth(Room.InnHallway);

Room.InnHallway.setSouth(Room.InnBedroom);
